
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface MessageRequest {
  name?: string;
  email?: string;
  message: string;
}

const sendEmail = async (name: string, email: string, message: string) => {
  // Initialize Resend with API key
  const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
  
  try {
    // Send notification to admin
    const adminEmail = await resend.emails.send({
      from: "NeighborMe <onboarding@resend.dev>",
      to: "ahourmand90@gmail.com", 
      subject: "New message from NeighborMe website",
      html: `
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    
    // If user provided email, send confirmation to them
    let userConfirmation = null;
    if (email) {
      userConfirmation = await resend.emails.send({
        from: "NeighborMe <onboarding@resend.dev>",
        to: email,
        subject: "We've received your message - NeighborMe",
        html: `
          <h1>Thank you for contacting us${name ? ', ' + name : ''}!</h1>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <p>For your records, here's what you sent us:</p>
          <blockquote>${message}</blockquote>
          <p>Best regards,<br>The NeighborMe Team</p>
        `,
      });
    }
    
    console.log("Emails sent successfully:", { admin: adminEmail, user: userConfirmation });
    return { success: true, data: { admin: adminEmail, user: userConfirmation } };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse the request body
    const { name = '', email = '', message } = (await req.json()) as MessageRequest;

    if (!message) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Send the email
    const result = await sendEmail(name, email, message);

    // Return success response
    return new Response(
      JSON.stringify(result),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  } catch (error: any) {
    console.error('Error processing message:', error);
    
    // Return error response
    return new Response(
      JSON.stringify({ error: 'Failed to process message', details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});

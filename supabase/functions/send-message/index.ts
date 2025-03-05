
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface MessageRequest {
  message: string;
}

const sendEmail = async (message: string) => {
  // Using a simple email sending service
  // For demo purposes, we'll log the message that would be sent
  console.log(`Email would be sent to ahourmand90@gmail.com with message: ${message}`);
  
  // In a real implementation, you would use an email service like Resend, SendGrid, etc.
  // For example with Resend:
  // const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
  // await resend.emails.send({
  //   from: "onboarding@yourdomain.com",
  //   to: "ahourmand90@gmail.com", 
  //   subject: "New message from NeighborMe website",
  //   html: `<p>${message}</p>`,
  // });
  
  return { success: true };
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse the request body
    const { message } = (await req.json()) as MessageRequest;

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
    await sendEmail(message);

    // Return success response
    return new Response(
      JSON.stringify({ success: true }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('Error processing message:', error);
    
    // Return error response
    return new Response(
      JSON.stringify({ error: 'Failed to process message' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});

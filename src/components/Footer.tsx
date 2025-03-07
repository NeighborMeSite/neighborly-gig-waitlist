
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter a message before sending.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSending(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-message', {
        body: { message }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent",
        description: "Thanks for reaching out! We'll get back to you soon.",
      });
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer className="bg-white border-t border-neighborly-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="font-semibold text-lg">NeighborMe</span>
            </div>
            <p className="text-muted-foreground max-w-xs mx-auto md:mx-0">
              Building stronger communities by connecting neighbors for local services and help.
            </p>

            {/* Message Form */}
            <div className="mt-6 max-w-md">
              <h3 className="font-medium mb-3 text-neighborly-800">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <Textarea 
                  placeholder="Questions or feedback? Let us know!" 
                  className="resize-none bg-white/70 border-neighborly-100 focus:border-neighborly-300 mb-3"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full bg-neighborly-600 hover:bg-neighborly-700 text-white"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neighborly-100 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} NeighborMe. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neighborly-700 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neighborly-700 transition-colors">Terms</a>
            <a href="#" className="hover:text-neighborly-700 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

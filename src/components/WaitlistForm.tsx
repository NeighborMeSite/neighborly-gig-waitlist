
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "You're on the list!",
        description: "We'll notify you when NeighborMe launches in your area.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <>
      {!submitted ? (
        <>
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Join our waitlist</h3>
            <p className="text-sm text-muted-foreground">
              Be the first to know when we launch in your area
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/50 border-neighborly-100 focus:border-neighborly-300 focus:ring-2 focus:ring-neighborly-200 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input
                id="zipCode"
                type="text"
                placeholder="Enter your zip code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
                className="bg-white/50 border-neighborly-100 focus:border-neighborly-300 focus:ring-2 focus:ring-neighborly-200 transition-all"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-neighborly-600 hover:bg-neighborly-700 transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
          
          <div className="mt-4 text-center text-xs text-muted-foreground">
            By joining, you agree to our{" "}
            <a href="#" className="underline hover:text-neighborly-600 transition-colors">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-neighborly-600 transition-colors">
              Privacy Policy
            </a>
          </div>
        </>
      ) : (
        <div className="text-center py-6">
          <div className="mx-auto w-14 h-14 bg-neighborly-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-7 w-7 text-neighborly-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">You're on the list!</h3>
          <p className="text-muted-foreground text-sm mb-4">
            We'll notify you when NeighborMe launches in your area.
          </p>
          <div className="p-4 rounded-lg bg-neighborly-50 border border-neighborly-100">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-neighborly-600 mt-0.5" />
              <div className="text-sm text-left">
                <p className="font-medium text-neighborly-900">Want priority access?</p>
                <p className="text-muted-foreground mt-1">
                  Share NeighborMe with friends to move up the waitlist.
                </p>
                <div className="mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-neighborly-200 hover:bg-neighborly-100 transition-all w-full"
                    onClick={() => {
                      // Implement share functionality
                      toast({
                        title: "Share link copied!",
                        description: "Share this link with friends to move up the waitlist.",
                        variant: "default",
                      });
                    }}
                  >
                    Share your invite link
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WaitlistForm;

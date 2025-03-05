
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, CheckCircle, AlertCircle, X, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { AnimatedContainer } from './AnimatedElements';

interface WaitlistOverlayProps {
  onClose: () => void;
}

const WaitlistOverlay = ({ onClose }: WaitlistOverlayProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative z-10 w-full max-w-md scale-in">
        <div className="bg-white rounded-3xl p-8 border border-neighborly-100 shadow-xl relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1 text-sm font-medium text-neighborly-600 mb-1">
                  <MapPin className="h-4 w-4" />
                  Priority Access
                </span>
                <h2 className="text-2xl font-bold tracking-tight mb-2">Join our Waitlist</h2>
                <p className="text-muted-foreground text-sm">
                  Be the first to know when NeighborMe launches in your neighborhood.
                </p>
              </div>
              
              <div className="bg-neighborly-50 border border-neighborly-100 rounded-lg p-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-neighborly-100 rounded-full p-2">
                    <Users className="h-4 w-4 text-neighborly-700" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Join <span className="text-neighborly-700">542 neighbors</span> already on the waitlist</p>
                    <p className="text-xs text-muted-foreground">Limited spots available for early access</p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white border-neighborly-100 focus:border-neighborly-300 focus:ring-2 focus:ring-neighborly-200 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white border-neighborly-100 focus:border-neighborly-300 focus:ring-2 focus:ring-neighborly-200 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="phone">Phone Number</Label>
                    <span className="text-xs text-muted-foreground">(Optional)</span>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white border-neighborly-100 focus:border-neighborly-300 focus:ring-2 focus:ring-neighborly-200 transition-all"
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
                    className="bg-white border-neighborly-100 focus:border-neighborly-300 focus:ring-2 focus:ring-neighborly-200 transition-all"
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
              
              <div className="mt-6 text-center text-xs text-muted-foreground">
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
              <div className="mx-auto w-16 h-16 bg-neighborly-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-neighborly-600" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">You're on the list!</h2>
              <p className="text-muted-foreground text-sm mb-6">
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
        </div>
      </div>
    </div>
  );
};

export default WaitlistOverlay;

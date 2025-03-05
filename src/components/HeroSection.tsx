
import { Button } from '@/components/ui/button';
import { Users, CheckCircle, Sparkles } from 'lucide-react';
import { AnimatedContainer } from './AnimatedElements';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, User, UserPlus } from 'lucide-react';
import SkillsSelection from './SkillsSelection';
import { supabase } from '@/integrations/supabase/client';

interface HeroSectionProps {
  showWaitlist: boolean;
  setShowWaitlist: (show: boolean) => void;
  neighborCount: number;
  setNeighborCount: (count: number) => void;
}

const HeroSection = ({ 
  showWaitlist, 
  setShowWaitlist, 
  neighborCount, 
  setNeighborCount 
}: HeroSectionProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  // Fetch the total waitlist count from Supabase on component mount
  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const { count, error } = await supabase
          .from('waitlist')
          .select('*', { count: 'exact', head: true });
        
        if (error) {
          console.error('Error fetching waitlist count:', error);
          return;
        }
        
        // If count is available, update the neighbor count
        if (count !== null) {
          setNeighborCount(count);
        }
      } catch (error) {
        console.error('Error fetching waitlist count:', error);
      }
    };

    fetchWaitlistCount();
  }, [setNeighborCount]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Insert the user data into the waitlist table
      const { error } = await supabase
        .from('waitlist')
        .insert({
          name: fullName,
          email: email,
          zip_code: zipCode,
          skills: selectedSkills.length > 0 ? selectedSkills : null
        });

      if (error) {
        console.error('Error submitting to waitlist:', error);
        toast({
          title: "Submission failed",
          description: "There was an error adding you to the waitlist. Please try again.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Successfully submitted
      setLoading(false);
      setSubmitted(true);
      setNeighborCount(prev => prev + 1);
      toast({
        title: "You're on the list!",
        description: "We'll notify you when NeighborMe launches in your area.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      toast({
        title: "Submission failed",
        description: "There was an error adding you to the waitlist. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 relative" id="home">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-neighborly-50/50 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <div className="flex flex-col space-y-6">
            <AnimatedContainer animation="slide-up" delay={200}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-neighborly-100 text-neighborly-800 mb-2">
                Coming Soon
              </span>
            </AnimatedContainer>
            
            <AnimatedContainer animation="slide-up" delay={400}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-2">
                Local services, powered by <span className="text-neighborly-600">your community</span>
              </h1>
            </AnimatedContainer>
            
            <AnimatedContainer animation="slide-up" delay={600}>
              <p className="text-lg text-gray-700 max-w-xl text-balance">
                NeighborMe connects you with trusted local help for everyday tasks and services, 
                building stronger communities one neighborhood at a time.
              </p>
            </AnimatedContainer>

            <AnimatedContainer animation="slide-up" delay={700}>
              <div className="flex items-center space-x-3 text-neighborly-600">
                <Sparkles className="h-5 w-5" />
                <p className="font-medium">Powered by AI to match you with perfect gig opportunities</p>
              </div>
            </AnimatedContainer>
            
            <AnimatedContainer animation="slide-up" delay={800}>
              <div className="flex flex-wrap gap-6 mt-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-neighborly-600" />
                  <span>Trusted Neighbors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-neighborly-600" />
                  <span>Verified Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-neighborly-600" />
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-neighborly-600" />
                  <span>AI-Powered Matching</span>
                </div>
              </div>
            </AnimatedContainer>

            {/* Quote */}
            <AnimatedContainer animation="slide-up" delay={850}>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-neighborly-100 shadow-sm mt-4">
                <blockquote className="italic text-gray-700 border-l-4 border-neighborly-300 pl-4">
                  "NeighborMe transformed how I connect with my community. I found a neighbor who helps with my lawn while earning extra income doing what I love - teaching piano to kids in the area."
                </blockquote>
                <p className="text-right mt-2 text-sm font-medium text-neighborly-700">— Sarah T., Chicago</p>
              </div>
            </AnimatedContainer>

            {/* Community stats */}
            <AnimatedContainer animation="slide-up" delay={900}>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-neighborly-100 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="flex items-center justify-center text-neighborly-600 mb-1">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-3xl font-bold text-neighborly-800">{neighborCount}+</h3>
                    <p className="text-sm text-gray-600">Neighbors joined</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-neighborly-800">120+</h3>
                    <p className="text-sm text-gray-600">Communities</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-neighborly-800">$35K+</h3>
                    <p className="text-sm text-gray-600">Earned by neighbors</p>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          </div>
          
          {/* Form side */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              {!submitted ? (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Join our waitlist</h3>
                    <p className="text-sm text-muted-foreground">
                      Be the first to know when we launch in your area
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Your name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                          className="pl-10 bg-white/50 border-neighborly-100 focus:border-neighborly-300 focus:ring-2 focus:ring-neighborly-200 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="pl-10 bg-white/50 border-neighborly-100 focus:border-neighborly-300 focus:ring-2 focus:ring-neighborly-200 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input
                          id="zipCode"
                          type="text"
                          placeholder="Enter your zip code"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          required
                          className="pl-10 bg-white/50 border-neighborly-100 focus:border-neighborly-300 focus:ring-2 focus:ring-neighborly-200 transition-all"
                        />
                      </div>
                    </div>
                    
                    {/* Skills Selection */}
                    <div className="space-y-2">
                      <SkillsSelection
                        selectedSkills={selectedSkills}
                        onChange={setSelectedSkills}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-neighborly-600 hover:bg-neighborly-700 text-white transition-all duration-300"
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
                      <UserPlus className="h-5 w-5 text-neighborly-600 mt-0.5" />
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
      </div>
    </section>
  );
};

export default HeroSection;

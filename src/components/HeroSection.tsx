
import { Button } from '@/components/ui/button';
import { Users, CheckCircle, Sparkles } from 'lucide-react';
import { AnimatedContainer, FloatingElement } from './AnimatedElements';
import WaitlistForm from './WaitlistForm';

interface HeroSectionProps {
  showWaitlist: boolean;
  setShowWaitlist: (show: boolean) => void;
}

const HeroSection = ({ showWaitlist, setShowWaitlist }: HeroSectionProps) => {
  return (
    <section className="min-h-screen px-4 relative overflow-hidden pt-32 pb-20" id="home">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-neighborly-50/50 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <div className="flex flex-col space-y-8">
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
          </div>
          
          {/* Form side with image in background */}
          <div className="relative">
            <div className="absolute -top-10 -right-20 -z-10 opacity-20 w-96 h-96 rounded-full bg-neighborly-100 blur-3xl"></div>
            <AnimatedContainer animation="fade-in" delay={400}>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Join our waitlist</h3>
                <WaitlistForm />
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
      
      {/* Floating community badge */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-md z-10">
        <FloatingElement>
          <div className="glass-effect rounded-3xl p-4 mx-4 shadow-lg">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-neighborly-600 mr-2" />
              <span className="text-sm font-medium text-neighborly-800">Join neighbors from across the country</span>
            </div>
          </div>
        </FloatingElement>
      </div>
    </section>
  );
};

export default HeroSection;

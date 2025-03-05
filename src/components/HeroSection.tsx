
import { Button } from '@/components/ui/button';
import { Users, CheckCircle } from 'lucide-react';
import { AnimatedContainer, FloatingElement } from './AnimatedElements';
import WaitlistOverlay from './WaitlistOverlay';
import { useState } from 'react';

const HeroSection = () => {
  const [showWaitlist, setShowWaitlist] = useState(true);

  return (
    <section className="min-h-screen px-4 flex flex-col items-center justify-center relative overflow-hidden pt-20 neighborhood-bg">
      {/* Light background overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <AnimatedContainer animation="slide-up" delay={200}>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-neighborly-100 text-neighborly-800 mb-5">
            Coming Soon
          </span>
        </AnimatedContainer>
        
        <AnimatedContainer animation="slide-up" delay={400}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 text-white">
            Local services, powered by <span className="text-neighborly-300">your community</span>
          </h1>
        </AnimatedContainer>
        
        <AnimatedContainer animation="slide-up" delay={600}>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 text-balance">
            NeighborMe connects you with trusted local help for everyday tasks and services, 
            building stronger communities one neighborhood at a time.
          </p>
        </AnimatedContainer>
        
        <AnimatedContainer animation="slide-up" delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-neighborly-600 hover:bg-neighborly-700 transition-all duration-300"
              onClick={() => setShowWaitlist(true)}
            >
              Join the Waitlist
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fade-in" delay={1000}>
          <div className="flex items-center justify-center flex-wrap gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-neighborly-300" />
              <span>Trusted Neighbors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-neighborly-300" />
              <span>Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-neighborly-300" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-neighborly-300" />
              <span>Community Driven</span>
            </div>
          </div>
        </AnimatedContainer>
      </div>
      
      {/* Floating community badge */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-md">
        <FloatingElement>
          <div className="glass-effect rounded-3xl p-4 mx-4 shadow-lg">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-neighborly-600 mr-2" />
              <span className="text-sm font-medium text-neighborly-800">Join neighbors from across the country</span>
            </div>
          </div>
        </FloatingElement>
      </div>

      {/* Conditionally render the waitlist overlay */}
      {showWaitlist && <WaitlistOverlay onClose={() => setShowWaitlist(false)} />}
    </section>
  );
};

export default HeroSection;

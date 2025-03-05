
import { Button } from '@/components/ui/button';
import { Users, CheckCircle } from 'lucide-react';
import { AnimatedContainer, FloatingElement } from './AnimatedElements';

const HeroSection = () => {
  return (
    <section className="min-h-screen px-4 flex flex-col items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-neighborly-50/50 to-transparent -z-10"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <AnimatedContainer animation="slide-up" delay={200}>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-neighborly-100 text-neighborly-800 mb-5">
            Coming Soon
          </span>
        </AnimatedContainer>
        
        <AnimatedContainer animation="slide-up" delay={400}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            Local services, powered by <span className="text-neighborly-700">your community</span>
          </h1>
        </AnimatedContainer>
        
        <AnimatedContainer animation="slide-up" delay={600}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            NeighborMe connects you with trusted local help for everyday tasks and services, 
            building stronger communities one neighborhood at a time.
          </p>
        </AnimatedContainer>
        
        <AnimatedContainer animation="slide-up" delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-neighborly-700 hover:bg-neighborly-800 transition-all duration-300"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Waitlist
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-neighborly-200 hover:bg-neighborly-50 transition-all duration-300"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fade-in" delay={1000}>
          <div className="flex items-center justify-center flex-wrap gap-6 text-sm text-muted-foreground">
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
              <span>Community Driven</span>
            </div>
          </div>
        </AnimatedContainer>
      </div>
      
      <div className="absolute -bottom-10 md:bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
        <FloatingElement>
          <div className="glass-effect rounded-3xl p-6 md:p-10 shadow-xl mx-4">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-neighborly-600 mr-2" />
              <span className="text-sm font-medium text-neighborly-800">People are joining from all neighborhoods</span>
            </div>
            <div className="flex overflow-hidden">
              <div className="flex animate-[slide_30s_linear_infinite]">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex-none mx-2">
                    <div className="w-8 h-8 rounded-full bg-neighborly-200 flex items-center justify-center text-xs font-medium text-neighborly-800">
                      {String.fromCharCode(65 + i)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FloatingElement>
      </div>
    </section>
  );
};

export default HeroSection;

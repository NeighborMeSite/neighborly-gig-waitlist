
import { CheckCircle, Sparkles } from 'lucide-react';
import { AnimatedContainer } from '../AnimatedElements';
import TestimonialQuote from './TestimonialQuote';
import CommunityStats from './CommunityStats';

interface HeroContentProps {
  neighborCount: number;
}

const HeroContent = ({ neighborCount }: HeroContentProps) => {
  return (
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

      <TestimonialQuote />
      <CommunityStats neighborCount={neighborCount} />
    </div>
  );
};

export default HeroContent;


import { AnimatedContainer } from './AnimatedElements';
import HeroContent from './hero/HeroContent';
import FormSection from './hero/FormSection';

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
  return (
    <section className="px-2 sm:px-4 relative pt-16 md:pt-20" id="home">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neighborly-50 via-neighborly-100 to-neighborly-200/50 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Content side - on mobile this comes second, on desktop it comes first */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <HeroContent neighborCount={neighborCount} />
          </div>
          
          {/* Form and image side - on mobile this comes first, on desktop it comes second */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Waitlist form */}
              {showWaitlist && (
                <div className="w-full lg:w-7/12">
                  <FormSection 
                    neighborCount={neighborCount} 
                    setNeighborCount={setNeighborCount} 
                  />
                </div>
              )}
              
              {/* Image - to the right of form on large screens, below form on medium screens, and at the top on mobile */}
              <div className="w-full lg:w-5/12 mt-6 lg:mt-0">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/be5815e0-e0a5-472c-8f73-5cf2b31004ee.png" 
                    alt="NeighborMe community illustration" 
                    className="w-full h-auto object-contain neighborhood-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements - only on large screens */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 hidden xl:block opacity-10 pointer-events-none">
        <img 
          src="/lovable-uploads/be5815e0-e0a5-472c-8f73-5cf2b31004ee.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;


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
    <section className="relative pt-16 md:pt-20 pb-16" id="home">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neighborly-50 via-neighborly-100 to-neighborly-200/50 -z-10"></div>
      
      <div className="container mx-auto px-4">
        {/* Main content area */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Left column: Hero content on desktop, below form on mobile */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <HeroContent neighborCount={neighborCount} />
          </div>
          
          {/* Right column: Form and image */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            {showWaitlist && (
              <div className="flex flex-col lg:flex-row items-start gap-6">
                {/* Waitlist form */}
                <div className="w-full lg:w-3/5">
                  <FormSection 
                    neighborCount={neighborCount} 
                    setNeighborCount={setNeighborCount} 
                  />
                </div>
                
                {/* Neighborhood image */}
                <div className="w-full lg:w-2/5 mt-6 lg:mt-0 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/b1d528ca-72e2-4d4b-b5d7-fa58fcce448b.png" 
                    alt="NeighborMe community illustration" 
                    className="w-full h-auto object-contain neighborhood-image"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Background decorative elements - only on large screens */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 hidden xl:block opacity-10 pointer-events-none">
        <img 
          src="/lovable-uploads/b1d528ca-72e2-4d4b-b5d7-fa58fcce448b.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;

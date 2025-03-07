
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
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left column: Hero content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <HeroContent neighborCount={neighborCount} />
          </div>
          
          {/* Right column: Form and image */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            {showWaitlist && (
              <div className="md:flex md:items-center md:space-x-6 lg:space-x-8">
                {/* Waitlist form */}
                <div className="w-full mb-8 md:mb-0 md:w-1/2">
                  <FormSection 
                    neighborCount={neighborCount} 
                    setNeighborCount={setNeighborCount} 
                  />
                </div>
                
                {/* Neighborhood image */}
                <div className="hidden md:block md:w-1/2">
                  <img 
                    src="/lovable-uploads/372058c7-2516-4aeb-8e9a-da5efdefe917.png" 
                    alt="NeighborMe community illustration" 
                    className="w-full h-auto max-h-[400px] object-contain image-shadow rounded-lg"
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
          src="/lovable-uploads/372058c7-2516-4aeb-8e9a-da5efdefe917.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;

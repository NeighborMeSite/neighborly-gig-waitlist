
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
    <section className="px-2 sm:px-4 relative mt-0" id="home">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-neighborly-50/50 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-0">
          {/* Content side - Adding compact height */}
          <div className="mt-0 max-h-40 overflow-hidden">
            <HeroContent neighborCount={neighborCount} />
          </div>
          
          {/* Form side with neighborhood illustration */}
          {showWaitlist && (
            <div className="w-full max-w-4xl mx-auto mt-0">
              {/* Using a more flexible approach with fixed height */}
              <div className="w-full mb-6 overflow-hidden rounded-xl shadow-lg">
                <div className="h-80 sm:h-96 w-full">
                  <img 
                    src="/lovable-uploads/372058c7-2516-4aeb-8e9a-da5efdefe917.png" 
                    alt="Neighborhood illustration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Form */}
              <div className="w-full max-w-lg mx-auto">
                <FormSection 
                  neighborCount={neighborCount} 
                  setNeighborCount={setNeighborCount} 
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


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
    <section className="px-2 sm:px-4 relative" id="home">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neighborly-50 via-neighborly-100 to-neighborly-200/50 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-0">
          {/* Content side - Removed height constraint */}
          <div className="mb-6">
            <HeroContent neighborCount={neighborCount} />
          </div>
          
          {/* Form side with neighborhood illustration */}
          {showWaitlist && (
            <div className="w-full max-w-4xl mx-auto">
              {/* Using a more flexible approach with fixed height */}
              <div className="w-full mb-6 overflow-hidden rounded-xl shadow-lg">
                <div className="h-80 sm:h-96 w-full">
                  <img 
                    src="/lovable-uploads/be5815e0-e0a5-472c-8f73-5cf2b31004ee.png" 
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

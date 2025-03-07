
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
        <div className="grid grid-cols-1 gap-0">
          {/* Content side */}
          <div className="mb-6">
            <HeroContent neighborCount={neighborCount} />
          </div>
          
          {/* Form and illustration */}
          {showWaitlist && (
            <div className="w-full max-w-md mx-auto">
              {/* Form first */}
              <div className="w-full mb-8">
                <FormSection 
                  neighborCount={neighborCount} 
                  setNeighborCount={setNeighborCount} 
                />
              </div>
              
              {/* Image below the form */}
              <div className="w-full mb-10 overflow-hidden rounded-xl shadow-lg">
                <div className="h-64 sm:h-80 w-full">
                  <img 
                    src="/lovable-uploads/be5815e0-e0a5-472c-8f73-5cf2b31004ee.png" 
                    alt="Neighborhood illustration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

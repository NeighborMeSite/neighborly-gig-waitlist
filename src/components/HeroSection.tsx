
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
    <section className="pt-8 pb-16 px-4 relative" id="home">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-neighborly-50/50 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <HeroContent neighborCount={neighborCount} />
          
          {/* Form side with neighborhood illustration */}
          <div className="relative">
            {showWaitlist && (
              <div className="flex flex-col items-center gap-6">
                {/* Neighborhood illustration - centered above form */}
                <div className="w-full max-w-md rounded-xl overflow-hidden shadow-md mb-2">
                  <div className="relative aspect-[4/3] w-full">
                    <img 
                      src="/lovable-uploads/372058c7-2516-4aeb-8e9a-da5efdefe917.png" 
                      alt="Neighborhood illustration" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Form - centered below image */}
                <div className="w-full max-w-md">
                  <FormSection 
                    neighborCount={neighborCount} 
                    setNeighborCount={setNeighborCount} 
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

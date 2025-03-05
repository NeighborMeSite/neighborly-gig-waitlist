
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Neighborhood illustration */}
                <div className="hidden md:block rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/372058c7-2516-4aeb-8e9a-da5efdefe917.png" 
                    alt="Neighborhood illustration" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Form */}
                <FormSection 
                  neighborCount={neighborCount} 
                  setNeighborCount={setNeighborCount} 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

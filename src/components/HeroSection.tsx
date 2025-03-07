
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
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          {/* Form side */}
          {showWaitlist && (
            <div className="w-full md:w-5/12 lg:w-4/12 mb-8 md:mb-0">
              <FormSection 
                neighborCount={neighborCount} 
                setNeighborCount={setNeighborCount} 
              />
            </div>
          )}
          
          {/* Content side */}
          <div className="w-full md:w-6/12 lg:w-7/12">
            <HeroContent neighborCount={neighborCount} />
            
            {/* Hero image - visible on all screen sizes with proper scaling */}
            <div className="mt-8 rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/be5815e0-e0a5-472c-8f73-5cf2b31004ee.png" 
                alt="NeighborMe community illustration" 
                className="w-full h-auto object-contain max-h-[500px] neighborhood-image"
              />
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

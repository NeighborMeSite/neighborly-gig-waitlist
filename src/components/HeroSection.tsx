
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
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
          {/* Form side */}
          {showWaitlist && (
            <div className="w-full md:w-1/2 md:max-w-md mb-8 md:mb-0">
              {/* Form */}
              <FormSection 
                neighborCount={neighborCount} 
                setNeighborCount={setNeighborCount} 
              />
              
              {/* Mobile image - below form */}
              <div className="mt-6 mb-8 md:hidden overflow-hidden rounded-xl">
                <img 
                  src="/lovable-uploads/be5815e0-e0a5-472c-8f73-5cf2b31004ee.png" 
                  alt="NeighborMe community" 
                  className="w-full h-auto shadow-md border border-neighborly-100 neighborhood-image"
                />
              </div>
            </div>
          )}
          
          {/* Content side */}
          <div className="w-full md:w-1/2">
            <HeroContent neighborCount={neighborCount} />
            
            {/* Desktop image - positioned to the right of the content */}
            <div className="hidden md:block mt-8 rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/be5815e0-e0a5-472c-8f73-5cf2b31004ee.png" 
                alt="NeighborMe community illustration" 
                className="w-full md:max-w-xl h-auto neighborhood-image"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background image for visual interest - large screens only */}
      <div className="absolute right-0 bottom-0 w-1/4 h-1/3 hidden xl:block opacity-30 pointer-events-none">
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

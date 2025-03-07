
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
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
          {/* Content side with image integration */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <HeroContent neighborCount={neighborCount} />
            
            {/* Strategic image placement - visible on all screen sizes */}
            <div className="mt-8 mb-4 md:hidden">
              <img 
                src="/lovable-uploads/be5815e0-e0a5-472c-8f73-5cf2b31004ee.png" 
                alt="NeighborMe community illustration" 
                className="w-full h-auto max-h-[300px] rounded-xl object-cover shadow-md border border-neighborly-100"
              />
            </div>
          </div>
          
          {/* Form side */}
          {showWaitlist && (
            <div className="w-full md:w-1/2 max-w-md">
              {/* Form */}
              <div className="w-full mb-8">
                <FormSection 
                  neighborCount={neighborCount} 
                  setNeighborCount={setNeighborCount} 
                />
              </div>
              
              {/* Image on desktop - positioned to the right of the content */}
              <div className="hidden md:block w-full overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="/lovable-uploads/be5815e0-e0a5-472c-8f73-5cf2b31004ee.png" 
                  alt="NeighborMe community illustration" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Background image for visual interest - large screens only */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 hidden xl:block opacity-20 pointer-events-none">
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

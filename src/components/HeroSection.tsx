
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
        {/* Main content area - desktop: image left, form right */}
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          {/* Left column: Large image (on desktop) */}
          <div className="w-full md:w-3/5 order-2 md:order-1">
            {showWaitlist && (
              <div className="image-container rounded-xl overflow-hidden shadow-xl border-2 border-neighborly-100">
                <img 
                  src="/lovable-uploads/918c3133-c3de-473d-8ea2-6a1b1891138e.png" 
                  alt="NeighborMe community illustration" 
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
          
          {/* Right column: Form section */}
          <div className="w-full md:w-2/5 order-1 md:order-2">
            {showWaitlist && (
              <div className="flex flex-col items-center md:items-start">
                {/* Waitlist form */}
                <div className="w-full">
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
      
      {/* Remove background decorative elements as they're not in the mockup */}
    </section>
  );
};

export default HeroSection;

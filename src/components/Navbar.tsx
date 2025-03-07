
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Sparkles } from 'lucide-react';
import { AnimatedContainer } from './AnimatedElements';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onOpenWaitlist: () => void;
  neighborCount: number;
}

const Navbar = ({ onOpenWaitlist, neighborCount }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-[#3a7d19] shadow-md' 
          : 'py-4 bg-[#3a7d19]'
      }`}
    >
      <div className="container mx-auto">
        {/* Top section with welcome message */}
        <div className="text-center mb-2">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight font-poppins">Welcome to NeighborMe</h2>
          <p className="text-white/90 mt-1 italic text-xs md:text-sm">Building stronger communities, one neighbor at a time</p>
          <p className="text-xs md:text-sm lg:text-base mt-1 text-white/90 font-medium">
            Already <span className="font-bold text-lg md:text-xl text-white">{neighborCount}</span> neighbors have joined the waitlist!
          </p>
        </div>
        
        {/* Navigation section */}
        <nav className="flex items-center justify-between">
          <AnimatedContainer animation="slide-down" delay={100}>
            <Link to="/" className="flex items-center gap-2 group">
              <MapPin className="h-7 w-7 text-white" />
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-neighborly-100 transition-colors">
                NeighborMe
              </span>
            </Link>
          </AnimatedContainer>
          <AnimatedContainer animation="slide-down" delay={300}>
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <a href="#features" className="text-sm font-medium hover:text-neighborly-100 transition-colors text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm font-medium hover:text-neighborly-100 transition-colors text-white">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm font-medium hover:text-neighborly-100 transition-colors text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </AnimatedContainer>
          <AnimatedContainer animation="slide-down" delay={500}>
            <Button
              variant="default"
              className="bg-white text-[#3a7d19] hover:bg-neighborly-100 transition-all duration-300 font-medium"
              onClick={onOpenWaitlist}
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Join Waitlist
            </Button>
          </AnimatedContainer>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

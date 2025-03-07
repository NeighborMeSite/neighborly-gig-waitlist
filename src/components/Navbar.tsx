
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
          : 'py-3 bg-[#3a7d19]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo and Welcome Text Section */}
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <MapPin className="h-7 w-7 text-white" />
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-neighborly-100 transition-colors">
                NeighborMe
              </span>
            </Link>
            
            {/* Welcome message - visible on mobile and desktop */}
            <div className="md:ml-6 text-white">
              <h2 className="text-base md:text-lg font-semibold leading-tight">
                Welcome to NeighborMe
              </h2>
              <p className="text-xs md:text-sm italic text-white/90">
                Building stronger communities, one neighbor at a time
              </p>
            </div>
            
            {/* Join Waitlist button - visible on mobile only */}
            <Button
              variant="default"
              size="sm"
              className="md:hidden bg-white text-[#3a7d19] hover:bg-neighborly-100 transition-all duration-300 font-medium"
              onClick={onOpenWaitlist}
            >
              <Sparkles className="h-3 w-3 mr-1" />
              Join
            </Button>
          </div>
          
          {/* Navigation and Waitlist Count Section */}
          <div className="hidden md:flex items-center justify-between mt-2 md:mt-0">
            <ul className="flex items-center space-x-6 mr-6">
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
            
            <div className="flex items-center gap-4">
              <p className="text-sm text-white font-medium">
                Already <span className="font-bold text-white">{neighborCount}</span> neighbors joined!
              </p>
              
              <Button
                variant="default"
                className="bg-white text-[#3a7d19] hover:bg-neighborly-100 transition-all duration-300 font-medium"
                onClick={onOpenWaitlist}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

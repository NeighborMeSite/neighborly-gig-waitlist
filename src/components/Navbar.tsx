
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Sparkles, Menu, X } from 'lucide-react';
import { AnimatedContainer } from './AnimatedElements';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onOpenWaitlist: () => void;
  neighborCount: number;
}

const Navbar = ({ onOpenWaitlist, neighborCount }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="flex items-center justify-between">
          {/* Logo and Mobile Menu Toggle */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <MapPin className="h-7 w-7 text-white" />
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-neighborly-100 transition-colors">
                NeighborMe
              </span>
            </Link>
          </div>
          
          {/* Navigation and Waitlist Count - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              <li>
                <a href="#features" className="text-sm font-medium hover:text-neighborly-100 transition-colors text-white">
                  Features
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
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <p className="text-xs text-white font-medium">
              <span className="font-bold text-white">{neighborCount}</span> neighbors joined
            </p>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <ul className="flex flex-col space-y-4">
              <li>
                <a 
                  href="#features" 
                  className="text-white block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-white block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
              <li>
                <Button
                  variant="default"
                  className="w-full bg-white text-[#3a7d19] hover:bg-neighborly-100 transition-all duration-300 font-medium"
                  onClick={() => {
                    onOpenWaitlist();
                    setMobileMenuOpen(false);
                  }}
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Join Waitlist
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

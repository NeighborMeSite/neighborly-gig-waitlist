
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { AnimatedContainer } from './AnimatedElements';

interface NavbarProps {
  onOpenWaitlist: () => void;
}

const Navbar = ({ onOpenWaitlist }: NavbarProps) => {
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
        scrolled ? 'py-3 glass-effect shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <AnimatedContainer animation="slide-down" delay={100}>
          <div className="flex items-center gap-2">
            <MapPin className={`h-7 w-7 ${scrolled ? 'text-neighborly-600' : 'text-white'}`} />
            <span className={`font-semibold text-xl tracking-tight ${scrolled ? 'text-black' : 'text-white'}`}>NeighborMe</span>
          </div>
        </AnimatedContainer>
        <AnimatedContainer animation="slide-down" delay={300}>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a href="#features" className={`text-sm font-medium hover:text-neighborly-400 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className={`text-sm font-medium hover:text-neighborly-400 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                How It Works
              </a>
            </li>
            <li>
              <a href="#faq" className={`text-sm font-medium hover:text-neighborly-400 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                FAQ
              </a>
            </li>
          </ul>
        </AnimatedContainer>
        <AnimatedContainer animation="slide-down" delay={500}>
          <Button
            variant="default"
            className={`${scrolled ? 'bg-neighborly-600 hover:bg-neighborly-700' : 'bg-white text-neighborly-700 hover:bg-white/90'} transition-all duration-300`}
            onClick={onOpenWaitlist}
          >
            Join Waitlist
          </Button>
        </AnimatedContainer>
      </nav>
    </header>
  );
};

export default Navbar;


import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Sparkles } from 'lucide-react';
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
        scrolled ? 'py-3 bg-white shadow-sm' : 'py-5 bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <AnimatedContainer animation="slide-down" delay={100}>
          <div className="flex items-center gap-2">
            <MapPin className="h-7 w-7 text-neighborly-600" />
            <span className="font-semibold text-xl tracking-tight text-gray-900">NeighborMe</span>
          </div>
        </AnimatedContainer>
        <AnimatedContainer animation="slide-down" delay={300}>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a href="#features" className="text-sm font-medium hover:text-neighborly-600 transition-colors text-gray-700">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="text-sm font-medium hover:text-neighborly-600 transition-colors text-gray-700">
                How It Works
              </a>
            </li>
            <li>
              <a href="#faq" className="text-sm font-medium hover:text-neighborly-600 transition-colors text-gray-700">
                FAQ
              </a>
            </li>
          </ul>
        </AnimatedContainer>
        <AnimatedContainer animation="slide-down" delay={500}>
          <Button
            variant="default"
            className="bg-neighborly-600 hover:bg-neighborly-700 transition-all duration-300"
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Join Waitlist
          </Button>
        </AnimatedContainer>
      </nav>
    </header>
  );
};

export default Navbar;

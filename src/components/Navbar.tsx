
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { AnimatedContainer } from './AnimatedElements';

const Navbar = () => {
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
            <MapPin className="text-neighborly-700 h-7 w-7" />
            <span className="font-semibold text-xl tracking-tight">NeighborMe</span>
          </div>
        </AnimatedContainer>
        <AnimatedContainer animation="slide-down" delay={300}>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a href="#features" className="text-sm font-medium hover:text-neighborly-600 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="text-sm font-medium hover:text-neighborly-600 transition-colors">
                How It Works
              </a>
            </li>
            <li>
              <a href="#faq" className="text-sm font-medium hover:text-neighborly-600 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </AnimatedContainer>
        <AnimatedContainer animation="slide-down" delay={500}>
          <Button
            variant="default"
            className="bg-neighborly-700 hover:bg-neighborly-800 transition-all duration-300"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist
          </Button>
        </AnimatedContainer>
      </nav>
    </header>
  );
};

export default Navbar;

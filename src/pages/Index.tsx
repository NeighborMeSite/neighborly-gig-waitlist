
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const [showWaitlist, setShowWaitlist] = useState(true);
  const [neighborCount, setNeighborCount] = useState(0);

  useEffect(() => {
    // Fetch the waitlist count on component mount
    const fetchWaitlistCount = async () => {
      try {
        const { count, error } = await supabase
          .from('waitlist')
          .select('*', { count: 'exact', head: true });
        
        if (error) {
          console.error('Error fetching waitlist count:', error);
          return;
        }
        
        if (count !== null) {
          setNeighborCount(count);
        }
      } catch (error) {
        console.error('Error fetching waitlist count:', error);
      }
    };

    fetchWaitlistCount();
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neighborly-50 to-neighborly-100">
      <Navbar onOpenWaitlist={scrollToWaitlist} />
      <div className="pt-16 bg-neighborly-200 py-4 text-center mt-0 mb-0 px-4 shadow-sm">
        <h2 className="text-neighborly-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-poppins">Welcome to NeighborMe</h2>
        <p className="text-neighborly-700 mt-1 italic text-sm md:text-base px-1">Building stronger communities, one neighbor at a time</p>
        <p className="text-sm md:text-base lg:text-lg pb-2 mt-1 text-neighborly-700 font-medium">
          Already <span className="font-bold text-xl md:text-2xl text-neighborly-600">{neighborCount}</span> neighbors have joined the waitlist!
        </p>
      </div>
      <main>
        <HeroSection 
          showWaitlist={showWaitlist} 
          setShowWaitlist={setShowWaitlist} 
          neighborCount={neighborCount}
          setNeighborCount={setNeighborCount}
        />
        <FeatureSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

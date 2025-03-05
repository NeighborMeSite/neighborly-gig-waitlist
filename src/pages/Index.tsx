
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
    <div className="min-h-screen">
      <Navbar onOpenWaitlist={scrollToWaitlist} />
      <div className="bg-neighborly-50 py-4 md:py-6 text-center mt-14 mb-0 px-3">
        <h2 className="text-neighborly-600 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Welcome to NeighborMe</h2>
        <p className="text-gray-600 mt-1 md:mt-2 italic text-base md:text-lg px-2">Building stronger communities, one neighbor at a time</p>
        <p className="text-lg mt-2 md:mt-3 pb-2">
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

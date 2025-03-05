
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const Index = () => {
  const [showWaitlist, setShowWaitlist] = useState(true);

  const scrollToWaitlist = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar onOpenWaitlist={scrollToWaitlist} />
      <main>
        <HeroSection showWaitlist={showWaitlist} setShowWaitlist={setShowWaitlist} />
        <FeatureSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

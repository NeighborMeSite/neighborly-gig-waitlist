
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const Index = () => {
  const [showWaitlist, setShowWaitlist] = useState(true);

  return (
    <div className="min-h-screen">
      <Navbar onOpenWaitlist={() => {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        setShowWaitlist(true);
      }} />
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

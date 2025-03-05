
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import WaitlistOverlay from '@/components/WaitlistOverlay';

const Index = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenWaitlist={() => setShowWaitlist(true)} />
      <main>
        <HeroSection showWaitlist={showWaitlist} setShowWaitlist={setShowWaitlist} />
        <FeatureSection />
        <FaqSection />
      </main>
      <Footer />
      {showWaitlist && <WaitlistOverlay onClose={() => setShowWaitlist(false)} />}
    </div>
  );
};

export default Index;

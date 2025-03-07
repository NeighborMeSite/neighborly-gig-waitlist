
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  const handleOpenWaitlist = () => {
    window.location.href = "/#waitlist";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenWaitlist={handleOpenWaitlist} />
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 flex items-center">
            <Link to="/">
              <Button variant="ghost" className="p-0 hover:bg-transparent">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold mb-6 text-neighborly-800">Privacy Policy</h1>
          
          <div className="prose prose-green max-w-none">
            <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Overview</h2>
              <p>
                This simple Privacy Policy explains how NeighborMe ("we", "our", or "us") collects and uses your information 
                when you join our waitlist. We're committed to protecting your privacy and using your data responsibly.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Information We Collect</h2>
              <p>When you join our waitlist, we collect:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Your name</li>
                <li>Email address</li>
                <li>Zip code</li>
                <li>Skills you're interested in offering or receiving</li>
              </ul>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">How We Use Your Information</h2>
              <p>We use your information solely to:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Maintain our waitlist</li>
                <li>Notify you when NeighborMe launches in your area</li>
                <li>Send you updates about our service</li>
              </ul>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Data Storage and Security</h2>
              <p>
                We store your data securely using industry-standard practices. Your information 
                is only accessible to authorized personnel who need it to manage the waitlist.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request deletion of your personal data</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at help@neighborme.io.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at help@neighborme.io.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate('/');
  };
  
  return (
    <>
      <Navbar onOpenWaitlist={handleGoBack} neighborCount={0} />
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 flex items-center">
            <Link to="/">
              <Button variant="ghost" className="group p-0 hover:bg-transparent">
                <ArrowLeft className="h-5 w-5 mr-2 text-neighborly-600 group-hover:text-neighborly-700 transition-colors" />
                <span className="font-medium text-neighborly-600 group-hover:text-neighborly-700 transition-colors">
                  Back to NeighborMe
                </span>
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold mb-6 text-neighborly-800">Terms of Service</h1>
          
          <div className="prose prose-green max-w-none">
            <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Introduction</h2>
              <p>
                These Terms of Service ("Terms") govern your use of the NeighborMe waitlist and website. By joining 
                our waitlist, you agree to these Terms in their entirety.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Waitlist Participation</h2>
              <p>
                When you join our waitlist, you're expressing interest in our upcoming service. Joining the waitlist 
                does not guarantee immediate access to the service when it launches. Access will be granted based on 
                various factors, including geographic availability.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">User Eligibility</h2>
              <p>
                You must be at least 18 years of age to join our waitlist and use our services.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Communications</h2>
              <p>
                By joining our waitlist, you agree to receive email communications from us regarding the launch of our 
                service and related updates. You can opt out of these communications at any time.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and images, is the property of NeighborMe 
                and is protected by intellectual property laws. You may not use our content without our express permission.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Limitation of Liability</h2>
              <p>
                NeighborMe is not liable for any direct, indirect, incidental, consequential, or special damages arising 
                out of or in any way connected with your use of our waitlist or website.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of any changes by posting the new Terms 
                on this page.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at help@neighborme.io.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;

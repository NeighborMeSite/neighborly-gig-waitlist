
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cookies = () => {
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
              <Button variant="ghost" className="group p-0 hover:bg-transparent">
                <ArrowLeft className="h-5 w-5 mr-2 text-neighborly-600 group-hover:text-neighborly-700 transition-colors" />
                <span className="font-medium text-neighborly-600 group-hover:text-neighborly-700 transition-colors">
                  Back to NeighborMe
                </span>
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold mb-6 text-neighborly-800">Cookie Policy</h1>
          
          <div className="prose prose-green max-w-none">
            <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit 
                our website. They help us provide you with a better browsing experience and allow us to improve our site.
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">How We Use Cookies</h2>
              <p>
                Our waitlist website uses a minimal number of cookies that are necessary for the website to function properly. 
                These cookies help us:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Remember your form inputs if you leave a page and return</li>
                <li>Understand how you use our website</li>
                <li>Improve the speed and security of the site</li>
              </ul>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Types of Cookies We Use</h2>
              <p>We use the following cookies:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li><strong>Essential cookies:</strong> These are cookies that are required for the operation of our website.</li>
                <li><strong>Analytical/performance cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
              </ul>
            </section>
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Managing Cookies</h2>
              <p>
                Most web browsers allow you to manage cookies through browser settings. To find out more about cookies, 
                including how to see what cookies have been set and how to manage and delete them, visit 
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-neighborly-600 hover:text-neighborly-700"> www.allaboutcookies.org</a>.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-neighborly-700">Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us at help@neighborme.io.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;

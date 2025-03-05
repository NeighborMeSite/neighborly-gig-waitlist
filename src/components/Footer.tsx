
import { MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neighborly-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <MapPin className="text-neighborly-700 h-6 w-6" />
              <span className="font-semibold text-lg">NeighborMe</span>
            </div>
            <p className="text-muted-foreground max-w-xs mx-auto md:mx-0">
              Building stronger communities by connecting neighbors for local services and help.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">Terms</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-medium mb-4">Connect</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-neighborly-700 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neighborly-100 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} NeighborMe. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neighborly-700 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neighborly-700 transition-colors">Terms</a>
            <a href="#" className="hover:text-neighborly-700 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

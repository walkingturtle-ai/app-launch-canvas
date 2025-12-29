
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img className="h-8 w-auto" src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c533bbdf-a3cc-49f3-90a6-286308c970f8/soko-logo-49fqqbo-1767048247210.webp" alt="Soko Logo" />
              <span className="text-2xl font-bold">Soko</span>
            </div>
            <p className="text-text-secondary">The ultimate productivity companion.</p>
             <div className="mt-6 flex items-center gap-4">
                <a href="#" className="">
                    <img src="/apple-store-badge.svg" alt="Download on the App Store" className="h-10" />
                </a>
                <a href="#" className="">
                    <img src="/google-play-badge.svg" alt="Get it on Google Play" className="h-10" />
                </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 col-span-2 md:col-span-2">
            <div className="md:justify-self-center">
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            <div className="md:justify-self-center">
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Soko Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

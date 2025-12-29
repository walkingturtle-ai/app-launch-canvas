
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <img className="h-8 w-auto" src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c533bbdf-a3cc-49f3-90a6-286308c970f8/soko-logo-49fqqbo-1767048247210.webp" alt="Soko Logo" />
              <span className="text-2xl font-bold">Soko</span>
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="text-text-secondary hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-text-secondary hover:text-white transition-colors">Testimonials</a>
            <a href="#pricing" className="text-text-secondary hover:text-white transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center">
             <a href="#" className="bg-accent hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">Download Now</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

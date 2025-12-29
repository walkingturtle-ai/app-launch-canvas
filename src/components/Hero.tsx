
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative text-center py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden animate-fadeInUp">
       <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/c533bbdf-a3cc-49f3-90a6-286308c970f8/soko-hero-mockup-lroqd5o-1767048254913.webp)'}}></div>
       <div className="absolute inset-0 bg-primary opacity-80"></div>
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Your Ultimate Productivity Companion</h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary">Streamline your workflow, manage tasks, and collaborate seamlessly with Soko. The all-in-one app to boost your productivity.</p>
        <div className="mt-10 flex justify-center items-center gap-4">
          <a href="#" className="">
            <img src="/apple-store-badge.svg" alt="Download on the App Store" className="h-12 sm:h-14" />
          </a>
          <a href="#" className="">
            <img src="/google-play-badge.svg" alt="Get it on Google Play" className="h-12 sm:h-14" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';

const features = [
  {
    name: 'Task Management',
    description: 'Organize your life with our intuitive task manager. Create lists, set deadlines, and track your progress effortlessly.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c533bbdf-a3cc-49f3-90a6-286308c970f8/feature-screenshot-1-803uam6-1767048262793.webp',
  },
  {
    name: 'Calendar & Scheduling',
    description: 'Sync your calendars and schedule meetings with ease. Never miss an important event again.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c533bbdf-a3cc-49f3-90a6-286308c970f8/feature-screenshot-2-cybm27r-1767048271399.webp',
  },
  {
    name: 'Team Collaboration',
    description: 'Work together in real-time. Share files, chat with your team, and keep everyone on the same page.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c533bbdf-a3cc-49f3-90a6-286308c970f8/feature-screenshot-3-t6g9vf3-1767048278867.webp',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Everything you need, nothing you don't.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Discover the powerful features that make Soko the best productivity app.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center animate-fadeInUp" style={{animationDelay: `${index * 150}ms`}}>
              <div className="mb-6 flex justify-center">
                <img src={feature.image} alt={`${feature.name} screenshot`} className="rounded-lg shadow-lg w-full max-w-xs h-auto"/>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

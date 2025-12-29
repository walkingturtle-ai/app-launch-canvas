
import React from 'react';

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/ month',
    description: 'For individuals and small teams just getting started.',
    features: ['Up to 5 projects', 'Basic analytics', '2 integrations', '24/7 support'],
    buttonText: 'Start for Free',
    isFeatured: false,
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/ month',
    description: 'For growing teams that need more power and features.',
    features: ['Unlimited projects', 'Advanced analytics', '50 integrations', 'Priority support'],
    buttonText: 'Get Started',
    isFeatured: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    period: '',
    description: 'For large organizations with custom needs.',
    features: ['Unlimited everything', 'Dedicated account manager', 'Custom integrations', 'Premium support'],
    buttonText: 'Contact Sales',
    isFeatured: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Choose the plan that's right for you and your team.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`border rounded-lg p-8 flex flex-col ${tier.isFeatured ? 'border-accent bg-secondary' : 'border-gray-700 bg-primary'}`}>
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-extrabold">{tier.price}</span>
                {tier.period && <span className="text-text-secondary ml-1">{tier.period}</span>}
              </div>
              <p className="text-text-secondary mb-6 h-16">{tier.description}</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${tier.isFeatured ? 'bg-accent hover:bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
                {tier.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

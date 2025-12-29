
import React from 'react';

const testimonials = [
  {
    quote: 'Soko has completely transformed my workflow. I can\'t imagine going back to my old system. It\'s a game-changer!',
    author: 'Aisha Yusuf',
    title: 'Founder of TechNova',
    avatar: 'https://i.pravatar.cc/150?u=aisha'
  },
  {
    quote: 'The best productivity app on the market. The design is beautiful and the features are incredibly powerful. Highly recommended!',
    author: 'Kwame Mensah',
    title: 'Lead Developer at Innovate Solutions',
    avatar: 'https://i.pravatar.cc/150?u=kwame'
  },
  {
    quote: 'As a student, Soko helps me stay organized and on top of my assignments. The calendar integration is a lifesaver.',
    author: 'Fatima Al-Fassi',
    title: 'University Student',
    avatar: 'https://i.pravatar.cc/150?u=fatima'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Loved by teams and individuals worldwide</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Don't just take our word for it. Here's what our users have to say.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary p-8 rounded-lg shadow-lg animate-fadeInUp" style={{animationDelay: `${index * 150}ms`}}>
              <p className="text-lg mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-text-secondary text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

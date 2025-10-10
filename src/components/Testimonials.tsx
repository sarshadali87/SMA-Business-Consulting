import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'SMA Consulting transformed our compliance processes completely. What used to take weeks now happens seamlessly. Their AI chatbot has saved us thousands in support costs while improving customer satisfaction.'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GrowthHub',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The digital marketing strategies from SMA are incredible. Our ROAS improved by 340% in just 3 months. Their AI-driven analytics helped us understand our audience better than ever before.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, StyleCo',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The design work is absolutely stunning! Every piece maintains perfect brand consistency and the turnaround time is impressive. Our social media engagement doubled after implementing their designs.'
    },
    {
      name: 'David Park',
      role: 'COO, FinanceWorks',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Outstanding tax planning and corporate compliance services. They keep us updated on all regulatory changes and ensure we\'re always ahead of deadlines. True professionals who care about our success.'
    },
    {
      name: 'Lisa Thompson',
      role: 'Entrepreneur, E-Shop Plus',
      image: 'https://images.pexels.com/photos/3765035/pexels-photo-3765035.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The custom AI chatbot they built handles 80% of our customer inquiries automatically. It\'s like having a 24/7 support team. Best investment we\'ve made for our online business!'
    },
    {
      name: 'James Wilson',
      role: 'Director, InnovateCorp',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'SMA provides exceptional end-to-end support. From compliance to marketing to design, they handle everything with expertise. It\'s refreshing to work with a team that truly understands modern business needs.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Star className="text-yellow-400" size={18} />
            <span className="text-sm font-medium text-white">Client Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients have to say about working with SMA Consulting.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <Quote className="text-blue-200 mb-6" size={48} />

            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 mb-8">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
              />
              <div className="text-center sm:text-left flex-1">
                <div className="flex justify-center sm:justify-start space-x-1 mb-3">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-xl text-gray-800 leading-relaxed mb-6">
                  "{currentTestimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</div>
                  <div className="text-gray-600">{currentTestimonial.role}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <button
                onClick={prevTestimonial}
                className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-full transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-full transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-200">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">98%</div>
            <div className="text-blue-200">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">50+</div>
            <div className="text-blue-200">Industry Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
}

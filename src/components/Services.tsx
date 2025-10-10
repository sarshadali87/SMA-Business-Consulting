import { Shield, TrendingUp, Palette, Bot, FileText, Users, BarChart, Megaphone, Check } from 'lucide-react';

interface ServicesProps {
  onBookConsultation: () => void;
}

export default function Services({ onBookConsultation }: ServicesProps) {
  const services = [
    {
      icon: Shield,
      title: 'Compliance & Finance Solutions',
      tagline: 'Mitigate Risk. Ensure Compliance. Focus on Growth.',
      description: 'Navigate complex taxation and corporate compliance with confidence. Our experts simplify registrations, filings, and regulatory requirements.',
      color: 'blue',
      features: [
        'Taxation Planning & Filing',
        'Corporate Registrations',
        'Compliance Audits',
        'Regulatory Updates',
        'Digital Process Management'
      ],
      cta: 'Get Free Compliance Audit'
    },
    {
      icon: TrendingUp,
      title: 'Digital & Social Media Marketing',
      tagline: 'Reach the Right Audience, Right Now.',
      description: 'Data-driven marketing strategies powered by AI analytics. We deliver measurable results that grow your business.',
      color: 'teal',
      features: [
        'AI-Driven Market Analytics',
        'Social Media Management',
        'Content Strategy',
        'Performance Tracking (ROAS)',
        'Multi-Platform Campaigns'
      ],
      cta: 'Start Marketing Campaign'
    },
    {
      icon: Palette,
      title: 'Digital Design Studio',
      tagline: 'Visuals That Convert: Professional Design for Every Platform.',
      description: 'Eye-catching designs that maintain brand consistency across all your marketing materials.',
      color: 'orange',
      features: [
        'Social Media Posts',
        'Professional Posters & Flyers',
        'Business Card Design',
        'Presentation Decks',
        'Fast Turnaround Times'
      ],
      cta: 'View Design Portfolio'
    },
    {
      icon: Bot,
      title: 'AI Chatbot Development',
      tagline: 'Automate and Elevate: Custom AI Chatbots for Your Business.',
      description: '24/7 customer support, lead generation, and cost savings through intelligent automation.',
      color: 'purple',
      features: [
        'Custom Chatbot Development',
        'Lead Qualification',
        '24/7 Automated Support',
        'CRM Integration',
        'Multi-Language Support'
      ],
      cta: 'Develop Your AI Chatbot'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'from-blue-600 to-blue-400',
      text: 'text-blue-600',
      border: 'border-blue-200',
      hover: 'hover:border-blue-400'
    },
    teal: {
      bg: 'from-teal-600 to-teal-400',
      text: 'text-teal-600',
      border: 'border-teal-200',
      hover: 'hover:border-teal-400'
    },
    orange: {
      bg: 'from-orange-600 to-orange-400',
      text: 'text-orange-600',
      border: 'border-orange-200',
      hover: 'hover:border-orange-400'
    },
    purple: {
      bg: 'from-indigo-600 to-indigo-400',
      text: 'text-indigo-600',
      border: 'border-indigo-200',
      hover: 'hover:border-indigo-400'
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <BarChart className="text-blue-600" size={18} />
            <span className="text-sm font-medium text-blue-600">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From compliance to cutting-edge AI, we provide everything your business needs to thrive in the modern marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl border-2 ${colors.border} ${colors.hover} p-8 transition-all duration-300 hover:shadow-2xl`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className={`${colors.text} font-semibold mb-4 text-lg`}>{service.tagline}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="text-white" size={12} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onBookConsultation}
                  className={`w-full bg-gradient-to-r ${colors.bg} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  {service.cta}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Need a Custom Package?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We offer flexible, bundled solutions tailored to your specific business needs. From Startup Compliance Bundles to Marketing Accelerators.
          </p>
          <button
            onClick={onBookConsultation}
            className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Discuss Custom Solutions
          </button>
        </div>
      </div>
    </section>
  );
}

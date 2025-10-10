import { Target, Users, Zap, Award, Check } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy is backed by data and focused on delivering measurable business outcomes.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships, not just transactions.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Leveraging cutting-edge AI and technology to keep your business ahead of the curve.'
    },
    {
      icon: Award,
      title: 'Excellence Always',
      description: 'From compliance to design, we maintain the highest standards in every service we deliver.'
    }
  ];

  const achievements = [
    'Industry-leading 90% client satisfaction rate',
    'Over 30+ successful projects delivered',
    'Certified experts in taxation and corporate compliance',
    'Award-winning design and marketing campaigns',
    'Custom AI solutions with proven ROI',
    '24/7 support with lightning-fast response times'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
              <Users className="text-blue-900" size={18} />
              <span className="text-sm font-medium text-blue-600"><b>About SMA Business Consulting</b></span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-black-900 mb-6">
              Your Partner in Business Excellence
            </h2>

            <p className="text-lg text-black-600 mb-6 leading-relaxed">
              SMA Business Consulting was founded on a simple belief: modern businesses deserve modern solutions. We blend traditional business expertise in compliance and finance with cutting-edge technology and creative marketing to help SMEs and startups thrive.
            </p>

            <p className="text-lg text-black-600 mb-8 leading-relaxed">
              What sets us apart is our holistic approach. Whether you need help with taxation, want to scale your digital presence, or need to automate customer support with AI, we provide integrated solutions that work together seamlessly.
            </p>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-white" size={14} />
                  </div>
                  <span className="text-black-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border-2 border-black-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-black-900 mb-2">{value.title}</h3>
                    <p className="text-black-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-50 leading-relaxed">
                To empower businesses with Strategic Modern Advice that combines expert knowledge, innovative technology, and creative solutions. We're not just consultants—we're your growth partners committed to your long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

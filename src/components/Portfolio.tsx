import { useState } from 'react';
import { ExternalLink, TrendingUp, Palette, Bot, Award } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'tax', name: 'Taxation' },
    { id: 'marketing', name: 'Digital Marketing' },
    { id: 'design', name: 'Design Studio' },
    { id: 'chatbot', name: 'AI Chatbots' }
  ];

  const projects = [
    {
      id: 1,
      category: 'tax',
      title: 'Taxation Compliance',
      client: 'Sadiq Trading',
      description: 'Increased revenue by 340% through data-driven marketing strategies and AI analytics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: ['340% ROAS', '2M+ Reach', '85% Engagement'],
      icon: TrendingUp
    },
    {
      id: 2,
      category: 'marketing',
      title: 'E-Commerce Growth Campaign',
      client: 'ShopTech Solutions',
      description: 'Increased revenue by 340% through data-driven marketing strategies and AI analytics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: ['340% ROAS', '2M+ Reach', '85% Engagement'],
      icon: TrendingUp
    },
    {
      id: 3,
      category: 'design',
      title: 'Brand Identity Redesign',
      client: 'Modern Fitness Co.',
      description: 'Complete visual transformation including logo, social media templates, and marketing materials.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: ['Full Rebrand', '50+ Assets', '2-Week Delivery'],
      icon: Palette
    },
    {
      id: 4,
      category: 'chatbot',
      title: 'Customer Support AI',
      client: 'FinanceHub',
      description: 'Custom chatbot handling 80% of customer inquiries with seamless CRM integration.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: ['80% Automation', '24/7 Support', '60% Cost Reduction'],
      icon: Bot
    },
    {
      id: 5,
      category: 'marketing',
      title: 'Social Media Domination',
      client: 'StyleVerse Fashion',
      description: 'Multi-platform campaign achieving viral growth and establishing brand authority.',
      image: 'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: ['500K+ Followers', '5M Impressions', '12% CTR'],
      icon: TrendingUp
    },
    {
      id: 6,
      category: 'design',
      title: 'Professional Presentation Suite',
      client: 'TechVentures Inc.',
      description: 'Investor pitch decks and corporate presentations that secured $2M in funding.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: ['$2M Funded', '20+ Decks', 'Award-Winning'],
      icon: Award
    },
    {
      id: 7,
      category: 'chatbot',
      title: 'Lead Generation Bot',
      client: 'RealEstate Pro',
      description: 'AI-powered lead qualification system converting visitors into qualified prospects.',
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: ['300% More Leads', '45% Conversion', 'CRM Integrated'],
      icon: Bot
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'marketing':
        return 'from-teal-600 to-teal-400';
      case 'design':
        return 'from-orange-600 to-orange-400';
      case 'chatbot':
        return 'from-indigo-600 to-indigo-400';
      default:
        return 'from-blue-600 to-blue-400';
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <Award className="text-blue-600" size={18} />
            <span className="text-sm font-medium text-blue-600">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Success Stories & Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients. Explore our portfolio of successful projects across multiple industries.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${getCategoryColor(project.category)} rounded-lg flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm font-medium mb-1">{project.client}</div>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="space-y-2 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getCategoryColor(project.category)}`}></div>
                        <span className="text-sm font-medium text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                    <span>View Case Study</span>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

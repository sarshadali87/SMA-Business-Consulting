import { BookOpen, Calendar, ArrowRight, TrendingUp } from 'lucide-react';

export default function Resources() {
  const articles = [
    {
      title: '5 Tax Changes for 2025 Every Business Owner Must Know',
      category: 'Compliance',
      date: 'March 15, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Stay ahead of the curve with our comprehensive guide to the latest tax regulations affecting SMEs.'
    },
    {
      title: 'How AI is Reshaping Social Media Marketing in 2025',
      category: 'Marketing',
      date: 'March 12, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Discover how artificial intelligence is revolutionizing content strategy, targeting, and engagement.'
    },
    {
      title: 'The ROI of Custom AI Chatbots: A Data-Driven Analysis',
      category: 'AI & Technology',
      date: 'March 8, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Real numbers from real businesses showing how AI chatbots deliver measurable returns on investment.'
    }
  ];

  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <BookOpen className="text-blue-600" size={18} />
            <span className="text-sm font-medium text-blue-600">Resources & Insights</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Stay Informed, Stay Ahead
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, industry trends, and actionable advice to help your business grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                <button className="group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700">
                  <span>Read More</span>
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <TrendingUp className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Get Weekly Business Insights
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              Subscribe to our newsletter for expert tips, industry updates, and exclusive resources delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Subscribe Now
              </button>
            </div>

            <p className="text-blue-100 text-sm mt-4">
              Join 10,000+ business owners growing smarter every week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

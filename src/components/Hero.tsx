// import { ArrowRight, Sparkles, TrendingUp, Shield } from 'lucide-react';

// interface HeroProps {
//   onBookConsultation: () => void;
// }

// export default function Hero({ onBookConsultation }: HeroProps) {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <section id="hero" className="relative pt-28 pb-20 px-4 sm:px-4 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-5">
//             <div className="inline-flex items-center space-x-2 bg-blue/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
//               <Sparkles className="text-teal-500" size={18} />
//               <span className="text-sm font-medium text-blue-700">AI-Powered Business Solutions</span>
//             </div>

//             <h1 className="text-5xl sm:text-6xl lg:text-4xl font-bold text-gray-900 leading-tight">
//               Empowering Your Business Growth with{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
//                 Strategic Modern Advice
//               </span>
//             </h1>

//             <p className="text-xl text-gray-600 leading-relaxed">
//               SMA Business Consulting blends expert compliance and marketing with cutting-edge AI to future-proof your success.
//               From taxation to digital marketing, we handle it all.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button
//                 onClick={onBookConsultation}
//                 className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//               >
//                 <span>Book Your Free Consultation</span>
//                 <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//               </button>

//               <button
//                 onClick={() => scrollToSection('services')}
//                 className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
//               >
//                 <span>Explore Services</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-blue-600">30+</div>
//                 <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-teal-600">90%</div>
//                 <div className="text-sm text-gray-600 mt-1">Success Rate</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-orange-600">24/7</div>
//                 <div className="text-sm text-gray-600 mt-1">AI Support</div>
//               </div>
//             </div>
//           </div>

//           <div className="relative lg:pl-8">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl transform rotate-3"></div>
//               <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6">
//                 <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
//                     <Shield className="text-white" size={24} />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900">Taxation & Corporate Compliance</div>
//                     <div className="text-sm text-gray-600">Tax + Corporate Compliance Solutions</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-xl">
//                   <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-400 rounded-lg flex items-center justify-center">
//                     <TrendingUp className="text-white" size={24} />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900">Digital & Social Media Marketing</div>
//                     <div className="text-sm text-gray-600">AI-Powered Strategies</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
//                   <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-400 rounded-lg flex items-center justify-center">
//                     <Sparkles className="text-white" size={24} />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900">AI Chatbot Development</div>
//                     <div className="text-sm text-gray-600">Custom Automation</div>
//                   </div>
//                 </div>

//                 <div className="pt-4 border-t border-gray-200">
//                   <div className="flex items-center justify-between text-sm">
//                     <span className="text-gray-600">Trusted by SMEs & Startups</span>
//                     <div className="flex space-x-1">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                           <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ArrowRight, Sparkles, TrendingUp, Shield } from 'lucide-react';

interface HeroProps {
  onBookConsultation: () => void;
}

export default function Hero({ onBookConsultation }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    // 1. Updated section: Removed gradient, added `text-white` for content readability
    <section id="hero" className="relative pt-28 pb-20 px-4 sm:px-4 lg:px-8 overflow-hidden bg-gray-600 text-white">
      
      {/* 2. Video Background Element */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30" // Adjust opacity as needed
        >
          {/* Replace this source with your actual AI generative video path */}
          <source src="/videos/ai-bot-background.mp4" type="video/mp4" /> 
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 3. Color Overlay for better contrast on dynamic video (dark semi-transparent) */}
      <div className="absolute inset-0 bg-gray-900/60"></div>
      
      {/* The original decorative circles are removed as the video replaces the simple background */}
      {/* If you still want the abstract shapes, you'd need to layer them above the video but below the main content */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Content: Ensure text colors are now white/light for contrast */}
          <div className="space-y-5">
            
            {/* Tagline adjustment */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-300/30">
              <Sparkles className="text-teal-400" size={18} />
              <span className="text-sm font-medium text-white">AI-Powered Business Solutions</span>
            </div>

            {/* Headline adjustment: text-gray-900 removed, text is white by default from section */}
            <h1 className="text-5xl sm:text-6xl lg:text-4xl font-bold leading-tight">
              Empowering Your Business Growth with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-teal-200 bg-clip-text text-transparent">
                Strategic Modern Advice
              </span>
            </h1>

            {/* Paragraph adjustment */}
            <p className="text-xl text-gray-200 leading-relaxed">
              SMA Business Consulting blends expert compliance and marketing with cutting-edge AI to future-proof your success.
              From taxation to digital marketing, we handle it all.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Button styling remains effective */}
              <button
                onClick={onBookConsultation}
                className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Book Your Free Consultation</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              {/* Secondary Button adjustment for background */}
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center justify-center space-x-2 bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/40 hover:border-blue-300 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Stats section adjustment */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">30+</div>
                <div className="text-sm text-gray-300 mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">90%</div>
                <div className="text-sm text-gray-300 mt-1">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-gray-300 mt-1">AI Support</div>
              </div>
            </div>
          </div>

          {/* Image/Mockup Section: Retained original styling for the inner card, but removed the pl-8 padding for symmetry */}
          <div className="relative"> 
            <div className="relative">
              {/* The "rotated" background is kept for visual flair */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl transform rotate-3"></div>
              
              {/* The white card content is kept as is to stand out against the dark video background */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6">
                
                {/* Cards content (no changes needed) */}
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Taxation & Corporate Compliance</div>
                    <div className="text-sm text-gray-600">Tax + Corporate Compliance Solutions</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-400 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Digital & Social Media Marketing</div>
                    <div className="text-sm text-gray-600">AI-Powered Strategies</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-400 rounded-lg flex items-center justify-center">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">AI Chatbot Development</div>
                    <div className="text-sm text-gray-600">Custom Automation</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Trusted by SMEs & Startups</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
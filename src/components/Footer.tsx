import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SMA</span>
              </div>
              <div>
                <div className="text-xl font-bold">SMA Business Consulting</div>
                <div className="text-xs text-blue-200">Strategic Modern Advice</div>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed mb-6">
              Empowering businesses with expert compliance, innovative marketing, and AI-powered solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-blue-200">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">
                  Taxation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">
                  Corporarte Compliance
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">
                  Digital Marketing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">
                  Design Studio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">
                  AI Chatbot Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">
                  Custom Packages
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3 text-blue-200">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('resources')} className="hover:text-white transition-colors">
                  Resources & Blog
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                {/* <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a> */}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-blue-200">
              <li className="flex items-start space-x-3">
                <Mail className="flex-shrink-0 mt-1" size={18} />
                <a href="mailto:sarshadali2025@gmail.com" className="hover:text-white transition-colors">
                  sarshadali2025@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="flex-shrink-0 mt-1" size={18} />
                <a href="tel:+923022892886" className="hover:text-white transition-colors">
                  +92 (302) 2892886
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 mt-1" size={18} />
                <span>
                  Karachi, Pakistan<br />
                  {/* Corporate Plaza, Suite 456<br />
                  Business City, BC 12345 */}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © {currentYear} SMA Business Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-blue-200">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

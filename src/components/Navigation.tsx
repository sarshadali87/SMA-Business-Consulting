import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

interface NavigationProps {
  onChatOpen: () => void;
}

export default function Navigation({ onChatOpen }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-20 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SMA</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">SMA Business Consulting</div>
              <div className="text-xs text-gray-600"><b>Strategic Modern Advice</b></div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
            {/* <button
              onClick={onChatOpen}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <MessageSquare size={18} />
              <span>Chat with AI</span>
            </button> */}
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                onChatOpen();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg"
            >
              <MessageSquare size={18} />
              <span>Chat with AI</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

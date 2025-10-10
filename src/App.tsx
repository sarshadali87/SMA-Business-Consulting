import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleBookConsultation = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const offset = 80;
      const elementPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onChatOpen={() => setIsChatOpen(true)} />
      <Hero onBookConsultation={handleBookConsultation} />
      <Services onBookConsultation={handleBookConsultation} />
      <About />
      <Portfolio />
      <Testimonials />
      <Resources />
      <Contact />
      <Footer />
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;

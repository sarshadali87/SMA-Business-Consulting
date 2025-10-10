import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChat({ isOpen, onClose }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm the SMA AI Assistant. How can I help you today? I can assist with:\n\n• Tax and Compliance inquiries\n• Digital Marketing strategies\n• Design services\n• AI Chatbot development\n• General business consultation",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('tax') || message.includes('compliance') || message.includes('finance')) {
      return "Great question about our Compliance & Finance Solutions! We specialize in taxation planning, corporate registrations, and regulatory compliance. Our digital processes make everything hassle-free.\n\nWould you like to:\n1. Schedule a free 15-minute compliance audit\n2. Learn about our tax planning services\n3. Discuss corporate registration needs\n\nJust let me know!";
    }

    if (message.includes('marketing') || message.includes('social media') || message.includes('digital')) {
      return "Excellent! Our Digital Marketing services are powered by AI-driven analytics for maximum ROI. We handle everything from social media management to comprehensive digital campaigns.\n\nKey benefits:\n• Data-driven strategies\n• Real-time performance tracking\n• Multi-platform expertise\n• Proven ROAS improvements\n\nWould you like to discuss a marketing strategy for your business?";
    }

    if (message.includes('design') || message.includes('poster') || message.includes('flyer') || message.includes('logo')) {
      return "Perfect! Our Digital Design Studio creates stunning visuals that convert. We offer:\n\n• Social media posts & graphics\n• Professional posters & flyers\n• Business cards\n• Presentation designs\n• Brand consistency across all materials\n\nFast turnaround times guaranteed! Want to see our portfolio or start a design project?";
    }

    if (message.includes('chatbot') || message.includes('ai') || message.includes('automation')) {
      return "Fantastic interest in AI solutions! Custom chatbots can transform your business:\n\n✓ 24/7 automated customer support\n✓ Intelligent lead qualification\n✓ Significant cost savings\n✓ CRM integration\n✓ Multi-language capabilities\n\nWe develop tailored AI chatbots that fit your exact needs. Ready to automate and elevate your customer experience?";
    }

    if (message.includes('price') || message.includes('cost') || message.includes('package')) {
      return "We offer flexible pricing and custom packages tailored to your needs! Our solutions include:\n\n• Startup Compliance Bundles\n• Marketing Accelerator Packages\n• Design Subscription Plans\n• Custom AI Development Projects\n\nEach business is unique. I'd love to connect you with our team for a free consultation to discuss the best solution for your budget and goals. Would you like to schedule a call?";
    }

    if (message.includes('contact') || message.includes('call') || message.includes('meeting') || message.includes('consultation')) {
      return "I'd be happy to set that up! To book your free consultation, I'll need:\n\n• Your name\n• Email address\n• Phone number (optional)\n• Which service you're most interested in\n\nYou can provide these details here, or scroll down to our Contact section to fill out the form directly. What works best for you?";
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Great to meet you! I'm here to help you discover how SMA Consulting can accelerate your business growth. What aspect of your business would you like to improve?";
    }

    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! Is there anything else I can help you with today? I'm here 24/7 to assist with any questions about our services.";
    }

    return "That's a great question! I can help you learn more about:\n\n• Compliance & Finance Solutions\n• Digital Marketing services\n• Professional Design work\n• Custom AI Chatbot development\n• Custom business packages\n\nWhich area interests you most? Or would you prefer to speak directly with one of our consultants?";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full sm:w-96 h-[600px] flex flex-col overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Bot className="text-blue-600" size={24} />
            </div>
            <div>
              <div className="font-semibold text-white">SMA AI Assistant</div>
              <div className="text-xs text-blue-100">Online • Instant replies</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${
                message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-br from-blue-600 to-teal-500'
                    : 'bg-white border-2 border-blue-200'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="text-white" size={16} />
                  ) : (
                    <Bot className="text-blue-600" size={16} />
                  )}
                </div>
                <div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}>
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  </div>
                  <div className={`text-xs text-gray-500 mt-1 ${
                    message.sender === 'user' ? 'text-right' : 'text-left'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center">
                <Bot className="text-blue-600" size={16} />
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 border border-gray-200">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-end space-x-2">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              rows={1}
              className="flex-1 resize-none border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

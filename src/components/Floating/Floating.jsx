import { useState, useEffect } from 'react';

const Floating = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const contactOptions = [
    {
      id: 'phone',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      href: 'tel:+1234567890',
      label: 'Call us'
    },
    {
      id: 'whatsapp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      ),
      href: 'https://wa.me/1234567890',
      label: 'WhatsApp'
    },
    {
      id: 'email',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: 'mailto:contact@example.com',
      label: 'Email us'
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Contact Options Menu */}
      <div 
        className={`
          absolute bottom-16 right-1 flex flex-col-reverse gap-3
          transition-all duration-300 transform origin-bottom
          ${isVisible && isOpen 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95 pointer-events-none'
          }
        `}
      >
        {contactOptions.map((option, index) => (
          <a
            key={option.id}
            href={option.href}
            aria-label={option.label}
            style={{
              transitionDelay: `${isOpen ? index * 75 : 0}ms`
            }}
            className="w-12 h-12 rounded-full bg-white text-[var(--color-primary)]
                     shadow-lg hover:shadow-xl flex items-center justify-center
                     transition-all duration-300 hover:-translate-y-1
                     hover:bg-[var(--color-secondary)] group relative"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="transform group-hover:scale-110 transition-transform duration-300">
              {option.icon}
            </span>
            {/* Tooltip */}
            <span className="absolute right-14 bg-[var(--color-primary)] text-white 
                           px-3 py-1.5 rounded text-sm whitespace-nowrap opacity-0 
                           group-hover:opacity-100 transition-opacity duration-200
                           pointer-events-none shadow-lg">
              {option.label}
            </span>
          </a>
        ))}
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact options"
        className={`
          w-12 h-12 rounded-full
          bg-[var(--color-secondary)] text-[var(--color-primary)]
          shadow-lg hover:shadow-xl
          flex items-center justify-center
          transition-all duration-300
          hover:-translate-y-1 relative
          focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
          ${isOpen ? 'rotate-45' : 'rotate-0'}
        `}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Floating;

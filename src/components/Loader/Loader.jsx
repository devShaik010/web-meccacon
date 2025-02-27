import { useEffect } from 'react';

const Loader = () => {
  // Add spinner animation to document head when component mounts
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
      
      .spinner-ring {
        animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      }
      
      .spinner-backdrop {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
    `;
    
    document.head.appendChild(style);
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 spinner-backdrop">
      <div className="relative">
        {/* Larger, smooth spinner */}
        <svg className="w-24 h-24 spinner-ring" viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#FFC700"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="80"
            strokeDashoffset="20"
          />
        </svg>
        
        {/* Inner pulse circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-500/20 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loader;
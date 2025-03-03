import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/images/logo.png";

const pages = ["Home", "Projects", "Contact", "About"];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <nav className="bg-[var(--color-primary)] font-[Poppins] w-full">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Link */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-12" /> {/* Updated height from h-8 to h-12 */}
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {pages.map((page) => (
              <Link
                key={page}
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                className="text-white font-medium relative px-2 py-1 group"
              >
                <span>{page}</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[var(--color-secondary)] 
                               group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out">
                </span>
              </Link>
            ))}

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                key="phone"
                className="w-10 h-10 rounded-full bg-white text-[var(--color-primary)] 
                         shadow-md hover:bg-gray-100 hover:shadow-lg 
                         transition-all duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
              <button
                key="email"
                className="w-10 h-10 rounded-full bg-white text-[var(--color-primary)] 
                         shadow-md hover:bg-gray-100 hover:shadow-lg 
                         transition-all duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleDrawer(true)} className="text-white p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-black/50 z-50 transition-opacity 
                      ${drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed right-0 top-0 h-full w-64 bg-[var(--color-primary)] text-white 
                        shadow-lg transform transition-transform duration-300
                        ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Drawer Header with Link */}
          <div className="p-4 text-center">
            <Link to="/" onClick={toggleDrawer(false)}>
              <img src={logo} alt="Logo" className="h-12 mx-auto" /> {/* Updated height from h-10 to h-12 */}
            </Link>
          </div>

          {/* Divider */}
          <div className="border-b border-[var(--color-secondary)]"></div>

          {/* Drawer Links */}
          <div className="py-2">
            {pages.map((page) => (
              <Link
                key={page}
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                className="block text-center py-3 font-medium 
                         hover:bg-[var(--color-primary-light)]"
                onClick={toggleDrawer(false)}
              >
                {page}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="border-b border-[var(--color-secondary)]"></div>

          {/* Action Buttons */}
          <div className="flex justify-around p-4">
            <button
              key="phone"
              className="w-12 h-12 rounded-full bg-white text-black
                       shadow-md hover:bg-gray-100 hover:shadow-lg 
                       transition-all duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button
              key="email"
              className="w-12 h-12 rounded-full bg-white text-black
                       shadow-md hover:bg-gray-100 hover:shadow-lg 
                       transition-all duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={toggleDrawer(false)}
            className="absolute top-4 right-4 text-white 
                     hover:text-[var(--color-secondary)] transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Quiz", path: "/quiz" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Certifications", path: "/certifications" },
    { label: "Partners", path: "/partners" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 border-b ${
      darkMode 
        ? 'bg-[#0a0a0f] border-gray-800' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Section: Logo + Navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 mr-8">
              <img
                src="/images/logo.jpeg"
                alt="Quiz Cred Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <h3 className={`text-xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                QuizCred
              </h3>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `no-underline px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                        : darkMode
                        ? 'text-gray-300 hover:text-blue-400'
                        : 'text-gray-700 hover:text-blue-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Section: Login + Theme Toggle */}
          <div className="flex items-center gap-4">
            {/* Login Button */}
            <NavLink
              to="/login"
              className={`no-underline hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 ${
                darkMode
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg shadow-blue-500/25'
                  : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25'
              }`}
            >
              Login
            </NavLink>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                darkMode
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                darkMode
                  ? 'text-white hover:bg-gray-800'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden border-t ${
            darkMode ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `no-underline block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                        : darkMode
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              
              {/* Mobile Login Button */}
              <NavLink
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`no-underline block mt-4 mx-3 px-4 py-2 rounded-full text-center text-sm font-semibold text-white transition-all duration-200 ${
                  darkMode
                    ? 'bg-gradient-to-r from-blue-600 to-blue-800'
                    : 'bg-blue-600'
                }`}
              >
                Login
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-transparent backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">Yashamal Melaku</span>
          </Link>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-orange-500'
                    : 'text-black hover:text-orange-500'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg bg-white/95 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'text-orange-500 bg-gray-100'
                  : 'text-black hover:text-orange-500 hover:bg-blue-200'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
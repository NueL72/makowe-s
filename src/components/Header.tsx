import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    // { name: 'Portfolio', href: '#portfolio' },
    // { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}

      {/* Main Header */}
      <header className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-slate-900/20' 
          : 'bg-slate-900/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25 hover:scale-105 transition-transform duration-300 border border-orange-100">
                <img 
                  src="/makoelogo2-Photoroom.png" 
                  alt="BMHH Logo" 
                  className="w-14 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  BMHH
                </h1>
                <p className="text-xs text-white/70 font-medium -mt-1">Oil and Gas Logistics(T) LTD</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-5 py-3 text-white font-medium hover:text-orange-400 transition-all duration-300 group text-base"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                  {index === 0 && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full"></span>
                  )}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="#contact"
                className="relative px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl shadow-2xl border-t border-white/10">
            <nav className="px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 text-white hover:bg-white/10 hover:text-orange-400 rounded-xl transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="block w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
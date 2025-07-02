import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  const services = [
     'Wholesale Supply of Diesel (AGO)',
    'Wholesale Supply of Petrol (PMS)',
    'Bulk Fuel Transportation & Logistics',
    'Fuel Supply Contracts for Corporates and Institutions',
    'Depot-to-Site Delivery Coordination'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' }
  ];

  const supportInfo = [
    { icon: Phone, text: '+255759007977', href: 'tel:+255759007977'},
    { icon: Mail, text: 'Bmhhoillogistics@gmail.com', href: 'Bmhhoillogistics@gmail.com' },
    { icon: MapPin, text: 'Kurasini, Dar es salaam, Tanzania', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-full transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-yellow-400 to-orange-500 rounded-full transform translate-x-32 translate-y-32"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25 border border-orange-100">
                <img 
                  src="/makoelogo2-Photoroom.png" 
                  alt="BMHH Logo" 
                  className="w-14 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black">BMHH</h3>
                <p className="text-sm text-slate-400 -mt-1">Oil and Gas Logistics(T) LTD</p>
              </div>
            </div>
          
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 text-slate-400 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="space-y-3">
              {supportInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-3 text-slate-300 hover:text-orange-400 transition-colors group"
                >
                  <info.icon className="h-4 w-4 text-orange-400" />
                  <span className="text-sm group-hover:translate-x-1 transition-transform">{info.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-slate-300 hover:text-orange-400 transition-all duration-300 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-3 text-orange-400 group-hover:translate-x-1 transition-transform" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-orange-400 transition-all duration-300 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-3 text-orange-400 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Hours */}
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Business Hours</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Mon - Fri</span>
                  <span className="text-orange-400 font-semibold">8:00 AM - 09:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Saturday</span>
                  <span className="text-orange-400 font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Sunday</span>
                  <span className="text-red-400 font-semibold">Emergency Only</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Stay Updated</h4>
              <p className="text-slate-300 text-sm mb-4">
                Get the latest updates on our services and industry insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-slate-400 text-sm"
                />
                <button className="px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-r-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2025 BMHH Oil and Gas Logistics(T) LTD.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
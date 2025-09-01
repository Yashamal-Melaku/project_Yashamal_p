import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      href: '#',
      icon: Github,
      color: 'hover:bg-gray-700 dark:hover:bg-gray-600'
    },
    {
      name: 'TikTok',
      href: '#',
      icon: MessageCircle,
      color: 'hover:bg-black dark:hover:bg-gray-800'
    },
    {
      name: 'Telegram',
      href: '#',
      icon: Send,
      color: 'hover:bg-blue-500'
    },
    {
      name: 'Discord',
      href: '#',
      icon: MessageCircle,
      color: 'hover:bg-indigo-600'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a 
                  href="mailto:yashamalmelaku@gmail.com" 
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  yashamalmelaku@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a 
                  href="tel:+251949812341" 
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  +251-949-812341
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect With Me */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Me</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex flex-col items-center justify-center p-4 bg-gray-800 dark:bg-gray-700 text-white rounded-xl ${social.color} transition-all duration-300 group hover:scale-105`}
                    aria-label={`Connect on ${social.name}`}
                  >
                    <Icon className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs font-medium text-center">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Yashamal Melaku. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
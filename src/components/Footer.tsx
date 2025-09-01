import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Send, MusicIcon, Music2, TwitterIcon, InstagramIcon, FacebookIcon } from 'lucide-react';

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
      href: 'https://www.linkedin.com/in/yashamal-melaku',
      icon: Linkedin,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Yashamal-Melaku',
      icon: Github,
      color: 'hover:bg-gray-700 dark:hover:bg-gray-900'
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@tech_plus_s?_t=ZM-8vaYFFMPUDX&_r=1',
      icon: Music2,
      color: 'hover:bg-black dark:hover:bg-balck'
    },
    {
      name: 'Telegram',
      href: 'https://t.me/Yashamal_Melaku',
      icon: Send,
      color: 'hover:bg-blue-500'
    },{
      name: 'facebook',
      href: 'https://www.facebook.com/share/16LStpG6dD/?mibextid=wwXIfr',
      icon: FacebookIcon,
color: 'hover:bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800'
    },
    {
      name: 'Discord',
      href: '#',
      icon: MessageCircle,
      color: 'hover:bg-indigo-600'
    },
    {
      name: 'x',
      href: 'https://x.com/yashamalm?s=21',
      icon: TwitterIcon,
color: 'hover:bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/yashamal_m?igsh=MWwxdWlncmZoZjRlOQ%3D%3D&utm_source=qr',
      icon: InstagramIcon,
color: 'hover:bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500'
    },
  ];

  return (
    <footer className="text-white bg-gray-900 dark:bg-black">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a 
                  href="mailto:yashamalmelaku@gmail.com" 
                  className="text-gray-300 transition-colors duration-300 hover:text-orange-500"
                >
                  yashamalmelaku@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a 
                  href="tel:+251949812341" 
                  className="text-gray-300 transition-colors duration-300 hover:text-orange-500"
                >
                  +251-949-812341
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-300 transition-colors duration-300 hover:text-orange-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
<div className="md:col-span-2">
  <h3 className="mb-4 text-lg font-semibold text-white">Connect With Me</h3>
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
    {socialLinks.map((social, index) => {
      const Icon = social.icon;
      return (
        <a
          key={index}
          href={social.href}
          className={`flex flex-col items-center justify-center p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-xl ${social.color} transition-all duration-300 group hover:scale-105`}
          aria-label={`Connect on ${social.name}`}
        >
          <Icon className="w-5 h-5 mb-1.5 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-[0.65rem] font-medium text-center">{social.name}</span>
        </a>
      );
    })}
  </div>
</div>

        </div>

        <div className="pt-8 mt-8 text-center border-t border-gray-800 dark:border-gray-700">
          <p className="text-gray-400">&copy; 2024 Yashamal Melaku. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
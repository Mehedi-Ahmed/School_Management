
import React, { useState, useEffect } from 'react';
import { schoolInfo } from '../constants';
import { MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Notices', href: '#notices' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-3">
            <img className="h-12 w-12" src={schoolInfo.logo} alt="School Logo" />
            <div>
              <h1 className="text-xl font-bold text-sky-800 font-poppins">{schoolInfo.name_en}</h1>
              <h2 className="text-sm text-sky-600 font-noto-bengali">{schoolInfo.name_bn}</h2>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-700 hover:text-sky-600 font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#login" className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors shadow-sm">
              Login Portal
            </a>
          </nav>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-sky-600">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-700 hover:text-sky-600 font-medium">
                {link.name}
              </a>
            ))}
            <a href="#login" className="w-11/12 text-center px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors shadow-sm">
              Login Portal
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

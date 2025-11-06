
import React from 'react';
import { schoolInfo } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-800 text-sky-100 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {currentYear} {schoolInfo.name_en}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { schoolInfo } from '../constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-poppins drop-shadow-lg">{schoolInfo.name_en}</h1>
        <h2 className="text-2xl md:text-4xl font-bold font-noto-bengali mt-2 drop-shadow-lg">{schoolInfo.name_bn}</h2>
        <p className="mt-4 text-lg md:text-xl font-light tracking-wider drop-shadow-md">{schoolInfo.tagline}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#login" className="px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-all duration-300 shadow-lg transform hover:scale-105">
            Login Portal
          </a>
          <a href="#admission" className="px-8 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition-all duration-300 shadow-lg transform hover:scale-105">
            Apply for Admission
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

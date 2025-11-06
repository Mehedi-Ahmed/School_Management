
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PrincipalsSpeech from './components/PrincipalsSpeech';
import Notices from './components/Notices';
import Gallery from './components/Gallery';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-poppins text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <PrincipalsSpeech />
        <Notices />
        <Gallery />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;


import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import DiagnosticTool from './components/DiagnosticTool';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="services" className="py-20 bg-white">
          <Services />
        </section>

        <section id="diagnose" className="py-20 bg-slate-100">
          <DiagnosticTool />
        </section>

        <section id="testimonials" className="py-20 bg-white">
          <Testimonials />
        </section>

        <section id="contact" className="py-20 bg-slate-900 text-white">
          <Contact />
        </section>
      </main>
      <Footer />

      {/* Persistent Call Button for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a 
          href="tel:5557758622" 
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-95"
        >
          <i className="fa-solid fa-phone text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default App;

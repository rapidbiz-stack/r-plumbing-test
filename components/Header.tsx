
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">R</div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white md:text-blue-900'}`}>
            Plumbing
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-blue-600 font-medium transition-colors">Home</a>
          <a href="#services" className="hover:text-blue-600 font-medium transition-colors">Services</a>
          <a href="#diagnose" className="hover:text-blue-600 font-medium transition-colors">AI Help</a>
          <a href="#testimonials" className="hover:text-blue-600 font-medium transition-colors">Reviews</a>
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
          >
            Get a Quote
          </a>
        </nav>

        <button className="md:hidden text-2xl">
          <i className={`fa-solid fa-bars ${isScrolled ? 'text-slate-900' : 'text-white'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2070')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-blue-600/30">
            24/7 Emergency Service Available
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Expert Plumbing <br /> 
            <span className="text-blue-500">Done Right.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-xl">
            From leaky faucets to complete pipe replacements, R Plumbing delivers high-quality solutions for your home and business. Reliable, affordable, and local.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:5557758622" 
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20"
            >
              <i className="fa-solid fa-phone"></i>
              (555) R-PLUMB
            </a>
            <a 
              href="#services" 
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-white/20 transition-all"
            >
              Explore Services
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full border-2 border-slate-900"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 mb-1">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-slate-400 text-sm">Trusted by 2,000+ local residents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

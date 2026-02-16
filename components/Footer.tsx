
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg">R</div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Plumbing</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8">
              Providing professional, reliable, and high-quality plumbing services for our local community since 1998. Your trust is our foundation.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                  <i className={`fa-brands fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-sm">Quick Links</h5>
            <ul className="space-y-4">
              {['Home', 'Services', 'AI Diagnostician', 'Customer Reviews', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-sm">Our Services</h5>
            <ul className="space-y-4">
              {['Pipe Repair', 'Water Heaters', 'Drain Cleaning', 'Sewer Lines', 'Faucet Install'].map(service => (
                <li key={service}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-sm">Operating Hours</h5>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-slate-500">Mon - Fri</span>
                <span className="text-slate-900 font-semibold">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-500">Saturday</span>
                <span className="text-slate-900 font-semibold">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-500">Sunday</span>
                <span className="text-blue-600 font-bold uppercase text-sm">Emergency Only</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
              <p className="text-blue-700 text-sm font-bold flex items-center gap-2">
                <i className="fa-solid fa-clock-rotate-left"></i> 24/7 Emergency Line
              </p>
              <p className="text-blue-600 font-black text-xl mt-1">(555) 775-8622</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 font-medium">
          <p>© 2024 R Plumbing Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">License #PL-88219</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

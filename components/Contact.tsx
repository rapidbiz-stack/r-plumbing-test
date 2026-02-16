
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Contact Us</h2>
          <h3 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight">
            Ready to fix that <br /> problem?
          </h3>
          
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="bg-blue-600/20 text-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Phone Number</h4>
                <p className="text-slate-400 mb-2">Call us for immediate 24/7 assistance</p>
                <a href="tel:5557758622" className="text-2xl font-bold text-blue-500 hover:underline tracking-tight">
                  (555) 775-8622
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-blue-600/20 text-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Email Address</h4>
                <p className="text-slate-400 mb-2">For quotes and general inquiries</p>
                <a href="mailto:service@rplumbing.com" className="text-xl font-semibold text-slate-100 hover:text-blue-500 transition-colors">
                  service@rplumbing.com
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-blue-600/20 text-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Service Area</h4>
                <p className="text-slate-400">Serving the Greater Metropolitan Area, including suburbs and surrounding counties.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-blue-900/40">
          <h4 className="text-slate-900 text-3xl font-bold mb-8">Send a Message</h4>
          
          {submitted ? (
            <div className="bg-green-50 text-green-700 p-8 rounded-3xl text-center border border-green-100">
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <i className="fa-solid fa-check"></i>
              </div>
              <h5 className="text-xl font-bold mb-2">Message Sent Successfully!</h5>
              <p>We'll get back to you within 30 minutes during business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-2">Full Name</label>
                  <input type="text" required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-slate-900" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-2">Phone Number</label>
                  <input type="tel" required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-slate-900" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-2">Service Needed</label>
                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-slate-900">
                  <option>Emergency Repair</option>
                  <option>Leak Detection</option>
                  <option>Water Heater</option>
                  <option>Drain Cleaning</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-2">Message</label>
                <textarea required className="w-full h-32 px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-slate-900 resize-none" placeholder="Briefly describe what you need help with..."></textarea>
              </div>
              <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

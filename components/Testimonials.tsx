
import React from 'react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: "R Plumbing saved my basement! They arrived within 30 minutes of my call for a burst pipe and fixed it expertly. Highly recommend!",
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Restaurant Manager',
    content: "Consistent, reliable, and professional. We use R Plumbing for all our kitchen maintenance. They understand the urgency of commercial work.",
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Property Manager',
    content: "Best experience with a plumbing company yet. Clear communication, fair pricing, and they left the site spotless.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-2">Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Loved By The <br /> Community
          </h3>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
          <div className="text-4xl font-black text-slate-900">4.9</div>
          <div className="h-10 w-[1px] bg-slate-200"></div>
          <div>
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map(i => <i key={i} className="fa-solid fa-star text-sm"></i>)}
            </div>
            <div className="text-slate-500 text-xs font-bold mt-1">BASED ON 250+ GOOGLE REVIEWS</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
            <div className="absolute -top-4 right-10 text-6xl text-blue-100 group-hover:text-blue-50 transition-colors">
              <i className="fa-solid fa-quote-right"></i>
            </div>
            
            <div className="flex text-yellow-400 mb-6">
              {[1, 2, 3, 4, 5].map(i => <i key={i} className="fa-solid fa-star"></i>)}
            </div>

            <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
              "{review.content}"
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <img 
                src={`https://picsum.photos/seed/${review.id + 50}/100/100`} 
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h5 className="font-bold text-slate-900">{review.name}</h5>
                <p className="text-slate-500 text-sm">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

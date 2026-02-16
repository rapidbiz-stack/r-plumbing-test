
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Emergency Repairs',
    description: 'Burst pipes, major leaks, or overflowing toilets? We offer rapid response 24/7.',
    icon: 'fa-solid fa-truck-fast'
  },
  {
    id: '2',
    title: 'Water Heaters',
    description: 'Installation, repair, and maintenance for traditional and tankless water heaters.',
    icon: 'fa-solid fa-temperature-arrow-up'
  },
  {
    id: '3',
    title: 'Drain Cleaning',
    description: 'Stubborn clogs? We use professional-grade equipment to clear lines quickly.',
    icon: 'fa-solid fa-faucet-drip'
  },
  {
    id: '4',
    title: 'Pipe Replacement',
    description: 'Modern solutions for aging pipes. Full repiping services with minimal disruption.',
    icon: 'fa-solid fa-wrench'
  },
  {
    id: '5',
    title: 'Leak Detection',
    description: 'Cutting-edge sonar technology to find hidden leaks before they cause damage.',
    icon: 'fa-solid fa-droplet-slash'
  },
  {
    id: '6',
    title: 'Commercial Plumbing',
    description: 'Maintenance and installations tailored for business facilities and restaurants.',
    icon: 'fa-solid fa-building'
  }
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-2">Our Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Plumbing Solutions For You</h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          We combine decades of experience with modern technology to provide the most efficient plumbing services in the region.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
          >
            <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <i className={service.icon}></i>
            </div>
            <h4 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h4>
            <p className="text-slate-600 leading-relaxed mb-6">
              {service.description}
            </p>
            <a href="#contact" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

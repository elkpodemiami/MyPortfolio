import React from 'react';
import { services } from '../data/services.js';

const Services = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Services</h1>
      <p>
        I offer a wide range of services, including:
      </p>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className='service'>
            <img src={service.image} alt={service.title} className='service__image' />
            <div className='service__info'>
              <h2 className='service__title'>{service.title}</h2>
              <p className='service__description'>{service.description}</p>
              <p className='service__price'>Price: {service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

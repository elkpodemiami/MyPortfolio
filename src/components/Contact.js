import React from 'react'
import { contact } from '../data/contact' 
import { secret } from '../data/secret'

const Contact = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contact</h1>
      <div className='contact-container'>
        {/* Form Section */}
        <form className='contact-form' action="mailto:aguiarlucasn@gmail.com" method="POST">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <input type="submit" value="Send" />
        </form>
        
        {/* Contact Information and Map Section */}
        <div className='contact-info'>
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> {contact.address}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          {/* You can add more contact information fields here */}
          
          {/* Map */}
          <div className='map'>
            <iframe
              title="Map"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=${secret.google_maps_api_key}&q=${encodeURIComponent(contact.address)}`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

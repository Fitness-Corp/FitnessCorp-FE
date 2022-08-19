import React from 'react';
import { BsClock, BsFacebook, BsInstagram, BsPhone, BsTwitter, BsYoutube } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for checking out Fitness Corp!');
    e.target.reset();
  };

  return (
    <div className='footer-section'>
      <div className='title-icons'>
        <h3>Fitness Corp</h3>
        <span>
          <BsInstagram />
        </span>
        <span>
          <BsFacebook />
        </span>
        <span>
          <BsTwitter />
        </span>
        <span>
          <BsYoutube />
        </span>
      </div>

      <div className='contact-section'>
        <span><BsPhone /></span>
        <h3>Contact</h3>
        <p>070-948-575 <br />
          info@example.com
        </p>
      </div>

      <div className='contact-section'>
        <span><BsClock /></span>
        <h3>Hours</h3>
        <p>
          Mon-Sat: 7:00am - 10:00pm <br />
          Sun: 7:00am - 5:00pm <br />
        </p>
      </div>

      <div className='contact-section'>
        <span><GoLocation /></span>
        <h3>Location</h3>
        <p>
          572 Flex Street<br />
          Los Angeles, CA 90001<br />
        </p>
      </div>

      <div className='subscription'>
        <h4>SUBSCRIBE</h4>
        <p>Receive messages for classes, events and everything else!</p>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Subscribe Now'
            type='email'
            name='email'
          />
          <button>SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
}

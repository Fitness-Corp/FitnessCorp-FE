import React from 'react';
import { BsClock, BsFacebook, BsInstagram, BsPhone, BsTwitter, BsYoutube } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

export default function Footer() {
  return (
    <div>
      <div className='title-icons'>
        <h3>Fitness Corp</h3>
        <span>
          <BsInstagram />
          <BsFacebook />
          <BsTwitter />
          <BsYoutube />
        </span>
      </div>

      <div>
        <BsPhone />
        <p>Contact</p>
        <p>070-948-575</p>
        <p>info@example.com</p>
      </div>

      <div>
        <BsClock />
        <p>Hours</p>
        <p>
          Mon-Sat: 7:00am - 10:00pm <br />
          Sun: 7:00am - 5:00pm <br />
        </p>
      </div>

      <div>
        <GoLocation />
        <p>Location</p>
        <p>
          572 Flex Street<br />
          Los Angeles, CA 90001<br />
        </p>
      </div>

      <div className='subscription'>
        <h4>Subscribe to receive messages for classes, events and everything else!</h4>
        <form>
          <input
            type='email'
            name='email'
          />
        </form>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

import React from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function IconCards({ icon }) {
  return (
    <div className='iconCard'>
      <AnimationOnScroll animateIn='animate__fadeInLeftBig'>
        <span>{icon.icon}</span>
      </AnimationOnScroll>
      <p>{icon.title}</p>
    </div>
  );
}

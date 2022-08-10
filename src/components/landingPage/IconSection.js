import React from 'react';
import icons from '../../data/icons';
import IconCards from './IconCards';

export default function IconSection() {
  return (
    <div>
      {
        icons.map((icon) => (
          <IconCards icon={icon} key={icon.title} />
        ))
      }
    </div>
  );
}

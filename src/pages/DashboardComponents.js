import React from 'react';
import CircularProgress from './CircularProgress';

export default function DashboardComponents() {
  return (
    <div className='progress-component'>
      <div className='weekly-progress'>
        <CircularProgress
          size={100}
          strokeWidth={10}
          percentage={42}
          color="blue"
        />
        <h4>Weekly Progress</h4>
        <span>42% visited this week</span>
      </div>
      <div className='weekly-progress'>
        <CircularProgress
          size={100}
          strokeWidth={10}
          percentage={67}
          color="red"
        />
        <h4>Calories Burned During Workout</h4>
        <span>67 cal burned</span>
      </div>
      <div className='weekly-progress'>
        <CircularProgress
          size={100}
          strokeWidth={10}
          percentage={50}
          color="green"
        />
        <h4>Health and Diet</h4>
        <span>50% Increase in Greens</span>
      </div>
      <div className='weekly-progress'>
        <CircularProgress
          size={100}
          strokeWidth={10}
          percentage={90}
          color="orange"
        />
        <h4>Sleeping Potency</h4>
        <span>7-8 Hours</span>
      </div>
    </div>
  );
}
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


export default function CalendarDashboard() {
  const utc = new Date().toISOString().slice(0, 10);
  return (
    <div className='calendar'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Yoga Class', date: utc },
          { title: 'Boxing Class', date: '2022-08-09' }
        ]}
      />
    </div>
  );
}

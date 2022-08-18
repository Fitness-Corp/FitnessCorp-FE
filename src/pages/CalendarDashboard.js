import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function CalendarDashboard() {
  const utc = new Date().toISOString().slice(0, 10);
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'event 1', date: utc },
          { title: 'event 2', date: '2022-08-09' }
        ]}
      />
    </div>
  );
}

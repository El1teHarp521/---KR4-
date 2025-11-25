import React from 'react';
import Day from './Day';
import './Calendar.css';

const Calendar = ({ currentDate, moods, onDayClick }) => {
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);

  const days = [];
  
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    days.push(date);
  }

  return (
    <div className="calendar">
      <div className="calendar-grid">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
          <div key={day} className="day-name">{day}</div>
        ))}
        {days.map((date, index) => (
          <Day 
            key={index} 
            date={date} 
            mood={date ? moods[date.toISOString().split('T')[0]] : null}
            onClick={() => date && onDayClick(date)}
            isToday={date && date.toDateString() === new Date().toDateString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
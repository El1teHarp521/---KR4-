import React from 'react';
import './Day.css';

const Day = ({ date, mood, onClick, isToday }) => {
  if (!date) {
    return <div className="day empty"></div>;
  }

  return (
    <div 
      className={`day ${mood ? 'has-mood' : ''} ${isToday ? 'today' : ''}`} 
      onClick={onClick}
    >
      <span className="date-number">{date.getDate()}</span>
      {mood && <span className="mood-emoji">{mood}</span>}
      {isToday && <div className="today-indicator"></div>}
    </div>
  );
};

export default Day;
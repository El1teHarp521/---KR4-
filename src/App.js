import React, { useState, useEffect } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import MoodPicker from './components/MoodPicker';

function App() {
  const [moods, setMoods] = useState(() => {
    const savedMoods = localStorage.getItem('moodDiary');
    return savedMoods ? JSON.parse(savedMoods) : {};
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    localStorage.setItem('moodDiary', JSON.stringify(moods));
  }, [moods]);

  const handleMoodSelect = (mood) => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    setMoods(prevMoods => ({
      ...prevMoods,
      [dateKey]: mood
    }));
    setShowPicker(false);
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setShowPicker(true);
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + direction);
      return newDate;
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📅 Мини-дневник настроения</h1>
        <p>Выберите день и отметьте своё настроение!</p>
      </header>
      <main className="app-main">
        <div className="calendar-container">
          <div className="calendar-navigation">
            <button 
              className="nav-button"
              onClick={() => navigateMonth(-1)}
            >
              ← Предыдущий
            </button>
            <h2 className="current-month">
              {currentDate.toLocaleString('ru-RU', { month: 'long', year: 'numeric' })}
            </h2>
            <button 
              className="nav-button"
              onClick={() => navigateMonth(1)}
            >
              Следующий →
            </button>
          </div>
          <Calendar 
            currentDate={currentDate}
            moods={moods}
            onDayClick={handleDayClick}
          />
        </div>
        {showPicker && (
          <MoodPicker 
            onSelect={handleMoodSelect}
            onClose={() => setShowPicker(false)}
            selectedMood={moods[selectedDate.toISOString().split('T')[0]]}
          />
        )}
      </main>
    </div>
  );
}

export default App;
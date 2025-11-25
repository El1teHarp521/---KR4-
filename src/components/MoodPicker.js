import React from 'react';
import './MoodPicker.css';

const MoodPicker = ({ onSelect, onClose, selectedMood }) => {
  const moodOptions = [
    { emoji: '😊', label: 'Счастливый' },
    { emoji: '😂', label: 'Веселый' },
    { emoji: '😍', label: 'Влюбленный' },
    { emoji: '🥰', label: 'Нежный' },
    { emoji: '😎', label: 'Крутой' },
    { emoji: '😢', label: 'Грустный' },
    { emoji: '😠', label: 'Злой' },
    { emoji: '😴', label: 'Сонный' },
    { emoji: '🤒', label: 'Больной' },
    { emoji: '😐', label: 'Нейтральный' },
    { emoji: '🤔', label: 'Задумчивый' },
    { emoji: '🥳', label: 'Праздничный' }
  ];

  return (
    <div className="mood-picker-overlay">
      <div className="mood-picker">
        <div className="mood-picker-header">
          <h3>Какое у вас сегодня настроение?</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="mood-options">
          {moodOptions.map(({ emoji, label }) => (
            <button
              key={emoji}
              className={`mood-option ${selectedMood === emoji ? 'selected' : ''}`}
              onClick={() => onSelect(emoji)}
              title={label}
            >
              <span className="emoji">{emoji}</span>
              <span className="label">{label}</span>
            </button>
          ))}
        </div>
        <div className="mood-picker-footer">
          <button className="clear-button" onClick={() => onSelect('')}>
            Очистить настроение
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoodPicker;
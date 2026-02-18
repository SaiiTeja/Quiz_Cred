import React from 'react';
import './Streak.css';

function StreakDisplay({ streak }) {
  const getStreakLevel = (days) => {
    if (days >= 30) return { level: 'Legendary', color: 'streak-legendary' };
    if (days >= 21) return { level: 'Epic', color: 'streak-epic' };
    if (days >= 14) return { level: 'Awesome', color: 'streak-awesome' };
    if (days >= 7) return { level: 'Great', color: 'streak-great' };
    if (days >= 3) return { level: 'Good', color: 'streak-good' };
    return { level: 'Getting Started', color: 'streak-start' };
  };

  const streakLevel = getStreakLevel(streak);

  return (
    <div className={`streak-display ${streakLevel.color}`}>
      <div className="streak-container">
        <div className="streak-icon">🔥</div>
        <div className="streak-content">
          <h3 className="streak-number">{streak}</h3>
          <p className="streak-label">Day Streak</p>
        </div>
        <div className="streak-level">{streakLevel.level}</div>
      </div>
      <div className="streak-progress">
        <div className="streak-bar">
          <div 
            className="streak-fill" 
            style={{ width: `${Math.min((streak / 30) * 100, 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default StreakDisplay;
import React, { useState, useEffect } from 'react';
import { statsLogic } from '../../utils/Stats_Logic';

function StatsSection() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch stats from logic
    const statsData = statsLogic.getStats();
    setStats(statsData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="stats-loading">Loading stats...</div>;
  }

  if (!stats) {
    return <div className="stats-error">Error loading stats</div>;
  }

  const performanceLevel = statsLogic.getPerformanceLevel(stats.averageScore);
  const rankTier = statsLogic.getRankTier(stats.rank);

  return (
    <div className="stats-section">
      <div className="stat-card">
        <div className="stat-icon quiz-icon">📝</div>
        <div className="stat-content">
          <p className="stat-label">Quizzes Taken</p>
          <h3 className="stat-value">{stats.quizzesTaken}</h3>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon score-icon">⭐</div>
        <div className="stat-content">
          <p className="stat-label">Average Score</p>
          <h3 className="stat-value">{stats.averageScore}%</h3>
          <p className="stat-performance">{performanceLevel}</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon accuracy-icon">🎯</div>
        <div className="stat-content">
          <p className="stat-label">Accuracy</p>
          <h3 className="stat-value">{stats.accuracy}%</h3>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon points-icon">🏆</div>
        <div className="stat-content">
          <p className="stat-label">Total Points</p>
          <h3 className="stat-value">{statsLogic.formatNumber(stats.totalPoints)}</h3>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon rank-icon">{rankTier.icon}</div>
        <div className="stat-content">
          <p className="stat-label">Current Rank</p>
          <h3 className="stat-value">#{stats.rank}</h3>
          <p className="stat-tier">{rankTier.tier}</p>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
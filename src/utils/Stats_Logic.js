export const statsLogic = {

  getStats: () => {
    return {
      quizzesTaken: 7,
      averageScore: 77,
      accuracy: 77,
      totalPoints: 7777,
      rank: 777,
    };
  },

  calculateAverageScore: (quizzes) => {
    if (quizzes.length === 0) return 0;
    const total = quizzes.reduce((sum, quiz) => sum + quiz.score, 0);
    return Math.round(total / quizzes.length);
  },

  calculateAccuracy: (correctAnswers, totalAnswers) => {
    if (totalAnswers === 0) return 0;
    return Math.round((correctAnswers / totalAnswers) * 100);
  },

  calculateTotalPoints: (quizzes) => {
    return quizzes.reduce((total, quiz) => total + quiz.points, 0);
  },

  getUserRank: (totalPoints, allUsersPoints = []) => {
    if (allUsersPoints.length === 0) return 1;
    const higherScores = allUsersPoints.filter((points) => points > totalPoints);
    return higherScores.length + 1;
  },

  getQuizzesCount: (quizzes) => {
    return quizzes ? quizzes.length : 0;
  },

  formatNumber: (number) => {
    return number.toLocaleString();
  },

  getProgressPercentage: (current, target) => {
    if (target === 0) return 0;
    return Math.round((current / target) * 100);
  },

  getPerformanceLevel: (averageScore) => {
    if (averageScore >= 90) return 'Excellent';
    if (averageScore >= 80) return 'Very Good';
    if (averageScore >= 70) return 'Good';
    if (averageScore >= 60) return 'Fair';
    return 'Needs Improvement';
  },

  getRankTier: (rank) => {
    if (rank <= 10) return { tier: 'Platinum', icon: '👑', color: '#fbbf24' };
    if (rank <= 50) return { tier: 'Gold', icon: '🥇', color: '#f59e0b' };
    if (rank <= 100) return { tier: 'Silver', icon: '🥈', color: '#d1d5db' };
    if (rank <= 500) return { tier: 'Bronze', icon: '🥉', color: '#92400e' };
    return { tier: 'Standard', icon: '⭐', color: '#818cf8' };
  },

  getStatsComparison: (currentStats, previousStats) => {
    return {
      quizzesChange: currentStats.quizzesTaken - previousStats.quizzesTaken,
      scoreChange: currentStats.averageScore - previousStats.averageScore,
      accuracyChange: currentStats.accuracy - previousStats.accuracy,
      pointsChange: currentStats.totalPoints - previousStats.totalPoints,
      rankChange: previousStats.rank - currentStats.rank, // Lower rank is better
    };
  },

  getStatsSummary: (stats) => {
    return {
      quizzesTaken: stats.quizzesTaken,
      averageScore: stats.averageScore,
      accuracy: stats.accuracy,
      totalPoints: stats.totalPoints,
      currentRank: stats.rank,
      performanceLevel: this.getPerformanceLevel(stats.averageScore),
      rankTier: this.getRankTier(stats.rank),
    };
  },

  getAchievementProgress: (achievements) => {
    return {
      total: achievements.length,
      unlocked: achievements.filter((a) => a.unlockedDate).length,
      locked: achievements.filter((a) => !a.unlockedDate).length,
      percentage: Math.round(
        (achievements.filter((a) => a.unlockedDate).length / achievements.length) * 100
      ),
    };
  },

  validateStatsData: (stats) => {
    const errors = [];

    if (typeof stats.quizzesTaken !== 'number' || stats.quizzesTaken < 0) {
      errors.push('Invalid quizzes taken value');
    }

    if (typeof stats.averageScore !== 'number' || stats.averageScore < 0 || stats.averageScore > 100) {
      errors.push('Invalid average score value');
    }

    if (typeof stats.accuracy !== 'number' || stats.accuracy < 0 || stats.accuracy > 100) {
      errors.push('Invalid accuracy value');
    }

    if (typeof stats.totalPoints !== 'number' || stats.totalPoints < 0) {
      errors.push('Invalid total points value');
    }

    if (typeof stats.rank !== 'number' || stats.rank < 1) {
      errors.push('Invalid rank value');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  },

  getStatsTrending: (currentScore, previousScore) => {
    const difference = currentScore - previousScore;
    if (difference > 0) return { trend: 'up', icon: '📈', color: '#10b981' };
    if (difference < 0) return { trend: 'down', icon: '📉', color: '#ef4444' };
    return { trend: 'neutral', icon: '➡️', color: '#818cf8' };
  },

  getPointsForNextRank: (currentPoints, nextRankThreshold) => {
    const pointsNeeded = nextRankThreshold - currentPoints;
    return Math.max(0, pointsNeeded);
  },

  getLearningInsights: (stats) => {
    const insights = [];

    if (stats.averageScore >= 90) {
      insights.push('You are performing exceptionally well! Keep it up! 🎉');
    }

    if (stats.quizzesTaken >= 20) {
      insights.push(`You've taken ${stats.quizzesTaken} quizzes. Great dedication! 💪`);
    }

    if (stats.rank <= 100) {
      insights.push(`You're in the top 100! You're among the best learners. 🏆`);
    }

    if (stats.accuracy >= 85) {
      insights.push(`Your accuracy is ${stats.accuracy}%! Excellent precision! 🎯`);
    }

    if (stats.averageScore < 70) {
      insights.push('Focus on improving your scores. You can do it! 💡');
    }

    return insights;
  },
};
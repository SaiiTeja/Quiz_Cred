// Sample Data for the Student Dashboard [cite: 52]
export const stats = {
  totalQuizzes: 7,
  avgScore: 77,
  accuracy: 77,
  currentStreak: 7,
  overallRank: 77,
  aiInsightMessage: "Because your Cybersecurity Basics accuracy is low (30%), we recommend practicing basic network protocols first.",
};

export const chartDataProgress = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [{
    label: 'Weekly Performance Improvement',
    data: [65, 72, 68, 84],
    borderColor: '#0d6efd',
    backgroundColor: 'rgba(13, 110, 253, 0.1)',
    fill: true,
    tension: 0.4,
  }]
};

export const chartDataTopics = {
  labels: ['Networking', 'SQL', 'Cybersecurity', 'Coding'],
  datasets: [{
    label: 'Accuracy (%)',
    data: [40, 75, 30, 90],
    backgroundColor: ['#ffc107', '#198754', '#dc3545', '#0dcaf0'],
  }]
};

export const chartDataStrength = {
  labels: ['Networking', 'CyberSecurity'],
  datasets: [{
    data: [10, 3],
    backgroundColor: ['#198754', '#dc3545'],
  }]
};

export const recommendations = [
  { title: "Networking Basics - Level 1", topic: "Networking" },
  { title: "SQL Advanced Queries", topic: "SQL" },
  { title: "Introduction to Cryptography", topic: "Cybersecurity" },
];
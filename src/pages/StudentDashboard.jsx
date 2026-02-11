import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/studentDashboard.css';
import { 
  chartDataProgress, 
  chartDataTopics, 
  chartDataStrength, 
  recommendations, 
  stats 
} from '../utils/student_dash_logic';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const StudentDashboard = () => {
  return (
    <div className="dashboard-container min-vh-100">
      <nav className="navbar navbar-dark bg-dark-custom px-4 shadow-sm mb-0">        
        <div className="container-fluid">
          <span className="navbar-brand fw-bold gradient-text">QUIZCRED</span>
          <div className="d-flex align-items-center">
            <span className="badge bg-warning-custom text-dark p-2 me-3">
              Streak: {stats.currentStreak} Days
            </span>
            <div className="avatar">RS</div>
          </div>
        </div>
      </nav>

      <div className="container-fluid pb-5">
        <div className="row mb-4 mt-5">
          <div className="col-12">
            <h2 className="fw-bold dashboard-welcome">Welcome back, Rithish!</h2>
            <p className="text-muted dashboard-subtitle">Here is your skill-based assessment summary.</p>
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="stat-card p-3 shadow-sm border-0 rounded-4 bg-gradient-1">
              <h6 className="text-uppercase stat-label mb-1">Quizzes Attempted</h6>
              <h3 className="fw-bold stat-value">{stats.totalQuizzes}</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card p-3 shadow-sm border-0 rounded-4 bg-gradient-2">
              <h6 className="text-uppercase stat-label mb-1">Average Score</h6>
              <h3 className="fw-bold stat-value">{stats.avgScore}%</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card p-3 shadow-sm border-0 rounded-4 bg-gradient-3">
              <h6 className="text-uppercase stat-label mb-1">Accuracy</h6>
              <h3 className="fw-bold stat-value">{stats.accuracy}%</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card p-3 shadow-sm border-0 rounded-4 bg-gradient-4">
              <h6 className="text-uppercase stat-label mb-1">Overall Rank</h6>
              <h3 className="fw-bold stat-value">#{stats.overallRank}</h3>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 chart-card">
              <h5 className="fw-bold mb-4 chart-title">Performance Over Time</h5>
              <div className="chart-container">
                <Line data={chartDataProgress} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4 chart-card">
              <h5 className="fw-bold mb-4 chart-title">Topic-Wise Accuracy</h5>
              <div className="chart-container">
                <Bar data={chartDataTopics} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 ai-card shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-3 ai-title">AI Insights</h5>
              <div className="ai-message p-3 rounded-3 mb-3">
                <p className="mb-0 small ai-text">{stats.aiInsightMessage}</p>
              </div>
              <div className="chart-container-sm mb-3">
                <Pie data={chartDataStrength} />
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4 recommendations-card">
              <h5 className="fw-bold mb-3 rec-title">Recommended Quizzes</h5>
              <div className="list-group list-group-flush">
                {recommendations.map((quiz, idx) => (
                  <div key={idx} className="list-group-item px-0 border-0 mb-2 rec-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-0 fw-bold rec-item-title">{quiz.title}</h6>
                        <small className="text-muted rec-item-topic">Topic: {quiz.topic}</small>
                      </div>
                      <button className="btn btn-primary-custom btn-sm rounded-pill px-3">Start</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
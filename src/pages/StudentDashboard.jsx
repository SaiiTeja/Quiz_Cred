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
} from '../utils/Student_Dash_logic';

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
import { Link } from 'react-router-dom';
import StatsSection from '../component/Stats/Stats';
import StreakDisplay from '../component/Streak/Streak';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const StudentDashboard = () => {
  return (
    <div className="dashboard-container min-vh-100">
      <nav className="navbar navbar-dark bg-dark-custom px-4 shadow-sm mb-0">        
        <div className="container-fluid">
          <span className="navbar-brand fw-bold gradient-text">QUIZCRED</span>
          <div className="d-flex align-items-center">

              <Link to="/StudentProfile" className='btn avatar'>RS</Link>
          </div>
        </div>
      </nav>

      <div className="container-fluid pb-5">
        <div className="row mb-4 mt-5">
          <div className="col-12">
            <h2 className="fw-bold dashboard-welcome">Welcome back, Rithish S R!</h2>
            <p className="text-muted dashboard-subtitle">Here is your skill-based assessment summary.</p>
          </div>
            <span className="badge bg-warning-custom text-dark p-2 me-3">
              <StreakDisplay streak={stats.currentStreak} />
            </span>
        </div>

        <div className="row g-3 mb-4">
          <StatsSection />
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
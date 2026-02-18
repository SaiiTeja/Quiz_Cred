import React, { useState, useEffect } from 'react';
import { studentProfileLogic } from '../utils/Student_Profile_Logic.js';
import '../styles/StudentProfile.css';
import StatsSection from '../component/Stats/Stats.jsx';

function StudentProfile() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = studentProfileLogic.getUserProfile();
    setProfileData(data);
    setLoading(false);
  }, []);

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
  };

  const handleDownloadCertificate = (certId) => {
    studentProfileLogic.downloadCertificate(certId);
  };

  if (loading) {
    return <div className="student-profile-container">Loading...</div>;
  }

  if (!profileData) {
    return <div className="student-profile-container">Error loading profile</div>;
  }

  return (
    <div className="student-profile-container">
      {/* Profile Header Section */}
      <div className="profile-header-section">
        <div className="profile-card">
          <div className="profile-avatar">
            <img src={profileData.avatar} alt={profileData.name} />
          </div>

          <div className="profile-info">
            <h1 className="profile-name">{profileData.name}</h1>
            <p className="profile-email">{profileData.email}</p>
            <p className="profile-joindate">Joined {profileData.joinDate}</p>
          </div>

          <button className="btn btn-edit" onClick={handleEditProfile}>
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Tabs Section */}
      <div className="tabs-container">
        

        {/* Overview Tab */}
       
          <div className="tab-content overview-content">
            <div className="overview-grid">
              {/* Recent Activity */}
              <div className="overview-card">
                <h3 className="card-title">Recent Activity</h3>
                <div className="activity-list">
                  {profileData.recentActivity.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className="activity-icon">{activity.icon}</div>
                      <div className="activity-details">
                        <p className="activity-name">{activity.title}</p>
                        <p className="activity-time">{activity.date}</p>
                      </div>
                      <span className="activity-score">{activity.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="overview-card">
                <h3 className="card-title">Skills Progress</h3>
                <div className="skills-list">
                  {profileData.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <p className="skill-name">{skill.name}</p>
                        <span className="skill-percentage">{skill.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="overview-card full-width">
                <h3 className="card-title">Achievements</h3>
                <div className="achievements-grid">
                  {profileData.achievements.map((achievement, index) => (
                    <div key={index} className="achievement-badge">
                      <div className="achievement-icon">{achievement.icon}</div>
                      <p className="achievement-name">{achievement.name}</p>
                      <p className="achievement-date">{achievement.unlockedDate}</p>
                    </div>
                  ))}
                </div>
              </div>
                      
                      {/* Certificates Tab */}
            <div className="overview-card full-width">
                    <h3 className="card-title">Certificates</h3>
                <div className="certificates-grid">
                {profileData.certificates.length > 0 ? (
                    profileData.certificates.map((cert, index) => (
                    <div key={index} className="certificate-card">
                        <div className="cert-header">
                        <h4 className="cert-title">{cert.title}</h4>
                        <span className="cert-date">{cert.dateEarned}</span>
                        </div>
                        <p className="cert-description">{cert.description}</p>
                        <div className="cert-footer">
                        <span className="cert-id">ID: {cert.id}</span>
                        <button
                            className="btn btn-download"
                            onClick={() => handleDownloadCertificate(cert.id)}
                        >
                            Download
                        </button>
                        </div>
                    </div>
                    ))
                ) : (
                    <p className="no-data">No certificates yet. Keep learning!</p>
                )}
                </div>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default StudentProfile;
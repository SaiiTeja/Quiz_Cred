export const studentProfileLogic = {

  getUserProfile: () => {
    return {
      name: 'Rithish S R',
      email: 'RithishSR@gmail.com',
      avatar: 'https://tse1.mm.bing.net/th/id/OIP.JpXrtisuBJsTVxnfB8WA0wHaE-?rs=1&pid=ImgDetMain&o=7&rm=3',
      joinDate: 'January 2026',
      bio: 'Passionate learner focused on web development and data structures.',

      // Recent Activity
      recentActivity: [
        {
          icon: '✅',
          title: 'Completed JavaScript Fundamentals',
          date: '2 days ago',
          score: '92%',
        },
        {
          icon: '✅',
          title: 'Completed React Basics',
          date: '5 days ago',
          score: '88%',
        },
        {
          icon: '⭐',
          title: 'Earned "Quick Learner" Badge',
          date: '1 week ago',
          score: 'Badge',
        },
        {
          icon: '✅',
          title: 'Completed Data Structures',
          date: '2 weeks ago',
          score: '85%',
        },
        {
          icon: '🏆',
          title: 'Ranked in Top 200',
          date: '3 weeks ago',
          score: 'Rank #145',
        },
      ],

      // Skills
      skills: [
        { name: 'JavaScript', progress: 85 },
        { name: 'React', progress: 72 },
        { name: 'Data Structures', progress: 78 },
        { name: 'CSS/HTML', progress: 90 },
        { name: 'Node.js', progress: 65 },
        { name: 'SQL', progress: 80 },
      ],

      // Achievements
      achievements: [
        { icon: '⭐', name: 'Quick Learner', unlockedDate: 'Jan 2024' },
        { icon: '🔥', name: 'Week Warrior', unlockedDate: 'Jan 2024' },
        { icon: '🎯', name: 'Perfect Score', unlockedDate: 'Feb 2024' },
        { icon: '🚀', name: 'Rising Star', unlockedDate: 'Feb 2024' },
        { icon: '👑', name: 'Knowledge King', unlockedDate: 'Mar 2024' },
        { icon: '💎', name: 'Premium Member', unlockedDate: 'Mar 2024' },
      ],

      // Certificates
      certificates: [
        {
          id: 'CERT-001',
          title: 'JavaScript Fundamentals Certification',
          description: 'Certified in JavaScript ES6+ fundamentals and best practices',
          dateEarned: 'February 15, 2024',
        },
        {
          id: 'CERT-002',
          title: 'React Web Development Certification',
          description: 'Certified in React development with hooks and state management',
          dateEarned: 'February 20, 2024',
        },
        {
          id: 'CERT-003',
          title: 'Data Structures & Algorithms Certification',
          description: 'Certified in core data structures and algorithm design patterns',
          dateEarned: 'March 10, 2024',
        },
      ],
    };
  },

  downloadCertificate: (certId) => {
    console.log(`Downloading certificate: ${certId}`);
    alert(`Certificate ${certId} downloaded successfully!`);
  },



  getActivityByType: (type) => {
    const profile = this.getUserProfile();
    return profile.recentActivity.filter((activity) => activity.icon.includes(type));
  },


  updateSkillProgress: (skillName, newProgress) => {
    console.log(`Updated ${skillName} progress to ${newProgress}%`);
    return { success: true, message: 'Skill progress updated' };
  },

  addAchievement: (badge) => {
    console.log(`Achievement unlocked: ${badge.name}`);
    return { success: true, achievement: badge };
  },
};
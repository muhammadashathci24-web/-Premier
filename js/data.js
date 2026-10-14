// EduMate - Fictional Sample Data
// Contains mock data for demonstration purposes only. No real student data is used.

const sampleData = {
  currentStudent: {
    id: "STU-2026-4412",
    fullName: "Alex Rivera",
    email: "alex.rivera@fictional-oakwood.edu",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    degree: "B.S. in Computer Science",
    year: "3rd Year (Junior)",
    semester: "Semester 5",
    gpa: "3.82",
    advisor: "Dr. Elena Vance",
    creditsCompleted: 78,
    totalCredits: 120,
    status: "Good Standing",
    phone: "+1 (555) 019-2834",
    address: "Oakwood Hall, Room 412, Campus North",
    enrolledCourses: [
      { code: "CS301", name: "Data Structures & Algorithms", credits: 4, grade: "A", instructor: "Prof. K. Chen" },
      { code: "CS340", name: "Database Systems", credits: 3, grade: "A-", instructor: "Dr. S. Nair" },
      { code: "MATH220", name: "Linear Algebra & Probability", credits: 3, grade: "B+", instructor: "Prof. H. Miller" },
      { code: "ENG205", name: "Technical Communication", credits: 2, grade: "A", instructor: "Prof. L. Taylor" }
    ]
  },

  stats: {
    attendanceOverall: 89,
    tasksPending: 4,
    tasksCompleted: 12,
    activeOpportunities: 6,
    creditsProgress: 65 // 78 / 120 * 100
  },

  upcomingTasks: [
    {
      id: "task-1",
      title: "Algorithms Problem Set 4",
      course: "CS301",
      dueDate: "Tomorrow, 11:59 PM",
      priority: "high",
      status: "pending"
    },
    {
      id: "task-2",
      title: "SQL Schema Design Report",
      course: "CS340",
      dueDate: "Oct 18, 5:00 PM",
      priority: "medium",
      status: "in-progress"
    },
    {
      id: "task-3",
      title: "Linear Algebra Quiz 2 Preparation",
      course: "MATH220",
      dueDate: "Oct 21, 10:00 AM",
      priority: "high",
      status: "pending"
    },
    {
      id: "task-4",
      title: "Resume Review with Career Hub",
      course: "General",
      dueDate: "Oct 24, 2:00 PM",
      priority: "low",
      status: "pending"
    }
  ],

  recentAnnouncements: [
    {
      id: "ann-1",
      title: "Fall Midterm Exam Timetable Released",
      author: "Academic Registrar",
      time: "2 hours ago",
      category: "Academic",
      snippet: "Review your personalized exam dates and room allocations through the student portal before Friday."
    },
    {
      id: "ann-2",
      title: "Tech Career Expo: 40+ Partner Companies",
      author: "Career Services",
      time: "1 day ago",
      category: "Opportunities",
      snippet: "Join the virtual pre-registration briefing on Oct 20. Bring printed copies of your project portfolio."
    },
    {
      id: "ann-3",
      title: "Library Study Wing 24/7 Hours Extended",
      author: "Campus Life",
      time: "3 days ago",
      category: "Campus",
      snippet: "Quiet study cubicles and coffee dispensers will remain open throughout the upcoming review weeks."
    }
  ],

  featuredOpportunities: [
    {
      id: "opp-1",
      title: "Junior Frontend Engineer Intern",
      organization: "CloudScape Solutions",
      location: "Hybrid (Chicago, IL)",
      deadline: "Oct 31, 2026",
      type: "Internship",
      stipend: "$32 / hr"
    },
    {
      id: "opp-2",
      title: "STEM Women Future Leader Scholarship",
      organization: "NextGen Foundation",
      location: "Online Application",
      deadline: "Nov 15, 2026",
      type: "Scholarship",
      stipend: "$5,000 Award"
    }
  ],

  attendanceOverview: [
    { subject: "Data Structures (CS301)", attended: 22, total: 24, percentage: 92, status: "Excellent" },
    { subject: "Database Systems (CS340)", attended: 18, total: 20, percentage: 90, status: "Good" },
    { subject: "Linear Algebra (MATH220)", attended: 16, total: 20, percentage: 80, status: "Warning" },
    { subject: "Technical Comm (ENG205)", attended: 14, total: 14, percentage: 100, status: "Excellent" }
  ]
};

// Export for window scope
window.EduMateData = sampleData;

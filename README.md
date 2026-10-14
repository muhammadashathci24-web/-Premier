# EduMate - Student Support Platform

A clean, responsive student support web application built with vanilla HTML, modern CSS, and JavaScript. EduMate helps students stay organized by tracking their academic progress, tasks, attendance, opportunities, and campus announcements in one unified dashboard.

> **Note**: Uses 100% fictional sample data. No real student data or external AI services are used.

---

## 🚀 Features Overview

### 1. 📊 Responsive Dashboard (Completed)
- **Academic Metrics**: At-a-glance cards showing Overall Attendance (`89%`), Pending Tasks (`4`), Open Opportunities (`6`), and Cumulative GPA (`3.82`).
- **Interactive Task Checklist**: View upcoming assignments and toggle completion status in real-time.
- **Attendance Progress Tracker**: Visual progress bars showing course-wise attendance against university thresholds.
- **Featured Opportunities Widget**: Highlighted internships and scholarships.
- **Campus Notice Board**: Recent academic and campus announcements.
- **Responsive Navigation**: Adaptive desktop sidebar and slide-out mobile drawer.

### 2. 📅 Planned Features (Built One-by-One)
- [ ] **Student Profile**: Academic details, advisor info, enrolled courses, and credit completion progress.
- [ ] **Opportunities Hub**: Filterable internships, scholarships, and grants with bookmark/apply dialogs.
- [ ] **Tasks & Study Plan**: Full task manager with category filters (All / In-Progress / Completed), priority tagging, and task creation.
- [ ] **Attendance Monitor**: Detailed subject attendance tables, attendance percentage calculation, and leave tracker.
- [ ] **Admin Management**: Directory of fictional student profiles, announcement publishing tool, and opportunity creator.

---

## 🛠️ Technology Stack
- **Structure**: HTML5 Semantic markup
- **Styling**: Vanilla CSS3 (Custom design system, CSS variables, Inter typography, responsive Flexbox/Grid)
- **Logic**: Vanilla JavaScript ES6 (Client-side routing, DOM manipulation, state management)
- **Data**: Self-contained fictional dataset in `js/data.js`

---

## 💻 How to Run Locally
1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Open `index.html` directly in any web browser, or serve using any lightweight static server:
   ```bash
   # Using Python 3:
   python -m http.server 3000

   # Or using Node:
   npx serve .
   ```
3. Open `http://localhost:3000` in your browser.

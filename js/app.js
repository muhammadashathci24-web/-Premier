// EduMate - Main Application Logic
// Handles navigation, dashboard rendering, and user interactions.

document.addEventListener('DOMContentLoaded', () => {
  const data = window.EduMateData;
  if (!data) {
    console.error('EduMate fictional sample data not found.');
    return;
  }

  // Initialize features
  initSidebarAndNav();
  renderDashboard(data);
});

/**
 * Handles navigation switching and mobile drawer
 */
function initSidebarAndNav() {
  const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
  const viewSections = document.querySelectorAll('.view-section');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const sidebar = document.getElementById('sidebar');

  // Page switching
  window.navigateTo = function(targetView) {
    // Update active nav button
    navItems.forEach(item => {
      if (item.dataset.view === targetView) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update visible view section
    viewSections.forEach(section => {
      if (section.id === `view-${targetView}`) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });

    // Close mobile sidebar if open
    if (sidebar && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Nav click listeners
  navItems.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      if (view) {
        window.navigateTo(view);
      }
    });
  });

  // Mobile drawer toggle
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    // Close when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        sidebar.classList.remove('open');
      }
    });
  }
}

/**
 * Renders dynamic widgets on the Dashboard view
 */
function renderDashboard(data) {
  const { currentStudent, stats, upcomingTasks, featuredOpportunities, attendanceOverview, recentAnnouncements } = data;

  // Student header & greeting
  const studentNameElements = document.querySelectorAll('.student-name-text');
  studentNameElements.forEach(el => el.textContent = currentStudent.fullName);

  const studentDegreeElements = document.querySelectorAll('.student-degree-text');
  studentDegreeElements.forEach(el => el.textContent = `${currentStudent.degree} • ${currentStudent.year}`);

  const studentAvatarElements = document.querySelectorAll('.student-avatar-img');
  studentAvatarElements.forEach(img => {
    img.src = currentStudent.avatar;
    img.alt = currentStudent.fullName;
  });

  // Metric values
  const elAttVal = document.getElementById('metric-attendance');
  if (elAttVal) elAttVal.textContent = `${stats.attendanceOverall}%`;

  const elTaskVal = document.getElementById('metric-tasks');
  if (elTaskVal) elTaskVal.textContent = stats.tasksPending;

  const elOppVal = document.getElementById('metric-opps');
  if (elOppVal) elOppVal.textContent = stats.activeOpportunities;

  const elGpaVal = document.getElementById('metric-gpa');
  if (elGpaVal) elGpaVal.textContent = currentStudent.gpa;

  // Render Upcoming Tasks
  const taskListEl = document.getElementById('dashboard-task-list');
  if (taskListEl) {
    taskListEl.innerHTML = upcomingTasks.map(task => `
      <div class="task-item ${task.priority}">
        <div class="task-left">
          <input 
            type="checkbox" 
            class="task-checkbox" 
            ${task.status === 'completed' ? 'checked' : ''}
            onchange="toggleTaskStatus('${task.id}')"
            aria-label="Mark task complete"
          />
          <div>
            <div class="task-name" style="${task.status === 'completed' ? 'text-decoration: line-through; opacity: 0.6;' : ''}">
              ${escapeHtml(task.title)}
            </div>
            <div class="task-meta">
              <span>📚 ${escapeHtml(task.course)}</span>
              <span>⏰ ${escapeHtml(task.dueDate)}</span>
            </div>
          </div>
        </div>
        <span class="tag-badge ${task.priority}">${escapeHtml(task.priority)}</span>
      </div>
    `).join('');
  }

  // Render Attendance overview bars
  const attendanceListEl = document.getElementById('dashboard-attendance-list');
  if (attendanceListEl) {
    attendanceListEl.innerHTML = attendanceOverview.map(sub => {
      let statusClass = 'good';
      if (sub.percentage >= 90) statusClass = 'excellent';
      else if (sub.percentage < 85) statusClass = 'warning';

      return `
        <div class="attendance-progress-item">
          <div class="attendance-progress-header">
            <span>${escapeHtml(sub.subject)}</span>
            <strong>${sub.percentage}% <span style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">(${sub.attended}/${sub.total})</span></strong>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill ${statusClass}" style="width: ${sub.percentage}%;"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Featured Opportunities
  const oppListEl = document.getElementById('dashboard-opp-list');
  if (oppListEl) {
    oppListEl.innerHTML = featuredOpportunities.map(opp => `
      <div class="opp-item">
        <div>
          <div class="opp-title">${escapeHtml(opp.title)}</div>
          <div class="opp-org">${escapeHtml(opp.organization)} • ${escapeHtml(opp.location)}</div>
          <div style="font-size: 0.75rem; color: var(--text-light); margin-top: 3px;">
            Deadline: <strong>${escapeHtml(opp.deadline)}</strong>
          </div>
        </div>
        <div style="text-align: right;">
          <span class="opp-type-badge">${escapeHtml(opp.type)}</span>
          <div style="font-size: 0.8rem; font-weight: 600; color: var(--success); margin-top: 4px;">${escapeHtml(opp.stipend)}</div>
        </div>
      </div>
    `).join('');
  }

  // Render Campus Announcements
  const annListEl = document.getElementById('dashboard-announcements-list');
  if (annListEl) {
    annListEl.innerHTML = recentAnnouncements.map(ann => `
      <div class="announcement-item">
        <div class="announcement-meta">
          <span class="announcement-badge">${escapeHtml(ann.category)}</span>
          <span>• ${escapeHtml(ann.author)}</span>
          <span>• ${escapeHtml(ann.time)}</span>
        </div>
        <h4>${escapeHtml(ann.title)}</h4>
        <p>${escapeHtml(ann.snippet)}</p>
      </div>
    `).join('');
  }
}

/**
 * Quick toggle for task completion
 */
window.toggleTaskStatus = function(taskId) {
  const task = window.EduMateData.upcomingTasks.find(t => t.id === taskId);
  if (task) {
    task.status = task.status === 'completed' ? 'pending' : 'completed';
    // Update metric count
    const pendingCount = window.EduMateData.upcomingTasks.filter(t => t.status !== 'completed').length;
    window.EduMateData.stats.tasksPending = pendingCount;
    renderDashboard(window.EduMateData);
  }
};

/**
 * Simple HTML sanitizer
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

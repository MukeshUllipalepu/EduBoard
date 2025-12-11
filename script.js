// script.js — 10 students + view switching & rendering for EduBoard

const students = [
  {
    id: 's1',
    name: 'M. J. Kumar',
    avatar: 'MJ',
    roll: '2021CS045',
    email: 'mj.kumar@example.edu',
    college: 'Apex Institute of Tech',
    dept: 'Computer Science',
    year: 'Year 2 • Section B',
    overview: { gpa: 3.67, attendance: 92, assignments: 2, credits: 72 },
    deadlines: [
      { title: 'Database Systems — Lab', date: '2025-12-18' },
      { title: 'Linear Algebra — Assignment', date: '2025-12-22' }
    ],
    subjects: [
      { name: 'Database Systems', desc: 'Relational theory, SQL, normalization', instructor: 'Dr. Rao', progress: 80, grade: 'A-', attendance: '95%' },
      { name: 'Operating Systems', desc: 'Processes, threads, scheduling', instructor: 'Prof. Iyer', progress: 30, grade: 'C', attendance: '80%' },
      { name: 'Linear Algebra', desc: 'Matrices, vectors, eigenvalues', instructor: 'Ms. Nair', progress: 50, grade: 'B-', attendance: '84%' },
      { name: 'Software Engineering', desc: 'Design, patterns, testing', instructor: 'Dr. Sharma', progress: 92, grade: 'A', attendance: '98%' }
    ]
  },
  {
    id: 's2',
    name: 'Anya Patel',
    avatar: 'AP',
    roll: '2021CS076',
    email: 'anya.patel@example.edu',
    college: 'Apex Institute of Tech',
    dept: 'Computer Science',
    year: 'Year 3 • Section A',
    overview: { gpa: 3.90, attendance: 97, assignments: 0, credits: 84 },
    deadlines: [{ title: 'Project Demo — SE', date: '2025-12-20' }],
    subjects: [
      { name: 'Database Systems', desc: 'Advanced SQL & tuning', instructor: 'Dr. Rao', progress: 95, grade: 'A', attendance: '99%' },
      { name: 'AI Basics', desc: 'Intro to ML & models', instructor: 'Dr. Kaur', progress: 60, grade: 'B+', attendance: '92%' },
      { name: 'Networks', desc: 'OSI/TCP-IP, routing', instructor: 'Prof. Das', progress: 72, grade: 'A-', attendance: '95%' }
    ]
  },
  {
    id: 's3',
    name: 'Rohit Singh',
    avatar: 'RS',
    roll: '2021CS097',
    email: 'rohit.singh@example.edu',
    college: 'Apex Institute of Tech',
    dept: 'Computer Science',
    year: 'Year 1 • Section C',
    overview: { gpa: 2.95, attendance: 80, assignments: 3, credits: 60 },
    deadlines: [{ title: 'OS Assignment', date: '2025-12-19' }, { title: 'Math Exam', date: '2025-12-26' }],
    subjects: [
      { name: 'Operating Systems', desc: 'Processes & scheduling', instructor: 'Prof. Iyer', progress: 30, grade: 'C', attendance: '80%' },
      { name: 'Linear Algebra', desc: 'Vectors & transforms', instructor: 'Ms. Nair', progress: 50, grade: 'B-', attendance: '84%' }
    ]
  },
  {
    id: 's4',
    name: 'Priya Sharma',
    avatar: 'PS',
    roll: '2020CS021',
    email: 'priya.sharma@example.edu',
    college: 'Apex Institute of Tech',
    dept: 'Computer Science',
    year: 'Year 4 • Section A',
    overview: { gpa: 3.45, attendance: 89, assignments: 1, credits: 110 },
    deadlines: [{ title: 'Thesis Submission', date: '2026-01-10' }],
    subjects: [
      { name: 'Software Architecture', desc: 'Microservices & design', instructor: 'Dr. Rao', progress: 86, grade: 'A', attendance: '92%' },
      { name: 'Cloud Computing', desc: 'AWS basics & infra', instructor: 'Prof. Kumar', progress: 72, grade: 'A-', attendance: '90%' }
    ]
  },
  {
    id: 's5',
    name: 'Vikram Mehta',
    avatar: 'VM',
    roll: '2022CS033',
    email: 'vikram.mehta@example.edu',
    college: 'Apex Institute of Tech',
    dept: 'Computer Science',
    year: 'Year 1 • Section B',
    overview: { gpa: 3.10, attendance: 85, assignments: 4, credits: 28 },
    deadlines: [{ title: 'Intro Project', date: '2025-12-21' }],
    subjects: [
      { name: 'Programming I', desc: 'Basics of programming', instructor: 'Ms. Roy', progress: 45, grade: 'B-', attendance: '86%' },
      { name: 'Discrete Math', desc: 'Logic & combinatorics', instructor: 'Dr. Sen', progress: 52, grade: 'B', attendance: '84%' }
    ]
  },
  {
    id: 's6',
    name: 'Sana Khan',
    avatar: 'SK',
    roll: '2020CS055',
    email: 'sana.khan@example.edu',
    college: 'Apex Institute of Tech',
    dept: 'Computer Science',
    year: 'Year 4 • Section B',
    overview: { gpa: 3.78, attendance: 94, assignments: 0, credits: 112 },
    deadlines: [{ title: 'Final Project Demo', date: '2025-12-24' }],
    subjects: [
      { name: 'Machine Learning', desc: 'Supervised & unsupervised', instructor: 'Dr. Kaur', progress: 88, grade: 'A', attendance: '96%' },
      { name: 'Data Mining', desc: 'Patterns & clustering', instructor: 'Prof. Rao', progress: 80, grade: 'A-', attendance: '95%' }
    ]
  },
  {
    id: 's7',
    name: 'Arjun Verma',
    avatar: 'AV',
    roll: '2021CS062',
    email: 'arjun.verma@example.edu',
    college: 'Apex Institute of Tech',
    dept: 'Computer Science',
    year: 'Year 2 • Section A',
    overview: { gpa: 3.25, attendance: 88, assignments: 2, credits: 68 },
    deadlines: [{ title: 'Algo Assignment', date: '2025-12-23' }],
    subjects: [
      { name: 'Algorithms', desc: 'Sorting, graphs, DP', instructor: 'Dr. Bhat', progress: 66, grade: 'B+', attendance: '90%' },
      { name: 'DB Systems', desc: 'Transactions & indexing', instructor: 'Dr. Rao', progress: 58, grade: 'B', attendance: '87%' }
    ]
  },
  {
    id: 's8',
    name: 'Nina Gomez',
    avatar: 'NG',
    roll: '2022CS089',
    email: 'nina.gomez@example.edu',
    college: 'Apex Institute of Tech',
    dept: 'Computer Science',
    year: 'Year 1 • Section D',
    overview: { gpa: 3.00, attendance: 82, assignments: 5, credits: 30 },
    deadlines: [{ title: 'Lab 3', date: '2025-12-20' }],
    subjects: [
      { name: 'Programming I', desc: 'Intro to Python', instructor: 'Ms. Roy', progress: 40, grade: 'B-', attendance: '82%' },
      { name: 'Calculus', desc: 'Limits & derivatives', instructor: 'Dr. Patel', progress: 35, grade: 'C+', attendance: '80%' }
    ]
  },
  {
    id: 's9',
    name: 'Diego Rivera',
    avatar: 'DR',
    roll: '2019CS011',
    email: 'diego.rivera@example.edu',
    college: 'Apex Institute of Tech',
    dept: 'Computer Science',
    year: 'Year 4 • Section C',
    overview: { gpa: 3.55, attendance: 91, assignments: 1, credits: 120 },
    deadlines: [{ title: 'Internship Report', date: '2026-01-05' }],
    subjects: [
      { name: 'Distributed Systems', desc: 'Consensus & replication', instructor: 'Prof. Das', progress: 78, grade: 'A-', attendance: '92%' },
      { name: 'Security', desc: 'Crypto & web security', instructor: 'Dr. Iqbal', progress: 68, grade: 'B+', attendance: '90%' }
    ]
  },
  {
    id: 's10',
    name: 'Meera Nair',
    avatar: 'MN',
    roll: '2021CS038',
    email: 'meera.nair@example.edu',
    college: 'Apex Institute of Tech',
    dept: 'Computer Science',
    year: 'Year 2 • Section C',
    overview: { gpa: 3.82, attendance: 96, assignments: 0, credits: 70 },
    deadlines: [{ title: 'Hackathon Registration', date: '2025-12-28' }],
    subjects: [
      { name: 'Web Dev', desc: 'HTML, CSS, JS', instructor: 'Ms. Roy', progress: 92, grade: 'A', attendance: '98%' },
      { name: 'Databases', desc: 'NoSQL & indexing', instructor: 'Dr. Rao', progress: 85, grade: 'A', attendance: '95%' }
    ]
  }
];

// DOM helpers
const studentSelect = document.getElementById('studentSelect');
const headerAvatar = document.getElementById('headerAvatar');
const cardGpa = document.querySelector('#card-gpa .big');
const cardAttendance = document.querySelector('#card-attendance .big');
const cardAssign = document.querySelector('#card-assign .big');
const cardCredits = document.querySelector('#card-credits .big');
const subjectsTableBody = document.querySelector('#subjectsTable tbody');
const deadlineList = document.getElementById('deadlineList');
const profileBody = document.getElementById('profileBody');

const allSubjectsTableBody = document.querySelector('#allSubjectsTable tbody');
const attendanceTableBody = document.querySelector('#attendanceTable tbody');
const profileDetails = document.getElementById('profileDetails');

const navLinks = document.querySelectorAll('.nav-link');
const views = document.querySelectorAll('.view');

// utility
const formatDate = iso => {
  const d = new Date(iso);
  return d.toLocaleDateString();
};
const monthShort = iso => (new Date(iso)).toLocaleString('default', { month: 'short' });

// populate student select
function populateSelect(){
  studentSelect.innerHTML = '';
  students.forEach((s, idx) => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${s.name} • ${s.roll}`;
    if (idx === 0) opt.selected = true;
    studentSelect.appendChild(opt);
  });
}

// render functions
function renderOverview(s) {
  cardGpa.textContent = s.overview.gpa.toFixed(2);
  cardAttendance.innerHTML = `${s.overview.attendance}<span class="small">%</span>`;
  cardAssign.textContent = s.overview.assignments;
  cardCredits.textContent = s.overview.credits;
}

function renderSubjectsTable(s) {
  subjectsTableBody.innerHTML = '';
  s.subjects.forEach(sub => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${sub.name}</td>
      <td>${sub.instructor}</td>
      <td>
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${sub.progress}">
          <div class="progress-bar ${sub.progress<50?'warn':sub.progress<80?'info':'success'}" style="width:${sub.progress}%"></div>
        </div>
        <div class="muted small">${sub.progress}% completed</div>
      </td>
      <td>${sub.grade || '—'}</td>
      <td>${sub.attendance || '—'}</td>
    `;
    subjectsTableBody.appendChild(tr);
  });
}

function renderDeadlines(s) {
  deadlineList.innerHTML = '';
  if (!s.deadlines || s.deadlines.length === 0) {
    deadlineList.textContent = 'No upcoming deadlines';
    return;
  }
  s.deadlines.forEach(dl => {
    const li = document.createElement('li');
    const day = String(new Date(dl.date).getDate()).padStart(2,'0');
    const mon = monthShort(dl.date);
    li.innerHTML = `
      <div class="date" aria-hidden="true"><span class="day">${day}</span><span class="month">${mon}</span></div>
      <div class="d-info">
        <div class="d-title">${dl.title}</div>
        <div class="muted small">Due: ${formatDate(dl.date)}</div>
      </div>
    `;
    deadlineList.appendChild(li);
  });
}

function renderProfileCard(s) {
  profileBody.innerHTML = '';
  const rows = [
    ['Name', s.name],
    ['Roll No', s.roll],
    ['Email', s.email],
    ['College', s.college],
    ['Department', s.dept]
  ];
  rows.forEach(([label, val]) => {
    const row = document.createElement('div');
    row.className = 'profile-row';
    row.innerHTML = `<div class="label">${label}</div><div class="value">${val}</div>`;
    profileBody.appendChild(row);
  });
}

function renderAllSubjectsView(s) {
  allSubjectsTableBody.innerHTML = '';
  s.subjects.forEach(sub => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${sub.name}</td>
      <td>${sub.desc || '—'}</td>
      <td>${sub.instructor}</td>
      <td>
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${sub.progress}">
          <div class="progress-bar ${sub.progress<50?'warn':sub.progress<80?'info':'success'}" style="width:${sub.progress}%"></div>
        </div>
      </td>
    `;
    allSubjectsTableBody.appendChild(tr);
  });
}

function renderAttendanceView(s) {
  attendanceTableBody.innerHTML = '';
  s.subjects.forEach(sub => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${sub.name}</td>
      <td>${sub.instructor}</td>
      <td>${sub.attendance || '—'}</td>
    `;
    attendanceTableBody.appendChild(tr);
  });
}

function renderProfileView(s) {
  profileDetails.innerHTML = `
    <div class="profile-row"><div class="label">Name</div><div class="value">${s.name}</div></div>
    <div class="profile-row"><div class="label">Roll No</div><div class="value">${s.roll}</div></div>
    <div class="profile-row"><div class="label">Email</div><div class="value">${s.email}</div></div>
    <div class="profile-row"><div class="label">College</div><div class="value">${s.college}</div></div>
    <div class="profile-row"><div class="label">Department</div><div class="value">${s.dept}</div></div>
    <div class="profile-row"><div class="label">Year</div><div class="value">${s.year || '—'}</div></div>
  `;
}

function showView(name) {
  views.forEach(v => {
    if (v.id === `view-${name}`) {
      v.hidden = false;
      v.classList.add('active');
    } else {
      v.hidden = true;
      v.classList.remove('active');
    }
  });
  const title = document.querySelector('.page-title');
  title.textContent = name.charAt(0).toUpperCase() + name.slice(1);
  navLinks.forEach(a => a.classList.toggle('active', a.dataset.view === name));
}

function renderForStudentId(id) {
  const s = students.find(x => x.id === id) || students[0];
  headerAvatar.textContent = s.avatar || s.name.split(' ').map(n => n[0]).join('').slice(0,2);
  renderOverview(s);
  renderSubjectsTable(s);
  renderDeadlines(s);
  renderProfileCard(s);
  renderAllSubjectsView(s);
  renderAttendanceView(s);
  renderProfileView(s);
}

function init() {
  populateSelect();
  const first = studentSelect.value || students[0].id;
  renderForStudentId(first);

  studentSelect.addEventListener('change', (e) => renderForStudentId(e.target.value));

  navLinks.forEach(link => {
    link.addEventListener('click', (ev) => {
      ev.preventDefault();
      const view = link.dataset.view;
      showView(view);
    });
  });

  document.getElementById('signOutBtn')?.addEventListener('click', () => alert('Sign out clicked (implement backend)'));
  document.getElementById('logoutBtn')?.addEventListener('click', () => alert('Logout clicked (implement backend)'));
  document.getElementById('notifyBtn')?.addEventListener('click', () => alert('No new notifications'));
  document.getElementById('mailBtn')?.addEventListener('click', () => alert('No new messages'));
}

function populateSelect() {
  studentSelect.innerHTML = '';
  students.forEach((s, idx) => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${s.name} • ${s.roll}`;
    if (idx === 0) opt.selected = true;
    studentSelect.appendChild(opt);
  });
}

init();

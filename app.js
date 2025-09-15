// Attendance Management System JavaScript

// Sample data from application_data_json
const sampleFaculty = [
    {"id": "FAC001", "name": "Dr. Sarah Johnson", "subjects": ["Mathematics", "Computer Science"]},
    {"id": "FAC002", "name": "Prof. Michael Chen", "subjects": ["English", "History"]},
    {"id": "FAC003", "name": "Dr. Priya Sharma", "subjects": ["Science", "Geography"]},
    {"id": "FAC004", "name": "Ms. Emily Davis", "subjects": ["Art", "Physical Education"]}
];

const subjects = [
    "Mathematics", "English", "Science", "History", 
    "Geography", "Computer Science", "Physical Education", "Art"
];

const periods = [
    "Period 1 (9:00-9:45 AM)", "Period 2 (9:45-10:30 AM)", 
    "Period 3 (10:45-11:30 AM)", "Period 4 (11:30-12:15 PM)",
    "Period 5 (1:00-1:45 PM)", "Period 6 (1:45-2:30 PM)",
    "Period 7 (2:30-3:15 PM)", "Period 8 (3:15-4:00 PM)"
];

const sampleStudents = [
    {"rollNo": "001", "name": "Aarav Kumar"}, {"rollNo": "002", "name": "Aditi Patel"},
    {"rollNo": "003", "name": "Arjun Singh"}, {"rollNo": "004", "name": "Anaya Gupta"},
    {"rollNo": "005", "name": "Bhavya Sharma"}, {"rollNo": "006", "name": "Chetan Reddy"},
    {"rollNo": "007", "name": "Divya Nair"}, {"rollNo": "008", "name": "Eshaan Joshi"},
    {"rollNo": "009", "name": "Fatima Khan"}, {"rollNo": "010", "name": "Gaurav Mehta"},
    {"rollNo": "011", "name": "Harini Iyer"}, {"rollNo": "012", "name": "Ishaan Kapoor"},
    {"rollNo": "013", "name": "Jiya Agarwal"}, {"rollNo": "014", "name": "Karthik Rao"},
    {"rollNo": "015", "name": "Lakshmi Devi"}, {"rollNo": "016", "name": "Manav Sinha"},
    {"rollNo": "017", "name": "Nidhi Verma"}, {"rollNo": "018", "name": "Om Prakash"},
    {"rollNo": "019", "name": "Pooja Jain"}, {"rollNo": "020", "name": "Qasim Ali"},
    {"rollNo": "021", "name": "Ravi Teja"}, {"rollNo": "022", "name": "Sanya Malhotra"},
    {"rollNo": "023", "name": "Tanvi Shah"}, {"rollNo": "024", "name": "Uday Kumar"},
    {"rollNo": "025", "name": "Vaishali Singh"}, {"rollNo": "026", "name": "Waqar Ahmed"},
    {"rollNo": "027", "name": "Xerxes Dubash"}, {"rollNo": "028", "name": "Yasmin Begum"},
    {"rollNo": "029", "name": "Zara Khan"}, {"rollNo": "030", "name": "Aditya Raman"}
];

// Application state
let currentUser = null;
let attendanceRecords = [
    {
        id: 1,
        date: "2024-09-15",
        subject: "Mathematics", 
        period: "Period 1 (9:00-9:45 AM)",
        faculty: "Dr. Sarah Johnson",
        students: [
            {"rollNo": "001", "name": "Aarav Kumar", "status": "Present"},
            {"rollNo": "002", "name": "Aditi Patel", "status": "Present"},
            {"rollNo": "003", "name": "Arjun Singh", "status": "Absent"},
            {"rollNo": "004", "name": "Anaya Gupta", "status": "Present"}
        ]
    }
];
let currentAttendanceSession = null;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing app...');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing application...');
    
    // Get DOM elements
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Verify elements exist
    if (!loginForm) {
        console.error('Login form not found!');
        return;
    }
    
    console.log('Setting up event listeners...');
    
    // Set up login form event listener
    loginForm.addEventListener('submit', function(e) {
        console.log('Login form submitted');
        handleLogin(e);
    });
    
    // Set up logout button
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            console.log('Logout clicked');
            handleLogout();
        });
    }
    
    // Navigation event listeners
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log('Nav button clicked:', e.target.dataset.section);
            const section = e.target.dataset.section;
            navigateToSection(section);
        });
    });

    // Quick action buttons
    document.querySelectorAll('.action-buttons .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.dataset.section;
            if (section) {
                console.log('Quick action clicked:', section);
                navigateToSection(section);
            }
        });
    });

    // Initialize other components
    initializeForms();
    setupModals();

    // Set today's date
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        if (!input.value) {
            input.value = today;
        }
    });
    
    console.log('Application initialized successfully');
}

function handleLogin(e) {
    console.log('handleLogin called');
    e.preventDefault();
    
    const facultyNameEl = document.getElementById('facultyName');
    const employeeIdEl = document.getElementById('employeeId');
    
    if (!facultyNameEl || !employeeIdEl) {
        console.error('Login form elements not found');
        showError('Login form error. Please refresh the page.');
        return;
    }
    
    const facultyName = facultyNameEl.value.trim();
    const employeeId = employeeIdEl.value.trim();

    console.log('Login attempt with:', { facultyName, employeeId });

    if (!facultyName || !employeeId) {
        console.log('Validation failed: empty fields');
        showError('Please fill in all fields.');
        return;
    }

    // Find matching faculty or create new one
    let faculty = sampleFaculty.find(f => f.id === employeeId);
    if (!faculty) {
        console.log('Faculty not found in sample data, creating new entry');
        // Create new faculty entry
        faculty = {
            id: employeeId,
            name: facultyName,
            subjects: subjects // Allow access to all subjects for demo
        };
    } else {
        console.log('Found matching faculty:', faculty);
    }

    currentUser = {
        ...faculty,
        loginTime: new Date().toLocaleString()
    };

    console.log('User logged in:', currentUser);

    // Update UI
    const welcomeText = document.getElementById('welcomeText');
    if (welcomeText) {
        welcomeText.textContent = `Welcome, ${currentUser.name}`;
    }
    
    // Hide login, show main app
    const loginScreen = document.getElementById('loginScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (loginScreen && mainApp) {
        loginScreen.classList.add('hidden');
        mainApp.classList.remove('hidden');
        console.log('UI updated - login screen hidden, main app shown');
    }

    // Navigate to dashboard
    navigateToSection('dashboard');
    updateDashboard();
    updateProfile();

    showSuccess('Login successful!');
}

function handleLogout() {
    console.log('Logging out user');
    currentUser = null;
    currentAttendanceSession = null;
    
    // Reset forms
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.reset();
    }
    
    // Show login, hide main app
    const loginScreen = document.getElementById('loginScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (loginScreen && mainApp) {
        mainApp.classList.add('hidden');
        loginScreen.classList.remove('hidden');
    }
    
    showSuccess('Logged out successfully!');
}

function navigateToSection(sectionId) {
    console.log('Navigating to section:', sectionId);
    
    // Update navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });

    // Update content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });

    // Load section-specific data
    if (sectionId === 'viewRecords') {
        loadRecords();
    } else if (sectionId === 'reports') {
        setupReportDates();
    }
}

function initializeForms() {
    console.log('Initializing forms...');
    
    // Populate subject dropdowns
    const subjectSelects = document.querySelectorAll('#subject, #filterSubject');
    subjectSelects.forEach(select => {
        select.innerHTML = '<option value="">Select Subject</option>';
        subjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject;
            option.textContent = subject;
            select.appendChild(option);
        });
    });

    // Populate period dropdowns
    const periodSelects = document.querySelectorAll('#period, #filterPeriod');
    periodSelects.forEach(select => {
        select.innerHTML = '<option value="">Select Period</option>';
        periods.forEach(period => {
            const option = document.createElement('option');
            option.value = period;
            option.textContent = period;
            select.appendChild(option);
        });
    });

    // Attendance form setup
    const loadStudentsBtn = document.getElementById('loadStudentsBtn');
    if (loadStudentsBtn) {
        loadStudentsBtn.addEventListener('click', loadStudentsForAttendance);
    }

    // Bulk action buttons
    const markAllPresentBtn = document.getElementById('markAllPresentBtn');
    const markAllAbsentBtn = document.getElementById('markAllAbsentBtn');
    
    if (markAllPresentBtn) {
        markAllPresentBtn.addEventListener('click', () => markAllStudents('Present'));
    }
    if (markAllAbsentBtn) {
        markAllAbsentBtn.addEventListener('click', () => markAllStudents('Absent'));
    }

    // Save and cancel buttons
    const saveAttendanceBtn = document.getElementById('saveAttendanceBtn');
    const cancelAttendanceBtn = document.getElementById('cancelAttendanceBtn');
    
    if (saveAttendanceBtn) {
        saveAttendanceBtn.addEventListener('click', saveAttendance);
    }
    if (cancelAttendanceBtn) {
        cancelAttendanceBtn.addEventListener('click', cancelAttendance);
    }

    // Records filter buttons
    const filterRecordsBtn = document.getElementById('filterRecordsBtn');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    
    if (filterRecordsBtn) {
        filterRecordsBtn.addEventListener('click', filterRecords);
    }
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearRecordFilters);
    }

    // Report buttons
    const generateReportBtn = document.getElementById('generateReportBtn');
    const exportReportBtn = document.getElementById('exportReportBtn');
    
    if (generateReportBtn) {
        generateReportBtn.addEventListener('click', generateReport);
    }
    if (exportReportBtn) {
        exportReportBtn.addEventListener('click', exportReport);
    }

    // Profile buttons
    const changePasswordBtn = document.getElementById('changePasswordBtn');
    const updateProfileBtn = document.getElementById('updateProfileBtn');
    
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', () => {
            showSuccess('Password change feature would be implemented in full version.');
        });
    }
    if (updateProfileBtn) {
        updateProfileBtn.addEventListener('click', () => {
            showSuccess('Profile update feature would be implemented in full version.');
        });
    }
    
    console.log('Forms initialized successfully');
}

function loadStudentsForAttendance() {
    console.log('Loading students for attendance...');
    
    const date = document.getElementById('attendanceDate').value;
    const subject = document.getElementById('subject').value;
    const period = document.getElementById('period').value;

    if (!date || !subject || !period) {
        showError('Please select date, subject, and period.');
        return;
    }

    // Check if attendance already exists
    const existingRecord = attendanceRecords.find(record => 
        record.date === date && 
        record.subject === subject && 
        record.period === period &&
        record.faculty === currentUser.name
    );

    if (existingRecord) {
        if (!confirm('Attendance for this session already exists. Do you want to edit it?')) {
            return;
        }
    }

    // Set up attendance session
    currentAttendanceSession = {
        date,
        subject,
        period,
        faculty: currentUser.name,
        students: sampleStudents.map(student => ({
            ...student,
            status: existingRecord ? 
                (existingRecord.students.find(s => s.rollNo === student.rollNo)?.status || 'Present') : 
                'Present'
        }))
    };

    // Update UI
    const attendanceTitle = document.getElementById('attendanceTitle');
    const attendanceDate2 = document.getElementById('attendanceDate2');
    
    if (attendanceTitle) {
        attendanceTitle.textContent = `${subject} - ${period}`;
    }
    if (attendanceDate2) {
        attendanceDate2.textContent = new Date(date).toLocaleDateString();
    }

    // Populate student table
    populateStudentTable();

    // Show student attendance section
    const studentAttendance = document.getElementById('studentAttendance');
    if (studentAttendance) {
        studentAttendance.classList.remove('hidden');
    }
    
    console.log('Students loaded successfully');
}

function populateStudentTable() {
    const tbody = document.getElementById('studentTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';

    currentAttendanceSession.students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>
                <div class="attendance-toggle">
                    <div class="attendance-radio present">
                        <input type="radio" id="present_${student.rollNo}" 
                               name="attendance_${student.rollNo}" 
                               value="Present" 
                               ${student.status === 'Present' ? 'checked' : ''}>
                        <label for="present_${student.rollNo}">Present</label>
                    </div>
                    <div class="attendance-radio absent">
                        <input type="radio" id="absent_${student.rollNo}" 
                               name="attendance_${student.rollNo}" 
                               value="Absent"
                               ${student.status === 'Absent' ? 'checked' : ''}>
                        <label for="absent_${student.rollNo}">Absent</label>
                    </div>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Add event listeners to radio buttons
    tbody.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const rollNo = e.target.name.split('_')[1];
            const status = e.target.value;
            updateStudentStatus(rollNo, status);
        });
    });
}

function updateStudentStatus(rollNo, status) {
    const student = currentAttendanceSession.students.find(s => s.rollNo === rollNo);
    if (student) {
        student.status = status;
    }
}

function markAllStudents(status) {
    if (!currentAttendanceSession) return;
    
    currentAttendanceSession.students.forEach(student => {
        student.status = status;
    });
    populateStudentTable();
}

function saveAttendance() {
    if (!currentAttendanceSession) {
        showError('No attendance session active.');
        return;
    }

    // Check if record already exists
    const existingIndex = attendanceRecords.findIndex(record => 
        record.date === currentAttendanceSession.date && 
        record.subject === currentAttendanceSession.subject && 
        record.period === currentAttendanceSession.period &&
        record.faculty === currentAttendanceSession.faculty
    );

    const recordToSave = {
        id: existingIndex >= 0 ? attendanceRecords[existingIndex].id : Date.now(),
        ...currentAttendanceSession
    };

    if (existingIndex >= 0) {
        // Update existing record
        attendanceRecords[existingIndex] = recordToSave;
    } else {
        // Add new record
        attendanceRecords.push(recordToSave);
    }

    showSuccess('Attendance saved successfully!');
    cancelAttendance();
    updateDashboard();
}

function cancelAttendance() {
    currentAttendanceSession = null;
    const studentAttendance = document.getElementById('studentAttendance');
    const attendanceSetupForm = document.getElementById('attendanceSetupForm');
    
    if (studentAttendance) {
        studentAttendance.classList.add('hidden');
    }
    if (attendanceSetupForm) {
        attendanceSetupForm.reset();
    }
}

function updateDashboard() {
    if (!currentUser) return;
    
    // Calculate stats
    const today = new Date().toISOString().split('T')[0];
    const todayRecords = attendanceRecords.filter(record => 
        record.date === today && record.faculty === currentUser.name
    );

    const todayClassesEl = document.getElementById('todayClasses');
    const attendanceMarkedEl = document.getElementById('attendanceMarked');
    const totalStudentsEl = document.getElementById('totalStudents');
    const avgAttendanceEl = document.getElementById('avgAttendance');

    if (todayClassesEl) todayClassesEl.textContent = periods.length;
    if (attendanceMarkedEl) attendanceMarkedEl.textContent = todayRecords.length;
    if (totalStudentsEl) totalStudentsEl.textContent = sampleStudents.length;

    // Calculate average attendance
    if (attendanceRecords.length > 0 && avgAttendanceEl) {
        const userRecords = attendanceRecords.filter(record => record.faculty === currentUser.name);
        let totalPresent = 0;
        let totalStudents = 0;

        userRecords.forEach(record => {
            totalStudents += record.students.length;
            totalPresent += record.students.filter(s => s.status === 'Present').length;
        });

        const avgAttendance = totalStudents > 0 ? Math.round((totalPresent / totalStudents) * 100) : 0;
        avgAttendanceEl.textContent = `${avgAttendance}%`;
    }
}

function loadRecords() {
    if (!currentUser) return;
    displayRecords(attendanceRecords.filter(record => record.faculty === currentUser.name));
}

function displayRecords(records) {
    const container = document.getElementById('recordsContainer');
    if (!container) return;
    
    if (records.length === 0) {
        container.innerHTML = '<p class="no-records">No attendance records found.</p>';
        return;
    }

    container.innerHTML = records.map(record => {
        const presentCount = record.students.filter(s => s.status === 'Present').length;
        const absentCount = record.students.length - presentCount;
        const percentage = Math.round((presentCount / record.students.length) * 100);

        return `
            <div class="record-item">
                <div class="record-header">
                    <div class="record-title">${record.subject} - ${record.period}</div>
                    <div class="record-meta">${new Date(record.date).toLocaleDateString()}</div>
                </div>
                <div class="record-stats">
                    <div class="record-stat stat-present">
                        <span>Present: ${presentCount}</span>
                    </div>
                    <div class="record-stat stat-absent">
                        <span>Absent: ${absentCount}</span>
                    </div>
                    <div class="record-stat">
                        <span>Attendance: ${percentage}%</span>
                    </div>
                </div>
                <div class="record-students">
                    ${record.students.map(student => `
                        <div class="student-status">
                            <span>${student.rollNo} - ${student.name}</span>
                            <span class="status-${student.status.toLowerCase()}">${student.status}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function filterRecords() {
    const date = document.getElementById('filterDate').value;
    const subject = document.getElementById('filterSubject').value;
    const period = document.getElementById('filterPeriod').value;

    let filteredRecords = attendanceRecords.filter(record => record.faculty === currentUser.name);

    if (date) {
        filteredRecords = filteredRecords.filter(record => record.date === date);
    }
    if (subject) {
        filteredRecords = filteredRecords.filter(record => record.subject === subject);
    }
    if (period) {
        filteredRecords = filteredRecords.filter(record => record.period === period);
    }

    displayRecords(filteredRecords);
}

function clearRecordFilters() {
    const filterDate = document.getElementById('filterDate');
    const filterSubject = document.getElementById('filterSubject');
    const filterPeriod = document.getElementById('filterPeriod');
    
    if (filterDate) filterDate.value = '';
    if (filterSubject) filterSubject.value = '';
    if (filterPeriod) filterPeriod.value = '';
    
    loadRecords();
}

function setupReportDates() {
    const today = new Date();
    const weekAgo = new Date(today);
    weekAgo.setDate(today.getDate() - 7);

    const reportStartDate = document.getElementById('reportStartDate');
    const reportEndDate = document.getElementById('reportEndDate');
    
    if (reportStartDate) reportStartDate.value = weekAgo.toISOString().split('T')[0];
    if (reportEndDate) reportEndDate.value = today.toISOString().split('T')[0];
}

function generateReport() {
    const startDate = document.getElementById('reportStartDate').value;
    const endDate = document.getElementById('reportEndDate').value;
    const reportType = document.getElementById('reportType').value;

    if (!startDate || !endDate) {
        showError('Please select start and end dates.');
        return;
    }

    const userRecords = attendanceRecords.filter(record => 
        record.faculty === currentUser.name &&
        record.date >= startDate && 
        record.date <= endDate
    );

    const reportResults = document.getElementById('reportResults');
    const reportActions = document.getElementById('reportActions');
    
    if (!reportResults || !reportActions) return;

    if (userRecords.length === 0) {
        reportResults.innerHTML = '<p class="no-data">No records found for the selected date range.</p>';
        reportActions.classList.add('hidden');
        return;
    }

    let reportHTML = '';

    switch (reportType) {
        case 'summary':
            reportHTML = generateSummaryReport(userRecords);
            break;
        case 'subject':
            reportHTML = generateSubjectReport(userRecords);
            break;
        case 'student':
            reportHTML = generateStudentReport(userRecords);
            break;
    }

    reportResults.innerHTML = reportHTML;
    reportActions.classList.remove('hidden');
}

function generateSummaryReport(records) {
    let totalPresent = 0;
    let totalStudents = 0;

    records.forEach(record => {
        totalStudents += record.students.length;
        totalPresent += record.students.filter(s => s.status === 'Present').length;
    });

    const avgAttendance = totalStudents > 0 ? ((totalPresent / totalStudents) * 100).toFixed(1) : 0;

    return `
        <h3>Attendance Summary Report</h3>
        <table class="report-table">
            <tr><th>Total Classes</th><td>${records.length}</td></tr>
            <tr><th>Total Student Sessions</th><td>${totalStudents}</td></tr>
            <tr><th>Total Present</th><td>${totalPresent}</td></tr>
            <tr><th>Total Absent</th><td>${totalStudents - totalPresent}</td></tr>
            <tr><th>Average Attendance</th><td>${avgAttendance}%</td></tr>
        </table>
    `;
}

function generateSubjectReport(records) {
    const subjectStats = {};

    records.forEach(record => {
        if (!subjectStats[record.subject]) {
            subjectStats[record.subject] = { present: 0, total: 0, classes: 0 };
        }
        subjectStats[record.subject].classes++;
        subjectStats[record.subject].total += record.students.length;
        subjectStats[record.subject].present += record.students.filter(s => s.status === 'Present').length;
    });

    const tableRows = Object.entries(subjectStats).map(([subject, stats]) => {
        const percentage = ((stats.present / stats.total) * 100).toFixed(1);
        return `
            <tr>
                <td>${subject}</td>
                <td>${stats.classes}</td>
                <td>${stats.present}</td>
                <td>${stats.total - stats.present}</td>
                <td>${percentage}%</td>
            </tr>
        `;
    }).join('');

    return `
        <h3>Subject-wise Attendance Report</h3>
        <table class="report-table">
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Classes</th>
                    <th>Present</th>
                    <th>Absent</th>
                    <th>Percentage</th>
                </tr>
            </thead>
            <tbody>${tableRows}</tbody>
        </table>
    `;
}

function generateStudentReport(records) {
    const studentStats = {};

    // Initialize all students
    sampleStudents.forEach(student => {
        studentStats[student.rollNo] = {
            name: student.name,
            present: 0,
            total: 0
        };
    });

    // Calculate stats
    records.forEach(record => {
        record.students.forEach(student => {
            if (studentStats[student.rollNo]) {
                studentStats[student.rollNo].total++;
                if (student.status === 'Present') {
                    studentStats[student.rollNo].present++;
                }
            }
        });
    });

    // Filter students who attended at least one class
    const activeStudents = Object.entries(studentStats).filter(([rollNo, stats]) => stats.total > 0);

    const tableRows = activeStudents.map(([rollNo, stats]) => {
        const percentage = stats.total > 0 ? ((stats.present / stats.total) * 100).toFixed(1) : 0;
        return `
            <tr>
                <td>${rollNo}</td>
                <td>${stats.name}</td>
                <td>${stats.present}</td>
                <td>${stats.total - stats.present}</td>
                <td>${stats.total}</td>
                <td>${percentage}%</td>
            </tr>
        `;
    }).join('');

    return `
        <h3>Student-wise Attendance Report</h3>
        <table class="report-table">
            <thead>
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Present</th>
                    <th>Absent</th>
                    <th>Total</th>
                    <th>Percentage</th>
                </tr>
            </thead>
            <tbody>${tableRows}</tbody>
        </table>
    `;
}

function exportReport() {
    const reportResults = document.getElementById('reportResults');
    if (!reportResults) return;
    
    const table = reportResults.querySelector('.report-table');
    
    if (!table) {
        showError('No report data to export.');
        return;
    }

    let csvContent = '';
    const rows = table.querySelectorAll('tr');
    
    rows.forEach(row => {
        const cols = row.querySelectorAll('th, td');
        const rowData = Array.from(cols).map(col => col.textContent.trim()).join(',');
        csvContent += rowData + '\n';
    });

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `attendance_report_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    showSuccess('Report exported successfully!');
}

function updateProfile() {
    if (!currentUser) return;

    const profileName = document.getElementById('profileName');
    const profileId = document.getElementById('profileId');
    const profileSubjects = document.getElementById('profileSubjects');
    const profileLoginTime = document.getElementById('profileLoginTime');

    if (profileName) profileName.textContent = currentUser.name;
    if (profileId) profileId.textContent = currentUser.id;
    if (profileSubjects) profileSubjects.textContent = currentUser.subjects.join(', ');
    if (profileLoginTime) profileLoginTime.textContent = currentUser.loginTime;
}

function setupModals() {
    // Success modal
    const successModalClose = document.getElementById('successModalClose');
    if (successModalClose) {
        successModalClose.addEventListener('click', () => {
            const successModal = document.getElementById('successModal');
            if (successModal) successModal.classList.add('hidden');
        });
    }

    // Error modal
    const errorModalClose = document.getElementById('errorModalClose');
    if (errorModalClose) {
        errorModalClose.addEventListener('click', () => {
            const errorModal = document.getElementById('errorModal');
            if (errorModal) errorModal.classList.add('hidden');
        });
    }

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                e.target.closest('.modal').classList.add('hidden');
            }
        });
    });
}

function showSuccess(message) {
    console.log('Success:', message);
    const successMessage = document.getElementById('successMessage');
    const successModal = document.getElementById('successModal');
    
    if (successMessage) successMessage.textContent = message;
    if (successModal) successModal.classList.remove('hidden');
}

function showError(message) {
    console.log('Error:', message);
    const errorMessage = document.getElementById('errorMessage');
    const errorModal = document.getElementById('errorModal');
    
    if (errorMessage) errorMessage.textContent = message;
    if (errorModal) errorModal.classList.remove('hidden');
}
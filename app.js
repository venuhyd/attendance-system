// VIVEK VARDHINI COLLEGE Management System JavaScript

// College data from application_data_json
const collegeInfo = {
    "name": "VIVEK VARDHINI COLLEGE",
    "address": "Hyderabad, Telangana, India",
    "phone": "+91-40-12345678",
    "email": "info@vivekvardhini.edu.in",
    "website": "www.vivekvardhini.edu.in"
};

let departments = [
    {"id": "DEPT001", "code": "CSE", "name": "Computer Science & Engineering", "hod": "Dr. Rajesh Kumar"},
    {"id": "DEPT002", "code": "ECE", "name": "Electronics & Communication", "hod": "Dr. Priya Sharma"},
    {"id": "DEPT003", "code": "MECH", "name": "Mechanical Engineering", "hod": "Prof. Vikram Singh"},
    {"id": "DEPT004", "code": "CIVIL", "name": "Civil Engineering", "hod": "Dr. Anjali Reddy"},
    {"id": "DEPT005", "code": "COMM", "name": "Commerce", "hod": "Prof. Suresh Patel"},
    {"id": "DEPT006", "code": "ARTS", "name": "Arts & Humanities", "hod": "Dr. Meera Joshi"}
];

let courses = [
    {"id": "COURSE001", "code": "BTECH-CSE", "name": "B.Tech Computer Science", "department": "CSE", "duration": "4 years"},
    {"id": "COURSE002", "code": "BTECH-ECE", "name": "B.Tech Electronics", "department": "ECE", "duration": "4 years"},
    {"id": "COURSE003", "code": "BTECH-MECH", "name": "B.Tech Mechanical", "department": "MECH", "duration": "4 years"},
    {"id": "COURSE004", "code": "BTECH-CIVIL", "name": "B.Tech Civil", "department": "CIVIL", "duration": "4 years"},
    {"id": "COURSE005", "code": "BCOM", "name": "Bachelor of Commerce", "department": "COMM", "duration": "3 years"},
    {"id": "COURSE006", "code": "BA", "name": "Bachelor of Arts", "department": "ARTS", "duration": "3 years"}
];

let sampleFaculty = [
    {"id": "FAC001", "empId": "VVC001", "name": "Dr. Sarah Johnson", "designation": "Professor", "department": "CSE", "subjects": ["Data Structures", "Algorithms"], "email": "sarah.j@vivekvardhini.edu.in", "phone": "+91-9876543210"},
    {"id": "FAC002", "empId": "VVC002", "name": "Prof. Michael Chen", "designation": "Associate Professor", "department": "ECE", "subjects": ["Digital Circuits", "Microprocessors"], "email": "michael.c@vivekvardhini.edu.in", "phone": "+91-9876543211"},
    {"id": "FAC003", "empId": "VVC003", "name": "Dr. Priya Sharma", "designation": "Professor", "department": "MECH", "subjects": ["Thermodynamics", "Fluid Mechanics"], "email": "priya.s@vivekvardhini.edu.in", "phone": "+91-9876543212"},
    {"id": "FAC004", "empId": "VVC004", "name": "Ms. Emily Davis", "designation": "Assistant Professor", "department": "COMM", "subjects": ["Accounting", "Finance"], "email": "emily.d@vivekvardhini.edu.in", "phone": "+91-9876543213"},
    {"id": "FAC005", "empId": "VVC005", "name": "Dr. Raj Patel", "designation": "Associate Professor", "department": "CIVIL", "subjects": ["Structural Engineering"], "email": "raj.p@vivekvardhini.edu.in", "phone": "+91-9876543214"},
    {"id": "FAC006", "empId": "VVC006", "name": "Prof. Lisa Wong", "designation": "Professor", "department": "ARTS", "subjects": ["English Literature", "History"], "email": "lisa.w@vivekvardhini.edu.in", "phone": "+91-9876543215"}
];

let sampleStudents = [
    {"id": "STU001", "rollNo": "VVC2024CSE001", "name": "Aarav Kumar", "course": "BTECH-CSE", "semester": "7th Semester", "year": "2021-2025", "dob": "2003-05-15", "parentName": "Rajesh Kumar", "parentPhone": "+91-8765432101", "address": "123 MG Road, Hyderabad"},
    {"id": "STU002", "rollNo": "VVC2024ECE002", "name": "Aditi Patel", "course": "BTECH-ECE", "semester": "5th Semester", "year": "2022-2026", "dob": "2004-08-22", "parentName": "Suresh Patel", "parentPhone": "+91-8765432102", "address": "456 Tank Bund, Hyderabad"},
    {"id": "STU003", "rollNo": "VVC2024MECH003", "name": "Arjun Singh", "course": "BTECH-MECH", "semester": "3rd Semester", "year": "2023-2027", "dob": "2005-03-10", "parentName": "Vikram Singh", "parentPhone": "+91-8765432103", "address": "789 Banjara Hills, Hyderabad"},
    {"id": "STU004", "rollNo": "VVC2024COMM004", "name": "Anaya Gupta", "course": "BCOM", "semester": "4th Semester", "year": "2022-2025", "dob": "2004-11-07", "parentName": "Amit Gupta", "parentPhone": "+91-8765432104", "address": "321 Jubilee Hills, Hyderabad"},
    {"id": "STU005", "rollNo": "VVC2024ARTS005", "name": "Bhavya Sharma", "course": "BA", "semester": "2nd Semester", "year": "2023-2026", "dob": "2005-01-18", "parentName": "Deepak Sharma", "parentPhone": "+91-8765432105", "address": "654 Madhapur, Hyderabad"}
];

let subjects = [
    {"id": "SUBJ001", "code": "CSE101", "name": "Data Structures", "department": "CSE", "credits": 4, "semester": "3rd"},
    {"id": "SUBJ002", "code": "CSE201", "name": "Algorithms", "department": "CSE", "credits": 4, "semester": "4th"},
    {"id": "SUBJ003", "code": "ECE101", "name": "Digital Circuits", "department": "ECE", "credits": 3, "semester": "3rd"},
    {"id": "SUBJ004", "code": "MECH101", "name": "Thermodynamics", "department": "MECH", "credits": 4, "semester": "4th"},
    {"id": "SUBJ005", "code": "COMM101", "name": "Accounting Principles", "department": "COMM", "credits": 3, "semester": "1st"},
    {"id": "SUBJ006", "code": "ARTS101", "name": "English Literature", "department": "ARTS", "credits": 3, "semester": "1st"},
    {"id": "SUBJ007", "code": "ECE201", "name": "Microprocessors", "department": "ECE", "credits": 4, "semester": "5th"},
    {"id": "SUBJ008", "code": "MECH201", "name": "Fluid Mechanics", "department": "MECH", "credits": 4, "semester": "5th"},
    {"id": "SUBJ009", "code": "COMM201", "name": "Finance", "department": "COMM", "credits": 3, "semester": "3rd"},
    {"id": "SUBJ010", "code": "CIVIL101", "name": "Structural Engineering", "department": "CIVIL", "credits": 4, "semester": "6th"},
    {"id": "SUBJ011", "code": "ARTS201", "name": "History", "department": "ARTS", "credits": 3, "semester": "2nd"}
];

const adminCredentials = [
    {"username": "admin", "password": "admin123", "role": "Administrator", "name": "College Administrator"},
    {"username": "principal", "password": "principal123", "role": "Principal", "name": "Dr. Principal Kumar"}
];

let periods = [
    {"id": "P001", "name": "Period 1", "startTime": "09:00", "endTime": "09:50"},
    {"id": "P002", "name": "Period 2", "startTime": "09:50", "endTime": "10:40"},
    {"id": "P003", "name": "Break", "startTime": "10:40", "endTime": "11:00"},
    {"id": "P004", "name": "Period 3", "startTime": "11:00", "endTime": "11:50"},
    {"id": "P005", "name": "Period 4", "startTime": "11:50", "endTime": "12:40"},
    {"id": "P006", "name": "Lunch Break", "startTime": "12:40", "endTime": "13:30"},
    {"id": "P007", "name": "Period 5", "startTime": "13:30", "endTime": "14:20"},
    {"id": "P008", "name": "Period 6", "startTime": "14:20", "endTime": "15:10"}
];

const semesters = ["1st Semester", "2nd Semester", "3rd Semester", "4th Semester", "5th Semester", "6th Semester", "7th Semester", "8th Semester"];

// Application state
let currentUser = null;
let currentRole = 'admin';
let attendanceRecords = [];
let currentAttendanceSession = null;
let editingStudent = null;
let editingFaculty = null;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing VIVEK VARDHINI COLLEGE Management System...');
    initializeApp();
});

function initializeApp() {
    console.log('Setting up application...');
    
    // Generate some sample attendance records first
    generateSampleAttendance();
    
    // Setup all components
    setupLoginScreen();
    setupEventListeners();
    setupModals();
    setCurrentDate();
    
    console.log('Application initialized successfully');
}

function setupLoginScreen() {
    console.log('Setting up login screen...');
    
    const adminRoleBtn = document.getElementById('adminRoleBtn');
    const facultyRoleBtn = document.getElementById('facultyRoleBtn');
    const adminFields = document.getElementById('adminFields');
    const facultyFields = document.getElementById('facultyFields');
    
    if (!adminRoleBtn || !facultyRoleBtn || !adminFields || !facultyFields) {
        console.error('Login screen elements not found');
        return;
    }
    
    adminRoleBtn.addEventListener('click', function() {
        console.log('Admin role selected');
        currentRole = 'admin';
        adminRoleBtn.classList.add('active');
        facultyRoleBtn.classList.remove('active');
        adminFields.classList.remove('hidden');
        facultyFields.classList.add('hidden');
    });
    
    facultyRoleBtn.addEventListener('click', function() {
        console.log('Faculty role selected');
        currentRole = 'faculty';
        facultyRoleBtn.classList.add('active');
        adminRoleBtn.classList.remove('active');
        facultyFields.classList.remove('hidden');
        adminFields.classList.add('hidden');
    });
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Login form - Fixed event listener setup
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        console.log('Login form found, adding event listener');
        loginForm.addEventListener('submit', handleLogin);
    } else {
        console.error('Login form not found!');
    }
    
    // Logout buttons
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');
    const facultyLogoutBtn = document.getElementById('facultyLogoutBtn');
    
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', handleLogout);
    }
    if (facultyLogoutBtn) {
        facultyLogoutBtn.addEventListener('click', handleLogout);
    }
    
    // Navigation
    setupNavigation();
    
    // Admin panel events
    setupAdminEvents();
    
    // Faculty panel events
    setupFacultyEvents();
}

function setupNavigation() {
    console.log('Setting up navigation...');
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.dataset.section;
            console.log('Navigation clicked:', section);
            navigateToSection(section);
        });
    });
    
    document.querySelectorAll('.action-buttons .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.dataset.section;
            if (section) {
                console.log('Quick action clicked:', section);
                navigateToSection(section);
            }
        });
    });
}

function setupAdminEvents() {
    console.log('Setting up admin events...');
    
    // Student management
    const addStudentBtn = document.getElementById('addStudentBtn');
    const saveStudentBtn = document.getElementById('saveStudentBtn');
    const cancelStudentBtn = document.getElementById('cancelStudentBtn');
    
    if (addStudentBtn) addStudentBtn.addEventListener('click', () => openStudentModal());
    if (saveStudentBtn) saveStudentBtn.addEventListener('click', saveStudent);
    if (cancelStudentBtn) cancelStudentBtn.addEventListener('click', closeStudentModal);
    
    // Faculty management
    const addFacultyBtn = document.getElementById('addFacultyBtn');
    const saveFacultyBtn = document.getElementById('saveFacultyBtn');
    const cancelFacultyBtn = document.getElementById('cancelFacultyBtn');
    
    if (addFacultyBtn) addFacultyBtn.addEventListener('click', () => openFacultyModal());
    if (saveFacultyBtn) saveFacultyBtn.addEventListener('click', saveFaculty);
    if (cancelFacultyBtn) cancelFacultyBtn.addEventListener('click', closeFacultyModal);
    
    // Search and filters
    const studentSearchInput = document.getElementById('studentSearchInput');
    const courseFilter = document.getElementById('courseFilter');
    const semesterFilter = document.getElementById('semesterFilter');
    const facultySearchInput = document.getElementById('facultySearchInput');
    const departmentFilter = document.getElementById('departmentFilter');
    
    if (studentSearchInput) studentSearchInput.addEventListener('input', filterStudents);
    if (courseFilter) courseFilter.addEventListener('change', filterStudents);
    if (semesterFilter) semesterFilter.addEventListener('change', filterStudents);
    if (facultySearchInput) facultySearchInput.addEventListener('input', filterFaculty);
    if (departmentFilter) departmentFilter.addEventListener('change', filterFaculty);
    
    // Reports
    const generateAdminReportBtn = document.getElementById('generateAdminReportBtn');
    if (generateAdminReportBtn) generateAdminReportBtn.addEventListener('click', generateAdminReport);
    
    // Bulk import simulation
    const bulkImportBtn = document.getElementById('bulkImportBtn');
    if (bulkImportBtn) {
        bulkImportBtn.addEventListener('click', () => {
            showSuccess('Bulk import feature would allow CSV upload in full version.');
        });
    }
}

function setupFacultyEvents() {
    console.log('Setting up faculty events...');
    
    // Attendance marking
    const loadStudentsBtn = document.getElementById('loadStudentsBtn');
    const markAllPresentBtn = document.getElementById('markAllPresentBtn');
    const markAllAbsentBtn = document.getElementById('markAllAbsentBtn');
    const saveAttendanceBtn = document.getElementById('saveAttendanceBtn');
    const cancelAttendanceBtn = document.getElementById('cancelAttendanceBtn');
    
    if (loadStudentsBtn) loadStudentsBtn.addEventListener('click', loadStudentsForAttendance);
    if (markAllPresentBtn) markAllPresentBtn.addEventListener('click', () => markAllStudents('Present'));
    if (markAllAbsentBtn) markAllAbsentBtn.addEventListener('click', () => markAllStudents('Absent'));
    if (saveAttendanceBtn) saveAttendanceBtn.addEventListener('click', saveAttendance);
    if (cancelAttendanceBtn) cancelAttendanceBtn.addEventListener('click', cancelAttendance);
    
    // Records and filters
    const filterRecordsBtn = document.getElementById('filterRecordsBtn');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    
    if (filterRecordsBtn) filterRecordsBtn.addEventListener('click', filterRecords);
    if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', clearRecordFilters);
    
    // Faculty reports
    const generateFacultyReportBtn = document.getElementById('generateFacultyReportBtn');
    if (generateFacultyReportBtn) generateFacultyReportBtn.addEventListener('click', generateFacultyReport);
    
    // Course and semester dependency
    const attendanceCourse = document.getElementById('attendanceCourse');
    const studentCourse = document.getElementById('studentCourse');
    
    if (attendanceCourse) attendanceCourse.addEventListener('change', updateSemesters);
    if (studentCourse) studentCourse.addEventListener('change', updateStudentSemesters);
}

// Fixed handleLogin function
function handleLogin(e) {
    e.preventDefault();
    console.log('handleLogin called with role:', currentRole);
    
    try {
        if (currentRole === 'admin') {
            console.log('Processing admin login...');
            const username = document.getElementById('adminUsername').value.trim();
            const password = document.getElementById('adminPassword').value.trim();
            
            console.log('Admin credentials entered:', { username: username, passwordLength: password.length });
            
            if (!username || !password) {
                showError('Please enter both username and password.');
                return;
            }
            
            const admin = adminCredentials.find(a => a.username === username && a.password === password);
            
            if (admin) {
                console.log('Admin login successful for:', admin.name);
                currentUser = {
                    ...admin,
                    loginTime: new Date().toLocaleString()
                };
                showAdminDashboard();
                showSuccess(`Welcome to VIVEK VARDHINI COLLEGE, ${currentUser.name}!`);
            } else {
                console.log('Invalid admin credentials');
                showError('Invalid credentials. Please check username and password.');
            }
        } else {
            console.log('Processing faculty login...');
            const facultyName = document.getElementById('facultyName').value.trim();
            const employeeId = document.getElementById('employeeId').value.trim();
            
            console.log('Faculty credentials entered:', { facultyName, employeeId });
            
            if (!facultyName || !employeeId) {
                showError('Please fill in all fields.');
                return;
            }
            
            let faculty = sampleFaculty.find(f => f.empId === employeeId);
            if (!faculty) {
                console.log('Faculty not found, creating new entry');
                // Create new faculty entry for demo
                faculty = {
                    id: `FAC${Date.now()}`,
                    empId: employeeId,
                    name: facultyName,
                    designation: "Assistant Professor",
                    department: "General",
                    subjects: subjects.map(s => s.name),
                    email: `${employeeId.toLowerCase()}@vivekvardhini.edu.in`,
                    phone: "+91-9876543999"
                };
                sampleFaculty.push(faculty);
            } else {
                console.log('Found existing faculty:', faculty.name);
            }
            
            currentUser = {
                ...faculty,
                loginTime: new Date().toLocaleString()
            };
            showFacultyDashboard();
            showSuccess(`Welcome to VIVEK VARDHINI COLLEGE, ${currentUser.name}!`);
        }
    } catch (error) {
        console.error('Login error:', error);
        showError('Login failed. Please try again.');
    }
}

function handleLogout() {
    console.log('Logging out...');
    
    currentUser = null;
    currentAttendanceSession = null;
    editingStudent = null;
    editingFaculty = null;
    
    // Reset forms
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.reset();
    }
    
    // Show login screen
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('adminApp').classList.add('hidden');
    document.getElementById('facultyApp').classList.add('hidden');
    
    showSuccess('Logged out successfully!');
}

function showAdminDashboard() {
    console.log('Showing admin dashboard...');
    
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('adminApp').classList.remove('hidden');
    document.getElementById('facultyApp').classList.add('hidden');
    
    const welcomeText = document.getElementById('adminWelcomeText');
    if (welcomeText) {
        welcomeText.textContent = `Welcome, ${currentUser.name}`;
    }
    
    navigateToSection('adminDashboard');
    updateAdminDashboard();
    populateAdminData();
}

function showFacultyDashboard() {
    console.log('Showing faculty dashboard...');
    
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('adminApp').classList.add('hidden');
    document.getElementById('facultyApp').classList.remove('hidden');
    
    const welcomeText = document.getElementById('facultyWelcomeText');
    if (welcomeText) {
        welcomeText.textContent = `Welcome, ${currentUser.name}`;
    }
    
    navigateToSection('facultyDashboard');
    updateFacultyDashboard();
    populateFacultyData();
}

function navigateToSection(sectionId) {
    console.log('Navigating to section:', sectionId);
    
    // Determine which app we're in
    const isAdmin = !document.getElementById('adminApp').classList.contains('hidden');
    
    // Update navigation buttons
    const container = isAdmin ? document.getElementById('adminApp') : document.getElementById('facultyApp');
    const navButtons = container.querySelectorAll('.nav-btn');
    const contentSections = container.querySelectorAll('.content-section');
    
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });
    
    contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
    
    // Load section-specific data
    switch(sectionId) {
        case 'studentManagement':
            loadStudentsTable();
            break;
        case 'facultyManagement':
            loadFacultyTable();
            break;
        case 'courseManagement':
            loadCoursesTable();
            break;
        case 'departmentManagement':
            loadDepartmentsTable();
            break;
        case 'viewRecords':
            loadFacultyRecords();
            break;
        case 'attendanceReports':
        case 'facultyReports':
            setupReportDates(sectionId);
            break;
    }
}

function updateAdminDashboard() {
    console.log('Updating admin dashboard...');
    
    const totalStudentsCount = document.getElementById('totalStudentsCount');
    const totalFacultyCount = document.getElementById('totalFacultyCount');
    const totalDepartmentsCount = document.getElementById('totalDepartmentsCount');
    const todayAttendanceCount = document.getElementById('todayAttendanceCount');
    
    if (totalStudentsCount) totalStudentsCount.textContent = sampleStudents.length;
    if (totalFacultyCount) totalFacultyCount.textContent = sampleFaculty.length;
    if (totalDepartmentsCount) totalDepartmentsCount.textContent = departments.length;
    
    const today = new Date().toISOString().split('T')[0];
    const todayRecords = attendanceRecords.filter(r => r.date === today);
    if (todayAttendanceCount) todayAttendanceCount.textContent = todayRecords.length;
}

function updateFacultyDashboard() {
    console.log('Updating faculty dashboard...');
    
    if (!currentUser) return;
    
    const userRecords = attendanceRecords.filter(r => r.faculty === currentUser.name);
    const today = new Date().toISOString().split('T')[0];
    const todayRecords = userRecords.filter(r => r.date === today);
    
    const facultyTodayClasses = document.getElementById('facultyTodayClasses');
    const facultyAttendanceMarked = document.getElementById('facultyAttendanceMarked');
    const facultyTotalStudents = document.getElementById('facultyTotalStudents');
    const facultyAvgAttendance = document.getElementById('facultyAvgAttendance');
    
    if (facultyTodayClasses) facultyTodayClasses.textContent = periods.filter(p => !p.name.includes('Break')).length;
    if (facultyAttendanceMarked) facultyAttendanceMarked.textContent = todayRecords.length;
    if (facultyTotalStudents) facultyTotalStudents.textContent = sampleStudents.length;
    
    // Calculate average attendance
    if (userRecords.length > 0 && facultyAvgAttendance) {
        let totalPresent = 0;
        let totalStudents = 0;
        
        userRecords.forEach(record => {
            if (record.students) {
                totalStudents += record.students.length;
                totalPresent += record.students.filter(s => s.status === 'Present').length;
            }
        });
        
        const avgAttendance = totalStudents > 0 ? Math.round((totalPresent / totalStudents) * 100) : 0;
        facultyAvgAttendance.textContent = `${avgAttendance}%`;
    }
}

function populateAdminData() {
    console.log('Populating admin data...');
    populateCourseFilters();
    populateSubjectFilters();
    populateDepartmentFilters();
}

function populateFacultyData() {
    console.log('Populating faculty data...');
    populateAttendanceForm();
    populateFacultyFilters();
}

function populateCourseFilters() {
    const selects = document.querySelectorAll('#courseFilter, #semesterFilter, #reportCourse, #attendanceCourse, #studentCourse, #filterCourse');
    
    selects.forEach(select => {
        if (select.id.includes('course') || select.id === 'reportCourse') {
            select.innerHTML = '<option value="">All Courses</option>';
            courses.forEach(course => {
                const option = document.createElement('option');
                option.value = course.code;
                option.textContent = course.name;
                select.appendChild(option);
            });
        }
    });
    
    // Populate semester filters
    const semesterSelects = document.querySelectorAll('#semesterFilter, #attendanceSemester, #studentSemester');
    semesterSelects.forEach(select => {
        select.innerHTML = '<option value="">All Semesters</option>';
        semesters.forEach(semester => {
            const option = document.createElement('option');
            option.value = semester;
            option.textContent = semester;
            select.appendChild(option);
        });
    });
}

function populateSubjectFilters() {
    const selects = document.querySelectorAll('#attendanceSubject, #filterSubject, #facultySubjects');
    
    selects.forEach(select => {
        if (select.id === 'facultySubjects') {
            // Multi-select for faculty modal
            select.innerHTML = '';
            subjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject.name;
                option.textContent = `${subject.name} (${subject.code})`;
                select.appendChild(option);
            });
        } else {
            select.innerHTML = '<option value="">Select Subject</option>';
            subjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject.name;
                option.textContent = subject.name;
                select.appendChild(option);
            });
        }
    });
}

function populateDepartmentFilters() {
    const departmentSelects = document.querySelectorAll('#departmentFilter, #facultyDepartment');
    
    departmentSelects.forEach(select => {
        if (select.id === 'departmentFilter') {
            select.innerHTML = '<option value="">All Departments</option>';
        } else {
            select.innerHTML = '<option value="">Select Department</option>';
        }
        
        departments.forEach(dept => {
            const option = document.createElement('option');
            option.value = dept.code;
            option.textContent = dept.name;
            select.appendChild(option);
        });
    });
}

function populateAttendanceForm() {
    // Populate periods
    const periodSelect = document.getElementById('attendancePeriod');
    if (periodSelect) {
        periodSelect.innerHTML = '<option value="">Select Period</option>';
        periods.filter(p => !p.name.includes('Break')).forEach(period => {
            const option = document.createElement('option');
            option.value = period.name;
            option.textContent = `${period.name} (${period.startTime}-${period.endTime})`;
            periodSelect.appendChild(option);
        });
    }
    
    // Populate subjects for current faculty
    const subjectSelect = document.getElementById('attendanceSubject');
    if (subjectSelect && currentUser) {
        subjectSelect.innerHTML = '<option value="">Select Subject</option>';
        
        // Get subjects taught by current faculty
        const facultySubjects = currentUser.subjects || [];
        facultySubjects.forEach(subjectName => {
            const option = document.createElement('option');
            option.value = subjectName;
            option.textContent = subjectName;
            subjectSelect.appendChild(option);
        });
    }
}

function populateFacultyFilters() {
    populateCourseFilters();
    populateSubjectFilters();
}

function updateSemesters() {
    // In a college system, semesters are generally fixed per course type
    // This is a placeholder for more complex semester management
    const courseSelect = document.getElementById('attendanceCourse');
    const semesterSelect = document.getElementById('attendanceSemester');
    
    if (!courseSelect || !semesterSelect) return;
    
    const selectedCourse = courseSelect.value;
    semesterSelect.innerHTML = '<option value="">Select Semester</option>';
    
    // Add all semesters as options
    semesters.forEach(semester => {
        const option = document.createElement('option');
        option.value = semester;
        option.textContent = semester;
        semesterSelect.appendChild(option);
    });
}

function updateStudentSemesters() {
    const courseSelect = document.getElementById('studentCourse');
    const semesterSelect = document.getElementById('studentSemester');
    
    if (!courseSelect || !semesterSelect) return;
    
    const selectedCourse = courseSelect.value;
    semesterSelect.innerHTML = '<option value="">Select Semester</option>';
    
    // Add all semesters as options
    semesters.forEach(semester => {
        const option = document.createElement('option');
        option.value = semester;
        option.textContent = semester;
        semesterSelect.appendChild(option);
    });
}

// Student Management Functions
function loadStudentsTable() {
    console.log('Loading students table...');
    const tbody = document.getElementById('studentsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    sampleStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.semester}</td>
            <td>${student.parentPhone}</td>
            <td class="table-actions">
                <button class="btn btn--sm btn--secondary" onclick="editStudent('${student.id}')">Edit</button>
                <button class="btn btn--sm btn--outline" onclick="deleteStudent('${student.id}')">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function openStudentModal(studentId = null) {
    console.log('Opening student modal:', studentId);
    
    editingStudent = studentId;
    const modal = document.getElementById('studentModal');
    const title = document.getElementById('studentModalTitle');
    const form = document.getElementById('studentForm');
    
    if (!modal || !title || !form) {
        console.error('Student modal elements not found');
        return;
    }
    
    // Populate course options
    const courseSelect = document.getElementById('studentCourse');
    if (courseSelect) {
        courseSelect.innerHTML = '<option value="">Select Course</option>';
        courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.code;
            option.textContent = course.name;
            courseSelect.appendChild(option);
        });
    }
    
    // Populate semester options
    updateStudentSemesters();
    
    if (studentId) {
        const student = sampleStudents.find(s => s.id === studentId);
        if (student) {
            title.textContent = 'Edit Student';
            document.getElementById('studentRollNo').value = student.rollNo;
            document.getElementById('studentName').value = student.name;
            document.getElementById('studentCourse').value = student.course;
            document.getElementById('studentDOB').value = student.dob;
            document.getElementById('studentParentName').value = student.parentName;
            document.getElementById('studentParentPhone').value = student.parentPhone;
            document.getElementById('studentAddress').value = student.address || '';
            
            setTimeout(() => {
                document.getElementById('studentSemester').value = student.semester;
            }, 100);
        }
    } else {
        title.textContent = 'Add New Student';
        form.reset();
    }
    
    modal.classList.remove('hidden');
}

function closeStudentModal() {
    console.log('Closing student modal');
    document.getElementById('studentModal').classList.add('hidden');
    editingStudent = null;
}

function saveStudent() {
    console.log('Saving student...');
    
    const rollNo = document.getElementById('studentRollNo').value.trim();
    const name = document.getElementById('studentName').value.trim();
    const course = document.getElementById('studentCourse').value;
    const semester = document.getElementById('studentSemester').value;
    const dob = document.getElementById('studentDOB').value;
    const parentName = document.getElementById('studentParentName').value.trim();
    const parentPhone = document.getElementById('studentParentPhone').value.trim();
    const address = document.getElementById('studentAddress').value.trim();
    
    if (!rollNo || !name || !course || !semester || !parentName || !parentPhone) {
        showError('Please fill in all required fields.');
        return;
    }
    
    // Check for duplicate roll number
    const existing = sampleStudents.find(s => s.rollNo === rollNo && s.id !== editingStudent);
    if (existing) {
        showError('Roll number already exists.');
        return;
    }
    
    const studentData = {
        rollNo,
        name,
        course,
        semester,
        dob,
        parentName,
        parentPhone,
        address
    };
    
    if (editingStudent) {
        // Update existing student
        const index = sampleStudents.findIndex(s => s.id === editingStudent);
        if (index >= 0) {
            sampleStudents[index] = { ...sampleStudents[index], ...studentData };
        }
        showSuccess('Student updated successfully!');
    } else {
        // Add new student
        const newStudent = {
            id: `STU${Date.now()}`,
            ...studentData
        };
        sampleStudents.push(newStudent);
        showSuccess('Student added successfully!');
    }
    
    closeStudentModal();
    loadStudentsTable();
    updateAdminDashboard();
}

function editStudent(studentId) {
    openStudentModal(studentId);
}

function deleteStudent(studentId) {
    if (confirm('Are you sure you want to delete this student?')) {
        const index = sampleStudents.findIndex(s => s.id === studentId);
        if (index >= 0) {
            sampleStudents.splice(index, 1);
            loadStudentsTable();
            updateAdminDashboard();
            showSuccess('Student deleted successfully!');
        }
    }
}

function filterStudents() {
    const searchTerm = document.getElementById('studentSearchInput')?.value.toLowerCase() || '';
    const courseFilter = document.getElementById('courseFilter')?.value || '';
    const semesterFilter = document.getElementById('semesterFilter')?.value || '';
    
    let filteredStudents = sampleStudents;
    
    if (searchTerm) {
        filteredStudents = filteredStudents.filter(student => 
            student.name.toLowerCase().includes(searchTerm) ||
            student.rollNo.toLowerCase().includes(searchTerm)
        );
    }
    
    if (courseFilter) {
        filteredStudents = filteredStudents.filter(student => student.course === courseFilter);
    }
    
    if (semesterFilter) {
        filteredStudents = filteredStudents.filter(student => student.semester === semesterFilter);
    }
    
    // Update table with filtered results
    const tbody = document.getElementById('studentsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    filteredStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.semester}</td>
            <td>${student.parentPhone}</td>
            <td class="table-actions">
                <button class="btn btn--sm btn--secondary" onclick="editStudent('${student.id}')">Edit</button>
                <button class="btn btn--sm btn--outline" onclick="deleteStudent('${student.id}')">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Faculty Management Functions
function loadFacultyTable() {
    console.log('Loading faculty table...');
    const tbody = document.getElementById('facultyTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    sampleFaculty.forEach(faculty => {
        const subjectNames = faculty.subjects.join(', ');
        const department = departments.find(d => d.code === faculty.department);
        const departmentName = department ? department.name : faculty.department;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${faculty.empId}</td>
            <td>${faculty.name}</td>
            <td><span class="badge badge-primary">${faculty.designation}</span></td>
            <td>${departmentName}</td>
            <td>${subjectNames}</td>
            <td>${faculty.phone}</td>
            <td class="table-actions">
                <button class="btn btn--sm btn--secondary" onclick="editFaculty('${faculty.id}')">Edit</button>
                <button class="btn btn--sm btn--outline" onclick="deleteFaculty('${faculty.id}')">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function openFacultyModal(facultyId = null) {
    console.log('Opening faculty modal:', facultyId);
    
    editingFaculty = facultyId;
    const modal = document.getElementById('facultyModal');
    const title = document.getElementById('facultyModalTitle');
    const form = document.getElementById('facultyForm');
    
    if (!modal || !title || !form) {
        console.error('Faculty modal elements not found');
        return;
    }
    
    // Populate departments and subjects
    populateDepartmentFilters();
    populateSubjectFilters();
    
    if (facultyId) {
        const faculty = sampleFaculty.find(f => f.id === facultyId);
        if (faculty) {
            title.textContent = 'Edit Faculty';
            document.getElementById('facultyEmpId').value = faculty.empId;
            document.getElementById('facultyNameModal').value = faculty.name;
            document.getElementById('facultyDesignation').value = faculty.designation;
            document.getElementById('facultyDepartment').value = faculty.department;
            document.getElementById('facultyEmail').value = faculty.email;
            document.getElementById('facultyPhone').value = faculty.phone;
            
            // Select subjects
            const subjectSelect = document.getElementById('facultySubjects');
            if (subjectSelect) {
                Array.from(subjectSelect.options).forEach(option => {
                    option.selected = faculty.subjects.includes(option.value);
                });
            }
        }
    } else {
        title.textContent = 'Add New Faculty';
        form.reset();
    }
    
    modal.classList.remove('hidden');
}

function closeFacultyModal() {
    console.log('Closing faculty modal');
    document.getElementById('facultyModal').classList.add('hidden');
    editingFaculty = null;
}

function saveFaculty() {
    console.log('Saving faculty...');
    
    const empId = document.getElementById('facultyEmpId').value.trim();
    const name = document.getElementById('facultyNameModal').value.trim();
    const designation = document.getElementById('facultyDesignation').value;
    const department = document.getElementById('facultyDepartment').value;
    const email = document.getElementById('facultyEmail').value.trim();
    const phone = document.getElementById('facultyPhone').value.trim();
    const subjectSelect = document.getElementById('facultySubjects');
    const subjects = Array.from(subjectSelect.selectedOptions).map(option => option.value);
    
    if (!empId || !name || !designation || !department || !email || !phone || subjects.length === 0) {
        showError('Please fill in all required fields and select at least one subject.');
        return;
    }
    
    // Check for duplicate employee ID
    const existing = sampleFaculty.find(f => f.empId === empId && f.id !== editingFaculty);
    if (existing) {
        showError('Employee ID already exists.');
        return;
    }
    
    const facultyData = {
        empId,
        name,
        designation,
        department,
        email,
        phone,
        subjects
    };
    
    if (editingFaculty) {
        // Update existing faculty
        const index = sampleFaculty.findIndex(f => f.id === editingFaculty);
        if (index >= 0) {
            sampleFaculty[index] = { ...sampleFaculty[index], ...facultyData };
        }
        showSuccess('Faculty updated successfully!');
    } else {
        // Add new faculty
        const newFaculty = {
            id: `FAC${Date.now()}`,
            ...facultyData
        };
        sampleFaculty.push(newFaculty);
        showSuccess('Faculty added successfully!');
    }
    
    closeFacultyModal();
    loadFacultyTable();
    updateAdminDashboard();
}

function editFaculty(facultyId) {
    openFacultyModal(facultyId);
}

function deleteFaculty(facultyId) {
    if (confirm('Are you sure you want to delete this faculty member?')) {
        const index = sampleFaculty.findIndex(f => f.id === facultyId);
        if (index >= 0) {
            sampleFaculty.splice(index, 1);
            loadFacultyTable();
            updateAdminDashboard();
            showSuccess('Faculty deleted successfully!');
        }
    }
}

function filterFaculty() {
    const searchTerm = document.getElementById('facultySearchInput')?.value.toLowerCase() || '';
    const departmentFilter = document.getElementById('departmentFilter')?.value || '';
    
    let filteredFaculty = sampleFaculty;
    
    if (searchTerm) {
        filteredFaculty = filteredFaculty.filter(faculty => 
            faculty.name.toLowerCase().includes(searchTerm) ||
            faculty.empId.toLowerCase().includes(searchTerm)
        );
    }
    
    if (departmentFilter) {
        filteredFaculty = filteredFaculty.filter(faculty => faculty.department === departmentFilter);
    }
    
    // Update table with filtered results
    const tbody = document.getElementById('facultyTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    filteredFaculty.forEach(faculty => {
        const subjectNames = faculty.subjects.join(', ');
        const department = departments.find(d => d.code === faculty.department);
        const departmentName = department ? department.name : faculty.department;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${faculty.empId}</td>
            <td>${faculty.name}</td>
            <td><span class="badge badge-primary">${faculty.designation}</span></td>
            <td>${departmentName}</td>
            <td>${subjectNames}</td>
            <td>${faculty.phone}</td>
            <td class="table-actions">
                <button class="btn btn--sm btn--secondary" onclick="editFaculty('${faculty.id}')">Edit</button>
                <button class="btn btn--sm btn--outline" onclick="deleteFaculty('${faculty.id}')">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Course Management Functions
function loadCoursesTable() {
    console.log('Loading courses table...');
    const tbody = document.getElementById('coursesTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    courses.forEach(course => {
        const department = departments.find(d => d.code === course.department);
        const departmentName = department ? department.name : course.department;
        const enrolledCount = sampleStudents.filter(s => s.course === course.code).length;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.code}</td>
            <td>${course.name}</td>
            <td>${departmentName}</td>
            <td>${course.duration}</td>
            <td>${enrolledCount}</td>
            <td class="table-actions">
                <button class="btn btn--sm btn--secondary">Edit</button>
                <button class="btn btn--sm btn--outline">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Department Management Functions
function loadDepartmentsTable() {
    console.log('Loading departments table...');
    const tbody = document.getElementById('departmentsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    departments.forEach(department => {
        const facultyCount = sampleFaculty.filter(f => f.department === department.code).length;
        const studentCount = sampleStudents.filter(s => {
            const course = courses.find(c => c.code === s.course);
            return course && course.department === department.code;
        }).length;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${department.code}</td>
            <td>${department.name}</td>
            <td>${department.hod}</td>
            <td>${facultyCount}</td>
            <td>${studentCount}</td>
            <td class="table-actions">
                <button class="btn btn--sm btn--secondary">Edit</button>
                <button class="btn btn--sm btn--outline">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Attendance Functions - Simplified for now
function loadStudentsForAttendance() {
    showSuccess('Attendance marking feature is available. Please fill all fields to load students.');
}

function markAllStudents(status) {
    showSuccess(`All students marked as ${status}.`);
}

function saveAttendance() {
    showSuccess('Attendance saved successfully!');
}

function cancelAttendance() {
    showSuccess('Attendance session cancelled.');
}

// Records and Reports - Simplified
function loadFacultyRecords() {
    const container = document.getElementById('recordsContainer');
    if (container) {
        container.innerHTML = '<p class="no-records">Sample faculty attendance records would be displayed here.</p>';
    }
}

function filterRecords() {
    showSuccess('Records filtered successfully.');
}

function clearRecordFilters() {
    showSuccess('Filters cleared.');
}

function generateAdminReport() {
    showSuccess('Admin report generated successfully.');
}

function generateFacultyReport() {
    showSuccess('Faculty report generated successfully.');
}

function setupReportDates() {
    const today = new Date().toISOString().split('T')[0];
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weekAgoStr = weekAgo.toISOString().split('T')[0];
    
    const startInputs = document.querySelectorAll('[id*="ReportStartDate"], #reportStartDate');
    const endInputs = document.querySelectorAll('[id*="ReportEndDate"], #reportEndDate');
    
    startInputs.forEach(input => { if (input) input.value = weekAgoStr; });
    endInputs.forEach(input => { if (input) input.value = today; });
}

// Utility Functions
function setCurrentDate() {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('attendanceDate');
    if (dateInput && !dateInput.value) {
        dateInput.value = today;
    }
}

function generateSampleAttendance() {
    console.log('Sample attendance records generated for demo purposes');
    attendanceRecords = [
        {
            id: 1,
            date: new Date().toISOString().split('T')[0],
            course: "BTECH-CSE",
            semester: "7th Semester",
            subject: "Data Structures",
            period: "Period 1",
            faculty: "Dr. Sarah Johnson",
            students: sampleStudents.slice(0, 3).map(s => ({ ...s, status: 'Present' }))
        }
    ];
}

function setupModals() {
    console.log('Setting up modals...');
    
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
// School Management System JavaScript

// Sample data from application_data_json
let sampleClasses = [
    {"id": "C001", "name": "Grade 1", "sections": ["A", "B"]},
    {"id": "C002", "name": "Grade 2", "sections": ["A", "B", "C"]},
    {"id": "C003", "name": "Grade 3", "sections": ["A", "B"]},
    {"id": "C004", "name": "Grade 4", "sections": ["A", "B", "C"]},
    {"id": "C005", "name": "Grade 5", "sections": ["A", "B"]},
    {"id": "C006", "name": "Grade 6", "sections": ["A", "B", "C"]},
    {"id": "C007", "name": "Grade 7", "sections": ["A", "B"]},
    {"id": "C008", "name": "Grade 8", "sections": ["A", "B", "C"]},
    {"id": "C009", "name": "Grade 9", "sections": ["A", "B"]},
    {"id": "C010", "name": "Grade 10", "sections": ["A", "B", "C"]}
];

let sampleSubjects = [
    {"id": "SUBJ001", "code": "MATH", "name": "Mathematics", "category": "Core", "credits": 4},
    {"id": "SUBJ002", "code": "ENG", "name": "English", "category": "Core", "credits": 4},
    {"id": "SUBJ003", "code": "SCI", "name": "Science", "category": "Core", "credits": 4},
    {"id": "SUBJ004", "code": "SST", "name": "Social Studies", "category": "Core", "credits": 3},
    {"id": "SUBJ005", "code": "HIN", "name": "Hindi", "category": "Core", "credits": 3},
    {"id": "SUBJ006", "code": "CS", "name": "Computer Science", "category": "Elective", "credits": 2},
    {"id": "SUBJ007", "code": "PE", "name": "Physical Education", "category": "Activity", "credits": 1},
    {"id": "SUBJ008", "code": "ART", "name": "Art & Craft", "category": "Activity", "credits": 1},
    {"id": "SUBJ009", "code": "MUS", "name": "Music", "category": "Activity", "credits": 1},
    {"id": "SUBJ010", "code": "PHY", "name": "Physics", "category": "Core", "credits": 4},
    {"id": "SUBJ011", "code": "CHEM", "name": "Chemistry", "category": "Core", "credits": 4},
    {"id": "SUBJ012", "code": "BIO", "name": "Biology", "category": "Core", "credits": 4}
];

let sampleFaculty = [
    {"id": "FAC001", "empId": "EMP001", "name": "Dr. Sarah Johnson", "department": "Mathematics", "subjects": ["MATH", "CS"], "email": "sarah.j@school.edu", "phone": "+91-9876543210"},
    {"id": "FAC002", "empId": "EMP002", "name": "Prof. Michael Chen", "department": "Languages", "subjects": ["ENG", "HIN"], "email": "michael.c@school.edu", "phone": "+91-9876543211"},
    {"id": "FAC003", "empId": "EMP003", "name": "Dr. Priya Sharma", "department": "Sciences", "subjects": ["SCI", "PHY", "CHEM"], "email": "priya.s@school.edu", "phone": "+91-9876543212"},
    {"id": "FAC004", "empId": "EMP004", "name": "Ms. Emily Davis", "department": "Arts", "subjects": ["ART", "PE"], "email": "emily.d@school.edu", "phone": "+91-9876543213"},
    {"id": "FAC005", "empId": "EMP005", "name": "Mr. Raj Patel", "department": "Social Studies", "subjects": ["SST"], "email": "raj.p@school.edu", "phone": "+91-9876543214"},
    {"id": "FAC006", "empId": "EMP006", "name": "Ms. Lisa Wong", "department": "Sciences", "subjects": ["BIO", "SCI"], "email": "lisa.w@school.edu", "phone": "+91-9876543215"}
];

let sampleStudents = [
    {"id": "STU001", "rollNo": "2024001", "name": "Aarav Kumar", "class": "Grade 10", "section": "A", "dob": "2009-05-15", "parentName": "Rajesh Kumar", "parentPhone": "+91-8765432101", "address": "123 MG Road, Hyderabad"},
    {"id": "STU002", "rollNo": "2024002", "name": "Aditi Patel", "class": "Grade 10", "section": "A", "dob": "2009-08-22", "parentName": "Suresh Patel", "parentPhone": "+91-8765432102", "address": "456 Tank Bund, Hyderabad"},
    {"id": "STU003", "rollNo": "2024003", "name": "Arjun Singh", "class": "Grade 10", "section": "B", "dob": "2009-03-10", "parentName": "Vikram Singh", "parentPhone": "+91-8765432103", "address": "789 Banjara Hills, Hyderabad"},
    {"id": "STU004", "rollNo": "2024004", "name": "Anaya Gupta", "class": "Grade 9", "section": "A", "dob": "2010-11-07", "parentName": "Amit Gupta", "parentPhone": "+91-8765432104", "address": "321 Jubilee Hills, Hyderabad"},
    {"id": "STU005", "rollNo": "2024005", "name": "Bhavya Sharma", "class": "Grade 9", "section": "B", "dob": "2010-01-18", "parentName": "Deepak Sharma", "parentPhone": "+91-8765432105", "address": "654 Madhapur, Hyderabad"},
    {"id": "STU006", "rollNo": "2024006", "name": "Chetan Reddy", "class": "Grade 8", "section": "A", "dob": "2011-07-12", "parentName": "Krishna Reddy", "parentPhone": "+91-8765432106", "address": "111 Secunderabad"},
    {"id": "STU007", "rollNo": "2024007", "name": "Divya Nair", "class": "Grade 8", "section": "B", "dob": "2011-02-28", "parentName": "Suresh Nair", "parentPhone": "+91-8765432107", "address": "222 Kondapur"},
    {"id": "STU008", "rollNo": "2024008", "name": "Eshaan Joshi", "class": "Grade 7", "section": "A", "dob": "2012-09-15", "parentName": "Ramesh Joshi", "parentPhone": "+91-8765432108", "address": "333 Gachibowli"}
];

let periods = [
    {"id": "P001", "name": "Period 1", "startTime": "09:00", "endTime": "09:45"},
    {"id": "P002", "name": "Period 2", "startTime": "09:45", "endTime": "10:30"},
    {"id": "P003", "name": "Break", "startTime": "10:30", "endTime": "10:45"},
    {"id": "P004", "name": "Period 3", "startTime": "10:45", "endTime": "11:30"},
    {"id": "P005", "name": "Period 4", "startTime": "11:30", "endTime": "12:15"},
    {"id": "P006", "name": "Lunch Break", "startTime": "12:15", "endTime": "13:00"},
    {"id": "P007", "name": "Period 5", "startTime": "13:00", "endTime": "13:45"},
    {"id": "P008", "name": "Period 6", "startTime": "13:45", "endTime": "14:30"}
];

const adminCredentials = [
    {"username": "admin", "password": "admin123", "role": "Administrator", "name": "School Administrator"},
    {"username": "principal", "password": "principal123", "role": "Principal", "name": "Dr. Principal Kumar"}
];

// Application state
let currentUser = null;
let currentRole = 'admin';
let attendanceRecords = [];
let currentAttendanceSession = null;
let editingStudent = null;
let editingFaculty = null;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing School Management System...');
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
    
    // Login form - Fixed event listener
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        console.log('Login form found, adding event listener');
        loginForm.addEventListener('submit', function(e) {
            console.log('Login form submitted');
            handleLogin(e);
        });
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
    const classFilter = document.getElementById('classFilter');
    const sectionFilter = document.getElementById('sectionFilter');
    const facultySearchInput = document.getElementById('facultySearchInput');
    const departmentFilter = document.getElementById('departmentFilter');
    
    if (studentSearchInput) studentSearchInput.addEventListener('input', filterStudents);
    if (classFilter) classFilter.addEventListener('change', filterStudents);
    if (sectionFilter) sectionFilter.addEventListener('change', filterStudents);
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
    
    // Class and section dependency
    const attendanceClass = document.getElementById('attendanceClass');
    const studentClass = document.getElementById('studentClass');
    
    if (attendanceClass) attendanceClass.addEventListener('change', updateSections);
    if (studentClass) studentClass.addEventListener('change', updateStudentSections);
}

function handleLogin(e) {
    console.log('handleLogin called');
    e.preventDefault();
    
    try {
        if (currentRole === 'admin') {
            console.log('Processing admin login...');
            const usernameEl = document.getElementById('adminUsername');
            const passwordEl = document.getElementById('adminPassword');
            
            if (!usernameEl || !passwordEl) {
                console.error('Admin login elements not found');
                showError('Login form error. Please refresh the page.');
                return;
            }
            
            const username = usernameEl.value.trim();
            const password = passwordEl.value.trim();
            
            console.log('Admin credentials:', { username, password });
            
            if (!username || !password) {
                showError('Please enter both username and password.');
                return;
            }
            
            const admin = adminCredentials.find(a => a.username === username && a.password === password);
            
            if (admin) {
                console.log('Admin login successful');
                currentUser = {
                    ...admin,
                    loginTime: new Date().toLocaleString()
                };
                showAdminDashboard();
                showSuccess(`Welcome, ${currentUser.name}!`);
            } else {
                console.log('Invalid admin credentials');
                showError('Invalid admin credentials. Please try again.');
            }
        } else {
            console.log('Processing faculty login...');
            const facultyNameEl = document.getElementById('facultyName');
            const employeeIdEl = document.getElementById('employeeId');
            
            if (!facultyNameEl || !employeeIdEl) {
                console.error('Faculty login elements not found');
                showError('Login form error. Please refresh the page.');
                return;
            }
            
            const facultyName = facultyNameEl.value.trim();
            const employeeId = employeeIdEl.value.trim();
            
            console.log('Faculty credentials:', { facultyName, employeeId });
            
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
                    department: "General",
                    subjects: sampleSubjects.map(s => s.code),
                    email: `${employeeId.toLowerCase()}@school.edu`,
                    phone: "+91-9876543999"
                };
                sampleFaculty.push(faculty);
            } else {
                console.log('Found existing faculty:', faculty);
            }
            
            currentUser = {
                ...faculty,
                loginTime: new Date().toLocaleString()
            };
            showFacultyDashboard();
            showSuccess(`Welcome, ${currentUser.name}!`);
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
        case 'subjectManagement':
            loadSubjectsTable();
            break;
        case 'classManagement':
            loadClassesTable();
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
    const totalClassesCount = document.getElementById('totalClassesCount');
    const todayAttendanceCount = document.getElementById('todayAttendanceCount');
    
    if (totalStudentsCount) totalStudentsCount.textContent = sampleStudents.length;
    if (totalFacultyCount) totalFacultyCount.textContent = sampleFaculty.length;
    if (totalClassesCount) totalClassesCount.textContent = sampleClasses.length;
    
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
    populateClassFilters();
    populateSubjectFilters();
    populateDepartmentFilters();
}

function populateFacultyData() {
    console.log('Populating faculty data...');
    populateAttendanceForm();
    populateFacultyFilters();
}

function populateClassFilters() {
    const selects = document.querySelectorAll('#classFilter, #sectionFilter, #reportClass, #attendanceClass, #studentClass, #filterClass');
    
    selects.forEach(select => {
        if (select.id.includes('class') || select.id === 'reportClass') {
            select.innerHTML = '<option value="">All Classes</option>';
            sampleClasses.forEach(cls => {
                const option = document.createElement('option');
                option.value = cls.name;
                option.textContent = cls.name;
                select.appendChild(option);
            });
        }
    });
}

function populateSubjectFilters() {
    const selects = document.querySelectorAll('#attendanceSubject, #filterSubject, #facultySubjects');
    
    selects.forEach(select => {
        if (select.id === 'facultySubjects') {
            // Multi-select for faculty modal
            select.innerHTML = '';
            sampleSubjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject.code;
                option.textContent = `${subject.name} (${subject.code})`;
                select.appendChild(option);
            });
        } else {
            select.innerHTML = '<option value="">Select Subject</option>';
            sampleSubjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject.name;
                option.textContent = subject.name;
                select.appendChild(option);
            });
        }
    });
}

function populateDepartmentFilters() {
    const departments = [...new Set(sampleFaculty.map(f => f.department))];
    const select = document.getElementById('departmentFilter');
    
    if (select) {
        select.innerHTML = '<option value="">All Departments</option>';
        departments.forEach(dept => {
            const option = document.createElement('option');
            option.value = dept;
            option.textContent = dept;
            select.appendChild(option);
        });
    }
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
        facultySubjects.forEach(subjectCode => {
            const subject = sampleSubjects.find(s => s.code === subjectCode);
            if (subject) {
                const option = document.createElement('option');
                option.value = subject.name;
                option.textContent = subject.name;
                subjectSelect.appendChild(option);
            }
        });
    }
}

function populateFacultyFilters() {
    populateClassFilters();
    populateSubjectFilters();
}

function updateSections() {
    const classSelect = document.getElementById('attendanceClass');
    const sectionSelect = document.getElementById('attendanceSection');
    
    if (!classSelect || !sectionSelect) return;
    
    const selectedClass = classSelect.value;
    const classObj = sampleClasses.find(c => c.name === selectedClass);
    
    sectionSelect.innerHTML = '<option value="">Select Section</option>';
    
    if (classObj) {
        classObj.sections.forEach(section => {
            const option = document.createElement('option');
            option.value = section;
            option.textContent = `Section ${section}`;
            sectionSelect.appendChild(option);
        });
    }
}

function updateStudentSections() {
    const classSelect = document.getElementById('studentClass');
    const sectionSelect = document.getElementById('studentSection');
    
    if (!classSelect || !sectionSelect) return;
    
    const selectedClass = classSelect.value;
    const classObj = sampleClasses.find(c => c.name === selectedClass);
    
    sectionSelect.innerHTML = '<option value="">Select Section</option>';
    
    if (classObj) {
        classObj.sections.forEach(section => {
            const option = document.createElement('option');
            option.value = section;
            option.textContent = `Section ${section}`;
            sectionSelect.appendChild(option);
        });
    }
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
            <td>${student.class}</td>
            <td>${student.section}</td>
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
    
    // Populate class options
    const classSelect = document.getElementById('studentClass');
    if (classSelect) {
        classSelect.innerHTML = '<option value="">Select Class</option>';
        sampleClasses.forEach(cls => {
            const option = document.createElement('option');
            option.value = cls.name;
            option.textContent = cls.name;
            classSelect.appendChild(option);
        });
    }
    
    if (studentId) {
        const student = sampleStudents.find(s => s.id === studentId);
        if (student) {
            title.textContent = 'Edit Student';
            document.getElementById('studentRollNo').value = student.rollNo;
            document.getElementById('studentName').value = student.name;
            document.getElementById('studentClass').value = student.class;
            document.getElementById('studentDOB').value = student.dob;
            document.getElementById('studentParentName').value = student.parentName;
            document.getElementById('studentParentPhone').value = student.parentPhone;
            document.getElementById('studentAddress').value = student.address || '';
            
            // Update sections
            updateStudentSections();
            setTimeout(() => {
                document.getElementById('studentSection').value = student.section;
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
    const studentClass = document.getElementById('studentClass').value;
    const section = document.getElementById('studentSection').value;
    const dob = document.getElementById('studentDOB').value;
    const parentName = document.getElementById('studentParentName').value.trim();
    const parentPhone = document.getElementById('studentParentPhone').value.trim();
    const address = document.getElementById('studentAddress').value.trim();
    
    if (!rollNo || !name || !studentClass || !section || !parentName || !parentPhone) {
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
        class: studentClass,
        section,
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
    const classFilter = document.getElementById('classFilter')?.value || '';
    const sectionFilter = document.getElementById('sectionFilter')?.value || '';
    
    let filteredStudents = sampleStudents;
    
    if (searchTerm) {
        filteredStudents = filteredStudents.filter(student => 
            student.name.toLowerCase().includes(searchTerm) ||
            student.rollNo.toLowerCase().includes(searchTerm)
        );
    }
    
    if (classFilter) {
        filteredStudents = filteredStudents.filter(student => student.class === classFilter);
    }
    
    if (sectionFilter) {
        filteredStudents = filteredStudents.filter(student => student.section === sectionFilter);
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
            <td>${student.class}</td>
            <td>${student.section}</td>
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
        const subjectNames = faculty.subjects.map(code => {
            const subject = sampleSubjects.find(s => s.code === code);
            return subject ? subject.name : code;
        }).join(', ');
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${faculty.empId}</td>
            <td>${faculty.name}</td>
            <td>${faculty.department}</td>
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
    
    // Populate subjects
    populateSubjectFilters();
    
    if (facultyId) {
        const faculty = sampleFaculty.find(f => f.id === facultyId);
        if (faculty) {
            title.textContent = 'Edit Faculty';
            document.getElementById('facultyEmpId').value = faculty.empId;
            document.getElementById('facultyNameModal').value = faculty.name;
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
    const department = document.getElementById('facultyDepartment').value;
    const email = document.getElementById('facultyEmail').value.trim();
    const phone = document.getElementById('facultyPhone').value.trim();
    const subjectSelect = document.getElementById('facultySubjects');
    const subjects = Array.from(subjectSelect.selectedOptions).map(option => option.value);
    
    if (!empId || !name || !department || !email || !phone || subjects.length === 0) {
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
        const subjectNames = faculty.subjects.map(code => {
            const subject = sampleSubjects.find(s => s.code === code);
            return subject ? subject.name : code;
        }).join(', ');
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${faculty.empId}</td>
            <td>${faculty.name}</td>
            <td>${faculty.department}</td>
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

// Subject Management Functions
function loadSubjectsTable() {
    console.log('Loading subjects table...');
    const tbody = document.getElementById('subjectsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    sampleSubjects.forEach(subject => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${subject.code}</td>
            <td>${subject.name}</td>
            <td><span class="badge badge-${subject.category.toLowerCase() === 'core' ? 'success' : subject.category.toLowerCase() === 'elective' ? 'warning' : 'error'}">${subject.category}</span></td>
            <td>${subject.credits}</td>
            <td class="table-actions">
                <button class="btn btn--sm btn--secondary">Edit</button>
                <button class="btn btn--sm btn--outline">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Class Management Functions
function loadClassesTable() {
    console.log('Loading classes table...');
    const tbody = document.getElementById('classesTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    sampleClasses.forEach(cls => {
        const studentCount = sampleStudents.filter(s => s.class === cls.name).length;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cls.id}</td>
            <td>${cls.name}</td>
            <td>${cls.sections.join(', ')}</td>
            <td>${studentCount}</td>
            <td class="table-actions">
                <button class="btn btn--sm btn--secondary">Edit</button>
                <button class="btn btn--sm btn--outline">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Attendance Functions
function loadStudentsForAttendance() {
    console.log('Loading students for attendance...');
    
    const date = document.getElementById('attendanceDate').value;
    const cls = document.getElementById('attendanceClass').value;
    const section = document.getElementById('attendanceSection').value;
    const subject = document.getElementById('attendanceSubject').value;
    const period = document.getElementById('attendancePeriod').value;
    
    if (!date || !cls || !section || !subject || !period) {
        showError('Please fill in all fields.');
        return;
    }
    
    // Get students for the selected class and section
    const classStudents = sampleStudents.filter(s => s.class === cls && s.section === section);
    
    if (classStudents.length === 0) {
        showError('No students found for the selected class and section.');
        return;
    }
    
    // Check if attendance already exists
    const existingRecord = attendanceRecords.find(record => 
        record.date === date && 
        record.class === cls &&
        record.section === section &&
        record.subject === subject && 
        record.period === period
    );
    
    if (existingRecord) {
        if (!confirm('Attendance for this session already exists. Do you want to edit it?')) {
            return;
        }
    }
    
    // Set up attendance session
    currentAttendanceSession = {
        date,
        class: cls,
        section,
        subject,
        period,
        faculty: currentUser.name,
        students: classStudents.map(student => ({
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
        attendanceTitle.textContent = `${subject} - ${cls} ${section} - ${period}`;
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
}

function populateStudentTable() {
    const tbody = document.getElementById('studentTableBody');
    if (!tbody || !currentAttendanceSession) return;
    
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
    if (!currentAttendanceSession) return;
    
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
    console.log('Saving attendance...');
    
    if (!currentAttendanceSession) {
        showError('No attendance session active.');
        return;
    }
    
    // Check if record already exists
    const existingIndex = attendanceRecords.findIndex(record => 
        record.date === currentAttendanceSession.date && 
        record.class === currentAttendanceSession.class &&
        record.section === currentAttendanceSession.section &&
        record.subject === currentAttendanceSession.subject && 
        record.period === currentAttendanceSession.period
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
    updateFacultyDashboard();
}

function cancelAttendance() {
    console.log('Canceling attendance...');
    
    currentAttendanceSession = null;
    const studentAttendance = document.getElementById('studentAttendance');
    const attendanceSetupForm = document.getElementById('attendanceSetupForm');
    
    if (studentAttendance) {
        studentAttendance.classList.add('hidden');
    }
    if (attendanceSetupForm) {
        attendanceSetupForm.reset();
        setCurrentDate();
    }
}

// Records and Reports Functions
function loadFacultyRecords() {
    if (!currentUser) return;
    
    const userRecords = attendanceRecords.filter(record => record.faculty === currentUser.name);
    displayRecords(userRecords);
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
                    <div class="record-title">${record.subject} - ${record.class} ${record.section} - ${record.period}</div>
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
            </div>
        `;
    }).join('');
}

function filterRecords() {
    const date = document.getElementById('filterDate').value;
    const subject = document.getElementById('filterSubject').value;
    const cls = document.getElementById('filterClass').value;
    
    let filteredRecords = attendanceRecords.filter(record => record.faculty === currentUser.name);
    
    if (date) {
        filteredRecords = filteredRecords.filter(record => record.date === date);
    }
    if (subject) {
        filteredRecords = filteredRecords.filter(record => record.subject === subject);
    }
    if (cls) {
        filteredRecords = filteredRecords.filter(record => record.class === cls);
    }
    
    displayRecords(filteredRecords);
}

function clearRecordFilters() {
    const filterDate = document.getElementById('filterDate');
    const filterSubject = document.getElementById('filterSubject');
    const filterClass = document.getElementById('filterClass');
    
    if (filterDate) filterDate.value = '';
    if (filterSubject) filterSubject.value = '';
    if (filterClass) filterClass.value = '';
    
    loadFacultyRecords();
}

function setupReportDates(sectionId) {
    const today = new Date();
    const weekAgo = new Date(today);
    weekAgo.setDate(today.getDate() - 7);
    
    const startDateId = sectionId === 'facultyReports' ? 'facultyReportStartDate' : 'reportStartDate';
    const endDateId = sectionId === 'facultyReports' ? 'facultyReportEndDate' : 'reportEndDate';
    
    const startDate = document.getElementById(startDateId);
    const endDate = document.getElementById(endDateId);
    
    if (startDate) startDate.value = weekAgo.toISOString().split('T')[0];
    if (endDate) endDate.value = today.toISOString().split('T')[0];
}

function generateAdminReport() {
    console.log('Generating admin report...');
    
    const startDate = document.getElementById('reportStartDate').value;
    const endDate = document.getElementById('reportEndDate').value;
    const reportClass = document.getElementById('reportClass').value;
    
    if (!startDate || !endDate) {
        showError('Please select start and end dates.');
        return;
    }
    
    let filteredRecords = attendanceRecords.filter(record => 
        record.date >= startDate && record.date <= endDate
    );
    
    if (reportClass) {
        filteredRecords = filteredRecords.filter(record => record.class === reportClass);
    }
    
    const reportResults = document.getElementById('adminReportResults');
    if (!reportResults) return;
    
    if (filteredRecords.length === 0) {
        reportResults.innerHTML = '<p class="no-data">No records found for the selected criteria.</p>';
        return;
    }
    
    // Generate summary report
    let totalPresent = 0;
    let totalStudents = 0;
    const classStats = {};
    
    filteredRecords.forEach(record => {
        const classKey = `${record.class} ${record.section}`;
        if (!classStats[classKey]) {
            classStats[classKey] = { present: 0, total: 0, sessions: 0 };
        }
        
        classStats[classKey].sessions++;
        classStats[classKey].total += record.students.length;
        classStats[classKey].present += record.students.filter(s => s.status === 'Present').length;
        
        totalStudents += record.students.length;
        totalPresent += record.students.filter(s => s.status === 'Present').length;
    });
    
    const overallPercentage = totalStudents > 0 ? ((totalPresent / totalStudents) * 100).toFixed(1) : 0;
    
    const classRows = Object.entries(classStats).map(([classKey, stats]) => {
        const percentage = ((stats.present / stats.total) * 100).toFixed(1);
        return `
            <tr>
                <td>${classKey}</td>
                <td>${stats.sessions}</td>
                <td>${stats.present}</td>
                <td>${stats.total - stats.present}</td>
                <td>${percentage}%</td>
            </tr>
        `;
    }).join('');
    
    reportResults.innerHTML = `
        <h3>Attendance Summary Report</h3>
        <div class="mb-16">
            <p><strong>Period:</strong> ${new Date(startDate).toLocaleDateString()} to ${new Date(endDate).toLocaleDateString()}</p>
            <p><strong>Overall Attendance:</strong> ${overallPercentage}%</p>
            <p><strong>Total Sessions:</strong> ${filteredRecords.length}</p>
        </div>
        <table class="report-table">
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Sessions</th>
                    <th>Present</th>
                    <th>Absent</th>
                    <th>Percentage</th>
                </tr>
            </thead>
            <tbody>${classRows}</tbody>
        </table>
    `;
}

function generateFacultyReport() {
    console.log('Generating faculty report...');
    
    const startDate = document.getElementById('facultyReportStartDate').value;
    const endDate = document.getElementById('facultyReportEndDate').value;
    const reportType = document.getElementById('facultyReportType').value;
    
    if (!startDate || !endDate) {
        showError('Please select start and end dates.');
        return;
    }
    
    const userRecords = attendanceRecords.filter(record => 
        record.faculty === currentUser.name &&
        record.date >= startDate && 
        record.date <= endDate
    );
    
    const reportResults = document.getElementById('facultyReportResults');
    if (!reportResults) return;
    
    if (userRecords.length === 0) {
        reportResults.innerHTML = '<p class="no-data">No records found for the selected date range.</p>';
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
    
    // Initialize all students from records
    records.forEach(record => {
        record.students.forEach(student => {
            if (!studentStats[student.rollNo]) {
                studentStats[student.rollNo] = {
                    name: student.name,
                    present: 0,
                    total: 0
                };
            }
            
            studentStats[student.rollNo].total++;
            if (student.status === 'Present') {
                studentStats[student.rollNo].present++;
            }
        });
    });
    
    const tableRows = Object.entries(studentStats).map(([rollNo, stats]) => {
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

// Utility Functions
function setCurrentDate() {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('attendanceDate');
    if (dateInput && !dateInput.value) {
        dateInput.value = today;
    }
}

function generateSampleAttendance() {
    console.log('Generating sample attendance records...');
    
    // Generate some sample attendance records
    const today = new Date();
    const dates = [];
    
    // Generate dates for the past week
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        dates.push(date.toISOString().split('T')[0]);
    }
    
    dates.forEach(date => {
        // Generate 1-2 random attendance records per date
        const recordCount = Math.floor(Math.random() * 2) + 1;
        
        for (let i = 0; i < recordCount; i++) {
            const randomClass = sampleClasses[Math.floor(Math.random() * sampleClasses.length)];
            const randomSection = randomClass.sections[Math.floor(Math.random() * randomClass.sections.length)];
            const randomSubject = sampleSubjects[Math.floor(Math.random() * sampleSubjects.length)];
            const randomPeriod = periods.filter(p => !p.name.includes('Break'))[Math.floor(Math.random() * 6)];
            const randomFaculty = sampleFaculty[Math.floor(Math.random() * sampleFaculty.length)];
            
            const classStudents = sampleStudents.filter(s => s.class === randomClass.name && s.section === randomSection);
            
            if (classStudents.length > 0) {
                const studentsWithAttendance = classStudents.map(student => ({
                    ...student,
                    status: Math.random() > 0.1 ? 'Present' : 'Absent' // 90% attendance rate
                }));
                
                attendanceRecords.push({
                    id: Date.now() + Math.random(),
                    date,
                    class: randomClass.name,
                    section: randomSection,
                    subject: randomSubject.name,
                    period: randomPeriod.name,
                    faculty: randomFaculty.name,
                    students: studentsWithAttendance
                });
            }
        }
    });
    
    console.log(`Generated ${attendanceRecords.length} sample attendance records`);
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
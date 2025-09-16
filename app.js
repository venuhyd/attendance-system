// VIVEK VARDHINI DEGREE COLLEGE Management System JavaScript

// College data from application_data_json
const collegeInfo = {
    "name": "VIVEK VARDHINI DEGREE COLLEGE",
    "shortName": "VVDC",
    "affiliation": "Affiliated to Osmania University, Hyderabad",
    "address": "Hyderabad, Telangana, India",
    "phone": "+91-40-12345678",
    "email": "info@vivekvardhini.edu.in",
    "website": "www.vivekvardhini.edu.in",
    "timings": {
        "start": "10:00",
        "end": "16:00",
        "academicEnd": "15:00",
        "display": "10:00 AM - 4:00 PM",
        "academicDisplay": "Academic Hours: 10:00 AM - 3:00 PM"
    }
};

const semesters = ["I", "II", "III", "IV", "V", "VI"];

const periods = [
    {"id": "P001", "name": "Period 1", "startTime": "10:00", "endTime": "10:50", "display": "10:00-10:50 AM", "duration": "50 min"},
    {"id": "P002", "name": "Period 2", "startTime": "10:50", "endTime": "11:40", "display": "10:50-11:40 AM", "duration": "50 min"},
    {"id": "P003", "name": "Period 3", "startTime": "11:40", "endTime": "12:30", "display": "11:40 AM-12:30 PM", "duration": "50 min"},
    {"id": "P004", "name": "Period 4", "startTime": "12:30", "endTime": "13:20", "display": "12:30-1:20 PM", "duration": "50 min"},
    {"id": "P005", "name": "Lunch Break", "startTime": "13:20", "endTime": "13:40", "display": "1:20-1:40 PM", "duration": "20 min", "isBreak": true},
    {"id": "P006", "name": "Period 5", "startTime": "13:40", "endTime": "14:30", "display": "1:40-2:30 PM", "duration": "50 min"},
    {"id": "P007", "name": "Extra Time", "startTime": "14:30", "endTime": "16:00", "display": "2:30-4:00 PM", "duration": "1.5 hours", "isExtra": true}
];

let departments = [
    {"id": "DEPT001", "code": "ARTS", "name": "Department of Arts & Humanities", "hod": "Dr. Priya Sharma"},
    {"id": "DEPT002", "code": "BBA", "name": "Department of Business Studies", "hod": "Prof. Rajesh Kumar"},
    {"id": "DEPT003", "code": "COMM", "name": "Department of Commerce", "hod": "Dr. Suresh Patel"},
    {"id": "DEPT004", "code": "SCI", "name": "Department of Sciences", "hod": "Dr. Anjali Reddy"}
];

let courses = [
    {"id": "COURSE001", "code": "BA-HIST", "name": "BA (History)", "department": "ARTS", "duration": "3 years", "specialization": "History"},
    {"id": "COURSE002", "code": "BA-ECON", "name": "BA (Economics)", "department": "ARTS", "duration": "3 years", "specialization": "Economics"},
    {"id": "COURSE003", "code": "BA-POLS", "name": "BA (Political Science)", "department": "ARTS", "duration": "3 years", "specialization": "Political Science"},
    {"id": "COURSE004", "code": "BBA-GEN", "name": "BBA (General)", "department": "BBA", "duration": "3 years", "specialization": "General"},
    {"id": "COURSE005", "code": "BBA-BA", "name": "BBA (Business Analytics)", "department": "BBA", "duration": "3 years", "specialization": "Business Analytics"},
    {"id": "COURSE006", "code": "BCOM-GEN", "name": "BCom (General)", "department": "COMM", "duration": "3 years", "specialization": "General"},
    {"id": "COURSE007", "code": "BCOM-CA", "name": "BCom (Computer Application)", "department": "COMM", "duration": "3 years", "specialization": "Computer Application"},
    {"id": "COURSE008", "code": "BCOM-FIN", "name": "BCom (Finance)", "department": "COMM", "duration": "3 years", "specialization": "Finance"},
    {"id": "COURSE009", "code": "BSC-LS", "name": "BSc (Life Sciences)", "department": "SCI", "duration": "3 years", "specialization": "Life Sciences"},
    {"id": "COURSE010", "code": "BSC-PS", "name": "BSc (Physical Sciences)", "department": "SCI", "duration": "3 years", "specialization": "Physical Sciences"}
];

const subjects = {
    "BA-HIST": ["Ancient Indian History", "Medieval Indian History", "Modern Indian History", "World History", "Historiography", "Research Methodology"],
    "BA-ECON": ["Microeconomics", "Macroeconomics", "Indian Economy", "Development Economics", "Economic Statistics", "International Economics"],
    "BA-POLS": ["Political Theory", "Comparative Politics", "International Relations", "Public Administration", "Indian Government & Politics", "Constitutional Law"],
    "BBA-GEN": ["Principles of Management", "Business Mathematics", "Financial Accounting", "Marketing Management", "Human Resource Management", "Business Law"],
    "BBA-BA": ["Data Analytics", "Statistics for Business", "Business Intelligence", "Digital Marketing", "E-commerce", "Operations Research"],
    "BCOM-GEN": ["Financial Accounting", "Business Mathematics", "Business Statistics", "Commercial Law", "Income Tax", "Cost Accounting"],
    "BCOM-CA": ["Computer Fundamentals", "Programming in C", "Database Management", "Web Technologies", "E-Commerce", "Computer Applications in Business"],
    "BCOM-FIN": ["Corporate Finance", "Investment Analysis", "Banking Operations", "Insurance", "Financial Markets", "Portfolio Management"],
    "BSC-LS": ["Botany", "Zoology", "Biochemistry", "Microbiology", "Genetics", "Environmental Biology"],
    "BSC-PS": ["Physics", "Chemistry", "Mathematics", "Electronics", "Applied Mathematics", "Analytical Chemistry"]
};

let sampleStudents = [
    {"id": "STU001", "rollNo": "VVC2024BA001", "name": "Aarav Kumar", "course": "BA-HIST", "department": "ARTS", "semester": "I", "academicYear": "2024-2025", "specialization": "History", "dob": "2003-05-15", "gender": "Male", "fatherName": "Rajesh Kumar", "motherName": "Sunita Kumar", "parentPhone": "+91-9876543210", "parentEmail": "rajesh.k@gmail.com", "studentPhone": "+91-8765432101", "studentEmail": "aarav.kumar@vivekvardhini.edu.in", "address": "123 MG Road, Hyderabad, Telangana - 500001", "bloodGroup": "O+", "category": "General", "admissionDate": "2024-07-15", "feeStatus": "Paid", "hostelRequired": "Yes", "photoUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", "attendancePercentage": 85.5, "totalClasses": 45, "attendedClasses": 38, "lastAttendance": "2024-09-15"},
    {"id": "STU002", "rollNo": "VVC2024BBA002", "name": "Aditi Patel", "course": "BBA-GEN", "department": "BBA", "semester": "II", "academicYear": "2024-2025", "specialization": "General", "dob": "2004-08-22", "gender": "Female", "fatherName": "Suresh Patel", "motherName": "Priya Patel", "parentPhone": "+91-9876543211", "parentEmail": "suresh.p@gmail.com", "studentPhone": "+91-8765432102", "studentEmail": "aditi.patel@vivekvardhini.edu.in", "address": "456 Tank Bund, Hyderabad, Telangana - 500002", "bloodGroup": "A+", "category": "OBC", "admissionDate": "2024-07-15", "feeStatus": "Paid", "hostelRequired": "No", "photoUrl": "https://images.unsplash.com/photo-1494790108755-2616b612b3fd?w=150&h=150&fit=crop&crop=face", "attendancePercentage": 92.3, "totalClasses": 52, "attendedClasses": 48, "lastAttendance": "2024-09-16"},
    {"id": "STU003", "rollNo": "VVC2024BCOM003", "name": "Arjun Singh", "course": "BCOM-CA", "department": "COMM", "semester": "III", "academicYear": "2023-2024", "specialization": "Computer Application", "dob": "2003-03-10", "gender": "Male", "fatherName": "Vikram Singh", "motherName": "Meera Singh", "parentPhone": "+91-9876543212", "parentEmail": "vikram.s@gmail.com", "studentPhone": "+91-8765432103", "studentEmail": "arjun.singh@vivekvardhini.edu.in", "address": "789 Banjara Hills, Hyderabad, Telangana - 500034", "bloodGroup": "B+", "category": "SC", "admissionDate": "2023-07-15", "feeStatus": "Pending", "hostelRequired": "Yes", "photoUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", "attendancePercentage": 78.9, "totalClasses": 57, "attendedClasses": 45, "lastAttendance": "2024-09-14"},
    {"id": "STU004", "rollNo": "VVC2024BSC004", "name": "Anaya Gupta", "course": "BSC-LS", "department": "SCI", "semester": "IV", "academicYear": "2022-2023", "specialization": "Life Sciences", "dob": "2002-11-07", "gender": "Female", "fatherName": "Amit Gupta", "motherName": "Kavita Gupta", "parentPhone": "+91-9876543213", "parentEmail": "amit.g@gmail.com", "studentPhone": "+91-8765432104", "studentEmail": "anaya.gupta@vivekvardhini.edu.in", "address": "321 Jubilee Hills, Hyderabad, Telangana - 500033", "bloodGroup": "AB+", "category": "ST", "admissionDate": "2022-07-15", "feeStatus": "Paid", "hostelRequired": "Yes", "photoUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", "attendancePercentage": 88.7, "totalClasses": 62, "attendedClasses": 55, "lastAttendance": "2024-09-16"},
    {"id": "STU005", "rollNo": "VVC2024BA005", "name": "Bhavya Sharma", "course": "BA-ECON", "department": "ARTS", "semester": "V", "academicYear": "2021-2022", "specialization": "Economics", "dob": "2001-01-18", "gender": "Female", "fatherName": "Deepak Sharma", "motherName": "Rekha Sharma", "parentPhone": "+91-9876543214", "parentEmail": "deepak.s@gmail.com", "studentPhone": "+91-8765432105", "studentEmail": "bhavya.sharma@vivekvardhini.edu.in", "address": "654 Madhapur, Hyderabad, Telangana - 500081", "bloodGroup": "O-", "category": "General", "admissionDate": "2021-07-15", "feeStatus": "Paid", "hostelRequired": "No", "photoUrl": "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face", "attendancePercentage": 95.2, "totalClasses": 63, "attendedClasses": 60, "lastAttendance": "2024-09-16"}
];

let sampleFaculty = [
    {"id": "FAC001", "empId": "VVC001", "name": "Dr. Priya Sharma", "designation": "Professor", "department": "ARTS", "subjects": ["Ancient Indian History", "Modern Indian History"], "email": "priya.s@vivekvardhini.edu.in", "phone": "+91-9876543210"},
    {"id": "FAC002", "empId": "VVC002", "name": "Prof. Rajesh Kumar", "designation": "Associate Professor", "department": "BBA", "subjects": ["Principles of Management", "Marketing Management"], "email": "rajesh.k@vivekvardhini.edu.in", "phone": "+91-9876543211"},
    {"id": "FAC003", "empId": "VVC003", "name": "Dr. Suresh Patel", "designation": "Professor", "department": "COMM", "subjects": ["Financial Accounting", "Corporate Finance"], "email": "suresh.p@vivekvardhini.edu.in", "phone": "+91-9876543212"},
    {"id": "FAC004", "empId": "VVC004", "name": "Dr. Anjali Reddy", "designation": "Professor", "department": "SCI", "subjects": ["Botany", "Environmental Biology"], "email": "anjali.r@vivekvardhini.edu.in", "phone": "+91-9876543213"}
];

const adminCredentials = [
    {"username": "admin", "password": "admin123", "role": "Administrator", "name": "VVDC Administrator"},
    {"username": "principal", "password": "principal123", "role": "Principal", "name": "VVDC Principal"}
];

// Application state
let currentUser = null;
let currentRole = 'admin';
let attendanceRecords = [];
let currentAttendanceSession = null;
let editingStudent = null;
let editingFaculty = null;
let editingDepartment = null;
let editingCourse = null;

// Face Recognition state
let cameraStream = null;
let capturedPhoto = null;
let recognitionHistory = [];
let currentDeviceId = null;
let availableCameras = [];

// Global functions that need to be accessible from HTML onclick handlers
window.editStudent = editStudent;
window.deleteStudent = deleteStudent;
window.editFaculty = editFaculty;
window.deleteFaculty = deleteFaculty;
window.editDepartment = editDepartment;
window.deleteDepartment = deleteDepartment;
window.editCourse = editCourse;
window.deleteCourse = deleteCourse;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing VIVEK VARDHINI DEGREE COLLEGE Management System...');
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
    
    adminRoleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Admin role selected');
        currentRole = 'admin';
        adminRoleBtn.classList.add('active');
        facultyRoleBtn.classList.remove('active');
        adminFields.classList.remove('hidden');
        facultyFields.classList.add('hidden');
    });
    
    facultyRoleBtn.addEventListener('click', function(e) {
        e.preventDefault();
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
    
    // Login form with robust error handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        console.log('Login form found, adding event listener');
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Login form submitted, calling handleLogin');
            try {
                handleLogin();
            } catch (error) {
                console.error('Login error caught:', error);
                showError('Login failed: ' + error.message);
            }
        });
    } else {
        console.error('Login form not found!');
    }
    
    // Also add click handler to login button as backup
    const loginButton = document.querySelector('#loginForm button[type="submit"]');
    if (loginButton) {
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Login button clicked directly');
            try {
                handleLogin();
            } catch (error) {
                console.error('Login button error:', error);
                showError('Login failed: ' + error.message);
            }
        });
    }
    
    // Logout buttons
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');
    const facultyLogoutBtn = document.getElementById('facultyLogoutBtn');
    
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
    if (facultyLogoutBtn) {
        facultyLogoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
    
    // Navigation - Enhanced to handle navigation properly
    setupNavigation();
    
    // Admin panel events
    setupAdminEvents();
    
    // Faculty panel events
    setupFacultyEvents();
    
    // Face Recognition events
    setupFaceRecognitionEvents();
}

function setupNavigation() {
    console.log('Setting up navigation...');
    
    // Handle nav buttons with proper event delegation
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        navContainer.addEventListener('click', function(e) {
            const navBtn = e.target.closest('.nav-btn');
            if (navBtn && navBtn.dataset.section) {
                e.preventDefault();
                const section = navBtn.dataset.section;
                console.log('Navigation clicked:', section);
                navigateToSection(section);
            }
        });
    }
    
    // Handle action buttons with proper event delegation
    const actionButtonsContainers = document.querySelectorAll('.action-buttons');
    actionButtonsContainers.forEach(container => {
        container.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn');
            if (btn && btn.dataset.section) {
                e.preventDefault();
                const section = btn.dataset.section;
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
    
    if (addStudentBtn) addStudentBtn.addEventListener('click', (e) => { e.preventDefault(); openStudentModal(); });
    if (saveStudentBtn) saveStudentBtn.addEventListener('click', (e) => { e.preventDefault(); saveStudent(); });
    if (cancelStudentBtn) cancelStudentBtn.addEventListener('click', (e) => { e.preventDefault(); closeStudentModal(); });
    
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
    if (generateAdminReportBtn) generateAdminReportBtn.addEventListener('click', (e) => { e.preventDefault(); generateAdminReport(); });
    
    // Bulk import simulation
    const bulkImportBtn = document.getElementById('bulkImportBtn');
    if (bulkImportBtn) {
        bulkImportBtn.addEventListener('click', (e) => {
            e.preventDefault();
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
    
    if (loadStudentsBtn) loadStudentsBtn.addEventListener('click', (e) => { e.preventDefault(); loadStudentsForAttendance(); });
    if (markAllPresentBtn) markAllPresentBtn.addEventListener('click', (e) => { e.preventDefault(); markAllStudents('Present'); });
    if (markAllAbsentBtn) markAllAbsentBtn.addEventListener('click', (e) => { e.preventDefault(); markAllStudents('Absent'); });
    if (saveAttendanceBtn) saveAttendanceBtn.addEventListener('click', (e) => { e.preventDefault(); saveAttendance(); });
    if (cancelAttendanceBtn) cancelAttendanceBtn.addEventListener('click', (e) => { e.preventDefault(); cancelAttendance(); });
}

function setupFaceRecognitionEvents() {
    console.log('Setting up face recognition events...');
    
    // Camera controls
    const requestCameraBtn = document.getElementById('requestCameraBtn');
    const capturePhotoBtn = document.getElementById('capturePhotoBtn');
    const switchCameraBtn = document.getElementById('switchCameraBtn');
    const stopCameraBtn = document.getElementById('stopCameraBtn');
    
    if (requestCameraBtn) requestCameraBtn.addEventListener('click', (e) => { e.preventDefault(); requestCameraAccess(); });
    if (capturePhotoBtn) capturePhotoBtn.addEventListener('click', (e) => { e.preventDefault(); capturePhoto(); });
    if (switchCameraBtn) switchCameraBtn.addEventListener('click', (e) => { e.preventDefault(); switchCamera(); });
    if (stopCameraBtn) stopCameraBtn.addEventListener('click', (e) => { e.preventDefault(); stopCamera(); });
    
    // Recognition controls
    const identifyStudentBtn = document.getElementById('identifyStudentBtn');
    const retakePhotoBtn = document.getElementById('retakePhotoBtn');
    const newRecognitionBtn = document.getElementById('newRecognitionBtn');
    const retryRecognitionBtn = document.getElementById('retryRecognitionBtn');
    const viewFullProfileBtn = document.getElementById('viewFullProfileBtn');
    const manualSearchBtn = document.getElementById('manualSearchBtn');
    
    if (identifyStudentBtn) identifyStudentBtn.addEventListener('click', (e) => { e.preventDefault(); identifyStudent(); });
    if (retakePhotoBtn) retakePhotoBtn.addEventListener('click', (e) => { e.preventDefault(); retakePhoto(); });
    if (newRecognitionBtn) newRecognitionBtn.addEventListener('click', (e) => { e.preventDefault(); resetFaceRecognition(); });
    if (retryRecognitionBtn) retryRecognitionBtn.addEventListener('click', (e) => { e.preventDefault(); retakePhoto(); });
    if (viewFullProfileBtn) viewFullProfileBtn.addEventListener('click', (e) => { e.preventDefault(); viewFullProfile(); });
    if (manualSearchBtn) manualSearchBtn.addEventListener('click', (e) => { e.preventDefault(); navigateToSection('studentManagement'); });
}

function handleLogin() {
    console.log('handleLogin called with role:', currentRole);
    
    if (currentRole === 'admin') {
        console.log('Processing admin login...');
        const usernameField = document.getElementById('adminUsername');
        const passwordField = document.getElementById('adminPassword');
        
        if (!usernameField || !passwordField) {
            console.error('Admin login fields not found');
            showError('Login form fields not found.');
            return;
        }
        
        // Get values directly and ensure they're strings
        const username = (usernameField.value || '').toString().trim();
        const password = (passwordField.value || '').toString().trim();
        
        console.log('Admin credentials:', { 
            username: username, 
            password: password,
            usernameLength: username.length,
            passwordLength: password.length 
        });
        
        if (!username || !password) {
            showError('Please enter both username and password.');
            return;
        }
        
        // Check credentials
        const admin = adminCredentials.find(a => 
            a.username.toString() === username && a.password.toString() === password
        );
        
        if (admin) {
            console.log('Admin login successful for:', admin.name);
            currentUser = {
                ...admin,
                loginTime: new Date().toLocaleString()
            };
            showAdminDashboard();
            setTimeout(() => {
                showSuccess(`Welcome to VIVEK VARDHINI DEGREE COLLEGE, ${currentUser.name}!`);
            }, 100);
        } else {
            console.log('Invalid admin credentials');
            console.log('Available credentials:', adminCredentials);
            showError('Invalid credentials. Please try username: "principal" and password: "principal123"');
        }
    } else {
        console.log('Processing faculty login...');
        const facultyNameField = document.getElementById('facultyName');
        const employeeIdField = document.getElementById('employeeId');
        
        if (!facultyNameField || !employeeIdField) {
            console.error('Faculty login fields not found');
            showError('Login form fields not found.');
            return;
        }
        
        const facultyName = (facultyNameField.value || '').toString().trim();
        const employeeId = (employeeIdField.value || '').toString().trim();
        
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
                department: "ARTS",
                subjects: ["General Studies"],
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
        setTimeout(() => {
            showSuccess(`Welcome to VIVEK VARDHINI DEGREE COLLEGE, ${currentUser.name}!`);
        }, 100);
    }
}

function handleLogout() {
    console.log('Logging out...');
    
    // Stop camera if running
    stopCamera();
    
    currentUser = null;
    currentAttendanceSession = null;
    editingStudent = null;
    editingFaculty = null;
    editingDepartment = null;
    editingCourse = null;
    
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
    
    console.log('Found nav buttons:', navButtons.length);
    console.log('Found content sections:', contentSections.length);
    
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) {
            btn.classList.add('active');
            console.log('Activated nav button for:', sectionId);
        }
    });
    
    contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
            console.log('Activated content section:', sectionId);
        }
    });
    
    // Load section-specific data
    switch(sectionId) {
        case 'faceRecognition':
            console.log('Initializing face recognition section');
            initializeFaceRecognition();
            break;
        case 'studentManagement':
            console.log('Loading students table');
            loadStudentsTable();
            break;
        case 'facultyManagement':
            console.log('Loading faculty table');
            loadFacultyTable();
            break;
        case 'courseManagement':
            console.log('Loading courses table');
            loadCoursesTable();
            break;
        case 'departmentManagement':
            console.log('Loading departments table');
            loadDepartmentsTable();
            break;
        case 'viewRecords':
            loadFacultyRecords();
            break;
        case 'attendanceReports':
        case 'facultyReports':
            setupReportDates(sectionId);
            break;
        default:
            console.log('No specific initialization for section:', sectionId);
    }
}

// Face Recognition Functions
async function requestCameraAccess() {
    console.log('Requesting camera access...');
    
    try {
        // Check if getUserMedia is supported
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            showError('Camera access is not supported in this browser.');
            return;
        }
        
        // Enumerate devices first
        const devices = await navigator.mediaDevices.enumerateDevices();
        availableCameras = devices.filter(device => device.kind === 'videoinput');
        
        console.log('Available cameras:', availableCameras.length);
        
        if (availableCameras.length === 0) {
            showError('No cameras found on this device.');
            return;
        }
        
        // Request camera permission
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { 
                deviceId: currentDeviceId || availableCameras[0].deviceId,
                width: { ideal: 640 },
                height: { ideal: 480 },
                facingMode: 'user'
            },
            audio: false
        });
        
        cameraStream = stream;
        
        // Setup video element
        const video = document.getElementById('cameraVideo');
        const cameraPermission = document.getElementById('cameraPermission');
        const cameraStatus = document.getElementById('cameraStatus');
        
        if (video && cameraPermission && cameraStatus) {
            video.srcObject = stream;
            cameraPermission.style.display = 'none';
            
            // Update camera status
            cameraStatus.innerHTML = '<span class="status-dot online"></span><span>Camera Online</span>';
            
            // Enable camera controls
            enableCameraControls(true);
            
            showSuccess('Camera access granted successfully!');
        }
        
    } catch (error) {
        console.error('Camera access error:', error);
        
        let errorMessage = 'Camera access denied or not available.';
        if (error.name === 'NotAllowedError') {
            errorMessage = 'Camera permission denied. Please allow camera access and try again.';
        } else if (error.name === 'NotFoundError') {
            errorMessage = 'No camera found on this device.';
        } else if (error.name === 'NotReadableError') {
            errorMessage = 'Camera is being used by another application.';
        }
        
        showError(errorMessage);
    }
}

function enableCameraControls(enable) {
    const captureBtn = document.getElementById('capturePhotoBtn');
    const switchBtn = document.getElementById('switchCameraBtn');
    const stopBtn = document.getElementById('stopCameraBtn');
    
    if (captureBtn) captureBtn.disabled = !enable;
    if (switchBtn) switchBtn.disabled = !enable || availableCameras.length <= 1;
    if (stopBtn) stopBtn.disabled = !enable;
}

async function switchCamera() {
    if (availableCameras.length <= 1) {
        showError('Only one camera available.');
        return;
    }
    
    try {
        // Find current camera index
        const currentIndex = availableCameras.findIndex(cam => cam.deviceId === currentDeviceId);
        const nextIndex = (currentIndex + 1) % availableCameras.length;
        currentDeviceId = availableCameras[nextIndex].deviceId;
        
        // Stop current stream
        if (cameraStream) {
            cameraStream.getTracks().forEach(track => track.stop());
        }
        
        // Start new stream
        await requestCameraAccess();
        
    } catch (error) {
        console.error('Switch camera error:', error);
        showError('Failed to switch camera.');
    }
}

function stopCamera() {
    console.log('Stopping camera...');
    
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
    
    const video = document.getElementById('cameraVideo');
    const cameraPermission = document.getElementById('cameraPermission');
    const cameraStatus = document.getElementById('cameraStatus');
    
    if (video) video.srcObject = null;
    if (cameraPermission) cameraPermission.style.display = 'flex';
    if (cameraStatus) cameraStatus.innerHTML = '<span class="status-dot offline"></span><span>Camera Offline</span>';
    
    enableCameraControls(false);
    resetFaceRecognition();
}

function capturePhoto() {
    console.log('Capturing photo...');
    
    const video = document.getElementById('cameraVideo');
    const canvas = document.getElementById('captureCanvas');
    
    if (!video || !canvas || !cameraStream) {
        showError('Camera not ready. Please start camera first.');
        return;
    }
    
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw current video frame to canvas
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Convert to blob and store
    canvas.toBlob(blob => {
        capturedPhoto = blob;
        
        // Show preview
        showCapturePreview(canvas.toDataURL());
        
        // Enable identification controls
        const identifyBtn = document.getElementById('identifyStudentBtn');
        const retakeBtn = document.getElementById('retakePhotoBtn');
        
        if (identifyBtn) identifyBtn.disabled = false;
        if (retakeBtn) retakeBtn.disabled = false;
        
        showSuccess('Photo captured successfully!');
    });
}

function showCapturePreview(dataUrl) {
    const previewContainer = document.getElementById('capturePreview');
    
    if (previewContainer) {
        previewContainer.innerHTML = `
            <h4>Captured Photo</h4>
            <img src="${dataUrl}" alt="Captured Photo" class="captured-image">
        `;
    }
}

function retakePhoto() {
    console.log('Retaking photo...');
    
    capturedPhoto = null;
    
    // Reset preview
    const previewContainer = document.getElementById('capturePreview');
    if (previewContainer) {
        previewContainer.innerHTML = `
            <h4>Captured Photo</h4>
            <div class="preview-placeholder">
                <div class="placeholder-icon">📸</div>
                <p>Capture a photo to see preview</p>
            </div>
        `;
    }
    
    // Hide results
    hideRecognitionResults();
    
    // Disable identification controls
    const identifyBtn = document.getElementById('identifyStudentBtn');
    const retakeBtn = document.getElementById('retakePhotoBtn');
    
    if (identifyBtn) identifyBtn.disabled = true;
    if (retakeBtn) retakeBtn.disabled = true;
}

async function identifyStudent() {
    console.log('Starting student identification...');
    
    if (!capturedPhoto) {
        showError('Please capture a photo first.');
        return;
    }
    
    // Show processing state
    showProcessingState();
    
    // Simulate face recognition processing
    await simulateFaceRecognition();
}

function showProcessingState() {
    const processingState = document.getElementById('processingState');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (processingState) {
        processingState.classList.remove('hidden');
        hideRecognitionResults();
        
        // Animate progress bar
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            if (progressFill) progressFill.style.width = `${progress}%`;
            if (progressText) progressText.textContent = `${Math.round(progress)}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 200);
    }
}

async function simulateFaceRecognition() {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));
    
    // Hide processing state
    const processingState = document.getElementById('processingState');
    if (processingState) {
        processingState.classList.add('hidden');
    }
    
    // Simulate match result (80% chance of match for demo)
    const matchFound = Math.random() > 0.2;
    
    if (matchFound && sampleStudents.length > 0) {
        // Select random student for demo
        const randomStudent = sampleStudents[Math.floor(Math.random() * sampleStudents.length)];
        showStudentMatch(randomStudent);
        
        // Add to recognition history
        addToRecognitionHistory(randomStudent);
    } else {
        showNoMatch();
    }
}

function showStudentMatch(student) {
    console.log('Showing student match:', student.name);
    
    const studentResults = document.getElementById('studentResults');
    const confidenceScore = document.getElementById('confidenceScore');
    const studentPhoto = document.getElementById('studentPhoto');
    const studentName = document.getElementById('studentName');
    const studentRollNo = document.getElementById('studentRollNo');
    const studentCourseDetail = document.getElementById('studentCourseDetail');
    const studentSemesterDetail = document.getElementById('studentSemesterDetail');
    const studentDepartmentDetail = document.getElementById('studentDepartmentDetail');
    const studentAcademicYear = document.getElementById('studentAcademicYear');
    const studentFatherName = document.getElementById('studentFatherName');
    const studentContact = document.getElementById('studentContact');
    const attendancePercentage = document.getElementById('attendancePercentage');
    const classesAttended = document.getElementById('classesAttended');
    const lastAttendance = document.getElementById('lastAttendance');
    
    if (studentResults) {
        studentResults.classList.remove('hidden');
        
        // Generate random confidence score
        const confidence = 85 + Math.random() * 10;
        if (confidenceScore) confidenceScore.textContent = `${Math.round(confidence)}% Confidence`;
        
        // Populate student details
        if (studentPhoto) studentPhoto.src = student.photoUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';
        if (studentName) studentName.textContent = student.name;
        if (studentRollNo) studentRollNo.textContent = student.rollNo;
        
        // Get course and department names
        const course = courses.find(c => c.code === student.course);
        const department = departments.find(d => d.code === student.department);
        
        if (studentCourseDetail) studentCourseDetail.textContent = course ? course.name : student.course;
        if (studentSemesterDetail) studentSemesterDetail.textContent = `Semester ${student.semester}`;
        if (studentDepartmentDetail) studentDepartmentDetail.textContent = department ? department.name : student.department;
        if (studentAcademicYear) studentAcademicYear.textContent = student.academicYear;
        if (studentFatherName) studentFatherName.textContent = student.fatherName;
        if (studentContact) studentContact.textContent = student.parentPhone;
        
        // Attendance details
        if (attendancePercentage) attendancePercentage.textContent = `${student.attendancePercentage || 85.5}%`;
        if (classesAttended) classesAttended.textContent = `${student.attendedClasses || 38}/${student.totalClasses || 45}`;
        if (lastAttendance) lastAttendance.textContent = student.lastAttendance || 'Sept 15, 2024';
    }
    
    hideNoMatch();
}

function showNoMatch() {
    console.log('Showing no match result');
    
    const noMatchResults = document.getElementById('noMatchResults');
    if (noMatchResults) {
        noMatchResults.classList.remove('hidden');
    }
    
    hideStudentMatch();
}

function hideRecognitionResults() {
    hideStudentMatch();
    hideNoMatch();
}

function hideStudentMatch() {
    const studentResults = document.getElementById('studentResults');
    if (studentResults) {
        studentResults.classList.add('hidden');
    }
}

function hideNoMatch() {
    const noMatchResults = document.getElementById('noMatchResults');
    if (noMatchResults) {
        noMatchResults.classList.add('hidden');
    }
}

function addToRecognitionHistory(student) {
    const historyItem = {
        id: `HIST${Date.now()}`,
        student: student,
        timestamp: new Date(),
        confidence: 85 + Math.random() * 10
    };
    
    recognitionHistory.unshift(historyItem);
    
    // Keep only last 10 items
    if (recognitionHistory.length > 10) {
        recognitionHistory = recognitionHistory.slice(0, 10);
    }
    
    updateRecognitionHistory();
}

function updateRecognitionHistory() {
    const historyList = document.getElementById('recognitionHistory');
    
    if (!historyList) return;
    
    if (recognitionHistory.length === 0) {
        historyList.innerHTML = '<p class="no-data">No recognition history available.</p>';
        return;
    }
    
    historyList.innerHTML = recognitionHistory.map(item => `
        <div class="history-item">
            <img src="${item.student.photoUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'}" 
                 alt="${item.student.name}" class="history-photo">
            <div class="history-details">
                <div class="history-name">${item.student.name}</div>
                <div class="history-meta">${item.student.rollNo} • ${item.timestamp.toLocaleString()} • ${Math.round(item.confidence)}% confidence</div>
            </div>
        </div>
    `).join('');
}

function resetFaceRecognition() {
    console.log('Resetting face recognition...');
    
    capturedPhoto = null;
    retakePhoto();
    hideRecognitionResults();
    
    const processingState = document.getElementById('processingState');
    if (processingState) {
        processingState.classList.add('hidden');
    }
}

function viewFullProfile() {
    // This would typically open a detailed student profile modal
    // For demo, just navigate to student management
    showSuccess('Full student profile feature would open detailed view in production.');
    navigateToSection('studentManagement');
}

function initializeFaceRecognition() {
    console.log('Initializing face recognition section...');
    
    resetFaceRecognition();
    updateRecognitionHistory();
    
    // Check if camera is supported
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showError('Camera access is not supported in this browser.');
        return;
    }
    
    // Show camera permission interface
    const cameraPermission = document.getElementById('cameraPermission');
    if (cameraPermission) {
        cameraPermission.style.display = 'flex';
    }
    
    showSuccess('Face Recognition system initialized. Click "Grant Camera Access" to start.');
}

function updateAdminDashboard() {
    console.log('Updating admin dashboard...');
    
    const totalStudentsCount = document.getElementById('totalStudentsCount');
    const totalFacultyCount = document.getElementById('totalFacultyCount');
    const totalDepartmentsCount = document.getElementById('totalDepartmentsCount');
    const totalCoursesCount = document.getElementById('totalCoursesCount');
    
    if (totalStudentsCount) totalStudentsCount.textContent = sampleStudents.length;
    if (totalFacultyCount) totalFacultyCount.textContent = sampleFaculty.length;
    if (totalDepartmentsCount) totalDepartmentsCount.textContent = departments.length;
    if (totalCoursesCount) totalCoursesCount.textContent = courses.length;
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
    
    if (facultyTodayClasses) facultyTodayClasses.textContent = "5";
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
    const selects = document.querySelectorAll('#courseFilter, #reportCourse, #attendanceCourse, #studentCourse, #filterCourse');
    
    selects.forEach(select => {
        if (select) {
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
        if (select) {
            select.innerHTML = '<option value="">All Semesters</option>';
            semesters.forEach(semester => {
                const option = document.createElement('option');
                option.value = semester;
                option.textContent = `Semester ${semester}`;
                select.appendChild(option);
            });
        }
    });
}

function populateSubjectFilters() {
    const selects = document.querySelectorAll('#attendanceSubject, #filterSubject, #facultySubjects');
    
    selects.forEach(select => {
        if (select) {
            if (select.id === 'facultySubjects') {
                // Multi-select for faculty modal
                select.innerHTML = '';
                Object.values(subjects).flat().forEach(subject => {
                    const option = document.createElement('option');
                    option.value = subject;
                    option.textContent = subject;
                    select.appendChild(option);
                });
            } else {
                select.innerHTML = '<option value="">Select Subject</option>';
                Object.values(subjects).flat().forEach(subject => {
                    const option = document.createElement('option');
                    option.value = subject;
                    option.textContent = subject;
                    select.appendChild(option);
                });
            }
        }
    });
}

function populateDepartmentFilters() {
    const departmentSelects = document.querySelectorAll('#departmentFilter, #facultyDepartment, #courseDepartment');
    
    departmentSelects.forEach(select => {
        if (select) {
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
        }
    });
}

function populateAttendanceForm() {
    // Populate periods
    const periodSelect = document.getElementById('attendancePeriod');
    if (periodSelect) {
        periodSelect.innerHTML = '<option value="">Select Period</option>';
        periods.filter(p => !p.isBreak && !p.isExtra).forEach(period => {
            const option = document.createElement('option');
            option.value = period.name;
            option.textContent = `${period.name} (${period.display})`;
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

// Student Management Functions
function loadStudentsTable() {
    console.log('Loading students table...');
    const tbody = document.getElementById('studentsTableBody');
    if (!tbody) {
        console.error('Students table body not found');
        return;
    }
    
    tbody.innerHTML = '';
    
    sampleStudents.forEach(student => {
        const course = courses.find(c => c.code === student.course);
        const department = departments.find(d => d.code === student.department);
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="student-photo-cell">
                <img src="${student.photoUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'}" 
                     alt="${student.name}" class="student-table-photo">
            </td>
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>${course ? course.name : student.course}</td>
            <td>Semester ${student.semester}</td>
            <td>${department ? department.name : student.department}</td>
            <td>${student.parentPhone}</td>
            <td class="table-actions">
                <button class="btn btn--sm btn--secondary" onclick="editStudent('${student.id}')">Edit</button>
                <button class="btn btn--sm btn--outline" onclick="deleteStudent('${student.id}')">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    showSuccess('Student data loaded successfully!');
}

function openStudentModal(studentId = null) {
    console.log('Opening student modal:', studentId);
    showSuccess('Student modal functionality would open here in full version.');
}

function closeStudentModal() {
    console.log('Closing student modal');
}

function saveStudent() {
    showSuccess('Student saved successfully!');
}

function editStudent(studentId) {
    openStudentModal(studentId);
}

function deleteStudent(studentId) {
    if (confirm('Are you sure you want to delete this student?')) {
        showSuccess('Student would be deleted in full version.');
    }
}

function filterStudents() {
    showSuccess('Student filtering applied.');
}

// Faculty Management Functions (simplified for demo)
function loadFacultyTable() {
    console.log('Loading faculty table...');
    const tbody = document.getElementById('facultyTableBody');
    if (!tbody) {
        console.error('Faculty table body not found');
        return;
    }
    
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
    
    showSuccess('Faculty data loaded successfully!');
}

// Placeholder functions for other management features
function editFaculty(facultyId) { showSuccess('Faculty edit would open here.'); }
function deleteFaculty(facultyId) { showSuccess('Faculty would be deleted.'); }
function filterFaculty() { }

function loadDepartmentsTable() { 
    console.log('Loading departments table...');
    showSuccess('Departments data loaded successfully!'); 
}
function editDepartment(departmentId) { showSuccess('Department edit would open here.'); }
function deleteDepartment(departmentId) { showSuccess('Department would be deleted.'); }

function loadCoursesTable() { 
    console.log('Loading courses table...');
    showSuccess('Courses data loaded successfully!'); 
}
function editCourse(courseId) { showSuccess('Course edit would open here.'); }
function deleteCourse(courseId) { showSuccess('Course would be deleted.'); }

// Attendance Functions (simplified)
function loadStudentsForAttendance() { showSuccess('Students would be loaded for attendance.'); }
function markAllStudents(status) { showSuccess(`All students marked as ${status}.`); }
function saveAttendance() { showSuccess('Attendance saved successfully!'); }
function cancelAttendance() { }

function loadFacultyRecords() { showSuccess('Faculty records would be loaded here.'); }
function filterRecords() { showSuccess('Records filtered successfully.'); }
function clearRecordFilters() { showSuccess('Filters cleared.'); }
function generateAdminReport() { showSuccess('Admin report generated successfully.'); }
function generateFacultyReport() { showSuccess('Faculty report generated successfully.'); }

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
            id: 'ATT1',
            date: new Date().toISOString().split('T')[0],
            course: "BA-HIST",
            semester: "I",
            subject: "Ancient Indian History",
            period: "Period 1",
            faculty: "Dr. Priya Sharma",
            students: sampleStudents.slice(0, 3).map(s => ({ ...s, status: 'Present' }))
        }
    ];
}

function setupModals() {
    console.log('Setting up modals...');
    
    // Success modal
    const successModalClose = document.getElementById('successModalClose');
    if (successModalClose) {
        successModalClose.addEventListener('click', (e) => {
            e.preventDefault();
            const successModal = document.getElementById('successModal');
            if (successModal) successModal.classList.add('hidden');
        });
    }
    
    // Error modal
    const errorModalClose = document.getElementById('errorModalClose');
    if (errorModalClose) {
        errorModalClose.addEventListener('click', (e) => {
            e.preventDefault();
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
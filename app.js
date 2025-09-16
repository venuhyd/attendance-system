// VIVEK VARDHINI DEGREE COLLEGE Management System JavaScript
// Updated for Osmania University Affiliated Degree College

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
        "end": "15:00",
        "display": "10:00 AM - 3:00 PM"
    }
};

const semesters = ["I", "II", "III", "IV", "V", "VI"];

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
    {"id": "STU001", "rollNo": "VVC2024BA001", "name": "Aarav Kumar", "course": "BA-HIST", "department": "ARTS", "semester": "I", "academicYear": "2024-2025", "specialization": "History", "dob": "2003-05-15", "gender": "Male", "fatherName": "Rajesh Kumar", "motherName": "Sunita Kumar", "parentPhone": "+91-9876543210", "parentEmail": "rajesh.k@gmail.com", "studentPhone": "+91-8765432101", "studentEmail": "aarav.kumar@vivekvardhini.edu.in", "address": "123 MG Road, Hyderabad, Telangana - 500001", "bloodGroup": "O+", "category": "General", "admissionDate": "2024-07-15", "feeStatus": "Paid", "hostelRequired": "Yes"},
    {"id": "STU002", "rollNo": "VVC2024BBA002", "name": "Aditi Patel", "course": "BBA-GEN", "department": "BBA", "semester": "II", "academicYear": "2024-2025", "specialization": "General", "dob": "2004-08-22", "gender": "Female", "fatherName": "Suresh Patel", "motherName": "Priya Patel", "parentPhone": "+91-9876543211", "parentEmail": "suresh.p@gmail.com", "studentPhone": "+91-8765432102", "studentEmail": "aditi.patel@vivekvardhini.edu.in", "address": "456 Tank Bund, Hyderabad, Telangana - 500002", "bloodGroup": "A+", "category": "OBC", "admissionDate": "2024-07-15", "feeStatus": "Paid", "hostelRequired": "No"},
    {"id": "STU003", "rollNo": "VVC2024BCOM003", "name": "Arjun Singh", "course": "BCOM-CA", "department": "COMM", "semester": "III", "academicYear": "2023-2024", "specialization": "Computer Application", "dob": "2003-03-10", "gender": "Male", "fatherName": "Vikram Singh", "motherName": "Meera Singh", "parentPhone": "+91-9876543212", "parentEmail": "vikram.s@gmail.com", "studentPhone": "+91-8765432103", "studentEmail": "arjun.singh@vivekvardhini.edu.in", "address": "789 Banjara Hills, Hyderabad, Telangana - 500034", "bloodGroup": "B+", "category": "SC", "admissionDate": "2023-07-15", "feeStatus": "Pending", "hostelRequired": "Yes"},
    {"id": "STU004", "rollNo": "VVC2024BSC004", "name": "Anaya Gupta", "course": "BSC-LS", "department": "SCI", "semester": "IV", "academicYear": "2022-2023", "specialization": "Life Sciences", "dob": "2002-11-07", "gender": "Female", "fatherName": "Amit Gupta", "motherName": "Kavita Gupta", "parentPhone": "+91-9876543213", "parentEmail": "amit.g@gmail.com", "studentPhone": "+91-8765432104", "studentEmail": "anaya.gupta@vivekvardhini.edu.in", "address": "321 Jubilee Hills, Hyderabad, Telangana - 500033", "bloodGroup": "AB+", "category": "ST", "admissionDate": "2022-07-15", "feeStatus": "Paid", "hostelRequired": "Yes"},
    {"id": "STU005", "rollNo": "VVC2024BA005", "name": "Bhavya Sharma", "course": "BA-ECON", "department": "ARTS", "semester": "V", "academicYear": "2021-2022", "specialization": "Economics", "dob": "2001-01-18", "gender": "Female", "fatherName": "Deepak Sharma", "motherName": "Rekha Sharma", "parentPhone": "+91-9876543214", "parentEmail": "deepak.s@gmail.com", "studentPhone": "+91-8765432105", "studentEmail": "bhavya.sharma@vivekvardhini.edu.in", "address": "654 Madhapur, Hyderabad, Telangana - 500081", "bloodGroup": "O-", "category": "General", "admissionDate": "2021-07-15", "feeStatus": "Paid", "hostelRequired": "No"},
    {"id": "STU006", "rollNo": "VVC2024BCOM006", "name": "Chetan Reddy", "course": "BCOM-FIN", "department": "COMM", "semester": "VI", "academicYear": "2020-2021", "specialization": "Finance", "dob": "2000-12-25", "gender": "Male", "fatherName": "Ravi Reddy", "motherName": "Lakshmi Reddy", "parentPhone": "+91-9876543215", "parentEmail": "ravi.r@gmail.com", "studentPhone": "+91-8765432106", "studentEmail": "chetan.reddy@vivekvardhini.edu.in", "address": "987 Kondapur, Hyderabad, Telangana - 500084", "bloodGroup": "A-", "category": "OBC", "admissionDate": "2020-07-15", "feeStatus": "Paid", "hostelRequired": "Yes"},
    {"id": "STU007", "rollNo": "VVC2024BBA007", "name": "Divya Nair", "course": "BBA-BA", "department": "BBA", "semester": "II", "academicYear": "2024-2025", "specialization": "Business Analytics", "dob": "2003-09-14", "gender": "Female", "fatherName": "Sanjay Nair", "motherName": "Divya Nair", "parentPhone": "+91-9876543216", "parentEmail": "sanjay.n@gmail.com", "studentPhone": "+91-8765432107", "studentEmail": "divya.nair@vivekvardhini.edu.in", "address": "147 Gachibowli, Hyderabad, Telangana - 500032", "bloodGroup": "B-", "category": "SC", "admissionDate": "2024-07-15", "feeStatus": "Pending", "hostelRequired": "No"},
    {"id": "STU008", "rollNo": "VVC2024BSC008", "name": "Eshaan Joshi", "course": "BSC-PS", "department": "SCI", "semester": "I", "academicYear": "2024-2025", "specialization": "Physical Sciences", "dob": "2003-07-08", "gender": "Male", "fatherName": "Manoj Joshi", "motherName": "Geeta Joshi", "parentPhone": "+91-9876543217", "parentEmail": "manoj.j@gmail.com", "studentPhone": "+91-8765432108", "studentEmail": "eshaan.joshi@vivekvardhini.edu.in", "address": "258 Kukatpally, Hyderabad, Telangana - 500072", "bloodGroup": "AB-", "category": "General", "admissionDate": "2024-07-15", "feeStatus": "Paid", "hostelRequired": "Yes"},
    {"id": "STU009", "rollNo": "VVC2024BA009", "name": "Fatima Khan", "course": "BA-POLS", "department": "ARTS", "semester": "III", "academicYear": "2023-2024", "specialization": "Political Science", "dob": "2004-04-12", "gender": "Female", "fatherName": "Abdul Khan", "motherName": "Ayesha Khan", "parentPhone": "+91-9876543218", "parentEmail": "abdul.k@gmail.com", "studentPhone": "+91-8765432109", "studentEmail": "fatima.khan@vivekvardhini.edu.in", "address": "369 Miyapur, Hyderabad, Telangana - 500049", "bloodGroup": "O+", "category": "OBC", "admissionDate": "2023-07-15", "feeStatus": "Paid", "hostelRequired": "No"},
    {"id": "STU010", "rollNo": "VVC2024BCOM010", "name": "Gaurav Mehta", "course": "BCOM-GEN", "department": "COMM", "semester": "IV", "academicYear": "2022-2023", "specialization": "General", "dob": "2002-10-30", "gender": "Male", "fatherName": "Ramesh Mehta", "motherName": "Sita Mehta", "parentPhone": "+91-9876543219", "parentEmail": "ramesh.m@gmail.com", "studentPhone": "+91-8765432110", "studentEmail": "gaurav.mehta@vivekvardhini.edu.in", "address": "741 Begumpet, Hyderabad, Telangana - 500016", "bloodGroup": "A+", "category": "General", "admissionDate": "2022-07-15", "feeStatus": "Pending", "hostelRequired": "Yes"}
];

let sampleFaculty = [
    {"id": "FAC001", "empId": "VVC001", "name": "Dr. Priya Sharma", "designation": "Professor", "department": "ARTS", "subjects": ["Ancient Indian History", "Modern Indian History"], "email": "priya.s@vivekvardhini.edu.in", "phone": "+91-9876543210"},
    {"id": "FAC002", "empId": "VVC002", "name": "Prof. Rajesh Kumar", "designation": "Associate Professor", "department": "BBA", "subjects": ["Principles of Management", "Marketing Management"], "email": "rajesh.k@vivekvardhini.edu.in", "phone": "+91-9876543211"},
    {"id": "FAC003", "empId": "VVC003", "name": "Dr. Suresh Patel", "designation": "Professor", "department": "COMM", "subjects": ["Financial Accounting", "Corporate Finance"], "email": "suresh.p@vivekvardhini.edu.in", "phone": "+91-9876543212"},
    {"id": "FAC004", "empId": "VVC004", "name": "Dr. Anjali Reddy", "designation": "Professor", "department": "SCI", "subjects": ["Botany", "Environmental Biology"], "email": "anjali.r@vivekvardhini.edu.in", "phone": "+91-9876543213"},
    {"id": "FAC005", "empId": "VVC005", "name": "Ms. Meera Joshi", "designation": "Assistant Professor", "department": "ARTS", "subjects": ["Microeconomics", "Indian Economy"], "email": "meera.j@vivekvardhini.edu.in", "phone": "+91-9876543214"},
    {"id": "FAC006", "empId": "VVC006", "name": "Prof. Vikram Singh", "designation": "Associate Professor", "department": "BBA", "subjects": ["Data Analytics", "Business Intelligence"], "email": "vikram.s@vivekvardhini.edu.in", "phone": "+91-9876543215"}
];

let periods = [
    {"id": "P001", "name": "Period 1", "startTime": "10:00", "endTime": "10:45", "display": "10:00-10:45 AM"},
    {"id": "P002", "name": "Period 2", "startTime": "10:45", "endTime": "11:30", "display": "10:45-11:30 AM"},
    {"id": "P003", "name": "Break", "startTime": "11:30", "endTime": "11:45", "display": "11:30-11:45 AM"},
    {"id": "P004", "name": "Period 3", "startTime": "11:45", "endTime": "12:30", "display": "11:45-12:30 PM"},
    {"id": "P005", "name": "Period 4", "startTime": "12:30", "endTime": "13:15", "display": "12:30-1:15 PM"},
    {"id": "P006", "name": "Lunch Break", "startTime": "13:15", "endTime": "14:00", "display": "1:15-2:00 PM"},
    {"id": "P007", "name": "Period 5", "startTime": "14:00", "endTime": "14:45", "display": "2:00-2:45 PM"},
    {"id": "P008", "name": "Period 6", "startTime": "14:45", "endTime": "15:00", "display": "2:45-3:00 PM"}
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
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        console.log('Login form found, adding event listener');
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
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
            showSuccess('Bulk import feature available. Upload CSV with student data following Osmania University format.');
        });
    }

    // Course change handler for specializations
    const studentCourse = document.getElementById('studentCourse');
    if (studentCourse) studentCourse.addEventListener('change', updateSpecializations);
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
    if (attendanceCourse) attendanceCourse.addEventListener('change', updateAttendanceSubjects);
}

function handleLogin() {
    console.log('handleLogin called with role:', currentRole);
    
    try {
        if (currentRole === 'admin') {
            console.log('Processing admin login...');
            const usernameInput = document.getElementById('adminUsername');
            const passwordInput = document.getElementById('adminPassword');
            
            if (!usernameInput || !passwordInput) {
                console.error('Admin input fields not found');
                showError('Login form elements not found.');
                return;
            }
            
            const username = usernameInput.value ? usernameInput.value.trim() : '';
            const password = passwordInput.value ? passwordInput.value.trim() : '';
            
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
                showSuccess(`Welcome to VIVEK VARDHINI DEGREE COLLEGE, ${currentUser.name}!`);
            } else {
                console.log('Invalid admin credentials');
                showError('Invalid credentials. Please check username and password.');
            }
        } else {
            console.log('Processing faculty login...');
            const facultyNameInput = document.getElementById('facultyName');
            const employeeIdInput = document.getElementById('employeeId');
            
            if (!facultyNameInput || !employeeIdInput) {
                console.error('Faculty input fields not found');
                showError('Login form elements not found.');
                return;
            }
            
            const facultyName = facultyNameInput.value ? facultyNameInput.value.trim() : '';
            const employeeId = employeeIdInput.value ? employeeIdInput.value.trim() : '';
            
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
                    subjects: ["General Subject"],
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
            showSuccess(`Welcome to VIVEK VARDHINI DEGREE COLLEGE, ${currentUser.name}!`);
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
            option.textContent = `Semester ${semester}`;
            select.appendChild(option);
        });
    });
}

function populateSubjectFilters() {
    const allSubjects = [];
    Object.values(subjects).forEach(subjectList => {
        subjectList.forEach(subject => {
            if (!allSubjects.includes(subject)) {
                allSubjects.push(subject);
            }
        });
    });
    
    const selects = document.querySelectorAll('#attendanceSubject, #filterSubject, #facultySubjects');
    
    selects.forEach(select => {
        if (select.id === 'facultySubjects') {
            // Multi-select for faculty modal
            select.innerHTML = '';
            allSubjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject;
                option.textContent = subject;
                select.appendChild(option);
            });
        } else {
            select.innerHTML = '<option value="">Select Subject</option>';
            allSubjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject;
                option.textContent = subject;
                select.appendChild(option);
            });
        }
    });
}

function populateDepartmentFilters() {
    const departmentSelects = document.querySelectorAll('#departmentFilter, #facultyDepartment, #departmentFilterStudents');
    
    departmentSelects.forEach(select => {
        if (select.id === 'departmentFilter' || select.id === 'departmentFilterStudents') {
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
            option.textContent = `${period.name} (${period.display})`;
            periodSelect.appendChild(option);
        });
    }
}

function populateFacultyFilters() {
    populateCourseFilters();
    populateSubjectFilters();
}

function updateSpecializations() {
    const courseSelect = document.getElementById('studentCourse');
    const specializationSelect = document.getElementById('studentSpecialization');
    
    if (!courseSelect || !specializationSelect) return;
    
    const selectedCourse = courseSelect.value;
    specializationSelect.innerHTML = '<option value="">Select Specialization</option>';
    
    const course = courses.find(c => c.code === selectedCourse);
    if (course) {
        const option = document.createElement('option');
        option.value = course.specialization;
        option.textContent = course.specialization;
        specializationSelect.appendChild(option);
        
        // Auto-select the specialization
        specializationSelect.value = course.specialization;
    }
}

function updateAttendanceSubjects() {
    const courseSelect = document.getElementById('attendanceCourse');
    const subjectSelect = document.getElementById('attendanceSubject');
    
    if (!courseSelect || !subjectSelect) return;
    
    const selectedCourse = courseSelect.value;
    subjectSelect.innerHTML = '<option value="">Select Subject</option>';
    
    if (selectedCourse && subjects[selectedCourse]) {
        subjects[selectedCourse].forEach(subject => {
            const option = document.createElement('option');
            option.value = subject;
            option.textContent = subject;
            subjectSelect.appendChild(option);
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
            <td>${student.course}</td>
            <td><span class="specialization-tag">${student.specialization}</span></td>
            <td>Semester ${student.semester}</td>
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
    const semesterSelect = document.getElementById('studentSemester');
    if (semesterSelect) {
        semesterSelect.innerHTML = '<option value="">Select Semester</option>';
        semesters.forEach(semester => {
            const option = document.createElement('option');
            option.value = semester;
            option.textContent = `Semester ${semester}`;
            semesterSelect.appendChild(option);
        });
    }
    
    if (studentId) {
        const student = sampleStudents.find(s => s.id === studentId);
        if (student) {
            title.textContent = 'Edit Student';
            document.getElementById('studentRollNo').value = student.rollNo;
            document.getElementById('studentName').value = student.name;
            document.getElementById('studentCourse').value = student.course;
            document.getElementById('studentSemester').value = student.semester;
            document.getElementById('studentDOB').value = student.dob;
            document.getElementById('studentFatherName').value = student.fatherName;
            document.getElementById('studentMotherName').value = student.motherName;
            document.getElementById('studentParentPhone').value = student.parentPhone;
            document.getElementById('studentEmail').value = student.studentEmail || '';
            document.getElementById('studentAddress').value = student.address || '';
            document.getElementById('studentCategory').value = student.category || 'General';
            
            // Update specializations and set value
            setTimeout(() => {
                updateSpecializations();
                document.getElementById('studentSpecialization').value = student.specialization;
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
    const specialization = document.getElementById('studentSpecialization').value;
    const semester = document.getElementById('studentSemester').value;
    const dob = document.getElementById('studentDOB').value;
    const fatherName = document.getElementById('studentFatherName').value.trim();
    const motherName = document.getElementById('studentMotherName').value.trim();
    const parentPhone = document.getElementById('studentParentPhone').value.trim();
    const studentEmail = document.getElementById('studentEmail').value.trim();
    const address = document.getElementById('studentAddress').value.trim();
    const category = document.getElementById('studentCategory').value;
    
    if (!rollNo || !name || !course || !specialization || !semester || !fatherName || !motherName || !parentPhone) {
        showError('Please fill in all required fields.');
        return;
    }
    
    // Check for duplicate roll number
    const existing = sampleStudents.find(s => s.rollNo === rollNo && s.id !== editingStudent);
    if (existing) {
        showError('Roll number already exists.');
        return;
    }
    
    // Find department from course
    const courseObj = courses.find(c => c.code === course);
    const department = courseObj ? courseObj.department : 'ARTS';
    
    const studentData = {
        rollNo,
        name,
        course,
        department,
        specialization,
        semester,
        dob,
        fatherName,
        motherName,
        parentPhone,
        studentEmail,
        address,
        category,
        academicYear: "2024-2025",
        admissionDate: new Date().toISOString().split('T')[0],
        feeStatus: "Paid"
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
    const departmentFilter = document.getElementById('departmentFilterStudents')?.value || '';
    
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
    
    if (departmentFilter) {
        filteredStudents = filteredStudents.filter(student => student.department === departmentFilter);
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
            <td><span class="specialization-tag">${student.specialization}</span></td>
            <td>Semester ${student.semester}</td>
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
            <td><span class="specialization-tag">${course.specialization}</span></td>
            <td>${course.duration}</td>
            <td>${enrolledCount}</td>
            <td class="table-actions">
                <button class="btn btn--sm btn--secondary" onclick="viewSyllabus('${course.code}')">View Syllabus</button>
                <button class="btn btn--sm btn--outline">Edit</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function viewSyllabus(courseCode) {
    const courseSubjects = subjects[courseCode];
    if (courseSubjects) {
        const subjectList = courseSubjects.join('\n• ');
        showSuccess(`Subjects for ${courseCode}:\n\n• ${subjectList}\n\n(As per Osmania University Syllabus)`);
    } else {
        showError('Syllabus not found for this course.');
    }
}

// Department Management Functions
function loadDepartmentsTable() {
    console.log('Loading departments table...');
    const tbody = document.getElementById('departmentsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    departments.forEach(department => {
        const facultyCount = sampleFaculty.filter(f => f.department === department.code).length;
        const studentCount = sampleStudents.filter(s => s.department === department.code).length;
        
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

// Attendance Functions
function loadStudentsForAttendance() {
    const date = document.getElementById('attendanceDate').value;
    const course = document.getElementById('attendanceCourse').value;
    const semester = document.getElementById('attendanceSemester').value;
    const subject = document.getElementById('attendanceSubject').value;
    const period = document.getElementById('attendancePeriod').value;
    
    if (!date || !course || !semester || !subject || !period) {
        showError('Please fill in all fields to load student list.');
        return;
    }
    
    const studentsInClass = sampleStudents.filter(s => 
        s.course === course && s.semester === semester
    );
    
    if (studentsInClass.length === 0) {
        showError('No students found for the selected course and semester.');
        return;
    }
    
    // Show student attendance section
    document.getElementById('studentAttendance').classList.remove('hidden');
    
    // Update attendance info
    document.getElementById('attendanceTitle').textContent = `${subject} - ${course} - ${period}`;
    document.getElementById('attendanceDate2').textContent = new Date(date).toLocaleDateString();
    
    // Populate student table
    const tbody = document.getElementById('studentTableBody');
    tbody.innerHTML = '';
    
    studentsInClass.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td class="attendance-toggle">
                <div class="attendance-radio present">
                    <input type="radio" name="attendance_${student.id}" value="Present" id="present_${student.id}">
                    <label for="present_${student.id}">Present</label>
                </div>
                <div class="attendance-radio absent">
                    <input type="radio" name="attendance_${student.id}" value="Absent" id="absent_${student.id}">
                    <label for="absent_${student.id}">Absent</label>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    currentAttendanceSession = {
        date, course, semester, subject, period, students: studentsInClass
    };
    
    showSuccess(`Loaded ${studentsInClass.length} students for attendance marking.`);
}

function markAllStudents(status) {
    if (!currentAttendanceSession) return;
    
    currentAttendanceSession.students.forEach(student => {
        const presentRadio = document.getElementById(`present_${student.id}`);
        const absentRadio = document.getElementById(`absent_${student.id}`);
        
        if (status === 'Present' && presentRadio) {
            presentRadio.checked = true;
        } else if (status === 'Absent' && absentRadio) {
            absentRadio.checked = true;
        }
    });
    
    showSuccess(`All students marked as ${status}.`);
}

function saveAttendance() {
    if (!currentAttendanceSession) {
        showError('No attendance session in progress.');
        return;
    }
    
    const attendanceData = [];
    let markedCount = 0;
    
    currentAttendanceSession.students.forEach(student => {
        const presentRadio = document.getElementById(`present_${student.id}`);
        const absentRadio = document.getElementById(`absent_${student.id}`);
        
        let status = null;
        if (presentRadio && presentRadio.checked) {
            status = 'Present';
            markedCount++;
        } else if (absentRadio && absentRadio.checked) {
            status = 'Absent';
            markedCount++;
        }
        
        if (status) {
            attendanceData.push({
                ...student,
                status: status
            });
        }
    });
    
    if (markedCount === 0) {
        showError('Please mark attendance for at least one student.');
        return;
    }
    
    // Save attendance record
    const record = {
        id: Date.now(),
        date: currentAttendanceSession.date,
        course: currentAttendanceSession.course,
        semester: currentAttendanceSession.semester,
        subject: currentAttendanceSession.subject,
        period: currentAttendanceSession.period,
        faculty: currentUser.name,
        students: attendanceData
    };
    
    attendanceRecords.push(record);
    
    showSuccess(`Attendance saved successfully for ${markedCount} students!`);
    cancelAttendance();
}

function cancelAttendance() {
    document.getElementById('studentAttendance').classList.add('hidden');
    document.getElementById('attendanceSetupForm').reset();
    currentAttendanceSession = null;
    setCurrentDate();
}

// Records and Reports Functions
function loadFacultyRecords() {
    const container = document.getElementById('recordsContainer');
    if (!container) return;
    
    const facultyRecords = attendanceRecords.filter(r => r.faculty === currentUser.name);
    
    if (facultyRecords.length === 0) {
        container.innerHTML = '<p class="no-records">No attendance records found. Start marking attendance to see records here.</p>';
        return;
    }
    
    container.innerHTML = '';
    
    facultyRecords.forEach(record => {
        const presentCount = record.students.filter(s => s.status === 'Present').length;
        const absentCount = record.students.filter(s => s.status === 'Absent').length;
        const totalCount = record.students.length;
        
        const recordElement = document.createElement('div');
        recordElement.className = 'record-item';
        recordElement.innerHTML = `
            <div class="record-header">
                <div class="record-title">${record.subject} - ${record.course}</div>
                <div class="record-meta">${new Date(record.date).toLocaleDateString()} - ${record.period}</div>
            </div>
            <div class="record-stats">
                <div class="record-stat stat-present">
                    ✓ Present: ${presentCount}
                </div>
                <div class="record-stat stat-absent">
                    ✗ Absent: ${absentCount}
                </div>
                <div class="record-stat">
                    Total: ${totalCount}
                </div>
                <div class="record-stat">
                    Attendance: ${Math.round((presentCount / totalCount) * 100)}%
                </div>
            </div>
        `;
        container.appendChild(recordElement);
    });
}

function filterRecords() {
    showSuccess('Records filtered successfully.');
    loadFacultyRecords();
}

function clearRecordFilters() {
    document.getElementById('filterDate').value = '';
    document.getElementById('filterSubject').value = '';
    document.getElementById('filterCourse').value = '';
    showSuccess('Filters cleared.');
    loadFacultyRecords();
}

function generateAdminReport() {
    showSuccess('Admin attendance report generated successfully. Report shows attendance patterns across all departments and courses.');
}

function generateFacultyReport() {
    showSuccess('Faculty report generated successfully. Report includes attendance summary and course-wise analysis.');
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
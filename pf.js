/* ==========================================================
   MOBILE MENU TOGGLE HANDLER
   ========================================================== */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-item, .nav-cta');

// Toggles mobile menu dropdown layout smoothly
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    
    // Switch menu icon style based on toggle state
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars-staggered');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars-staggered');
    }
});

// Automatically collapse mobile menu when any navigation link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars-staggered');
    });
});


/* ==========================================================
   DARK / LIGHT THEME PREFERENCE ENGINE
   ========================================================== */
const themeToggle = document.getElementById('themeToggle');
const htmlRoot = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Retain user's theme selection or default to dark mode
const currentStoredTheme = localStorage.getItem('udit_portfolio_theme') || 'dark';
htmlRoot.setAttribute('data-theme', currentStoredTheme);
switchThemeIconState(currentStoredTheme);

themeToggle.addEventListener('click', () => {
    const activeTheme = htmlRoot.getAttribute('data-theme');
    const targetedTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    htmlRoot.setAttribute('data-theme', targetedTheme);
    localStorage.setItem('udit_portfolio_theme', targetedTheme);
    switchThemeIconState(targetedTheme);
});

function switchThemeIconState(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}


/* ==========================================================
   INBUILT CONTACT FORM SYSTEM
   ========================================================== */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop standard form submission reload

    const visitorName = document.getElementById('name').value.trim();
    const visitorEmail = document.getElementById('email').value.trim();
    const visitorMessage = document.getElementById('message').value.trim();

    if (visitorName && visitorEmail && visitorMessage) {
        // Display success confirmation banner
        formSuccess.classList.remove('hidden');
        
        // Reset the form fields
        contactForm.reset();

        // Clear success notification after 5 seconds
        setTimeout(() => {
            formSuccess.classList.add('hidden');
        }, 5000);
    }
});
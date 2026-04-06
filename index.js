       // ========================================
// MOBILE MENU TOGGLE
// ========================================

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        mobileNav.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}

// ========================================
// SMOOTH SCROLL TO SECTION
// ========================================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        const mobileNav = document.getElementById('mobile-nav');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        
        if (mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    }
}

// ========================================
// CONTACT FORM SUBMISSION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Log form data (in a real app, you'd send this to a server)
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

// ========================================
// CLOSE MOBILE MENU ON RESIZE
// ========================================

window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        const mobileNav = document.getElementById('mobile-nav');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        
        mobileNav.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

// ========================================
// HEADER SCROLL EFFECT (OPTIONAL)
// ========================================

let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 10) {
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
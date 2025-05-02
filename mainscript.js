// Mobile Navigation
const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navlist');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
    
    // Change menu icon
    const icon = menuBtn.querySelector('i');
    if (navList.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a navigation link
const navLinks = document.querySelectorAll('.navlist li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navList.classList.contains('show')) {
            navList.classList.remove('show');
            menuBtn.querySelector('i').classList.remove('fa-times');
            menuBtn.querySelector('i').classList.add('fa-bars');
        }
    });
});

// Scroll Reveal Animations
ScrollReveal().reveal('.scroll-reveal', {
    distance: '50px',
    duration: 1200,
    easing: 'ease-out',
    origin: 'bottom',
    reset: false,
    interval: 200
});

// Sticky Nav functionality
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nl-container');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        nav.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    } else {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Set minimum date for date inputs to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('pickupDate').min = today;
document.getElementById('dropoffDate').min = today;

// Handle dropoff date validation (must be after pickup date)
document.getElementById('pickupDate').addEventListener('change', function() {
    document.getElementById('dropoffDate').min = this.value;
    
    // If dropoff date is before new pickup date, reset it
    const dropoffDate = document.getElementById('dropoffDate');
    if (dropoffDate.value && dropoffDate.value < this.value) {
        dropoffDate.value = this.value;
    }
});

// Form submission handling
const carButtons = document.querySelectorAll('.car-btn');
carButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the car name
        const carName = button.parentElement.querySelector('h5').textContent;
        
        // Check if booking form is filled
        const pickupDate = document.getElementById('pickupDate').value;
        const dropoffDate = document.getElementById('dropoffDate').value;
        
        if (!pickupDate || !dropoffDate) {
            alert('Please select pickup and dropoff dates first!');
            // Scroll to booking form
            document.querySelector('.booking-form').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert(`You've selected ${carName} from ${pickupDate} to ${dropoffDate}. Booking successful!`);
        }
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

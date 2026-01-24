// Navigation functionality
const navToggle = document.getElementById('navToggle');
const sideNav = document.getElementById('sideNav');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

// Toggle navigation
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    sideNav.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close navigation on overlay click
overlay.addEventListener('click', () => {
    navToggle.classList.remove('active');
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
});

// Page navigation
function navigateToPage(pageId) {
    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Update active nav link
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Close navigation
    navToggle.classList.remove('active');
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
}

// Add click handlers to all navigation links
document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        navigateToPage(pageId);
    });
});

// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const nome = contactForm.querySelector('input[type="text"]').value;
        const telefone = contactForm.querySelector('input[type="tel"]').value;
        
        // Show success message
        alert(`Obrigado pelo contato, ${nome}! Entraremos em contato em breve através do número ${telefone}.`);
        
        // Reset form
        contactForm.reset();
        
        // Optionally, you can integrate with WhatsApp or email here
        // Example WhatsApp integration (replace with actual number):
        // const whatsappNumber = '5500000000000';
        // const message = encodeURIComponent(`Olá! Meu nome é ${nome}...`);
        // window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    });
}

// Smooth scrolling for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || this.hasAttribute('data-page')) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and value items
document.querySelectorAll('.card, .value-item, .service-detail, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
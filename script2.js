// ==================== LOADER ====================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 2500);
});

// ==================== CURSOR ====================
const cursor = document.querySelector('.cursor');

if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Hover effect
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .project-card, .skill-card, .tool-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Click effect
    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('click'));
}

// ==================== NAVBAR ====================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.querySelector('.nav-links');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    updateActiveNavLink();
    
    // Back to top button
    updateBackToTop();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
    document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior:  'smooth'
            });
        }
    });
});

// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ?  'light' :  'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// ==================== ROTATING TEXT ====================
const rotatingWords = document.querySelectorAll('.rotating-word');
let currentWord = 0;

if (rotatingWords.length > 0) {
    // Clone first word for seamless loop
    const firstWordClone = rotatingWords[0].cloneNode(true);
    rotatingWords[0].parentElement.appendChild(firstWordClone);
}

// ==================== EXPERIENCE TABS ====================
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        // Update buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update content
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tabId) {
                content.classList.add('active');
            }
        });
    });
});

// ==================== SKILLS ANIMATION ====================
const skillBars = document.querySelectorAll('.level-fill');
const skillsSection = document.querySelector('.skills');
let skillsAnimated = false;

function animateSkills() {
    if (skillsAnimated) return;
    
    skillBars.forEach((bar, index) => {
        const level = bar.getAttribute('data-level');
        if (level) {
            // Delay escalonado para efecto cascada
            setTimeout(() => {
                bar.style.width = level + '%';
            }, index * 80);
        }
    });
    
    skillsAnimated = true;
}

// Intersection Observer para detectar cuando la sección es visible
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                setTimeout(animateSkills, 300);
                skillsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    skillsObserver.observe(skillsSection);
    
    // Fallback:  si ya está visible al cargar la página
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTimeout(animateSkills, 800);
    }
}

// ==================== PROJECT FILTER ====================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Update buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter projects
        projectCards.forEach((card, index) => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.style.animationDelay = `${index * 0.1}s`;
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ==================== TESTIMONIALS SLIDER ====================
const track = document.querySelector('.testimonials-track');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const dots = document.querySelectorAll('.slider-dots .dot');

let currentSlide = 0;
const totalSlides = testimonialCards.length;

function updateSlider() {
    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

// Auto slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}, 6000);

// ==================== TOAST NOTIFICATIONS ====================
function showToast(type, title, message) {
    const container = document.getElementById('toastContainer');
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fa-check',
        error: 'fa-times',
        warning: 'fa-exclamation',
        info: 'fa-info'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas ${icons[type]}"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(toast);
    
    // Close button
    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.remove();
    });
    
    // Auto remove
    setTimeout(() => {
        toast.remove();
    }, 5000);
}

// ==================== CONTACT FORM (con i18n) ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn-submit');
        submitBtn.classList.add('loading');
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        submitBtn.classList.remove('loading');
        submitBtn.classList.add('success');
        
        // Usar traducciones si i18n está disponible
        const successTitle = window.i18n ?  window.i18n.t('contact.toast.success.title') : '¡Mensaje enviado!';
        const successMessage = window.i18n ?  window.i18n.t('contact.toast.success.message') : 'Te responderé en menos de 24 horas.';
        
        // Show toast with translations
        showToast('success', successTitle, successMessage);
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            submitBtn.classList.remove('success');
        }, 3000);
    });
}

// ==================== BACK TO TOP ====================
const backToTop = document.getElementById('backToTop');

function updateBackToTop() {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior:  'smooth'
        });
    });
}

// ==================== PROJECT MODAL ====================
const modal = document.getElementById('projectModal');
const modalOverlay = modal?.querySelector('.modal-overlay');
const modalClose = modal?.querySelector('.modal-close');
const infoButtons = document.querySelectorAll('.action-btn[data-tooltip="Más info"]');

infoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.project-card');
        const title = card.querySelector('.project-title').textContent;
        const description = card.querySelector('.project-description').textContent;
        const category = card.querySelector('.project-category').textContent;
        const tech = card.querySelector('.project-tech').innerHTML;
        
        // Update modal content
        modal.querySelector('.modal-title').textContent = title;
        modal.querySelector('.modal-description').textContent = description;
        modal.querySelector('.modal-category').textContent = category;
        modal.querySelector('.tech-list').innerHTML = tech;
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modal?.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalOverlay?.addEventListener('click', closeModal);
modalClose?.addEventListener('click', closeModal);
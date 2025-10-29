// ============================================
// ICE-TECH - Interactive JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Language Management
    initLanguageSwitcher();
    
    // Navigation
    initNavigation();
    
    // Product Filters
    initProductFilters();
    
    // Product Modal
    initProductModal();
    
    // Smooth Scroll
    initSmoothScroll();
    
    // Form Handling
    initContactForm();
    
    // Scroll Animations
    initScrollAnimations();
});

// ============================================
// Language Switcher
// ============================================

function initLanguageSwitcher() {
    const langFrBtn = document.getElementById('lang-fr');
    const langEnBtn = document.getElementById('lang-en');
    const html = document.documentElement;
    
    // Get saved language or default to French
    let currentLang = localStorage.getItem('ice-tech-lang') || 'fr';
    html.setAttribute('data-lang', currentLang);
    updateLanguageButtons(currentLang);
    
    langFrBtn.addEventListener('click', () => {
        currentLang = 'fr';
        html.setAttribute('data-lang', 'fr');
        localStorage.setItem('ice-tech-lang', 'fr');
        updateLanguageButtons('fr');
    });
    
    langEnBtn.addEventListener('click', () => {
        currentLang = 'en';
        html.setAttribute('data-lang', 'en');
        localStorage.setItem('ice-tech-lang', 'en');
        updateLanguageButtons('en');
    });
}

function updateLanguageButtons(lang) {
    const langFrBtn = document.getElementById('lang-fr');
    const langEnBtn = document.getElementById('lang-en');
    
    if (lang === 'fr') {
        langFrBtn.classList.add('active');
        langEnBtn.classList.remove('active');
    } else {
        langEnBtn.classList.add('active');
        langFrBtn.classList.remove('active');
    }
}

// ============================================
// Navigation
// ============================================

function initNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// ============================================
// Product Filters
// ============================================

function initProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter products
            productCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// ============================================
// Product Modal
// ============================================

function initProductModal() {
    const modal = document.getElementById('productModal');
    const quickViewButtons = document.querySelectorAll('.btn-quick-view');
    const closeModal = document.querySelector('.modal-close');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productCard = button.closest('.product-card');
            const productImage = productCard.querySelector('.product-image img');
            const productInfo = productCard.querySelector('.product-info');
            
            // Get product details
            const title = productInfo.querySelector('h3').textContent;
            const material = productInfo.querySelector('.product-material').textContent;
            const imageSrc = productImage.src;
            
            // Populate modal
            document.getElementById('modalImage').src = imageSrc;
            document.getElementById('modalImage').alt = title;
            
            const modalTitle = document.getElementById('modalTitle');
            const currentLang = document.documentElement.getAttribute('data-lang');
            
            // Set title based on language
            if (currentLang === 'fr') {
                modalTitle.textContent = productInfo.querySelector('h3.data-fr')?.textContent || title;
            } else {
                modalTitle.textContent = productInfo.querySelector('h3.data-en')?.textContent || title;
            }
            
            const modalMaterial = document.getElementById('modalMaterial');
            const materialElements = productInfo.querySelectorAll('.product-material');
            
            // Set material based on language
            if (currentLang === 'fr') {
                modalMaterial.textContent = materialElements[0]?.textContent || material;
            } else {
                modalMaterial.textContent = materialElements[1]?.textContent || material;
            }
            
            const modalDescription = document.getElementById('modalDescription');
            const currentLangDesc = document.documentElement.getAttribute('data-lang');
            if (currentLangDesc === 'fr') {
                modalDescription.textContent = 'Cette pièce exclusive en argent pur 925 témoigne d\'un savoir-faire exceptionnel. Chaque détail a été soigneusement travaillé pour créer un bijou d\'une élégance intemporelle.';
            } else {
                modalDescription.textContent = 'This exclusive piece in pure 925 silver reflects exceptional craftsmanship. Every detail has been carefully crafted to create jewelry of timeless elegance.';
            }
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// Smooth Scroll
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Contact Form
// ============================================

function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const phone = contactForm.querySelector('input[type="tel"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !phone || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            showNotification('Message sent successfully! We will contact you soon.', 'success');
            contactForm.reset();
        });
    }
}

function showNotification(message, type) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#f44336'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Scroll Animations
// ============================================

function initScrollAnimations() {
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
    
    // Observe elements
    const animateElements = document.querySelectorAll('.feature-card, .product-card, .about-text, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ============================================
// Navbar Scroll Effect
// ============================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '0.75rem 0';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        navbar.style.padding = '1rem 0';
    }
});

// ============================================
// Hero Scroll Indicator
// ============================================

const heroScroll = document.querySelector('.hero-scroll');
if (heroScroll) {
    heroScroll.addEventListener('click', () => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            const offsetTop = productsSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// ============================================
// Language Update for Dynamic Content
// ============================================

// Update modal content when language changes
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Close modal if open and update content
            const modal = document.getElementById('productModal');
            if (modal.classList.contains('active')) {
                // Re-trigger modal update with new language
                const quickViewBtn = document.querySelector('.btn-quick-view');
                if (quickViewBtn) {
                    setTimeout(() => {
                        // This will update the modal content
                    }, 100);
                }
            }
        });
    });
});

// ============================================
// Product Card Hover Effects
// ============================================

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ============================================
// Initialize on Load
// ============================================

window.addEventListener('load', () => {
    // Set initial language
    const savedLang = localStorage.getItem('ice-tech-lang') || 'fr';
    document.documentElement.setAttribute('data-lang', savedLang);
    updateLanguageButtons(savedLang);
    
    // Animate hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

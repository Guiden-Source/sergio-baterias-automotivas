/**
 * SÉRGIO BATERIAS AUTOMOTIVAS - MAIN JAVASCRIPT
 * Modern, Performance-Optimized, Vanilla JavaScript
 * Author: AI-Powered Development
 * 
 * Features:
 * - Smooth scroll navigation
 * - Animated header on scroll
 * - Mobile menu toggle
 * - Scroll-triggered animations
 * - Counter animations for stats
 * - Intersection Observer for performance
 */

(function() {
    'use strict';

    // ============================================
    // CONFIGURATION & STATE
    // ============================================
    const CONFIG = {
        scrollOffset: 80,
        animationDelay: 100,
        counterDuration: 2000,
        debounceDelay: 10
    };

    const state = {
        isMenuOpen: false,
        hasScrolled: false,
        countersAnimated: false
    };

    // ============================================
    // DOM ELEMENTS CACHE
    // ============================================
    const elements = {
        header: document.getElementById('header'),
        menuToggle: document.getElementById('menuToggle'),
        mobileMenu: document.getElementById('mobileMenu'),
        mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
        animatedElements: document.querySelectorAll('[data-animate]'),
        statNumbers: document.querySelectorAll('.stat-card .stat-number[data-target]'),
        backToTop: document.querySelector('.back-to-top'),
        allLinks: document.querySelectorAll('a[href^="#"]')
    };

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    
    /**
     * Debounce function to limit function calls
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function} Debounced function
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Easing function for smooth animations
     * @param {number} t - Time progress (0 to 1)
     * @returns {number} Eased value
     */
    function easeOutQuad(t) {
        return t * (2 - t);
    }

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    function handleScroll() {
        const scrolled = window.pageYOffset > 50;
        
        if (scrolled !== state.hasScrolled) {
            state.hasScrolled = scrolled;
            elements.header.classList.toggle('scrolled', scrolled);
        }
    }

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    function toggleMenu() {
        state.isMenuOpen = !state.isMenuOpen;
        elements.mobileMenu.classList.toggle('active', state.isMenuOpen);
        elements.menuToggle.setAttribute('aria-expanded', state.isMenuOpen);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
        
        // Animate hamburger icon
        const hamburger = elements.menuToggle.querySelector('.hamburger');
        if (hamburger) {
            hamburger.style.transform = state.isMenuOpen ? 'rotate(45deg)' : 'rotate(0)';
        }
    }

    function closeMenu() {
        if (state.isMenuOpen) {
            toggleMenu();
        }
    }

    // ============================================
    // SMOOTH SCROLL NAVIGATION
    // ============================================
    function smoothScrollTo(target, duration = 800) {
        const targetElement = document.querySelector(target);
        if (!targetElement) return;

        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition - CONFIG.scrollOffset;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeOutQuad(progress);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    function handleLinkClick(e) {
        const href = this.getAttribute('href');
        
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = href === '#home' ? 'body' : href;
            smoothScrollTo(target);
            closeMenu();
            
            // Update URL without jumping
            if (history.pushState) {
                history.pushState(null, null, href);
            }
        }
    }

    // ============================================
    // SCROLL ANIMATIONS (Intersection Observer)
    // ============================================
    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add delay based on element position
                    const delay = Array.from(entry.target.parentElement.children)
                        .indexOf(entry.target) * CONFIG.animationDelay;
                    
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, delay);
                    
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        elements.animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // ============================================
    // COUNTER ANIMATION
    // ============================================
    function animateCounter(element, target, duration) {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    function initCounters() {
        if (state.countersAnimated) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !state.countersAnimated) {
                    state.countersAnimated = true;
                    
                    elements.statNumbers.forEach(element => {
                        const target = parseInt(element.getAttribute('data-target'));
                        if (!isNaN(target)) {
                            animateCounter(element, target, CONFIG.counterDuration);
                        }
                    });
                    
                    observer.disconnect();
                }
            });
        }, observerOptions);

        // Observe the stats section
        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            observer.observe(statsSection);
        }
    }

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    function handleBackToTop() {
        const showBackToTop = window.pageYOffset > 500;
        
        if (elements.backToTop) {
            elements.backToTop.style.opacity = showBackToTop ? '1' : '0';
            elements.backToTop.style.pointerEvents = showBackToTop ? 'auto' : 'none';
        }
    }

    // ============================================
    // PARALLAX EFFECT (OPTIONAL - HERO)
    // ============================================
    function handleParallax() {
        const heroBackground = document.querySelector('.hero-background');
        if (!heroBackground) return;

        const scrolled = window.pageYOffset;
        const limit = heroBackground.offsetTop + heroBackground.offsetHeight;
        
        if (scrolled <= limit) {
            heroBackground.style.transform = `translateY(${scrolled * 0.35}px)`; // gentler parallax
        }
    }

    // ============================================
    // FORM VALIDATION (IF FORM EXISTS)
    // ============================================
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        return isValid;
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================
    function initEventListeners() {
        // Scroll events (debounced for performance)
        const debouncedScroll = debounce(() => {
            handleScroll();
            handleBackToTop();
            handleParallax(); // parallax enabled
        }, CONFIG.debounceDelay);

        window.addEventListener('scroll', debouncedScroll, { passive: true });

        // Menu toggle
        if (elements.menuToggle) {
            elements.menuToggle.addEventListener('click', toggleMenu);
        }

        // Mobile menu links
        elements.mobileNavLinks.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });

        // All anchor links with hash
        elements.allLinks.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && state.isMenuOpen) {
                closeMenu();
            }
        });

        // Close menu on outside click
        elements.mobileMenu.addEventListener('click', (e) => {
            if (e.target === elements.mobileMenu) {
                closeMenu();
            }
        });

        // Form submission (if form exists)
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!validateForm(form)) {
                    e.preventDefault();
                    alert('Por favor, preencha todos os campos obrigatórios.');
                }
            });
        });

        // Handle resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // Close mobile menu on resize to desktop
                if (window.innerWidth > 768 && state.isMenuOpen) {
                    closeMenu();
                }
            }, 250);
        });
    }

    // ============================================
    // PERFORMANCE OPTIMIZATION
    // ============================================
    
    /**
     * Preload critical resources
     */
    function preloadResources() {
        // Preload WhatsApp icon or other critical assets
        const whatsappLink = document.querySelector('.whatsapp-float');
        if (whatsappLink) {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = whatsappLink.href;
            document.head.appendChild(link);
        }
    }

    /**
     * Check if browser supports required features
     */
    function checkBrowserSupport() {
        const isSupported = 'IntersectionObserver' in window &&
                           'requestAnimationFrame' in window &&
                           'addEventListener' in window;

        if (!isSupported) {
            console.warn('Some features may not work in this browser.');
            // Fallback: add 'animated' class immediately
            elements.animatedElements.forEach(el => el.classList.add('animated'));
        }

        return isSupported;
    }

    // ============================================
    // ANALYTICS (Optional - Add your tracking)
    // ============================================
    function trackEvent(category, action, label) {
        // Example: Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }

        // Example: Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', action, { category, label });
        }

        // Console log for development
        console.log('Event:', category, action, label);
    }

    function initAnalytics() {
        // Track CTA button clicks
        const ctaButtons = document.querySelectorAll('.btn-primary, .btn-whatsapp, .btn-phone');
        ctaButtons.forEach(button => {
            button.addEventListener('click', () => {
                const buttonText = button.textContent.trim();
                trackEvent('CTA', 'click', buttonText);
            });
        });

        // Track WhatsApp float button
        const whatsappFloat = document.querySelector('.whatsapp-float');
        if (whatsappFloat) {
            whatsappFloat.addEventListener('click', () => {
                trackEvent('Float Button', 'click', 'WhatsApp');
            });
        }

        // Track phone calls
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(link => {
            link.addEventListener('click', () => {
                trackEvent('Contact', 'click', 'Phone Call');
            });
        });
    }

    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        console.log('🚀 Sérgio Baterias - Website initialized');

        // Check browser support
        const isSupported = checkBrowserSupport();

        // Initialize all features
        initEventListeners();
        
        if (isSupported) {
            initScrollAnimations();
            initCounters();
        }

        preloadResources();
        initAnalytics();

        // Initial scroll check (in case page is already scrolled)
        handleScroll();
        handleBackToTop();

        // Add loaded class to body
        document.body.classList.add('loaded');

        // Log performance metrics (development only)
        if (window.performance && window.performance.timing) {
            window.addEventListener('load', () => {
                const loadTime = window.performance.timing.domContentLoadedEventEnd - 
                               window.performance.timing.navigationStart;
                console.log(`⚡ Page loaded in ${loadTime}ms`);
            });
        }
    }

    // ============================================
    // START APPLICATION
    // Wait for DOM to be ready
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ============================================
    // EXPOSE PUBLIC API (Optional)
    // ============================================
    window.SergioBaterias = {
        version: '1.0.0',
        closeMenu,
        scrollTo: smoothScrollTo,
        trackEvent
    };

})();

// ============================================
// SERVICE WORKER REGISTRATION (Optional - PWA)
// Uncomment to enable offline support
// ============================================
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
}
*/

// ============================================
// CONSOLE EASTER EGG (Optional - Fun!)
// ============================================
console.log('%c🔋 Sérgio Baterias Automotivas', 'font-size: 20px; font-weight: bold; color: #dc2626;');
console.log('%cPrecisa de bateria? Entre em contato: (11) 99708-1974', 'font-size: 14px; color: #64748b;');
console.log('%c⚡ Site desenvolvido com tecnologias modernas', 'font-size: 12px; color: #f59e0b;');

/* ========================================
   ADVANCED JAVASCRIPT INTERACTIONS
   World-Class UI/UX Enhancements
   ======================================== */

(function() {
    'use strict';

    // ========== PERFORMANCE OPTIMIZATIONS ==========
    // Debounce function for scroll and resize events
    function debounce(func, wait = 10, immediate = false) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Throttle function for high-frequency events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // ========== PAGE LOAD ANIMATIONS ==========
    window.addEventListener('load', function() {
        // Add loaded class to body
        document.body.classList.add('loaded');
        
        // Animate elements on page load
        const heroElements = document.querySelectorAll('.hero-wrap .text > *');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 150);
        });
    });

    // ========== SMOOTH SCROLLING ENHANCEMENTS ==========
    // Enhanced smooth scroll with easing
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== PARALLAX SCROLL EFFECTS ==========
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (parallaxElements.length > 0) {
        const parallaxScroll = throttle(function() {
            const scrolled = window.pageYOffset;
            parallaxElements.forEach(el => {
                const speed = el.dataset.parallax || 0.5;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        }, 10);
        
        window.addEventListener('scroll', parallaxScroll);
    }

    // ========== ENHANCED SCROLL ANIMATIONS ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.stagger-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all animate elements
    document.querySelectorAll('.ftco-animate').forEach(el => {
        observer.observe(el);
    });

    // ========== 3D TILT EFFECT ==========
    function tiltEffect(element) {
        const card = element;
        const handleMouseMove = function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        };
        
        const handleMouseLeave = function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        };
        
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
    }

    // Apply tilt effect to cards
    document.querySelectorAll('.resume-wrap, .contact-section .box').forEach(tiltEffect);

    // ========== ANIMATED COUNTER ==========
    function animateCounter(element) {
        const target = parseInt(element.dataset.count);
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const updateCounter = function() {
            current += increment;
            if (current < target) {
                element.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    }

    // Observe counters
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('[data-count]').forEach(el => {
        counterObserver.observe(el);
    });

    // ========== NAVBAR SCROLL EFFECTS ==========
    const navbar = document.querySelector('.ftco_navbar');
    let lastScroll = 0;
    
    const handleScroll = debounce(function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll direction
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    }, 10);
    
    window.addEventListener('scroll', handleScroll);

    // ========== ACTIVE SECTION HIGHLIGHTING ==========
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const highlightNav = throttle(function() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
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
    }, 100);
    
    window.addEventListener('scroll', highlightNav);

    // ========== SKILL ICONS ANIMATION ==========
    const skillIcons = document.querySelectorAll('.grow img');
    skillIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.1}s`;
    });

    // ========== CURSOR FOLLOW EFFECT ==========
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    const cursorFollower = document.createElement('div');
    cursorFollower.classList.add('custom-cursor-follower');
    document.body.appendChild(cursorFollower);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        const speed = 0.2;
        
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .nav-link, .grow');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursor.classList.add('cursor-hover');
            cursorFollower.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', function() {
            cursor.classList.remove('cursor-hover');
            cursorFollower.classList.remove('cursor-hover');
        });
    });

    // ========== LAZY LOADING IMAGES ==========
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                if (src) {
                    img.src = src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // ========== SCROLL PROGRESS INDICATOR ==========
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    document.body.appendChild(progressBar);
    
    const updateProgress = throttle(function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }, 10);
    
    window.addEventListener('scroll', updateProgress);

    // ========== SCROLL TO TOP BUTTON ==========
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.classList.add('scroll-to-top');
    scrollTopBtn.innerHTML = '<span class="icon-arrow-up"></span>';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);
    
    const toggleScrollTopBtn = debounce(function() {
        if (window.pageYOffset > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }, 100);
    
    window.addEventListener('scroll', toggleScrollTopBtn);
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ========== ENHANCED PARTICLES INTERACTION ==========
    if (window.particlesJS && document.getElementById('particles-js')) {
        // Add mouse interaction with particles
        document.addEventListener('mousemove', throttle(function(e) {
            const particlesContainer = document.getElementById('particles-js');
            if (particlesContainer) {
                const x = (e.clientX / window.innerWidth) * 2 - 1;
                const y = (e.clientY / window.innerHeight) * 2 - 1;
                particlesContainer.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
            }
        }, 50));
    }

    // ========== TEXT TYPING EFFECT ENHANCEMENT ==========
    const typingElements = document.querySelectorAll('[data-typing]');
    typingElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        let i = 0;
        
        const typeWriter = function() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        const typingObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    typingObserver.unobserve(entry.target);
                }
            });
        });
        
        typingObserver.observe(el);
    });

    // ========== ANIMATED BACKGROUND GRADIENT ==========
    let gradientAngle = 0;
    function animateGradient() {
        gradientAngle = (gradientAngle + 0.5) % 360;
        document.body.style.background = `linear-gradient(${gradientAngle}deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)`;
        requestAnimationFrame(animateGradient);
    }
    // Uncomment to enable animated gradient
    // animateGradient();

    // ========== MOBILE MENU ENHANCEMENTS ==========
    const navToggle = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('.navbar-collapse');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            this.classList.toggle('active');
            
            // Animate menu items
            const menuItems = navMenu.querySelectorAll('.nav-item');
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 50);
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('show');
                navToggle.classList.remove('active');
            }
        });
    }

    // ========== FORM VALIDATION ENHANCEMENTS ==========
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = form.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                    setTimeout(() => input.classList.remove('error'), 3000);
                }
            });
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    });

    // ========== ACCESSIBILITY ENHANCEMENTS ==========
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key to close mobile menu
        if (e.key === 'Escape') {
            const navMenu = document.querySelector('.navbar-collapse');
            const navToggle = document.querySelector('.navbar-toggler');
            if (navMenu && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                if (navToggle) navToggle.classList.remove('active');
            }
        }
    });

    // ========== PERFORMANCE MONITORING ==========
    if ('PerformanceObserver' in window) {
        const perfObserver = new PerformanceObserver(function(list) {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.startTime);
                }
            }
        });
        
        perfObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // ========== SERVICE WORKER REGISTRATION ==========
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Uncomment to enable service worker
            // navigator.serviceWorker.register('/sw.js');
        });
    }

    // ========== ANALYTICS EVENTS ==========
    const trackEvent = function(category, action, label) {
        // Add your analytics tracking code here
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    };

    // Track important interactions
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Contact', 'Click', 'Email');
        });
    });

    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Contact', 'Click', 'Phone');
        });
    });

    // ========== CONSOLE EASTER EGG ==========
    console.log('%c👋 Hello Developer!', 'color: #F96D00; font-size: 24px; font-weight: bold;');
    console.log('%cInterested in the code? Let\'s connect!', 'color: #FFAC00; font-size: 16px;');
    console.log('%cEmail: i.am.a.pakistani.programmer@gmail.com', 'color: #E5E5E5; font-size: 14px;');

})();

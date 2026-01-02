// ============================================
// PORTFOLIO - Andrea Bardi
// Modern Interactive JavaScript
// ============================================

// Console Signature
console.log(`
%c █████╗ ██████╗
%c██╔══██╗██╔══██╗
%c███████║██████╔╝
%c██╔══██║██╔══██╗
%c██║  ██║██████╔╝
%c╚═╝  ╚═╝╚═════╝  %c●
`,
'color: #ffffff',
'color: #e0e0e0',
'color: #c0c0c0',
'color: #a0a0a0',
'color: #808080',
'color: #606060',
'color: #A00A0B; font-size: 24px'
);

console.log(
    '%c👋 Hey there, curious developer!',
    'font-size: 16px; font-weight: bold; color: #A00A0B;'
);

console.log(
    `%c
I'm Andrea Bardi
Full Stack Developer & Graphic Designer
Co-Founder @ FAM Vision

🌐 https://famvision.it
📧 andbardii@icloud.com
💼 https://linkedin.com/in/andbardii
🐙 https://github.com/andbardii

Like what you see?
Let's build something amazing together! 🚀
`,
    'color: #9CA3AF; font-family: monospace; font-size: 12px; line-height: 1.6;'
);

console.log(
    '%c💡 Psst... there might be some hidden easter eggs around here...',
    'color: #6B7280; font-style: italic; font-size: 10px;'
);

(function() {
    'use strict';

    // ============================================
    // TRANSLATIONS
    // ============================================
    const translations = {
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.skills': 'Skills',
            'nav.portfolio': 'Portfolio',
            'nav.experience': 'Experience',
            'nav.education': 'Education',
            'nav.contact': 'Contact',

            // Hero
            'hero.greeting': "Hello, I'm",
            'hero.role1': 'Full Stack Developer',
            'hero.role2': 'Graphic Designer',
            'hero.description': 'Creating digital experiences that blend elegant code with stunning visuals.',
            'hero.cta1': 'View My Work',
            'hero.cta2': 'Download CV',
            'hero.scroll': 'Scroll',

            // About
            'about.tag': 'About Me',
            'about.title': 'Turning Ideas Into <span>Reality</span>',
            'about.p1': "I'm a <strong>23-year-old</strong> creative developer based in <strong>Bologna, Italy</strong>. With a unique blend of graphic design expertise and full-stack development skills, I bring a holistic approach to every project.",
            'about.p2': 'After graduating in <strong>Graphics and Communication</strong>, I pursued my passion for technology by completing an intensive Full Stack Developer course at <strong>Epicode</strong>. This dual background allows me to create solutions that are both technically robust and visually compelling.',
            'about.p3': "I'm constantly exploring new technologies and pushing creative boundaries. My goal is to craft digital experiences that leave a lasting impression.",
            'about.stat1': 'Projects Completed',
            'about.stat2': 'Live Websites',
            'about.stat3': 'Technologies',

            // Skills
            'skills.tag': 'My Expertise',
            'skills.title': 'Skills & <span>Technologies</span>',
            'skills.languages': 'Languages',
            'skills.tools': 'Tools & Methods',

            // Portfolio
            'portfolio.tag': 'My Work',
            'portfolio.title': 'Featured <span>Projects</span>',
            'portfolio.filterAll': 'All',
            'portfolio.filterWebapp': 'Web Apps',
            'portfolio.filterCorporate': 'Corporate',
            'portfolio.filterSaas': 'SaaS',

            // Modal
            'modal.techStack': 'Tech Stack',
            'modal.features': 'Key Features',
            'modal.visitProject': 'Visit Project',
            'portfolio.viewDetails': 'View Details',
            'portfolio.seeMore': 'See more on GitHub',

            // Experience
            'experience.tag': 'Career',
            'experience.title': 'Work <span>Experience</span>',
            'experience.type.freelance': 'Freelance',
            'experience.type.fulltime': 'Full-time',
            'experience.type.internship': 'Internship',
            'experience.location.remote': 'Remote',
            'experience.exp1.role': 'Co-Founder & Lead Developer',
            'experience.exp1.date': 'Oct 2023 - Present',
            'experience.exp1.desc': 'Web development, custom web apps and management systems, social media management, branding, SEO and online visibility optimization.',
            'experience.exp2.role': 'Junior Developer',
            'experience.exp2.date': 'Dec 2023 - Mar 2024',
            'experience.exp2.desc': 'Functional scripting, pipeline management, ERP development, process optimization and debugging, server/client installation, direct customer support.',
            'experience.exp3.role': 'Graphic Designer',
            'experience.exp3.date': 'Nov 2021 - Dec 2021',
            'experience.exp3.desc': 'Design and production of periodical magazines, physical and digital advertising, commercial photography, video editing.',
            'experience.exp4.role': 'Graphic Designer',
            'experience.exp4.date': 'Nov 2020 - Dec 2020',
            'experience.exp4.desc': 'Packaging design and printing, periodical magazine design and production, commercial photography.',

            // Education
            'education.tag': 'Background',
            'education.title': 'Education & <span>Training</span>',
            'education.edu1.title': 'High School Diploma',
            'education.edu1.subtitle': 'Graphic Design Communication',
            'education.edu1.desc': 'Design advertising campaigns and realization of advertising on various media, rebranding, packaging design, production of audio and video commercials.',
            'education.edu2.title': 'Post Diploma Course',
            'education.edu2.subtitle': 'Full Stack Development',
            'education.edu2.desc': 'Responsive website development, single-page applications development, relational database development, REST API services development, OOP programming, security development, test management.',
            'education.edu3.title': "Bachelor's Degree",
            'education.edu3.subtitle': 'Computer Engineering & Artificial Intelligence',
            'education.edu3.desc': 'Object-oriented programming, artificial intelligence fundamentals, machine learning, software engineering, and advanced computing concepts.',
            'education.edu3.date': '2024 - Present',

            // Contact
            'contact.tag': 'Get In Touch',
            'contact.title': "Let's Work <span>Together</span>",
            'contact.desc': 'With <strong>FAM Vision</strong> I deal with website and web app development, branding and rebranding, social management and much more.',
            'contact.cta': 'Say Hello',
            'contact.or': 'or',
            'contact.bookAppointment': 'Book a Meeting',
            'contact.languagesValue': 'Italian, English',

            // FAM Vision Button
            'famvision.discover': 'Discover',

            // Footer
            'footer.copyright': '&copy; 2025 Andrea Bardi. All rights reserved.',
            'footer.built': 'Designed & Built with <i class="fas fa-heart"></i>',
            'footer.cookies': 'Manage Cookies',

            // Cookie Modal
            'cookie.title': 'Cookie Policy',
            'cookie.notice': 'This website does <strong>not use any cookies</strong> for tracking, analytics, or advertising. Your privacy is respected.',
            'cookie.browserRequest': "Your Browser's Request",
            'cookie.browserDesc': "Here's what your browser reveals when requesting this page:",
            'cookie.privacyWarning': 'Every website you visit can see this information. Be mindful of which sites you trust with your data.',
            'cookie.experiment': 'Cookie Experiment',
            'cookie.experimentDesc': 'Want to see how cookies work? Set a temporary session cookie below:',
            'cookie.name': 'Name',
            'cookie.value': 'Value',
            'cookie.setBtn': 'Feed Browser This Cookie',
            'cookie.current': 'Current Cookies',
            'cookie.noCookies': 'No cookies stored for this site',
            'cookie.inspired': "Inspired by Steve Gibson's ",
            'cookie.machineTitle': 'Your Machine Name',
            'cookie.machineDesc': 'This reverse DNS name may uniquely identify your connection. Unlike cookies, you cannot delete or change it.',
            'cookie.machineLoading': 'Looking up...',
            'cookie.machineNotFound': 'Not available'
        },
        it: {
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'Chi Sono',
            'nav.skills': 'Competenze',
            'nav.experience': 'Esperienza',
            'nav.portfolio': 'Portfolio',
            'nav.education': 'Formazione',
            'nav.contact': 'Contatti',

            // Hero
            'hero.greeting': 'Ciao, sono',
            'hero.role1': 'Full Stack Developer',
            'hero.role2': 'Graphic Designer',
            'hero.description': 'Creo esperienze digitali che fondono codice elegante con visual straordinari.',
            'hero.cta1': 'Vedi i Miei Lavori',
            'hero.cta2': 'Scarica CV',
            'hero.scroll': 'Scorri',

            // About
            'about.tag': 'Chi Sono',
            'about.title': 'Trasformo Idee in <span>Realtà</span>',
            'about.p1': 'Sono un developer creativo di <strong>23 anni</strong> con base a <strong>Bologna, Italia</strong>. Con una combinazione unica di competenze in graphic design e sviluppo full-stack, porto un approccio olistico ad ogni progetto.',
            'about.p2': 'Dopo essermi diplomato in <strong>Grafica e Comunicazione</strong>, ho seguito la mia passione per la tecnologia completando un corso intensivo Full Stack Developer presso <strong>Epicode</strong>. Questo doppio background mi permette di creare soluzioni tecnicamente solide e visivamente accattivanti.',
            'about.p3': 'Esploro costantemente nuove tecnologie e spingo i confini della creatività. Il mio obiettivo è creare esperienze digitali che lascino un\'impressione duratura.',
            'about.stat1': 'Progetti Completati',
            'about.stat2': 'Siti Web Online',
            'about.stat3': 'Tecnologie',

            // Skills
            'skills.tag': 'Le Mie Competenze',
            'skills.title': 'Skills & <span>Tecnologie</span>',
            'skills.languages': 'Linguaggi',
            'skills.tools': 'Strumenti & Metodi',

            // Portfolio
            'portfolio.tag': 'I Miei Lavori',
            'portfolio.title': 'Progetti in <span>Evidenza</span>',
            'portfolio.filterAll': 'Tutti',
            'portfolio.filterWebapp': 'Web App',
            'portfolio.filterCorporate': 'Corporate',
            'portfolio.filterSaas': 'SaaS',

            // Modal
            'modal.techStack': 'Tech Stack',
            'modal.features': 'Funzionalità',
            'modal.visitProject': 'Visita Progetto',
            'portfolio.viewDetails': 'Vedi Dettagli',
            'portfolio.seeMore': 'Scopri di più su GitHub',

            // Experience
            'experience.tag': 'Carriera',
            'experience.title': 'Esperienza <span>Lavorativa</span>',
            'experience.type.freelance': 'Freelance',
            'experience.type.fulltime': 'Tempo Pieno',
            'experience.type.internship': 'Stage',
            'experience.location.remote': 'Da Remoto',
            'experience.exp1.role': 'Co-Founder & Lead Developer',
            'experience.exp1.date': 'Ott 2023 - Presente',
            'experience.exp1.desc': 'Sviluppo siti web, web app e gestionali personalizzati, gestione social media, branding, SEO e ottimizzazione visibilità online.',
            'experience.exp2.role': 'Junior Developer',
            'experience.exp2.date': 'Dic 2023 - Mar 2024',
            'experience.exp2.desc': 'Scripting funzionale, creazione e gestione pipeline, sviluppo in ambiente ERP, ottimizzazione processi e debugging, installazione applicativi server e client, supporto diretto clienti.',
            'experience.exp3.role': 'Grafico',
            'experience.exp3.date': 'Nov 2021 - Dic 2021',
            'experience.exp3.desc': 'Progettazione e realizzazione riviste periodiche, advertising fisico e digitale, fotografia commerciale, montaggio video advertising.',
            'experience.exp4.role': 'Grafico',
            'experience.exp4.date': 'Nov 2020 - Dic 2020',
            'experience.exp4.desc': 'Progettazione e stampa di packaging, progettazione e realizzazione riviste periodiche, fotografia commerciale.',

            // Education
            'education.tag': 'Background',
            'education.title': 'Formazione & <span>Studi</span>',
            'education.edu1.title': 'Diploma di Maturità',
            'education.edu1.subtitle': 'Grafica e Comunicazione',
            'education.edu1.desc': 'Progettazione di campagne pubblicitarie e realizzazione di pubblicità su vari media, rebranding, packaging design, produzione di spot audio e video.',
            'education.edu2.title': 'Corso Post Diploma',
            'education.edu2.subtitle': 'Full Stack Development',
            'education.edu2.desc': 'Sviluppo di siti web responsive, sviluppo di single-page applications, sviluppo di database relazionali, sviluppo di servizi REST API, programmazione OOP, sviluppo sicurezza, gestione test.',
            'education.edu3.title': 'Laurea Triennale',
            'education.edu3.subtitle': 'Ingegneria Informatica & Intelligenza Artificiale',
            'education.edu3.desc': 'Programmazione orientata agli oggetti, fondamenti di intelligenza artificiale, machine learning, ingegneria del software e concetti avanzati di informatica.',
            'education.edu3.date': '2024 - In Corso',

            // Contact
            'contact.tag': 'Contattami',
            'contact.title': 'Lavoriamo <span>Insieme</span>',
            'contact.desc': 'Con <strong>FAM Vision</strong> mi occupo di sviluppo siti web e web app, branding e rebranding, social management e molto altro.',
            'contact.cta': 'Scrivimi',
            'contact.or': 'oppure',
            'contact.bookAppointment': 'Prenota un Appuntamento',
            'contact.languagesValue': 'Italiano, Inglese',

            // FAM Vision Button
            'famvision.discover': 'Scopri',

            // Footer
            'footer.copyright': '&copy; 2025 Andrea Bardi. Tutti i diritti riservati.',
            'footer.built': 'Progettato e Realizzato con <i class="fas fa-heart"></i>',
            'footer.cookies': 'Gestisci Cookie',

            // Cookie Modal
            'cookie.title': 'Policy Cookie',
            'cookie.notice': 'Questo sito web <strong>non utilizza cookie</strong> per tracciamento, analytics o pubblicità. La tua privacy è rispettata.',
            'cookie.browserRequest': 'La Richiesta del Tuo Browser',
            'cookie.browserDesc': 'Ecco cosa rivela il tuo browser quando richiede questa pagina:',
            'cookie.privacyWarning': 'Ogni sito web che visiti può vedere queste informazioni. Fai attenzione a quali siti affidi i tuoi dati.',
            'cookie.experiment': 'Esperimento Cookie',
            'cookie.experimentDesc': 'Vuoi vedere come funzionano i cookie? Imposta un cookie di sessione temporaneo:',
            'cookie.name': 'Nome',
            'cookie.value': 'Valore',
            'cookie.setBtn': 'Dai al Browser Questo Cookie',
            'cookie.current': 'Cookie Attuali',
            'cookie.noCookies': 'Nessun cookie memorizzato per questo sito',
            'cookie.inspired': 'Ispirato da ',
            'cookie.machineTitle': 'Nome della Tua Macchina',
            'cookie.machineDesc': 'Questo nome DNS inverso può identificare univocamente la tua connessione. A differenza dei cookie, non puoi eliminarlo o modificarlo.',
            'cookie.machineLoading': 'Ricerca in corso...',
            'cookie.machineNotFound': 'Non disponibile'
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update language toggle button
        const langToggle = document.querySelector('.lang-toggle span');
        if (langToggle) {
            langToggle.textContent = lang.toUpperCase();
        }

    }

    // Language toggle
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        // Initialize language
        setLanguage(currentLang);

        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'it' : 'en';
            setLanguage(newLang);
        });
    }

    // ============================================
    // CUSTOM CURSOR
    // ============================================
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    if (cursor && cursorFollower) {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let followerX = 0;
        let followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor animation
        function animateCursor() {
            // Cursor follows mouse directly
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            // Follower has more lag
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effects for interactive elements
        const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .skill-category, .stat-item, .contact-cta');

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorFollower.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorFollower.classList.remove('hover');
            });
        });
    }

    // ============================================
    // NAVIGATION
    // ============================================
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navbar
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // ============================================
    // THEME TOGGLE
    // ============================================
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle?.querySelector('i');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');

            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
    }

    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ============================================
    // PORTFOLIO SWIPER (Mobile) with Scroll Hijacking
    // ============================================
    // COMPORTAMENTO:
    // - Scroll normale finché lo swiper non è vicino al centro
    // - Quando lo swiper è nella "capture zone", BLOCCA immediatamente
    // - Swipe VERTICALE = naviga tra slide
    // - Swipe ORIZZONTALE = funziona normalmente (swiper cards, filtri)
    // - Click su nav link = bypassa il blocco
    // ============================================

    let portfolioSwiper = null;
    let originalSwiperSlides = []; // Slide originali per ricostruzione dopo filtri

    if (typeof Swiper !== 'undefined') {
        const swiperContainer = document.querySelector('.portfolio-swiper');
        const portfolioSection = document.getElementById('portfolio');
        const swiperWrapper = document.querySelector('.portfolio-swiper .swiper-wrapper');

        if (!swiperContainer || !portfolioSection) {
            console.warn('Swiper: elementi non trovati');
        } else {
            // Salva le slide originali prima di inizializzare lo swiper
            originalSwiperSlides = Array.from(swiperWrapper.querySelectorAll('.swiper-slide')).map(slide => ({
                html: slide.outerHTML,
                category: slide.querySelector('.portfolio-item')?.getAttribute('data-category') || ''
            }));

            // Swiper con touch orizzontale abilitato
            portfolioSwiper = new Swiper('.portfolio-swiper', {
                slidesPerView: 1,
                spaceBetween: 16,
                loop: false,
                grabCursor: true,
                speed: 300,
                allowTouchMove: true,
                touchAngle: 45,
                threshold: 10,
                resistanceRatio: 0.85,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });

            // ============================================
            // CONFIGURAZIONE
            // ============================================
            const CONFIG = {
                // Zona di cattura: quando lo swiper è entro questa distanza dal centro, blocca
                CAPTURE_ZONE: Math.min(window.innerHeight * 0.4, 350),
                // Cooldown tra cambi slide
                SLIDE_COOLDOWN: 400,
                // Soglia minima per riconoscere uno swipe verticale
                VERTICAL_THRESHOLD: 20,
                // Soglia wheel
                WHEEL_THRESHOLD: 40,
                // Tolleranza per considerare "centrato"
                CENTER_TOLERANCE: 10
            };

            // ============================================
            // STATO
            // ============================================
            const state = {
                locked: false,
                sliding: false,
                navigating: false,  // true durante click su nav link
                centered: false,
                rafId: null,
                swiperCompleted: false  // true dopo aver visto tutti i progetti
            };

            // ============================================
            // UTILITIES
            // ============================================
            const isMobile = () => window.getComputedStyle(swiperContainer).display !== 'none';

            const isModalOpen = () => {
                const modal = document.getElementById('projectModal');
                return modal?.classList.contains('active');
            };

            const getMetrics = () => {
                const rect = swiperContainer.getBoundingClientRect();
                const viewportCenter = window.innerHeight / 2;
                const swiperCenter = rect.top + rect.height / 2;
                const offset = swiperCenter - viewportCenter;

                return {
                    offset,                                    // positivo = swiper sotto centro, negativo = sopra
                    absOffset: Math.abs(offset),
                    inCaptureZone: Math.abs(offset) <= CONFIG.CAPTURE_ZONE,
                    isCentered: Math.abs(offset) <= CONFIG.CENTER_TOLERANCE,
                    scrollTarget: window.scrollY + offset      // scrollY per centrare lo swiper
                };
            };

            const canSlide = (dir) => {
                if (dir === 'next') return !portfolioSwiper.isEnd;
                if (dir === 'prev') return !portfolioSwiper.isBeginning;
                return false;
            };

            // ============================================
            // SCROLL LOCK/UNLOCK
            // ============================================
            const lock = () => {
                if (state.locked) return;
                state.locked = true;
                // pan-x permette scroll orizzontale (filtri, swiper), blocca verticale
                document.body.style.cssText = 'overflow:hidden;touch-action:pan-x pinch-zoom;';
                document.documentElement.style.overflow = 'hidden';
            };

            const unlock = () => {
                if (!state.locked) return;
                state.locked = false;
                state.centered = false;
                document.body.style.cssText = '';
                document.documentElement.style.overflow = '';
            };

            // ============================================
            // SNAP AL CENTRO (istantaneo, no smooth)
            // ============================================
            const snapToCenter = () => {
                const { scrollTarget, isCentered } = getMetrics();

                if (isCentered) {
                    state.centered = true;
                    lock();
                    return;
                }

                // Scroll istantaneo per fermare l'inerzia
                window.scrollTo({ top: scrollTarget, behavior: 'instant' });
                state.centered = true;
                lock();
            };

            // ============================================
            // FORZA POSIZIONE (chiamata continuamente durante scroll)
            // ============================================
            const forcePosition = () => {
                if (!state.locked || state.navigating) return;

                const { absOffset, scrollTarget } = getMetrics();

                // Se siamo spostati, riposiziona
                if (absOffset > CONFIG.CENTER_TOLERANCE) {
                    window.scrollTo({ top: scrollTarget, behavior: 'instant' });
                }
            };

            // ============================================
            // NAVIGAZIONE SLIDE
            // ============================================
            const slide = (direction) => {
                if (state.sliding || !canSlide(direction)) return false;

                state.sliding = true;

                if (direction === 'next') {
                    portfolioSwiper.slideNext();
                } else {
                    portfolioSwiper.slidePrev();
                }

                setTimeout(() => { state.sliding = false; }, CONFIG.SLIDE_COOLDOWN);
                return true;
            };

            // ============================================
            // DETERMINA SE BLOCCARE
            // ============================================
            const shouldCapture = (scrollingDown) => {
                // Non bloccare mai se l'utente ha già completato lo swiper
                if (state.swiperCompleted) return false;

                if (!isMobile() || isModalOpen() || state.navigating) return false;

                const { inCaptureZone } = getMetrics();
                if (!inCaptureZone) return false;

                // Blocca solo se ci sono slide nella direzione dello scroll
                if (scrollingDown && !canSlide('next')) return false;
                if (!scrollingDown && !canSlide('prev')) return false;

                return true;
            };

            // ============================================
            // TOUCH HANDLING
            // ============================================
            let touch = {
                active: false,
                startX: 0,
                startY: 0,
                lastY: 0,
                direction: null,  // 'v' | 'h' | null
                totalDeltaY: 0
            };

            const onTouchStart = (e) => {
                if (!isMobile() || isModalOpen() || state.navigating) return;

                touch.active = true;
                touch.startX = e.touches[0].clientX;
                touch.startY = e.touches[0].clientY;
                touch.lastY = touch.startY;
                touch.direction = null;
                touch.totalDeltaY = 0;
            };

            const onTouchMove = (e) => {
                if (!touch.active || state.navigating) return;

                const x = e.touches[0].clientX;
                const y = e.touches[0].clientY;
                const dx = Math.abs(x - touch.startX);
                const dy = Math.abs(y - touch.startY);

                // Determina direzione al primo movimento significativo
                if (!touch.direction && (dx > 5 || dy > 5)) {
                    // Se dy > dx * 1.2, è verticale (con un po' di margine)
                    touch.direction = dy > dx * 1.2 ? 'v' : 'h';
                }

                // Orizzontale: lascia passare (per swiper e filtri)
                if (touch.direction === 'h') {
                    return;
                }

                // Verticale: gestisci scroll hijacking
                if (touch.direction === 'v') {
                    const deltaY = touch.lastY - y;  // positivo = scroll down
                    const scrollingDown = deltaY > 0;
                    touch.lastY = y;
                    touch.totalDeltaY += deltaY;

                    // Se siamo già bloccati, previeni SEMPRE lo scroll verticale
                    if (state.locked) {
                        e.preventDefault();
                        forcePosition();
                        return;
                    }

                    // Se dovremmo catturare
                    if (shouldCapture(scrollingDown)) {
                        e.preventDefault();
                        snapToCenter();
                    }
                }
            };

            const onTouchEnd = () => {
                if (!touch.active) return;

                // Se bloccati e swipe verticale significativo, naviga
                if (state.locked && touch.direction === 'v' && !state.sliding) {
                    const delta = touch.totalDeltaY;

                    if (Math.abs(delta) >= CONFIG.VERTICAL_THRESHOLD) {
                        const direction = delta > 0 ? 'next' : 'prev';

                        if (canSlide(direction)) {
                            slide(direction);
                        } else {
                            // Fine slide, segna come completato e sblocca permanentemente
                            state.swiperCompleted = true;
                            unlock();
                        }
                    }
                }

                touch.active = false;
                touch.direction = null;
                touch.totalDeltaY = 0;
            };

            // Touch listeners globali
            document.addEventListener('touchstart', onTouchStart, { passive: true });
            document.addEventListener('touchmove', onTouchMove, { passive: false });
            document.addEventListener('touchend', onTouchEnd, { passive: true });
            document.addEventListener('touchcancel', onTouchEnd, { passive: true });

            // ============================================
            // WHEEL HANDLING (desktop/trackpad)
            // ============================================
            let wheelDelta = 0;

            const onWheel = (e) => {
                if (!isMobile() || isModalOpen() || state.navigating) return;

                const scrollingDown = e.deltaY > 0;

                // Se bloccati
                if (state.locked) {
                    e.preventDefault();
                    forcePosition();

                    if (state.sliding) return;

                    wheelDelta += e.deltaY;

                    if (Math.abs(wheelDelta) >= CONFIG.WHEEL_THRESHOLD) {
                        const direction = wheelDelta > 0 ? 'next' : 'prev';

                        if (canSlide(direction)) {
                            slide(direction);
                        } else {
                            // Fine slide, segna come completato e sblocca permanentemente
                            state.swiperCompleted = true;
                            unlock();
                        }

                        wheelDelta = 0;
                    }
                    return;
                }

                // Non bloccati: controlla se catturare
                if (shouldCapture(scrollingDown)) {
                    e.preventDefault();
                    snapToCenter();
                    wheelDelta = 0;
                }
            };

            window.addEventListener('wheel', onWheel, { passive: false });

            // ============================================
            // SCROLL LISTENER (backup per casi edge)
            // ============================================
            let lastScrollY = window.scrollY;

            const onScroll = () => {
                if (!isMobile() || isModalOpen() || state.navigating) return;

                const scrollingDown = window.scrollY > lastScrollY;
                lastScrollY = window.scrollY;

                // Se bloccati, forza posizione
                if (state.locked) {
                    forcePosition();
                    return;
                }

                // Controlla se catturare (per scroll inerziale)
                if (shouldCapture(scrollingDown)) {
                    snapToCenter();
                }
            };

            window.addEventListener('scroll', onScroll, { passive: true });

            // ============================================
            // NAVIGATION LINKS (bypassa il blocco)
            // ============================================
            const handleNavClick = (targetId) => {
                if (!isMobile()) return;

                state.navigating = true;
                unlock();

                // Reset swiper alla slide appropriata
                const portfolioY = portfolioSection.offsetTop;
                const target = document.getElementById(targetId);

                if (target) {
                    const targetY = target.offsetTop;
                    if (targetY < portfolioY) {
                        portfolioSwiper.slideTo(0, 0);
                    } else if (targetY > portfolioY) {
                        portfolioSwiper.slideTo(portfolioSwiper.slides.length - 1, 0);
                    }
                }

                // Riabilita dopo che la navigazione è completa
                setTimeout(() => { state.navigating = false; }, 1000);
            };

            document.querySelectorAll('a[href^="#"]').forEach(link => {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href?.startsWith('#') && href !== '#' && href !== '#portfolio') {
                        handleNavClick(href.substring(1));
                    }
                });
            });

            // ============================================
            // INTERSECTION OBSERVER (sblocca quando fuori viewport)
            // ============================================
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting && state.locked) {
                        unlock();
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(swiperContainer);

            // ============================================
            // RESIZE (sblocca se non più mobile)
            // ============================================
            window.addEventListener('resize', () => {
                if (!isMobile() && state.locked) {
                    unlock();
                }
                // Aggiorna capture zone
                CONFIG.CAPTURE_ZONE = Math.min(window.innerHeight * 0.4, 350);
            });

            // ============================================
            // SAFETY: sblocca se swiper esce dalla zona mentre bloccato
            // ============================================
            const safetyCheck = () => {
                if (state.locked && !state.navigating) {
                    const { inCaptureZone } = getMetrics();
                    if (!inCaptureZone) {
                        unlock();
                    }
                }
                requestAnimationFrame(safetyCheck);
            };
            requestAnimationFrame(safetyCheck);
        }
    }

    // ============================================
    // COUNTER ANIMATION
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                let count = 0;
                const duration = 2000;
                const increment = countTo / (duration / 16);

                const updateCount = () => {
                    count += increment;
                    if (count < countTo) {
                        target.textContent = Math.floor(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        target.textContent = countTo;
                    }
                };

                updateCount();
                counterObserver.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });

    statNumbers.forEach(num => counterObserver.observe(num));

    // ============================================
    // PORTFOLIO FILTER
    // ============================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItemsDesktop = document.querySelectorAll('.portfolio-desktop .portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            // Filtra gli item desktop (grid)
            portfolioItemsDesktop.forEach(item => {
                const categories = item.getAttribute('data-category');

                if (filterValue === 'all' || categories.includes(filterValue)) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.classList.add('hidden');
                }
            });

            // Ricostruisci le slide dello swiper mobile
            if (portfolioSwiper && originalSwiperSlides.length > 0) {
                const swiperWrapper = document.querySelector('.portfolio-swiper .swiper-wrapper');
                if (swiperWrapper) {
                    // Filtra le slide in base al filtro
                    const filteredSlides = originalSwiperSlides.filter(slide => {
                        if (filterValue === 'all') return true;
                        return slide.category.includes(filterValue);
                    });

                    // Rimuovi tutte le slide esistenti
                    portfolioSwiper.removeAllSlides();

                    // Aggiungi solo le slide filtrate
                    filteredSlides.forEach(slide => {
                        portfolioSwiper.appendSlide(slide.html);
                    });

                    // Aggiorna lo swiper e vai alla prima slide
                    portfolioSwiper.update();
                    portfolioSwiper.slideTo(0, 0);
                }
            }
        });
    });

    // ============================================
    // PROJECT MODAL
    // ============================================
    const projectsData = {
        'famvision': {
            title: 'FAM Vision',
            year: '2025',
            image: 'img/pr0.png',
            techStack: ['Angular 17', 'Firebase', 'TypeScript', 'SCSS', 'Motion', 'SSR'],
            link: 'https://famvision.it/',
            en: {
                category: 'Web Agency',
                description: 'Corporate website for FAM Vision, an innovative web agency specialized in modern web development, UX/UI design and custom digital solutions. The site features an immersive design with 3D effects, cinematic animations and gyroscope support for mobile devices.',
                features: [
                    '3D hero section with parallax and cyber-visual grid',
                    'Cinematic carousel with smooth transitions',
                    'Gyroscope support for immersive mobile experience',
                    'Dark/light theme with user preference management'
                ]
            },
            it: {
                category: 'Web Agency',
                description: 'Sito web corporate per FAM Vision, web agency innovativa specializzata in sviluppo web moderno, design UX/UI e soluzioni digitali personalizzate. Il sito presenta un design immersivo con effetti 3D, animazioni cinematiche e supporto giroscopio per dispositivi mobili.',
                features: [
                    'Hero section 3D con parallax e grid cyber-visuale',
                    'Carousel cinematico con transizioni fluide',
                    'Supporto giroscopio per esperienza mobile immersiva',
                    'Tema dark/light con gestione preferenze utente'
                ]
            }
        },
        'fma': {
            title: 'Football Match Analytics',
            year: '2025',
            image: 'img/pr7.png',
            techStack: ['Angular 17 SSR', 'Firebase', 'Google Cloud', 'Sharp', 'Motion', 'Bootstrap'],
            link: 'https://football-match-analytics.web.app/',
            en: {
                category: 'SaaS Platform',
                description: 'Enterprise SaaS platform for advanced football analytics with AI, complete gamification and 10 machine learning models analyzing 35,000+ historical matches. The system offers predictions with accuracy above 55%, gamification system with levels and XP, and advanced analysis tools.',
                features: [
                    '10 AI models for predictions with 55%+ accuracy',
                    'Advanced gamification with levels, XP and 10+ earning methods',
                    'News system with likes, comments and full engagement',
                    '3 script analysis tools + 1 tool with embedded AI models'
                ]
            },
            it: {
                category: 'Piattaforma SaaS',
                description: 'Piattaforma SaaS enterprise per analisi calcistiche avanzate con AI, gamification completa e 10 modelli di machine learning che analizzano 35.000+ partite storiche. Il sistema offre predizioni con accuratezza superiore al 55%, sistema di gamification con livelli e XP, e tool di analisi avanzati.',
                features: [
                    '10 modelli AI per predizioni con accuratezza 55%+',
                    'Gamification avanzata con livelli, XP e 10+ metodi di guadagno',
                    'Sistema news con like, commenti e engagement completo',
                    '3 tool di analisi script + 1 tool con modelli AI embedded'
                ]
            }
        },
        'sciensearch': {
            title: 'ScienSearch',
            year: '2025',
            image: 'img/pr8.png',
            techStack: ['Angular 17', 'Flask', 'SQLite', 'Celery', 'NetworkX', 'Docker', 'Tailwind CSS'],
            link: null,
            en: {
                category: 'Bioinformatics Platform',
                description: 'Complete web platform for advanced genomic analysis, designed for researchers and bioinformaticians. Analyzes transcriptional regulatory networks with network analysis algorithms, calculates centrality metrics and generates interactive visualizations for scientific publications.',
                features: [
                    'CSV upload with automatic genomic format validation',
                    'Network Analysis with advanced centrality metrics',
                    'HOMER Enrichment Integration for DNA motif analysis',
                    'AI Chatbot with guardrails for research assistance'
                ]
            },
            it: {
                category: 'Piattaforma Bioinformatica',
                description: 'Piattaforma web completa per l\'analisi genomica avanzata, progettata per ricercatori e bioinformatici. Analizza reti regolatorie trascrizionali con algoritmi di network analysis, calcola metriche di centralità e genera visualizzazioni interattive per pubblicazioni scientifiche.',
                features: [
                    'Upload CSV con validazione automatica del formato genomico',
                    'Network Analysis con metriche di centralità avanzate',
                    'HOMER Enrichment Integration per analisi motivi DNA',
                    'AI Chatbot con guardrails per assistenza ricerca'
                ]
            }
        },
        'scfinance': {
            title: 'SCFinance',
            year: '2025',
            image: 'img/pr1.png',
            techStack: ['Angular 16', 'Firebase', 'Bootstrap', 'Google Analytics'],
            link: 'https://scfinance.it/',
            en: {
                category: 'Lead Generation',
                description: 'Landing page optimized for collecting leads interested in dedicated financing for photovoltaic systems, with advanced form and document upload. Designed to maximize visitor-to-qualified-lead conversion.',
                features: [
                    'Lead collection form with advanced validation',
                    'Integrated PDF upload system',
                    'Mobile-first responsive design',
                    'Hosting and SSL managed with Firebase'
                ]
            },
            it: {
                category: 'Lead Generation',
                description: 'Landing page ottimizzata per la raccolta di lead interessati a finanziamenti dedicati per impianti fotovoltaici, con form avanzato e upload documenti. Progettata per massimizzare la conversione dei visitatori in lead qualificati.',
                features: [
                    'Form di raccolta lead con validazione avanzata',
                    'Sistema di upload PDF integrato',
                    'Design mobile-first responsive',
                    'Hosting e SSL gestiti con Firebase'
                ]
            }
        },
        'cernet': {
            title: 'CERNET ESCO',
            year: '2025',
            image: 'img/pr2.png',
            techStack: ['Angular 16', 'Firebase', 'Bootstrap', 'Iubenda', 'Swiper.js'],
            link: 'https://cernet-esco.it/',
            en: {
                category: 'Corporate',
                description: 'Multipage corporate website for CERNET, with advanced privacy management, integrated contact form system and optimized responsive design. Presents the offer of management systems and ESCO (Energy Service Company) services.',
                features: [
                    'Cookie and privacy policy management with Iubenda',
                    'Email contact form system',
                    'Mobile-first responsive design',
                    'Interactive sliders with Swiper.js'
                ]
            },
            it: {
                category: 'Corporate',
                description: 'Sito corporate multipage per CERNET, con gestione privacy avanzata, sistema di contact form integrato e design responsive ottimizzato. Presenta l\'offerta di gestionali e servizi ESCO (Energy Service Company).',
                features: [
                    'Gestione cookie e privacy policies con Iubenda',
                    'Sistema di contact form via email',
                    'Design mobile-first responsive',
                    'Slider interattivi con Swiper.js'
                ]
            }
        },
        'semplicemente-app': {
            title: 'Semplicemente Comunità',
            year: '2024',
            image: 'img/pr3.png',
            techStack: ['Angular 16', 'Spring Boot', 'PostgreSQL', 'AWS', 'Stripe', 'OpenStreetMap'],
            link: 'https://app.semplicementecomunita.it/',
            en: {
                category: 'Web Application',
                description: 'Complete web platform for managing Renewable Energy Communities, with customized dashboards for citizens, businesses, associations and public entities. Includes payment integration, interactive maps and advanced analytics.',
                features: [
                    'Customized dashboards for different user types',
                    'Stripe payment integration (card, PayPal, Klarna)',
                    'Interactive maps with OpenStreetMap',
                    'Integrated messaging system with admin'
                ]
            },
            it: {
                category: 'Web Application',
                description: 'Piattaforma web completa per la gestione di Comunità Energetiche Rinnovabili, con dashboard personalizzate per cittadini, aziende, associazioni ed enti. Include integrazione pagamenti, mappe interattive e analitiche avanzate.',
                features: [
                    'Dashboard personalizzate per diverse tipologie utente',
                    'Integrazione pagamenti Stripe (carta, PayPal, Klarna)',
                    'Mappe interattive con OpenStreetMap',
                    'Sistema di messaggistica integrato con admin'
                ]
            }
        },
        'semplicemente-admin': {
            title: 'Admin Dashboard CER',
            year: '2024',
            image: 'img/pr6.png',
            techStack: ['Angular 16', 'Spring Boot', 'Chart.js', 'PostgreSQL', 'AWS', 'Bootstrap'],
            link: 'https://admin.semplicementecomunita.it/',
            en: {
                category: 'Dashboard',
                description: 'Advanced administrative dashboard for managing REC operations and GSE practices, with real-time analytics and complete user control. Implements Principle of Least Privilege with granular role management.',
                features: [
                    'Operations and GSE practices management',
                    'Advanced analytics with real-time Chart.js',
                    'PoLP system with roles (Admin, Moderator, User)',
                    'Multi-type user management and communications'
                ]
            },
            it: {
                category: 'Dashboard',
                description: 'Dashboard amministrativa avanzata per la gestione delle operazioni CER e pratiche GSE, con analytics in tempo reale e controllo completo degli utenti. Implementa il Principle of Least Privilege con gestione granulare dei ruoli.',
                features: [
                    'Gestione operazioni e pratiche GSE',
                    'Analytics avanzate con Chart.js real-time',
                    'Sistema PoLP con ruoli (Admin, Moderator, User)',
                    'Gestione utenti multi-tipologia e comunicazioni'
                ]
            }
        },
        'semplicemente-site': {
            title: 'Semplicemente Comunità',
            year: '2024',
            image: 'img/pr4.png',
            techStack: ['Angular 16', 'Firebase', 'Bootstrap', 'Iubenda', 'Swiper.js', 'OpenStreetMap'],
            link: 'https://semplicementecomunita.it/',
            en: {
                category: 'Corporate',
                description: 'Multipage corporate website for presenting CERNET management systems for Energy Communities, with interactive maps and WhatsApp Business integration for direct contacts.',
                features: [
                    'Cookie and privacy policy management with Iubenda',
                    'Interactive maps with OpenStreetMap',
                    'WhatsApp Business integration',
                    'Mobile-first responsive design'
                ]
            },
            it: {
                category: 'Corporate',
                description: 'Sito corporate multipage per la presentazione dei gestionali CERNET per Comunità Energetiche, con mappe interattive e integrazione WhatsApp Business per contatti diretti.',
                features: [
                    'Gestione cookie e privacy policies con Iubenda',
                    'Mappe interattive con OpenStreetMap',
                    'Integrazione WhatsApp Business',
                    'Design mobile-first responsive'
                ]
            }
        },
        'adriano': {
            title: 'Adriano Group',
            year: '2024',
            image: 'img/pr5.png',
            techStack: ['Angular 16', 'Firebase', 'Bootstrap', 'Motion', 'Swiper.js', 'Trustpilot'],
            link: 'https://adrianogroup.it/',
            en: {
                category: 'Marketing',
                description: 'Single-page landing page optimized for SEO with smooth animations and Trustpilot integration for furniture and setup services. Designed to convert visitors into customers.',
                features: [
                    'Smooth animations with Motion for engaging UX',
                    'Trustpilot integration for verified reviews',
                    'Advanced SEO optimization (robots and LLMs)',
                    'Contact form system for lead acquisition'
                ]
            },
            it: {
                category: 'Marketing',
                description: 'Landing page single-page ottimizzata per SEO con animazioni fluide e integrazione Trustpilot per servizi di arredamento e allestimento. Progettata per convertire visitatori in clienti.',
                features: [
                    'Animazioni fluide con Motion per UX coinvolgente',
                    'Integrazione Trustpilot per recensioni verificate',
                    'Ottimizzazione SEO avanzata (robots e LLMs)',
                    'Sistema di contact form per acquisizione lead'
                ]
            }
        },
        'caorafilm': {
            title: 'Caora Film',
            year: '2025',
            image: 'img/pr9.png',
            techStack: ['Angular 17', 'Firebase', 'GSAP', 'SCSS', 'Cloud Functions', 'AppCheck'],
            link: 'https://caorafilm.it/',
            en: {
                category: 'Production House',
                description: 'Boutique production house and artistic platform for auteur cinema, poetry and immersive visual experiences. Features a cinematic dark design with smooth GSAP animations and information about artistic residencies called "The Engine".',
                features: [
                    'Dark cinematic aesthetic with elegant teal accents',
                    'Smooth scroll-triggered animations with GSAP',
                    'Film portfolio showcase with detailed project info',
                    'Artistic residencies section "The Engine"'
                ]
            },
            it: {
                category: 'Casa di Produzione',
                description: 'Casa di produzione boutique e piattaforma artistica per cinema d\'autore, poesia ed esperienze visive immersive. Presenta un design cinematico dark con animazioni fluide GSAP e informazioni sulle residenze artistiche chiamate "The Engine".',
                features: [
                    'Estetica cinematica dark con eleganti accenti teal',
                    'Animazioni fluide scroll-triggered con GSAP',
                    'Showcase portfolio film con info dettagliate',
                    'Sezione residenze artistiche "The Engine"'
                ]
            }
        }
    };

    const projectModal = document.getElementById('projectModal');
    const projectModalClose = document.querySelector('.project-modal-close');
    const projectModalBackdrop = document.querySelector('.project-modal-backdrop');

    function openProjectModal(projectId) {
        const project = projectsData[projectId];
        if (!project || !projectModal) return;

        // Get localized content based on current language
        const localizedData = project[currentLang] || project.en;

        // Populate modal content
        document.getElementById('modalProjectImage').src = project.image;
        document.getElementById('modalProjectImage').alt = project.title;
        document.getElementById('modalProjectYear').textContent = project.year;
        document.getElementById('modalProjectCategory').textContent = localizedData.category;
        document.getElementById('modalProjectTitle').textContent = project.title;
        document.getElementById('modalProjectDescription').textContent = localizedData.description;

        // Tech stack
        const techContainer = document.getElementById('modalProjectTech');
        techContainer.innerHTML = project.techStack.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        // Features
        const featuresContainer = document.getElementById('modalProjectFeatures');
        featuresContainer.innerHTML = localizedData.features.map(feature =>
            `<li><i class="fas fa-chevron-right"></i>${feature}</li>`
        ).join('');

        // Link
        const linkElement = document.getElementById('modalProjectLink');
        if (project.link) {
            linkElement.href = project.link;
            linkElement.style.display = 'inline-flex';
        } else {
            linkElement.style.display = 'none';
        }

        // Show modal - also reset swiper scroll lock state
        swiperScrollLocked = false;
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
    }

    function closeProjectModal() {
        if (projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }
    }

    // Event delegation per i bottoni del progetto (funziona anche dopo ricostruzione slide swiper)
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.portfolio-details-btn');
        if (btn) {
            e.preventDefault();
            e.stopPropagation();
            const portfolioItem = btn.closest('.portfolio-item');
            const projectId = portfolioItem?.getAttribute('data-project');
            if (projectId) {
                openProjectModal(projectId);
            }
        }
    });

    if (projectModalClose) {
        projectModalClose.addEventListener('click', closeProjectModal);
    }

    if (projectModalBackdrop) {
        projectModalBackdrop.addEventListener('click', closeProjectModal);
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });

    // ============================================
    // PARALLAX EFFECT FOR HERO SHAPES
    // ============================================
    const heroShapes = document.querySelectorAll('.hero-shape');

    if (heroShapes.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero');

            if (heroSection && scrolled < heroSection.offsetHeight) {
                heroShapes.forEach((shape, index) => {
                    const speed = (index + 1) * 0.1;
                    shape.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed * 0.5}px)`;
                });
            }
        });
    }

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // LAZY LOADING FOR IMAGES
    // ============================================
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // ============================================
    // TILT EFFECT FOR PORTFOLIO ITEMS
    // ============================================
    if (window.innerWidth > 1024) {
        const tiltElements = document.querySelectorAll('.portfolio-item');

        tiltElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }

    // ============================================
    // TYPING EFFECT (Optional Enhancement)
    // ============================================
    const typingTexts = document.querySelectorAll('.typing-text');

    typingTexts.forEach((text, index) => {
        text.style.opacity = '0';
        text.style.animation = `fadeInUp 0.5s ease ${index * 0.2}s forwards`;
    });

    // ============================================
    // CSS KEYFRAMES INJECTION
    // ============================================
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(styleSheet);

    // ============================================
    // PRELOADER (Optional)
    // ============================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');

        // Trigger initial animations
        setTimeout(() => {
            document.querySelectorAll('.hero .reveal').forEach(el => {
                el.classList.add('active');
            });
        }, 100);
    });

    // ============================================
    // COOKIE MODAL
    // ============================================
    const cookieModal = document.getElementById('cookieModal');
    const cookieBtn = document.getElementById('cookieBtn');
    const cookieModalClose = document.querySelector('.cookie-modal-close');
    const cookieModalBackdrop = document.querySelector('.cookie-modal-backdrop');
    const browserRequestBox = document.getElementById('browserRequestBox');
    const cookieNameInput = document.getElementById('cookieName');
    const cookieValueInput = document.getElementById('cookieValue');
    const setCookieBtn = document.getElementById('setCookieBtn');
    const cookieResult = document.getElementById('cookieResult');
    const cookieList = document.getElementById('cookieList');

    // Generate browser request info (simulated headers)
    function getBrowserRequestInfo() {
        const info = [];

        // User-Agent
        info.push({ key: 'User-Agent:', value: navigator.userAgent });

        // Accept-Language
        info.push({ key: 'Accept-Language:', value: navigator.language || navigator.languages?.join(', ') || 'en-US' });

        // Platform
        info.push({ key: 'Platform:', value: navigator.platform || 'Unknown' });

        // Screen Resolution
        info.push({ key: 'Screen:', value: `${window.screen.width}x${window.screen.height}` });

        // Color Depth
        info.push({ key: 'Color-Depth:', value: `${window.screen.colorDepth}-bit` });

        // Timezone
        info.push({ key: 'Timezone:', value: Intl.DateTimeFormat().resolvedOptions().timeZone });

        // Referer (current page)
        info.push({ key: 'Referer:', value: window.location.href });

        // Connection type (if available)
        if (navigator.connection) {
            info.push({ key: 'Connection:', value: navigator.connection.effectiveType || 'Unknown' });
        }

        // Cookies enabled
        info.push({ key: 'Cookies-Enabled:', value: navigator.cookieEnabled ? 'Yes' : 'No' });

        // Do Not Track
        info.push({ key: 'DNT:', value: navigator.doNotTrack === '1' ? 'Enabled' : 'Not set' });

        // Current cookies for this domain
        const cookies = document.cookie;
        info.push({ key: 'Cookie:', value: cookies || '(none)' });

        return info;
    }

    // Render browser request info
    function renderBrowserRequest() {
        const info = getBrowserRequestInfo();
        let html = '';

        info.forEach(item => {
            html += `<div class="request-line">
                <span class="request-key">${item.key}</span>
                <span class="request-value">${item.value}</span>
            </div>`;
        });

        browserRequestBox.innerHTML = html;
    }

    // Get all cookies as array
    function getAllCookies() {
        if (!document.cookie) return [];
        return document.cookie.split(';').map(cookie => {
            const [name, value] = cookie.trim().split('=');
            return { name, value: decodeURIComponent(value || '') };
        });
    }

    // Render cookie list
    function renderCookieList() {
        const cookies = getAllCookies();

        if (cookies.length === 0) {
            const noCookiesText = currentLang === 'it' ? 'Nessun cookie memorizzato per questo sito' : 'No cookies stored for this site';
            cookieList.innerHTML = `<p class="no-cookies">${noCookiesText}</p>`;
            return;
        }

        let html = '';
        cookies.forEach(cookie => {
            html += `<div class="cookie-item">
                <span class="cookie-name">${cookie.name}</span>
                <span class="cookie-value">= ${cookie.value}</span>
                <button class="cookie-delete" data-name="${cookie.name}" aria-label="Delete cookie">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>`;
        });

        cookieList.innerHTML = html;

        // Add delete handlers
        cookieList.querySelectorAll('.cookie-delete').forEach(btn => {
            btn.addEventListener('click', () => {
                const name = btn.getAttribute('data-name');
                deleteCookie(name);
            });
        });
    }

    // Show cookie eating animation
    function showCookieAnimation() {
        const overlay = document.getElementById('cookieSuccessOverlay');
        if (!overlay) return;

        // Reset animation by removing and re-adding active class
        overlay.classList.remove('active');
        // Force reflow to reset animations
        void overlay.offsetWidth;
        overlay.classList.add('active');

        // Hide after animation completes (3 bites + crumbs ~2.5s)
        setTimeout(() => {
            overlay.classList.remove('active');
        }, 2500);
    }

    // Set a session cookie
    function setSessionCookie(name, value) {
        if (!name) return false;
        // Session cookie (no expires = deleted when browser closes)
        document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=/; SameSite=Lax`;
        return true;
    }

    // Delete a cookie
    function deleteCookie(name) {
        document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        renderCookieList();
        renderBrowserRequest();
    }

    // Fetch machine name (reverse DNS via PTR lookup)
    async function fetchMachineName() {
        const machineNameValue = document.getElementById('machineNameValue');
        if (!machineNameValue) return;

        // Show loading state
        machineNameValue.textContent = translations[currentLang]['cookie.machineLoading'] || 'Looking up...';

        try {
            // Step 1: Get user's public IP
            const ipResponse = await fetch('https://api.ipify.org?format=json');
            const ipData = await ipResponse.json();
            const ip = ipData.ip;

            if (!ip) {
                throw new Error('Could not get IP');
            }

            // Step 2: Convert IP to reverse DNS format (PTR query format)
            // e.g., 192.168.1.1 -> 1.1.168.192.in-addr.arpa
            const reversedIp = ip.split('.').reverse().join('.');
            const ptrQuery = `${reversedIp}.in-addr.arpa`;

            // Step 3: Query Google's DNS-over-HTTPS for PTR record
            const dnsResponse = await fetch(`https://dns.google/resolve?name=${ptrQuery}&type=PTR`);
            const dnsData = await dnsResponse.json();

            const descEl = document.querySelector('[data-i18n="cookie.machineDesc"]');

            if (dnsData.Answer && dnsData.Answer.length > 0) {
                // PTR record found - extract the hostname
                let hostname = dnsData.Answer[0].data;
                // Remove trailing dot if present
                if (hostname.endsWith('.')) {
                    hostname = hostname.slice(0, -1);
                }
                machineNameValue.textContent = hostname;

                // Update description with explanation about fixed vs variable names
                if (descEl) {
                    descEl.innerHTML = currentLang === 'it'
                        ? 'Questo nome DNS inverso può identificare la tua connessione. Se contiene numeri del tuo IP, cambia quando cambia l\'IP. Se è un nome fisso (es. "casa-mario.isp.it"), potrebbe tracciarti in modo persistente. <a href="https://www.grc.com/shieldsup" target="_blank" rel="noopener" style="text-decoration: underline;">Approfondisci su GRC ShieldsUp</a>.'
                        : 'This reverse DNS name can identify your connection. If it contains your IP numbers, it changes when your IP changes. If it\'s a fixed name (e.g. "mario-home.isp.com"), it could persistently track you. <a href="https://www.grc.com/shieldsup" target="_blank" rel="noopener" style="text-decoration: underline;">Learn more at GRC ShieldsUp</a>.';
                }
            } else {
                // No PTR record - show IP with reassuring note
                machineNameValue.textContent = ip;
                if (descEl) {
                    descEl.innerHTML = currentLang === 'it'
                        ? 'Il tuo IP non ha un record DNS inverso. Tutto ok: questo significa che non hai un "nome macchina" che ti identifica in modo persistente.'
                        : 'Your IP has no reverse DNS record. All good: this means you don\'t have a "machine name" that persistently identifies you.';
                }
            }
        } catch (error) {
            console.error('Machine name lookup failed:', error);
            // Try to at least show the IP
            try {
                const fallbackResponse = await fetch('https://api.ipify.org?format=json');
                const fallbackData = await fallbackResponse.json();
                machineNameValue.textContent = fallbackData.ip || translations[currentLang]['cookie.machineNotFound'];
            } catch {
                machineNameValue.textContent = translations[currentLang]['cookie.machineNotFound'] || 'Not available';
            }
        }
    }

    // Open cookie modal
    function openCookieModal() {
        if (!cookieModal) return;

        cookieModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Render content with slight delay for animation
        setTimeout(() => {
            renderBrowserRequest();
            renderCookieList();
            fetchMachineName();
        }, 100);
    }

    // Close cookie modal
    function closeCookieModal() {
        if (!cookieModal) return;

        cookieModal.classList.remove('active');
        document.body.style.overflow = '';

        // Clear result message
        if (cookieResult) {
            cookieResult.className = 'cookie-result';
            cookieResult.textContent = '';
        }
    }

    // Event listeners
    if (cookieBtn) {
        cookieBtn.addEventListener('click', openCookieModal);
    }

    if (cookieModalClose) {
        cookieModalClose.addEventListener('click', closeCookieModal);
    }

    if (cookieModalBackdrop) {
        cookieModalBackdrop.addEventListener('click', closeCookieModal);
    }

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cookieModal?.classList.contains('active')) {
            closeCookieModal();
        }
    });

    // Hide result message after delay
    function hideResultAfterDelay() {
        setTimeout(() => {
            if (cookieResult) {
                cookieResult.classList.add('fade-out');
                setTimeout(() => {
                    cookieResult.className = 'cookie-result';
                    cookieResult.textContent = '';
                }, 300);
            }
        }, 3000);
    }

    // Set cookie button
    if (setCookieBtn) {
        setCookieBtn.addEventListener('click', () => {
            const name = cookieNameInput?.value.trim();
            const value = cookieValueInput?.value.trim();

            if (!name) {
                cookieResult.className = 'cookie-result error';
                cookieResult.textContent = currentLang === 'it'
                    ? 'Inserisci un nome per il cookie'
                    : 'Please enter a cookie name';
                hideResultAfterDelay();
                return;
            }

            if (setSessionCookie(name, value || '')) {
                // Clear inputs
                if (cookieNameInput) cookieNameInput.value = '';
                if (cookieValueInput) cookieValueInput.value = '';

                // Refresh lists
                renderCookieList();
                renderBrowserRequest();

                // Show cookie eating animation
                showCookieAnimation();
            }
        });
    }

    // ============================================
    // 3D PERSPECTIVE MODE
    // ============================================
    const PerspectiveMode = (function() {
        // Configuration
        const CONFIG = {
            maxTilt: 15,              // Maximum tilt angle in degrees
            perspective: 1000,        // CSS perspective value
            scale: 1.02,              // Scale on tilt
            transitionSpeed: 100,     // Transition speed in ms
            gyroSensitivity: 0.8,     // Gyroscope sensitivity multiplier
            throttleMs: 16            // Throttle interval (~60fps)
        };

        // State
        let is3DMode = false;
        let isMobile = false;
        let gyroPermissionGranted = false;
        let gyroAvailable = false;
        let lastGyroUpdate = 0;
        let lastMouseUpdate = 0;

        // Elements
        let perspectiveToggle = null;
        let tiltElements = [];

        // Detect if device is mobile/touch
        function detectMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                   (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
        }

        // Check if gyroscope is available
        function checkGyroAvailability() {
            return window.DeviceOrientationEvent !== undefined;
        }

        // Initialize tilt elements
        function initTiltElements() {
            tiltElements = [];

            // Hero image wrapper - apply to the wrapper directly
            const heroImageWrapper = document.querySelector('.hero-image .image-wrapper');
            if (heroImageWrapper) {
                tiltElements.push({ el: heroImageWrapper, intensity: 1.2, type: 'hero' });
            }

            // Skill categories - subtle movement
            document.querySelectorAll('.skill-category').forEach(el => {
                tiltElements.push({ el, intensity: 0.4, type: 'skill' });
            });

            // Portfolio items (desktop grid)
            document.querySelectorAll('.portfolio-desktop .portfolio-item').forEach(el => {
                tiltElements.push({ el, intensity: 0.25, type: 'portfolio' });
            });

            // Portfolio items (mobile swiper)
            document.querySelectorAll('.portfolio-swiper .portfolio-item').forEach(el => {
                tiltElements.push({ el, intensity: 0.25, type: 'portfolio' });
            });

            // Stat items - subtle movement
            document.querySelectorAll('.stat-item').forEach(el => {
                tiltElements.push({ el, intensity: 0.35, type: 'stat' });
            });

            // FAM Vision button - fixed element with tilt
            const famVisionBtn = document.querySelector('.fam-vision-btn');
            if (famVisionBtn) {
                tiltElements.push({ el: famVisionBtn, intensity: 0.6, type: 'fixed' });
            }
        }

        // Apply tilt transform to element
        function applyTilt(element, rotateX, rotateY, intensity = 1) {
            if (!is3DMode) return;

            const tiltX = rotateX * CONFIG.maxTilt * intensity;
            const tiltY = rotateY * CONFIG.maxTilt * intensity;

            element.style.transform = `perspective(${CONFIG.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${CONFIG.scale}, ${CONFIG.scale}, ${CONFIG.scale})`;
        }

        // Reset tilt transform
        function resetTilt(element) {
            element.style.transform = '';
        }

        // Reset all tilts
        function resetAllTilts() {
            tiltElements.forEach(({ el }) => resetTilt(el));
        }

        // Calculate tilt based on mouse position relative to element center
        function calculateElementTilt(element, mouseX, mouseY) {
            const rect = element.getBoundingClientRect();
            const elementCenterX = rect.left + rect.width / 2;
            const elementCenterY = rect.top + rect.height / 2;

            // Normalized position relative to element center (-1 to 1)
            const normalizedX = (mouseX - elementCenterX) / (rect.width / 2);
            const normalizedY = (mouseY - elementCenterY) / (rect.height / 2);

            // Clamp values
            return {
                x: Math.max(-1, Math.min(1, normalizedX)),
                y: Math.max(-1, Math.min(1, normalizedY))
            };
        }

        // Check if mouse is near element (within a threshold)
        function isMouseNearElement(element, mouseX, mouseY, threshold = 100) {
            const rect = element.getBoundingClientRect();
            const expandedRect = {
                left: rect.left - threshold,
                right: rect.right + threshold,
                top: rect.top - threshold,
                bottom: rect.bottom + threshold
            };
            return mouseX >= expandedRect.left && mouseX <= expandedRect.right &&
                   mouseY >= expandedRect.top && mouseY <= expandedRect.bottom;
        }

        // Calculate tilt based on mouse position
        function handleMouseMove(e) {
            if (!is3DMode || isMobile) return;

            const now = Date.now();
            if (now - lastMouseUpdate < CONFIG.throttleMs) return;
            lastMouseUpdate = now;

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Calculate global normalized position for non-portfolio elements
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const globalNormX = (mouseX - centerX) / centerX;
            const globalNormY = (mouseY - centerY) / centerY;

            tiltElements.forEach(({ el, intensity, type }) => {
                const rect = el.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                // Fixed elements are always visible
                if (!isVisible && type !== 'fixed') {
                    resetTilt(el);
                    return;
                }

                // Portfolio items: individual tilt based on cursor position relative to each card
                if (type === 'portfolio') {
                    if (isMouseNearElement(el, mouseX, mouseY, 150)) {
                        const tilt = calculateElementTilt(el, mouseX, mouseY);
                        applyTilt(el, -tilt.y, tilt.x, intensity);
                    } else {
                        resetTilt(el);
                    }
                } else {
                    // Other elements (including fixed): global tilt based on viewport center
                    applyTilt(el, -globalNormY, globalNormX, intensity);
                }
            });
        }

        // Handle gyroscope data
        function handleDeviceOrientation(e) {
            if (!is3DMode || !gyroPermissionGranted) return;

            const now = Date.now();
            if (now - lastGyroUpdate < CONFIG.throttleMs) return;
            lastGyroUpdate = now;

            // Get orientation angles
            // beta: front-back tilt (-180 to 180)
            // gamma: left-right tilt (-90 to 90)
            const beta = e.beta || 0;
            const gamma = e.gamma || 0;

            // Normalize to -1 to 1 range
            // Beta: assume device is held at ~45 degrees, adjust range
            const normalizedBeta = Math.max(-1, Math.min(1, (beta - 45) / 45)) * CONFIG.gyroSensitivity;
            const normalizedGamma = Math.max(-1, Math.min(1, gamma / 45)) * CONFIG.gyroSensitivity;

            // Apply tilt to visible elements
            tiltElements.forEach(({ el, intensity, type }) => {
                const rect = el.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                // Fixed elements are always visible
                if (isVisible || type === 'fixed') {
                    applyTilt(el, normalizedBeta, normalizedGamma, intensity);
                }
            });
        }

        // Request gyroscope permission (iOS 13+)
        async function requestGyroPermission() {
            if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                try {
                    const permission = await DeviceOrientationEvent.requestPermission();
                    if (permission === 'granted') {
                        gyroPermissionGranted = true;
                        window.addEventListener('deviceorientation', handleDeviceOrientation);
                        return true;
                    } else {
                        console.log('Gyroscope permission denied');
                        return false;
                    }
                } catch (err) {
                    console.error('Error requesting gyroscope permission:', err);
                    return false;
                }
            } else {
                // Non-iOS or older iOS - permission not required
                gyroPermissionGranted = true;
                window.addEventListener('deviceorientation', handleDeviceOrientation);
                return true;
            }
        }

        // Enable 3D mode
        function enable3D() {
            is3DMode = true;
            document.body.classList.add('mode-3d');
            perspectiveToggle?.classList.add('active');
            const toggleText = perspectiveToggle?.querySelector('span');
            if (toggleText) toggleText.textContent = '3D';
            localStorage.setItem('perspective-mode', '3d');

            if (isMobile && gyroAvailable && !gyroPermissionGranted) {
                requestGyroPermission();
            }
        }

        // Disable 3D mode
        function disable3D() {
            is3DMode = false;
            document.body.classList.remove('mode-3d');
            perspectiveToggle?.classList.remove('active');
            const toggleText = perspectiveToggle?.querySelector('span');
            if (toggleText) toggleText.textContent = '2D';
            localStorage.setItem('perspective-mode', '2d');
            resetAllTilts();
        }

        // Toggle 3D mode
        function toggle3D() {
            if (is3DMode) {
                disable3D();
            } else {
                enable3D();
            }
        }

        // Initialize
        function init() {
            perspectiveToggle = document.querySelector('.perspective-toggle');
            if (!perspectiveToggle) return;

            isMobile = detectMobile();
            gyroAvailable = checkGyroAvailability();
            initTiltElements();

            // Check saved preference
            const savedMode = localStorage.getItem('perspective-mode');

            // Default behavior:
            // Desktop: 3D mode ON by default
            // Mobile: 2D mode ON by default (requires user interaction for gyro permission)
            if (savedMode === '3d') {
                enable3D();
            } else if (savedMode === '2d') {
                disable3D();
            } else {
                // No saved preference - use defaults
                if (isMobile) {
                    disable3D(); // Mobile defaults to 2D
                } else {
                    enable3D(); // Desktop defaults to 3D
                }
            }

            // Event listeners
            perspectiveToggle.addEventListener('click', toggle3D);

            // Mouse tracking for desktop
            if (!isMobile) {
                document.addEventListener('mousemove', handleMouseMove);
            }

            // Re-initialize elements on window resize (debounced)
            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    isMobile = detectMobile();
                    initTiltElements();
                }, 250);
            });
        }

        // Public API
        return {
            init,
            enable3D,
            disable3D,
            toggle3D,
            is3DEnabled: () => is3DMode
        };
    })();

    // Initialize perspective mode
    PerspectiveMode.init();

    // ============================================
    // SPOTLIGHT SEARCH (Cmd/Ctrl + F)
    // ============================================
    const SpotlightSearch = (function() {
        const overlay = document.getElementById('spotlightOverlay');
        const input = document.getElementById('spotlightInput');
        const counter = document.getElementById('spotlightCounter');
        const prevBtn = document.getElementById('spotlightPrev');
        const nextBtn = document.getElementById('spotlightNext');
        const closeBtn = document.getElementById('spotlightClose');

        let isOpen = false;
        let matches = [];
        let currentIndex = -1;
        let originalContents = new Map();

        // Debounce function
        function debounce(fn, delay) {
            let timeout;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => fn(...args), delay);
            };
        }

        // Get all text nodes in the document
        function getTextNodes(element) {
            const walker = document.createTreeWalker(
                element,
                NodeFilter.SHOW_TEXT,
                {
                    acceptNode: (node) => {
                        // Skip hidden elements, scripts, styles, and our overlays
                        const parent = node.parentElement;
                        if (!parent) return NodeFilter.FILTER_REJECT;

                        const tag = parent.tagName.toLowerCase();
                        if (['script', 'style', 'noscript', 'iframe'].includes(tag)) {
                            return NodeFilter.FILTER_REJECT;
                        }

                        // Skip overlays and modals
                        if (parent.closest('.spotlight-overlay, .cookie-modal, .project-modal')) {
                            return NodeFilter.FILTER_REJECT;
                        }

                        // Skip invisible elements
                        const style = window.getComputedStyle(parent);
                        if (style.display === 'none' || style.visibility === 'hidden') {
                            return NodeFilter.FILTER_REJECT;
                        }

                        // Only accept nodes with actual text content
                        if (node.textContent.trim().length === 0) {
                            return NodeFilter.FILTER_REJECT;
                        }

                        return NodeFilter.FILTER_ACCEPT;
                    }
                }
            );

            const nodes = [];
            let node;
            while (node = walker.nextNode()) {
                nodes.push(node);
            }
            return nodes;
        }

        // Clear all highlights
        function clearHighlights() {
            document.querySelectorAll('.spotlight-highlight').forEach(el => {
                const parent = el.parentNode;
                if (parent) {
                    parent.replaceChild(document.createTextNode(el.textContent), el);
                    parent.normalize();
                }
            });
            matches = [];
            currentIndex = -1;
            counter.textContent = '';
        }

        // Highlight matches
        function highlightMatches(searchTerm) {
            clearHighlights();

            if (!searchTerm || searchTerm.length < 2) return;

            const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            const textNodes = getTextNodes(document.body);

            textNodes.forEach(node => {
                const text = node.textContent;
                if (regex.test(text)) {
                    regex.lastIndex = 0; // Reset regex
                    const fragment = document.createDocumentFragment();
                    let lastIndex = 0;
                    let match;

                    while ((match = regex.exec(text)) !== null) {
                        // Add text before match
                        if (match.index > lastIndex) {
                            fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
                        }

                        // Add highlighted match
                        const mark = document.createElement('mark');
                        mark.className = 'spotlight-highlight';
                        mark.textContent = match[1];
                        fragment.appendChild(mark);
                        matches.push(mark);

                        lastIndex = regex.lastIndex;
                    }

                    // Add remaining text
                    if (lastIndex < text.length) {
                        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
                    }

                    node.parentNode.replaceChild(fragment, node);
                }
            });

            updateCounter();

            // Go to first match
            if (matches.length > 0) {
                goToMatch(0);
            }
        }

        // Update counter display
        function updateCounter() {
            if (matches.length === 0) {
                counter.textContent = input.value.length >= 2 ? '0 / 0' : '';
            } else {
                counter.textContent = `${currentIndex + 1} / ${matches.length}`;
            }
        }

        // Navigate to a specific match
        function goToMatch(index) {
            // Remove active class from current
            if (currentIndex >= 0 && matches[currentIndex]) {
                matches[currentIndex].classList.remove('active');
            }

            currentIndex = index;

            if (currentIndex >= 0 && matches[currentIndex]) {
                matches[currentIndex].classList.add('active');

                // Scroll to match
                matches[currentIndex].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }

            updateCounter();
        }

        // Go to next match
        function nextMatch() {
            if (matches.length === 0) return;
            const newIndex = (currentIndex + 1) % matches.length;
            goToMatch(newIndex);
        }

        // Go to previous match
        function prevMatch() {
            if (matches.length === 0) return;
            const newIndex = currentIndex <= 0 ? matches.length - 1 : currentIndex - 1;
            goToMatch(newIndex);
        }

        // Open spotlight
        function open() {
            if (isOpen) return;
            isOpen = true;
            overlay.classList.add('active');
            input.value = '';
            input.focus();
            clearHighlights();
        }

        // Close spotlight
        function close() {
            if (!isOpen) return;
            isOpen = false;
            overlay.classList.remove('active');
            clearHighlights();
        }

        // Debounced search
        const debouncedSearch = debounce((term) => highlightMatches(term), 200);

        // Initialize
        function init() {
            if (!overlay || !input) return;

            // Input handler
            input.addEventListener('input', (e) => {
                debouncedSearch(e.target.value);
            });

            // Keyboard navigation in input
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    if (e.shiftKey) {
                        prevMatch();
                    } else {
                        nextMatch();
                    }
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    prevMatch();
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    nextMatch();
                } else if (e.key === 'Escape') {
                    close();
                }
            });

            // Navigation buttons
            prevBtn?.addEventListener('click', prevMatch);
            nextBtn?.addEventListener('click', nextMatch);

            // Close button
            closeBtn?.addEventListener('click', close);

            // Global keyboard shortcut (Cmd/Ctrl + F)
            document.addEventListener('keydown', (e) => {
                // Cmd+F or Ctrl+F
                if ((e.metaKey || e.ctrlKey) && e.key === 'f') {
                    e.preventDefault();
                    if (isOpen) {
                        input.focus();
                        input.select();
                    } else {
                        open();
                    }
                }

                // Escape to close
                if (e.key === 'Escape' && isOpen) {
                    close();
                }
            });
        }

        return { init, open, close };
    })();

    SpotlightSearch.init();

    // ============================================
    // EASTER EGGS (egg.js)
    // ============================================
    const EasterEggs = (function() {
        let matrixInterval = null;
        let matrixCanvas = null;

        // Matrix Rain Effect
        function startMatrixRain() {
            if (matrixCanvas) return;

            matrixCanvas = document.createElement('canvas');
            matrixCanvas.id = 'matrixCanvas';
            matrixCanvas.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 99999;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.5s ease;
            `;
            document.body.appendChild(matrixCanvas);

            const ctx = matrixCanvas.getContext('2d');
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;

            const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';
            const fontSize = 14;
            const columns = matrixCanvas.width / fontSize;
            const drops = Array(Math.floor(columns)).fill(1);

            requestAnimationFrame(() => {
                matrixCanvas.style.opacity = '0.9';
            });

            function draw() {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

                ctx.fillStyle = '#0f0';
                ctx.font = fontSize + 'px monospace';

                for (let i = 0; i < drops.length; i++) {
                    const char = chars[Math.floor(Math.random() * chars.length)];
                    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                    if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
            }

            matrixInterval = setInterval(draw, 33);
            setTimeout(stopMatrixRain, 8000);
        }

        function stopMatrixRain() {
            if (matrixCanvas) {
                matrixCanvas.style.opacity = '0';
                setTimeout(() => {
                    if (matrixInterval) {
                        clearInterval(matrixInterval);
                        matrixInterval = null;
                    }
                    matrixCanvas?.remove();
                    matrixCanvas = null;
                }, 500);
            }
        }

        // Coffee Animation
        function showCoffeeAnimation() {
            const coffee = document.createElement('div');
            coffee.className = 'easter-coffee';
            coffee.innerHTML = `
                <div class="coffee-cup">
                    <div class="coffee-steam">
                        <span></span><span></span><span></span>
                    </div>
                    <div class="coffee-mug">☕</div>
                </div>
                <div class="coffee-text">+1 Productivity</div>
            `;
            document.body.appendChild(coffee);

            requestAnimationFrame(() => coffee.classList.add('active'));

            setTimeout(() => {
                coffee.classList.remove('active');
                setTimeout(() => coffee.remove(), 500);
            }, 3000);
        }

        // Hire Me Animation
        function showHireAnimation() {
            const hire = document.createElement('div');
            hire.className = 'easter-hire';
            hire.innerHTML = `
                <div class="hire-content">
                    <div class="hire-emoji">🎯</div>
                    <div class="hire-title">Great choice!</div>
                    <div class="hire-subtitle">Let's build something amazing together</div>
                    <a href="#contact" class="hire-btn">Get in touch</a>
                </div>
            `;
            document.body.appendChild(hire);

            requestAnimationFrame(() => hire.classList.add('active'));

            hire.addEventListener('click', (e) => {
                if (e.target === hire || e.target.classList.contains('hire-btn')) {
                    hire.classList.remove('active');
                    setTimeout(() => hire.remove(), 300);
                    if (e.target.classList.contains('hire-btn')) {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });

            setTimeout(() => {
                if (hire.parentNode) {
                    hire.classList.remove('active');
                    setTimeout(() => hire.remove(), 300);
                }
            }, 5000);
        }

        function init() {
            if (typeof Egg === 'undefined') {
                console.warn('egg.js not loaded');
                return;
            }

            const egg = new Egg();

            // Konami Code: ↑↑↓↓←→←→BA
            egg.addCode('up,up,down,down,left,right,left,right,b,a', function() {
                startMatrixRain();
            }, 'konami-code');

            // Secret words
            egg.addCode('c,o,f,f,e,e', function() {
                showCoffeeAnimation();
            }, 'coffee');

            egg.addCode('h,i,r,e', function() {
                showHireAnimation();
            }, 'hire');

            egg.listen();
        }

        return { init };
    })();

    EasterEggs.init();

})();

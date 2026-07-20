// ===== DOM ELEMENTS =====
const body = document.body;
const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const scrollTopBtn = document.getElementById('scrollTop');
const faqItems = document.querySelectorAll('.faq__item');
const langSwitch = document.querySelector('.lang-switch');
const langOptions = document.querySelectorAll('.lang-switch__option');

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
    // Scroll to top button
    scrollTopBtn.classList.toggle('show', window.scrollY > 400);
});

// ===== HAMBURGER MENU =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// ===== SCROLL TO TOP =====
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== FAQ ACCORDION =====
faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all
        faqItems.forEach(i => i.classList.remove('active'));
        // Toggle current
        if (!isActive) item.classList.add('active');
    });
});

// ===== LANGUAGE SWITCHER =====
const translations = {};

// Collect all translatable elements
document.querySelectorAll('[data-en]').forEach(el => {
    translations[el.dataset.en] = {
        en: el.dataset.en,
        fa: el.dataset.fa
    };
});

langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
        langOptions.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        const lang = opt.dataset.lang;
        body.classList.toggle('ltr', lang === 'en');
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
        // Update texts
        document.querySelectorAll('[data-en]').forEach(el => {
            if (lang === 'en') {
                el.textContent = el.dataset.en;
            } else {
                el.textContent = el.dataset.fa;
            }
        });
    });
});

// ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== SCROLL TO TOP BUTTON STYLE =====
const style = document.createElement('style');
style.textContent = `
    .scroll-top {
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--green);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 4px 20px rgba(46,204,113,0.4);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        z-index: 999;
    }
    .scroll-top.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    .scroll-top:hover {
        background: var(--green-dark);
        transform: translateY(-3px);
    }
    @media (max-width: 768px) {
        .nav {
            position: fixed;
            top: 75px;
            left: 0;
            right: 0;
            background: white;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        .nav.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        .nav__list {
            flex-direction: column;
            gap: 5px;
        }
        .nav__link {
            display: block;
            padding: 12px 20px;
        }
        .hamburger {
            display: flex;
        }
    }
`;
document.head.appendChild(style);

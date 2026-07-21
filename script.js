document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Language Switch
    const langSwitch = document.getElementById('lang-switch');
    langSwitch.addEventListener('click', () => {
        if (document.documentElement.lang === 'en') {
            document.documentElement.lang = 'fa';
            langSwitch.textContent = 'English';
        } else {
            document.documentElement.lang = 'en';
            langSwitch.textContent = 'فارسی';
        }
    });
    
    // Loading Screen
    const loading = document.getElementById('loading');
    window.addEventListener('load', () => {
        loading.style.display = 'none';
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

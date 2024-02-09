document.addEventListener("DOMContentLoaded", function() {
    const offset = 100; // Adjust this value to offset for fixed headers or other elements

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: targetTop - offset,
                behavior: 'smooth'
            });
        });
    });

    // Home button
    const homeButton = document.querySelector('.home-btn');
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            scrollToTop();
        });
    }

    // Highlight active navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
});

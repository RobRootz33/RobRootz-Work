document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    // Add aria-label for accessibility
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
        }
    });

    // Smooth scrolling with offset for header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const offset = document.querySelector('header').offsetHeight; // Calculate the height of the header
            const top = target.getBoundingClientRect().top + window.scrollY - offset; // Adjust the offset
            window.scrollTo({ top, behavior: 'smooth' });
            navMenu.classList.remove('active'); // Close menu on link click
        });
    });

    // Create and add Back to Top button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
});

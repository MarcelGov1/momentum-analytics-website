// ==========================================
// MOMENTUM ANALYTICS
// Website interactions
// ==========================================


// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (event) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

});


// Add a subtle shadow to the navigation
// when the visitor scrolls down

const header = document.querySelector('header');

window.addEventListener('scroll', function () {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            '0 4px 20px rgba(16, 42, 67, 0.08)';

    } else {

        header.style.boxShadow = 'none';

    }

});

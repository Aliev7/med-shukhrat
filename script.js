// Top Advertisement and Navbar Scroll Behavior
let topAdd = document.querySelector('.topAdd');
let navbar = document.querySelector('.navbar-custom');
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down: hide the topAdd
        topAdd.style.top = "-50px";
        navbar.style.top = "0";
    } else {
        // Scrolling up: show the topAdd
        topAdd.style.top = "0";
        navbar.style.top = "50px";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative values
});

// Card Hover Effects
document.querySelectorAll('.card-custom').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.card-overlay').style.bottom = '0';
        card.querySelector('i').style.color = '#fff';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.card-overlay').style.bottom = '-100%';
        card.querySelector('i').style.color = '#3fbbc0';
    });
});

// Counter Animation
function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const increment = target / 100; // Adjust speed here

    let count = 0;
    function updateCount() {
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCount);
        } else {
            counter.innerText = target;
        }
    }
    updateCount();
}

// Trigger Counter Animation on Scroll
function startCountersOnScroll() {
    const counters = document.querySelectorAll('.counter');
    const section = document.querySelector('.container'); // Adjust selector if needed

    function checkPosition() {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight && sectionTop > 0) {
            counters.forEach(counter => {
                animateCounter(counter);
            });
            window.removeEventListener('scroll', checkPosition);
        }
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition();
}

document.addEventListener('DOMContentLoaded', startCountersOnScroll);

// Show Service Details
function showService(service, element) {
    // Hide all service details
    document.querySelectorAll('.service-details').forEach(function (el) {
        el.classList.remove('active');
    });

    // Remove active class from all service items
    document.querySelectorAll('.service-item').forEach(function (el) {
        el.classList.remove('active');
    });

    // Show selected service details
    document.getElementById(service).classList.add('active');

    // Add active class to clicked service item
    element.classList.add('active');
}

// Gallery Image Selection
function showImage(selectedImg) {
    // Remove active class and reset styles from all images
    document.querySelectorAll('.carousel-img').forEach(img => {
        img.classList.remove('active');
    });

    // Add active class to the selected image
    selectedImg.classList.add('active');

    // Update dots based on selected image
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    const index = Array.from(document.querySelectorAll('.carousel-img')).indexOf(selectedImg);
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');

    function startCounting() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const increment = target / 100;  // Speed control

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // Trigger counting animation when the section is in the viewport
    function checkVisibility() {
        const section = document.querySelector('.container');
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            startCounting();
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});


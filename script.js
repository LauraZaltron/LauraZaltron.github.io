/* ===============================
   PROJECT EXPAND ON CLICK
================================= */

// Select all toggle buttons
const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Get the parent project card
        const card = button.closest(".project-card");

        // Toggle active class
        card.classList.toggle("active");

        // Change button text
        button.textContent = 
            card.classList.contains("active") 
            ? "Hide Details" 
            : "View Details";
    });
});


/* ===============================
   SCROLL FADE-IN ANIMATION
================================= */

// Select all elements with fade-in class
const faders = document.querySelectorAll(".fade-in");

// Observer for detecting when elements enter viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));


/* ===============================
   CUSTOM CURSOR
================================= */

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

/*cursor interaction instead of going pointer*/
const interactiveElements = document.querySelectorAll("a, button, .toggle-btn, .tooltip");

interactiveElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
    });

    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });
});


/* ===============================
   FLOATING PARTICLES GENERATOR
================================= */

const particleContainer = document.querySelector(".particles");

// Create 30 floating particles
for (let i = 0; i < 30; i++) {
    const particle = document.createElement("span");

    // Random horizontal position
    particle.style.left = Math.random() * 100 + "vw";

    // Random animation duration
    particle.style.animationDuration = (5 + Math.random() * 10) + "s";

    particleContainer.appendChild(particle);
}

/* ===============================
   HEADER NAME APPEARS ON SCROLL
================================= */

const headerLogo = document.querySelector(".header-logo");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    // When scroll passes 60% of hero height
    if (window.scrollY > heroSection.offsetHeight * 0.6) {
        headerLogo.classList.add("visible");
    } else {
        headerLogo.classList.remove("visible");
    }

});

const heroName = document.querySelector(".hero-name");

window.addEventListener("scroll", () => {

    let scrollValue = window.scrollY;

    // Shrinks slightly as you scroll
    heroName.style.transform = `scale(${1 - scrollValue / 2000})`;

});

/* ===============================
   HEADER OVERLAPING SOLUTION
================================= */
// Dynamically set scroll-margin-top to anchor targets based on header height
function updateScrollMargin() {
    const header = document.querySelector('header');
    if (!header) return;

    // Get header height (including padding/border)
    const headerHeight = header.getBoundingClientRect().height;

    // Set CSS variable on root for potential CSS use
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

    // Select all elements with IDs (likely anchor targets)
    const anchorTargets = document.querySelectorAll('[id]');

    anchorTargets.forEach(el => {
        // Apply scroll-margin-top equal to header height + a small offset (8px for breathing room)
        el.style.scrollMarginTop = `${headerHeight + 8}px`;
    });
}

// Run on page load and on resize
window.addEventListener('load', updateScrollMargin);
window.addEventListener('resize', updateScrollMargin);
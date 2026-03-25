// Navbar Scroll Effect
let nav = document.querySelector(".navigation-wrap");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
});

// Mobile nav auto close
let navLinks = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(a => {
    a.addEventListener("click", () => {
        navCollapse.classList.remove("show");
    });
});

// Counter
const startCounter = (id, start, end, duration) => {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let step = Math.abs(Math.floor(duration / range));

    let timer = setInterval(() => {
        current++;
        obj.textContent = current;
        if (current == end) clearInterval(timer);
    }, step);
};

// Run when visible
const counterSection = document.querySelector('#counter');

if (counterSection) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            startCounter("count1", 0, 1287, 2000);
            startCounter("count2", 0, 786, 2000);
            startCounter("count3", 0, 1440, 2000);
            startCounter("count4", 0, 1110, 2000);
            observer.disconnect();
        }
    }, { threshold: 0.5 });

    observer.observe(counterSection);
}

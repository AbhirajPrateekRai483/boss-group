const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    document.body.classList.toggle("menu-open");

    const expanded = menuBtn.getAttribute("aria-expanded") === "true";

    menuBtn.setAttribute("aria-expanded", !expanded);

    menuBtn.innerHTML = expanded ? "☰" : "✕";

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        document.body.classList.remove("menu-open");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerHTML = "☰";

    });

});

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 60));

        const update = () => {

            current += increment;

            if (current >= target) {

                counter.textContent = target;

            } else {

                counter.textContent = current;

                requestAnimationFrame(update);

            }

        };

        update();

        observer.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => observer.observe(counter));
const revealElements = document.querySelectorAll(
    ".section-heading,.stat-card,.timeline-card,.info-box,.policy-card,.future-card,.cta-card,.hero-content,.hero-card"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(element => {

    element.classList.add("hidden");

    revealObserver.observe(element);

});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

const progressFill = document.querySelector(".progress-fill");

if (progressFill) {

    const progressObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                progressFill.style.width = "35%";

                progressObserver.disconnect();

            }

        });

    }, {

        threshold: 0.5

    });

    progressObserver.observe(progressFill);

}

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
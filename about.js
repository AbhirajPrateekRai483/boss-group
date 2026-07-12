const header = document.querySelector("header");
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuBtn.setAttribute(
        "aria-expanded",
        nav.classList.contains("active")
    );

    menuBtn.innerHTML = nav.classList.contains("active") ? "✕" : "☰";

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML = "☰";

        menuBtn.setAttribute("aria-expanded", "false");

    });

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
const navItems = document.querySelectorAll(".nav-links a[href^='#']");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navItems.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + entry.target.id) {

                    link.classList.add("active");

                }

            });

        }

    });

}, {

    threshold: .55

});

sections.forEach(section => {

    sectionObserver.observe(section);

});

navItems.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        button.style.setProperty("--x", x + "px");

        button.style.setProperty("--y", y + "px");

    });

});

const cards = document.querySelectorAll(".company-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s ease";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});
const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show-top");

    } else {

        backToTop.classList.remove("show-top");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.setAttribute("loading", "lazy");

});

const progressBar = document.createElement("div");

progressBar.className = "scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("Boss Group Website Loaded Successfully 🚀");
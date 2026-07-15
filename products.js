const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("show");

});

}

const links = document.querySelectorAll(".nav-links a");

const currentPage = window.location.pathname.split("/").pop() || "index.html";

links.forEach(link => {

const href = link.getAttribute("href");

if (href === currentPage) {

link.classList.add("active");

}

});

const revealElements = document.querySelectorAll(".coming-card, .vision-card");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

}, {

threshold: 0.2

});

revealElements.forEach(element => {

element.style.opacity = "0";

element.style.transform = "translateY(40px)";

element.style.transition = "all .7s ease";

observer.observe(element);

});
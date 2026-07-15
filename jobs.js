const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

}


const currentPage = window.location.pathname.split("/").pop();


document.querySelectorAll(".nav-links a").forEach(link=>{

if(link.getAttribute("href") === currentPage){

link.classList.add("active");

}

});


const elements = document.querySelectorAll(
".coming-card, .vision-card"
);


const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2

});


elements.forEach(element=>{

observer.observe(element);

});
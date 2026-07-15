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


const card = document.querySelector(".form-card");


if(card){

card.style.opacity="0";

card.style.transform="translateY(40px)";


setTimeout(()=>{

card.style.opacity="1";

card.style.transform="translateY(0)";

},200);

}

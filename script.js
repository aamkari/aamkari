/* ==========================================
  AAMKARI WEBSITE
  Version 1.0
========================================== */

// Navbar shadow on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

   if (window.scrollY > 50) {
       navbar.style.background = "rgba(247,244,239,0.95)";
       navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
   } else {
       navbar.style.background = "rgba(247,244,239,0.35)";
       navbar.style.boxShadow = "none";
   }

});

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

   anchor.addEventListener("click", function (e) {

       e.preventDefault();

       const target = document.querySelector(this.getAttribute("href"));

       if (target) {

           target.scrollIntoView({
               behavior: "smooth"
           });

       }

   });

});

// Hero fade on scroll

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

   let value = window.scrollY;

   if (hero) {
       hero.style.opacity = Math.max(1 - value / 700, 0.2);
   }

});

console.log("AAMKARI Version 1 Loaded Successfully");

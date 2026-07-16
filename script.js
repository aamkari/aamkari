/*=========================================
AAMKARI WEBSITE V2
SCRIPT.JS
PART 1
==========================================*/

const body = document.body;

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");

const navbar = document.querySelector(".navbar");

/*=========================================
MOBILE MENU
==========================================*/

menuBtn.addEventListener("click", () => {

mobileMenu.classList.toggle("active");

menuBtn.classList.toggle("active");

body.classList.toggle("menu-open");

});

document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.classList.remove("active");

menuBtn.classList.remove("active");

body.classList.remove("menu-open");

});

});

/*=========================================
HAMBURGER ANIMATION
==========================================*/

menuBtn.addEventListener("click",()=>{

const spans=menuBtn.querySelectorAll("span");

if(menuBtn.classList.contains("active")){

spans[0].style.transform="rotate(45deg) translateY(14px)";

spans[1].style.opacity="0";

spans[2].style.transform="rotate(-45deg) translateY(-14px)";

}

else{

spans[0].style.transform="";

spans[1].style.opacity="1";

spans[2].style.transform="";

}

});

/*=========================================
STICKY NAVBAR
==========================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

navbar.style.padding="14px 0";

navbar.style.background="rgba(248,245,240,.95)";

navbar.style.boxShadow="0 10px 40px rgba(0,0,0,.08)";

}

else{

navbar.style.padding="20px 0";

navbar.style.background="rgba(248,245,240,.82)";

navbar.style.boxShadow="none";

}

});

/*=========================================
SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/*=========================================
SCROLL REVEAL
==========================================*/

const revealElements=document.querySelectorAll(

".value-card,.artisan-card,.timeline-item,.collection-card,.founder-wrapper,.journal-card"

);

const revealObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

revealElements.forEach(element=>{

element.classList.add("fade-up");

revealObserver.observe(element);

});

/*=========================================
SECTION TITLE ANIMATION
==========================================*/

const sectionTitles=document.querySelectorAll(".section-intro");

const titleObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.25

}

);

sectionTitles.forEach(title=>{

title.classList.add("fade-up");

titleObserver.observe(title);

});

/*=========================================
HERO PARALLAX
==========================================*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=`${window.scrollY*0.35}px`;

}

});

/*=========================================
ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(
".desktop-nav a, .mobile-menu a"
);

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*=========================================
NEWSLETTER FORM
==========================================*/

const newsletterForm=document.querySelector(".newsletter-form");

if(newsletterForm){

newsletterForm.addEventListener("submit",(e)=>{

e.preventDefault();

const input=newsletterForm.querySelector("input");

if(input.value.trim()===""){

alert("Please enter your email.");

return;

}

alert("Welcome to the House of AAMKARI.");

input.value="";

});

}

/*=========================================
PAGE LOADER
==========================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/*=========================================
SCROLL TO TOP ON REFRESH
==========================================*/

window.onbeforeunload=function(){

window.scrollTo(0,0);

};

/*=========================================
IMAGE FADE
==========================================*/

const images=document.querySelectorAll("img");

images.forEach(image=>{

image.addEventListener("load",()=>{

image.style.opacity="1";

});

});

/*=========================================
YEAR AUTO UPDATE
==========================================*/

const yearElement=document.querySelector(".footer-bottom p");

if(yearElement){

yearElement.innerHTML=

`© ${new Date().getFullYear()} AAMKARI · Crafted in India · Designed for the World`;

}

/*=========================================
CONSOLE MESSAGE
==========================================*/

console.log(

"%cAAMKARI",

"font-size:32px;color:#B08A45;font-family:serif;font-weight:bold;"

);

console.log(

"Rooted in Heritage. Designed for Strength."

);

/*=========================================
END OF SCRIPT
==========================================*/

/*==============================
BACK TO TOP
==============================*/

const backToTop=document.querySelector(".back-to-top");

if(backToTop){

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==============================
NEWSLETTER
==============================*/

const newsletter=document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Welcome to the House of AAMKARI.");

newsletter.reset();

});

}

/*==================================================
SIGNATURE CRAFTS ANIMATION
==================================================*/

const craftRows = document.querySelectorAll(".craft-row");

const craftObserver = new IntersectionObserver((entries) => {

   entries.forEach((entry) => {

       if (entry.isIntersecting) {

           entry.target.classList.add("show-craft");

           craftObserver.unobserve(entry.target);

       }

   });

}, {

   threshold: 0.2

});

craftRows.forEach((row) => {

   craftObserver.observe(row);

});

/*=========================================
AAMKARI PRELOADER
=========================================*/

window.addEventListener("load", () => {

   const preloader = document.getElementById("preloader");

   // Keep the loading screen visible for ~3 seconds
   setTimeout(() => {

       preloader.classList.add("hide");

       // Remove it completely after the fade-out
       setTimeout(() => {
           preloader.remove();
       }, 1000);

   }, 3000);

});

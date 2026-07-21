/* ===========================
MoboMind Premium JS
=========================== */

// Loader

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},1200);

});

// Header Scroll

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.padding="0";

header.style.background="rgba(255,255,255,.97)";

header.style.boxShadow="0 15px 35px rgba(0,0,0,.08)";

}else{

header.style.background="rgba(255,255,255,.90)";

header.style.boxShadow="none";

}

});

// Back To Top

const topBtn=document.getElementById("top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Smooth Links

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.onclick=function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

};

});

// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade");

}

});

},{threshold:.15});

document.querySelectorAll(

".card,.blog-card,.coming-card"

).forEach(el=>{

observer.observe(el);

});

// Hero Floating

const heroLogo=document.querySelector(".hero-image img");

let angle=0;

setInterval(()=>{

angle+=0.02;

heroLogo.style.transform=

`translateY(${Math.sin(angle)*12}px)
rotate(${Math.sin(angle)*2}deg)`;

},25);

// Button Ripple

document.querySelectorAll("button,.btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.className="ripple";

circle.style.left=e.offsetX+"px";

circle.style.top=e.offsetY+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

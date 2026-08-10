/* =================================
   DUIT DIGITAL PREMIUM SCRIPT
================================= */


/* WEBSITE LOAD */

document.addEventListener(
"DOMContentLoaded",
function(){


console.log(
"DUIT Digital Loaded"
);



/* SCROLL REVEAL */


const revealElements = 
document.querySelectorAll(
".card, section"
);



function revealOnScroll(){


revealElements.forEach(
function(element){


const position =
element.getBoundingClientRect().top;


const screen =
window.innerHeight;



if(position < screen - 100){


element.classList.add(
"show"
);


}



});


}



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();



});





/* =================================
   HAMBURGER MENU
================================= */


function toggleMenu(){


const menu =
document.getElementById(
"nav-menu"
);



if(menu){


menu.classList.toggle(
"active"
);


}



}
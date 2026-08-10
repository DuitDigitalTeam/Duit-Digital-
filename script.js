document.addEventListener("DOMContentLoaded",function(){


console.log("DUIT Digital Loaded");


});





function toggleMenu(){


const menu =
document.getElementById("nav-menu");


if(menu){

menu.classList.toggle("active");

}


}





const links =
document.querySelectorAll("a[href^='#']");


links.forEach(link=>{


link.addEventListener("click",function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


window.addEventListener("scroll",()=>{

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let position=card.getBoundingClientRect().top;

let screen=window.innerHeight;


if(position < screen - 100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

const revealElements =
document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


revealElements.forEach((el)=>{


let position =
el.getBoundingClientRect().top;


if(position < window.innerHeight - 100){


el.classList.add("show");


}


});


});
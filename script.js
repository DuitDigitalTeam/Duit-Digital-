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


}


});


});
document.addEventListener("DOMContentLoaded", function(){

    console.log("DUIT Digital Website Loaded");

});


// Smooth scroll

const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {

    link.addEventListener("click", function(e){

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


// DUIT AI placeholder

function openDuitAI(){

    alert(
    "DUIT AI Assistant is coming soon."
    );

}
function toggleMenu(){

const menu = document.getElementById("nav-menu");

menu.classList.toggle("active");

}
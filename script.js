document.addEventListener("DOMContentLoaded", function(){

    console.log("DUIT Digital Loaded");


    // Scroll reveal animation

    const elements = document.querySelectorAll(".card, section");


    function reveal(){

        elements.forEach(function(el){

            const position = el.getBoundingClientRect().top;

            const screen = window.innerHeight;


            if(position < screen - 100){

                el.classList.add("show");

            }

        });

    }


    window.addEventListener("scroll", reveal);

    reveal();


});





// Hamburger Menu

function toggleMenu(){


    const menu =
    document.getElementById("nav-menu");


    if(menu){

        menu.classList.toggle("active");

    }


}
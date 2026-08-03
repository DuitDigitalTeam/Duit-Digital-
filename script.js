
// =====================================
// DUIT DIGITAL V3
// MAIN JAVASCRIPT
// =====================================


// Smooth scrolling untuk menu

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



// Wallet button demo

const walletButton = document.querySelector(".wallet-btn");


if(walletButton){

    walletButton.addEventListener("click", function(){

        alert(
            "Phantom Wallet Integration Coming Soon 🚀"
        );

    });

}



// Hero animation message

console.log(
    "DUIT Digital V3 Loaded Successfully 🚀"
);

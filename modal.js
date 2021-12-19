/***** CONSTANTES *****/ 

/* DOM Elements */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#close-modal");


/***** EVENTLISTENERS *****/ 

// launch modal event click
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event click
closeModalBtn.forEach(elmt => elmt.addEventListener("click", closeModal));


/***** FUNCTIONS *****/ 

// nav responsive button
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}


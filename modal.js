/***** CONSTANTES *****/

/* DOM Elements */
const MODALBG = document.querySelector(".bground");
const MODALBTN = document.querySelectorAll(".modal-btn");
const FORMDATA = document.querySelectorAll(".formData");
const CLOSEMODALBTN = document.querySelectorAll("#close-modal");
const SUCCESSMESSAGEDIV = document.querySelectorAll("#success-message");
const FORM = document.querySelectorAll("#form");
const SUCCESSCLOSEBTN = document.querySelectorAll("#success-close-btn");

/* FORM Elements */
const PRENOM = document.getElementById("first");
const NOM = document.getElementById("last");
const EMAIL = document.getElementById("email");
const NAISSANCE = document.getElementById("birthdate");
const QUANTITE = document.getElementById("quantity");
const VILLE = document.querySelector("input[type=radio]");
const CONDITIONS = document.getElementById("checkbox1");


/***** EVENTLISTENERS *****/

// ouverture formulaire modal au click Je M'inscris
MODALBTN.forEach((btn) => btn.addEventListener("click", launchModal));

// fermeture formulaire modal au click sur la croix
CLOSEMODALBTN.forEach(elmt => elmt.addEventListener("click", closeModal));

// appel fonction de validation du form au click sur C'est parti
FORM.forEach(elmt => elmt.addEventListener("submit", validate));


/***** FUNCTIONS *****/

// affichage bouton de nav 
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// fonction d'affichage du form modal
function launchModal() {
    MODALBG.style.display = "block";
}

// fonction de fermeture du form modal
function closeModal() {
    MODALBG.style.display = "none";
}

// VALIDATIONS

// validation prenom
function isTailleOk(currentLength, minLength) {
    return currentLength >= minLength;
}
function isPrenomValid() {
    let isValid = isTailleOk(PRENOM.value.length, 2);
    return isValid;
}
function validate(e) {
    e.preventDefault();
    let prenom = isPrenomValid();
    if (prenom) {
        alert("prenom valide");
    } else {
        alert("prenom invalide");
    }
    console.log(prenom);
}
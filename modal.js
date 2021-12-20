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

// fermeture formulaire modal et fenêtre modale de comfirmation au click sur la croix
CLOSEMODALBTN.forEach(elmt => elmt.addEventListener("click", closeModal));
SUCCESSCLOSEBTN.forEach(elmt => elmt.addEventListener("click", closeModal));

// appel fonction de validation du form au click sur C'est parti
FORM.forEach(elmt => elmt.addEventListener("submit", validerForm));


/***** FUNCTIONS *****/

// AFFICHAGES

// affichage bouton de nav 
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// fonction d'affichage 
function launchModal() {
    // affichage du background
    MODALBG.style.display = "block";
    // affichage du form modal
    FORM[0].style.display = "block";
}

// fonction de fermeture 
function closeModal() {
    // fermeture du form modal (via le background)
    MODALBG.style.display = "none";
    // fermeture modale de comfirmation de réservation
    SUCCESSMESSAGEDIV[0].style.display = "none";
}

// affichage fenêtre de comfirmation 
function afficherComfirmation() {
    // calcul hauteur du form
    let currentHeight = FORM[0].offsetHeight;
    // on cache le form
    FORM[0].style.display = "none";
    // fenêtre de comfirmation de réservation = même taille que le form
    SUCCESSMESSAGEDIV[0].style.display = "flex";
    SUCCESSMESSAGEDIV[0].style.height = currentHeight + "px";
}

// VALIDATIONS

// validation prenom
function isPrenomValid() {
    let isValid = isTailleOk(PRENOM.value.length, 2);
    return isValid;
}
// validation nom
function isNomValid() {
    let isValid = isTailleOk(NOM.value.length, 2);
    return isValid;
}
// validation formulaire et affichage comfirmation de réservation
function validerForm(e) {
    e.preventDefault();
    let prenom = isPrenomValid();
    let nom = isNomValid();
    
    let isFormValid = prenom && nom;
    if (isFormValid) {
        afficherComfirmation();
    }
}

// OUTILS

// test valeur saisie utilisateur 
function isTailleOk(currentLength, minLength) {
    return currentLength >= minLength;
}

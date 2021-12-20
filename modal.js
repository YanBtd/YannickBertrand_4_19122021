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

// fermeture formulaire modal et fenêtre modale de confirmation au click sur la croix
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
    // fermeture fenêtre modale de confirmation de réservation
    SUCCESSMESSAGEDIV[0].style.display = "none";
}

// affichage fenêtre de confirmation 
function afficherComfirmation() {
    // calcul hauteur du form
    let currentHeight = FORM[0].offsetHeight;
    // on cache le form
    FORM[0].style.display = "none";
    // fenêtre de confirmation de réservation = même taille que le form
    SUCCESSMESSAGEDIV[0].style.display = "flex";
    SUCCESSMESSAGEDIV[0].style.height = currentHeight + "px";
}

// VALIDATIONS

// validation prenom
function isPrenomValid() {
    let isValid = isTailleOk(PRENOM.value.length, 2);
    let inputPrenom = new Input(PRENOM, "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.");
    enleverOuAfficherErreur(inputPrenom, isValid)
    return isValid;
}
// validation nom
function isNomValid() {
    let isValid = isTailleOk(NOM.value.length, 2);
    let inputNom = new Input(NOM, "Veuillez entrer 2 caractères ou plus pour le champ du Nom.");
    enleverOuAfficherErreur(inputNom, isValid)
    return isValid;
}
// validation formulaire et affichage fenêtre de confirmation de réservation
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
// appel de la fonction adéquate si erreur ou non
function enleverOuAfficherErreur(elmt, isValid) {
    if (isValid) {
        elmt.enleverErreur();
    } else {
        elmt.afficherErreur();
    }
}

/***** CLASSE *****/

// création d'un nouvel input pour afficher le message d'erreur
class Input {
    constructor(elmt, errMsg) {
        this.elmt = elmt;
        this.errMsg = errMsg;
    }
    // récupération du parent de l'élément
    getParent() {
        return this.elmt.parentElement;
    }
    // affichage du message d'erreur si erreur de saisie
    afficherErreur() {
        this.getParent().setAttribute("data-error-visible", "true");
        this.getParent().setAttribute("data-error", this.errMsg);
    }
    // masquage du message d'erreur si saisie comforme
    enleverErreur() {
        this.getParent().removeAttribute("data-error-visible");
        this.getParent().removeAttribute("data-error");
    }
}
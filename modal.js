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
const NOMBRE = document.getElementById("quantity");
const VILLE = document.querySelector("input[type=radio]");
const CONDITIONS = document.getElementById("checkbox1");

/* REGEX */
const NOMBREREGEX = /^\+?(0|[1-9]\d*)$/;
const EMAILREGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const NAISSANCEREGEX = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;


/***** EVENTLISTENERS *****/

// ouverture formulaire modal au click Je M'inscris
MODALBTN.forEach((btn) => btn.addEventListener("click", launchModal));

// fermeture formulaire modal et fenêtre modale de confirmation au click sur la croix
CLOSEMODALBTN.forEach(elmt => elmt.addEventListener("click", closeModal));
SUCCESSCLOSEBTN.forEach(elmt => elmt.addEventListener("click", closeModal));

// appel fonction de validation du form au click sur C'est parti
FORM.forEach(elmt => elmt.addEventListener("submit", validerForm));

//    

PRENOM.addEventListener("blur", isPrenomValid);



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
    enleverOuAfficherErreur(inputPrenom, isValid);
    return isValid;
}
// validation nom
function isNomValid() {
    let isValid = isTailleOk(NOM.value.length, 2);
    let inputNom = new Input(NOM, "Veuillez entrer 2 caractères ou plus pour le champ du Nom.");
    enleverOuAfficherErreur(inputNom, isValid);
    return isValid;
}
// validation nombre de tournois
function isNombreValid() {
    let isValid = isValeurValideRegex(NOMBRE.value, NOMBREREGEX);
    let inputNombre = new Input(NOMBRE, "Veuillez entrer un Nombre.");
    enleverOuAfficherErreur(inputNombre, isValid);
    return isValid;
}
// validation email
function isEmailValid() {
    let isValid = isValeurValideRegex(EMAIL.value, EMAILREGEX);
    let inputEmail = new Input(EMAIL, "Veuillez entrer une adresse E-mail valide.");
    enleverOuAfficherErreur(inputEmail, isValid);
    return isValid;
}
// validation date de naissance
function isNaissanceValid() {
    let isValid = isValeurValideRegex(NAISSANCE.value, NAISSANCEREGEX);
    let inputNaissance = new Input(NAISSANCE, "Veuillez entrer votre Date de naissance.");
    enleverOuAfficherErreur(inputNaissance, isValid);
    return isValid;
}
// validation ville du tournoi
function isVilleValid() {
    let isValid = isRadioChecked();
    let inputVille = new Input(VILLE, "Veuillez choisir la Ville du tournoi.");
    enleverOuAfficherErreur(inputVille, isValid);
    return isValid;
}
// validation conditions d'utilisation
function isConditionsValid() {
    let isValid = isCheckboxChecked("checkbox1");
    let inputConditions = new Input(CONDITIONS, "Merci de vérifier que vous acceptez les conditions d'utilisation.");
    enleverOuAfficherErreur(inputConditions, isValid);

    return isValid;
}

// validation formulaire et appel affichage fenêtre de confirmation de réservation
function validerForm(e) {
    // on stoppe la propagation de l'évenement
    e.preventDefault();
    let prenom = isPrenomValid();
    let nom = isNomValid();
    let nombre = isNombreValid();
    let email = isEmailValid();
    let naissance = isNaissanceValid();
    let ville = isVilleValid();
    let conditions = isConditionsValid();
    // exécution des fonctions de validation
    let isFormValid = prenom && nom && nombre && email && naissance && ville && conditions;
    if (isFormValid) {
        // appel fonction d'affichage
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
// comparaison valeur saisie et regex
function isValeurValideRegex(valeur, regex) {
    return regex.test(valeur);
}
// test si bouton-radio ville coché
function isRadioChecked() {
    return document.querySelectorAll("input[type=radio]:checked").length > 0;
}
// test si case conditions d'utilisation cochée
function isCheckboxChecked(id) {
    return document.getElementById(id).checked;
}

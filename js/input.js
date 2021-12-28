/***** création d'un nouvel input pour afficher le message d'erreur *****/

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
/**
 * Je programmes les évènements qui sont déclanchés côté HTML
 */

const elementBouttonValiderDate = document.querySelector("#validerDate");


let elementSpandateDuJour = document.querySelector("#dateDuJour");
let elementSpandateDuJourFormat2 = document.querySelector("#dateDuJourFormat2");

const maDate = new Date();

elementBouttonValiderDate.addEventListener("click", function() {
    // Je décris l'action à  réaliser lorsque je clique sur le boutton valider
    
    elementSpandateDuJour.innerHTML = maDate ;
    elementSpandateDuJourFormat2.textContent = maDate.toLocaleDateString();

});

// Mon évenement "kedown"
// je code un évenement de type KEYDOWN.
// l'évenement KEYDOWN va se déclancher lorsque j'appuie sur une touche de mon clavier.
// 1. Tout d'abord, je récupére l'élement HTML qui sera associé l,évenement KEYDOWN.
let elementButonFonctionFleche = document.querySelector("#boutonFleche");

// 2. j'associe l'événement KEYDOWN mon élément html en utilisant la méthode addEventListener().
// A l'intérieur de la méthod eAddEvent Listener(), je passe une fonction fléchée comme suit '()=> {}'.
 elementButonFonctionFleche.addEventListener("keydown", (event) => {
    console.log("=== je suis dans l'évenement KEYDOWN ===");
    console.log("Clé event : ", event.key);
 });

 // je code un évenement de type CHANGE.
 // L'évenement CHANGE va se déclancher lorsque je remplie le chmap
 //en tapant sur les touches du clavier.

//1. Tout d'abord, je récupére l'élement HTML qui sera associé l,évenement CHANGE.
let elementIputNom = document.querySelector("#nom");

//2. j'associe l'événement KEYDOWN mon élément html en utilisant la méthode addEventListener().
// A l'intérieur de la méthod eAddEvent Listener(), je passe une fonction fléchée comme suit '()=> {}'.
// la fonction fléchée  prend le paramétre.

let messageSalutation; // je déclare une variable
let elementSpanNomUtilisateur = document.querySelector("#nomUtilisateur");
elementIputNom.addEventListener("change",(event) => {
    console.log(event.target.value);
    messageSalutation = `bonjour ${event.target.value}`;
    elementSpanNomUtilisateur.textContent = messageSalutation;
});

 /**
 * Envoyer le formulaire
 * Je vais récupérer les données saisis sur le formulaire :
 * nom
 * prenom
 * situation
 * année de naissance
 */

// je récupère la balise <form> </form> avec ses enfants; Ensuite, je stocke la balise dans la variable elementForm
let elementForm = document.querySelector('form');
console.log("elementForm :", elementForm);


// J'assoccie l'événement 'submit'
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // empêche l'envoi du formulaire
  console.log("Formulaire soumis !");

 
  const nom = document.querySelector("#nom").value;
  const prenom = document.querySelector("#prenom").value;
  const anneeNaissance = document.querySelector("#anneeNaissance").value;
  const situation = document.querySelector("#situation").value;
  console.log("NOM saisi :" , nom, "prenom saisi :" , prenom,anneeNaissance,situation); 

  

});


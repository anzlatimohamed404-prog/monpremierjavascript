function afficherAge() {

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let situation = document.getElementById("situation").value;
    let naissance = document.getElementById("anneeNaissance").value;

    if (nom === "" || prenom === "" || situation === "--Sélectionnez--" || naissance === "") {
        document.getElementById("messageUtilisateur").textContent =
            "Veuillez remplir tous les champs.";
        return;
    }

    document.getElementById("nomUtilisateur").textContent =
        prenom + " " + nom + ", ";
}

// Calcul automatique de l'âge selon l'année de naissance
function calculAge() {
    const anneeNaissance = document.getElementById("anneeNaissance").value;
    const ageAffichage = document.getElementById("calcul-age");

    if (anneeNaissance && !isNaN(anneeNaissance)) {
        const anneeCourante = new Date().getFullYear();
        const age = anneeCourante - parseInt(anneeNaissance);
        ageAffichage.textContent = age + " ans";
    } else {
        ageAffichage.textContent = "";
    }
}

// Récupère l'élément HTML dont l'id est "boutonValider"
let elementBoutonValider = document.getElementById("boutonValider");
// Récupère l'élément HTML dont l'id est "boutonValider"
// Ajoute un écouteur d'événement sur cet élément
// L'événement écouté est le clic de la souris ("click")
//addEventListener est une méthode JavaScript qui permet de dire à un élément HTML :
//« Quand un événement se produit, exécute ce code »
elementBoutonValider.addEventListener("click", afficherAge);
// Affiche dans la console du navigateur le texte
    // "elementBoutonValider :" suivi de l'élément HTML lui-même.
console.log(document.getElementById("nom"));//le # c'est pour indique l'élément séléctionné est id
console.log(document.title);
console.log(document.head);


let elementDivRecensement = document.querySelector("#recensement");
console.log(elementDivRecensement);

let elementPRecensement = document.querySelector("#paragraphe1");
console.log(elementPRecensement);
    //je récupère la liste des communes de Mayotte,
    //Puis, je stocke les communes dans la variable elementListCommunes
let elementListCommunes = document.querySelectorAll("#listCommunes li");

for (let i = 0; i < elementListCommunes.length; i++) {
    console.log("### Liste communes ###");
    console.log(elementListCommunes[i].innerText);
}


let elementClassCommune = document.querySelectorAll(".commune");
//J'utilise la boucle FOR pour parcourir la liste elementListCommunes
for (let i = 0; i < elementClassCommune.length; i++) {
    console.log(elementClassCommune[i].innerText);
}

let elementSection = document.createElement("section");
let elementBody = document.querySelector("body");
elementBody.appendChild(elementSection);

let nouveauTitre = document.createElement("h3");
nouveauTitre.textContent = "Mon titre de la section";
elementSection.appendChild(nouveauTitre);

// élément personnalisé
let elementMaman = document.createElement("maman");
elementBody.appendChild(elementMaman);

let nouveauTitre2 = document.createElement("h3");
nouveauTitre2.textContent = "bonjour maman";
elementSection.appendChild(nouveauTitre2);

 //J'ajoute une image
// Je crée une balise <img>
let elementImg = document.createElement("img");
elementImg.src = "image_rsma.png";
//possibilité "elementImage.setAttribute("image_rsma.png" );"
elementImg.setAttribute("alt", "RSMA Mayotte");
elementImg.className = "image rsma";
elementImg.classList.add("image");
elementImg.classList.remove("image3");

//supprimer une classe de l'élément img
elementBody.appendChild(elementImg);

//
document
    .getElementById("anneeNaissance")
    .addEventListener("input", calculAge);

    

// Demande des informations à l'utilisateur
let nom = prompt("Entrez votre nom :");
let prenom = prompt("Entrez votre prénom :");
let anneeNaissance = parseInt(prompt("Entrez votre année de naissance :"));

// Récupération de l'année actuelle
let anneeActuelle = new Date().getFullYear();

// Calcul de l'âge
let age = anneeActuelle - anneeNaissance;

// Condition âge
if (age < 18) {
    alert(nom + " " + prenom + ", vous êtes mineur.");
} else {
    alert(nom + " " + prenom + ", vous êtes majeur.");
}


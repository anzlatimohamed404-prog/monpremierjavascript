function afficherAge() {

    // je récupére un élement (une balise) situé dans le fichier HTML (calcul_age.html)
    // j'utlise l'identifiant pour trouver le bon élément. l'élément récupérer est ensuite
    //stocker dans la variable elementBoutonValider.
       

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let situation = document.getElementById("situation").value;
    let naissance = document.getElementById("naissance").value;

    if (nom === "" || prenom === "" || situation === "" || naissance === "") {
        document.getElementById("resultat").textContent =
            "Veuillez remplir tous les champs.";
        return;
    }

    let anneeActuelle = new Date().getFullYear();
    let age = anneeActuelle - naissance;

    document.getElementById("resultat").textContent =
        `${prenom} ${nom}, vous êtes ${situation} et vous avez ${age} ans.`;
}

let elementBoutonValider = document.getElementById("boutonValider");
elementBoutonValider.addEventListener("click", function(){
    console.log("elementBoutonValider :", elementBoutonValider);
});
//console.log(document.getElementBYID("nom"));
console.log(document.getElementById("nom"));

console.log(document.getElementById)

console.log(document.title);

console.log(document.head);

//je récupére l'élément html (balise) dont l,identifiant est recensement.
let elementDivRecensement = document.querySelector("#recensement");

console.log(elementDivRecensement);

let elementPRecensement = document.querySelector("#paragraphe1");

console.log(elementPRecensement);

// je récupére la liste des communes de Mayotte,
// puis je stocke les communes dans la variable elementListCommunes
let elementListCommunes = document.querySelector("#listCommunes");

// Ensuite, j'affiche la variable elementListCommunes
console.log(elementListCommunes);

// j'utilise la boucle for pour parcourir la liste elementListeCommunes.
for(let i = 0; i < elementListCommunes.length; i++) {
    console.log("### Liste communes ### ");
    console.log(elementListCommunes [i]);
}

// j'utilise queryselectorAll pour récupérer tous les membres de la meme classe.
let elementClassCommune = document.querySelectorAll(".commune");
console.log (elementClassCommune);

// 
for(let i = 0; i < elementClassCommune.length; i++) {
    console.log (elementClassCommune [i]);

    // j'affiche tout les communes.
    console.log(elementClassCommune [i].innerText);
    
}

/**j'insére des balises dans lz fichier html grace au code javascript */
let elementSection = document.createElement("section");

let elementBody = document.querySelector('body');
// je récupére la balise <body> , puis je stock <body> dans la variable elementBody.

elementBody.appendChild(elementSection);

let nouveauTitre = document.createElement("h3");

nouveauTitre.textContent = "Mon titre de la section";

elementSection.appendChild(nouveauTitre);

// j'ai créer un élement(balise)npmmé<maman>
let elementMaman = document.createElement("maman");

elementBody.appendChild(elementMaman);

let nouveauTitre2 = document.createElement("h3");

nouveauTitre2.textContent = "bonjour maman";

elementSection.appendChild(nouveauTitre2);

let elementImg = document.createElement("img");

elementImg.src = "image_rsma.png";
elementImg.setAttribute("alt", "RSMA Mayotte");
elementImg.className = "image rsma";
elementImg.classList.add("image" );

// supprimer une classe de l'élément img
elementImg.classList.remove("image3");

// j'insere l'image dans le body
elementBody.appendChild(elementImg);



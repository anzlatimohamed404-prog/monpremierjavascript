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

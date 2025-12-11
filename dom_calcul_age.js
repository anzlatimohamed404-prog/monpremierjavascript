function afficherAge() {

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

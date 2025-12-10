// Déclaration de l'objet ticket
let ticket = {
    nomFilm: "Simba",
    prix: 12,
    numeroSalle: 5
};

// Déclaration d'une variable nom
let nom1 = "Dupont";
 

// Création de la variable texteAffichage
let texteAffichage = `Bonjour ${nom1}, votre film ${ticket.nomFilm} est en salle ${ ticket.numeroSalle}`;
// Affichage dans la console
console.log(texteAffichage);

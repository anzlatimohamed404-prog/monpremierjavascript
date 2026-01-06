// Manipulation des dates en JavaScript
console.log("### Je suis dans l'événement date ###");

const maDate2 = new Date();

const anneeEnCours = new Date().getFullYear();

let elementSpanAnee = document.querySelector("#annee");
elementSpanAnee.textContent = anneeEnCours;

let elementSpanMois = document.querySelector("#mois");
elementSpanMois.textContent = maDate2.getMonth();

let dateComplete = document.getElementById("dateComplete");
dateComplete.textContent = maDate2.toLocaleDateString();

console.log(dateComplete);

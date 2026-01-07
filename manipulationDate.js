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


function horloge() {
  const maintenant = new Date();

  let heures = maintenant.getHours();
  let minutes = maintenant.getMinutes();
  let secondes = maintenant.getSeconds();

  // Ajouter un zéro si < 10
  heures = heures < 10 ? "0" + heures : heures;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  document.getElementById("heures").textContent = heures;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("secondes").textContent = secondes;
}



// Affichage immédiat
horloge();

// Mise à jour chaque seconde
setInterval(horloge, 1000);

function horlogeParis() {
  const maintenant = new Date();

  // Heure de Paris
  const heureParis = maintenant.toLocaleTimeString("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  // Date de Paris
  const dateParis = maintenant.toLocaleDateString("fr-FR", {
    timeZone: "Europe/Paris",
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  document.getElementById("heureParis").textContent = heureParis;
  document.getElementById("dateParis").textContent = dateParis;
}

// Affichage immédiat
horlogeParis();

// Mise à jour chaque seconde
setInterval(horlogeParis, 1000);


function horlogeTokyo() {
  const maintenant = new Date();

  // Heure de Tokyo
  const heureTokyo = maintenant.toLocaleTimeString("fr-FR", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  // Date de Tokyo
  const dateTokyo = maintenant.toLocaleDateString("fr-FR", {
    timeZone: "Asia/Tokyo",
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  document.getElementById("heureTokyo").textContent = heureTokyo;
  document.getElementById("dateTokyo").textContent = dateTokyo;
}

// Affichage immédiat
horlogeTokyo();

// Mise à jour chaque seconde
setInterval(horlogeTokyo, 1000);



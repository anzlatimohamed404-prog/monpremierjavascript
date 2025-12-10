console.log("section - je suis dans la boucle");

let nombreTour = 0;

// la boucle WHILE
//while signifie "tant que"
// tant que la limite n'est pas atteinte, alors l'action s'exécute.
//la boucle while va exécuter la meme operation autant de fois que la limite n'est pas atteinte.
// et a chaque tour, la variable nombreTour augmente de 1 (+1)

while (nombreTour < 7){
    console.log("tour de la maison au départ : ", nombreTour);
    nombreTour = nombreTour + 1;

    console.log("Nombre de tours aprés le passage : ", nombreTour);
}

// boucle FOR
for(let indice = 0; indice < 3; indice++) {
     console.log("l'indice est de : ", indice);

}

// Application de la boucle For sur une liste d'éléves

let listeEleves = ["anrabia-said", "anzlati mohamed", "mchangama mounawara", "nael chamsidine","houmadi chahida,"];
console.log("taille du tableau : ", listeEleves.length);
console.log(listeEleves[0]);
console.log(listeEleves[1]);
console.log(listeEleves[2]);

for(let i = 0; i < listeEleves.length; i++){
    console.log(listeEleves[i]);
}

   



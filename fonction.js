
// les fonctions en javascript ###

console.log(" section fonction ");

// la fonction additionner() doit additionner des nombres et retouner le résultats.
// la fonction addition a besoin de deux paramétres:(chiffre1, et chiffre2)
// Ensuite la fonction additonner additionne les deux paramétre : chiffre1 + chiffre2
// Enfin , la fonction additionner retourne ou renvoie le résultat du calcul

function additionner(chiffre1, chiffre2) {
    let resultat = chiffre1 + chiffre2;
    return resultat;

}

// j'utilise la fonction additionner (chiffre1, chiffre2) pour calculer la somme de deux nombres

let sommesAddition = additionner(15,8); 

console.log("sommes1 : ", sommesAddition);

function soustraire(chiffre1, chiffre2) {
    let resultat = chiffre1 - chiffre2;
    return resultat;

};

let resteSoustraction = soustraire(15,8);

console.log("resteSoustraction : ", resteSoustraction);


// fonction multiplication pour multiplier deux nombres
// la fonction soustrait une valeur dans une autre
// la fonction prend deux paramétres qui sont


// fonction multiplication pourmultiplier deux nombres.
function multiplication(chiffre1, chiffre2) {
    let resultat = chiffre1 * chiffre2;
    return resultat;

};


let produitMultiplication = multiplication(15,8);

console.log("produitMultiplication", produitMultiplication);


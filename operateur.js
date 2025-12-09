//ici je code les operateurs en javascript.

let prixUnitaire = 3; 
let valeurAjoutee = 7;
let valeurReduction = 5;
let valeurDivision = 4;

// premiere technique d'addition des nombres
let prixAdditionne1 = 3+7;
// j'affiche la valeur de la variable prixAdditione1
console.log("prixAdditionne1 :", prixAdditionne1 );

// deuxiéme méthode d'additionner des nombres à l'aide de variables
let prixAdditione2 = prixUnitaire + valeurAjoutee;
console.log("prixAdditionne2 : ", prixAdditione2);

// Addition des chaines de caractéres
// Exemple : "fatima"; "amina"; Résultat attendu est "fatima amina"
let eleve1 = "fatima";
let eleve2 = "amina";

// ici j'ai pas ajouté d'espace entre les deux variables "amina et fatima"
console.log(eleve1 + eleve2);
// je concaténe deux variables
// j'ajoute un espace entre les deux variables "amina et fatima".
console.log(eleve1 +" "+ eleve2);

// je concatene deux variables.
// Et je les stocke dans une autre variable.

let eleveCombo = eleve1 +" "+ eleve2;
console.log("elevecombo : ", eleveCombo);
// je fait une soustraction.

let prixReduit = prixUnitaire - valeurReduction;
// j'ai Reduit le prix jusqu'a -2 de reduction.
console.log("prix réduit : ", prixReduit);
// ### multiplication * permet de multiplier des nombres.
// attention: il ne faut pas utiliser le signe x pour la multiplication
// le signe

let prixMultiplie = prixUnitaire * valeurAjoutee;
console.log("prix multiplié :", prixMultiplie);

// ### division / ###
//  permet de diviser des nombres

let prixDivise = prixUnitaire / valeurDivision;
console.log("résultat du prix divisé : ", prixDivise);

// les opérateurs de comparaison
//nous allons comparer les valeurs stocker dans les variables.
// allons-y!

// je verifie si les deux variables "village et commune" sont identiques("=="")
console.log("### section comparaison ###");
let village1 = "mamoudzou";
let commune2 = "MAMOUDZOU";

// je vérifie que les deux variables ont :
// la meme valeur
// le meme type de valeur


console.log(village1 == commune2);
// le signe === (tripke égale) permet de comparer les valeurs et le type de données.
// les types de données sont :
//- string (chaine de caractére)
//-number (nombre)
//-bollean (booléen) soit true ou false
//-array (tableau)
//- objet (objet)

console.log(village1 === commune2);
// signe> signifie:"supérieur à ou bien plus grand que"

let age1 = 12;
let distanceParcourue2= 5;

// Est-ce que l'age est suppérieur à la distance parcourue?
console.log(age1 > distanceParcourue2);
// Est-ce que l'age est inférieur a la distance parourue?
console.log(distanceParcourue2 > age1);
console.log(distanceParcourue2< age1)

// Est-ce que le village est différent de la commune?
let village2 = "mamoudzou";
 console.log(village != commune);
 // Est-ce que la commune est strictement different du village?
let commune1 ="MAMOUDZOU";
console.log(village !== commune);



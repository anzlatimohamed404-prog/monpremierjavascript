// les conditions en javascript
let nombreFruit = 19;

// j'affiche l'alerte si le nombre de fruit est égal à 18.
//Ma condition commence par le mot-clé if
//if(ma condition) {}

if (nombreFruit == 18) { // nous avons une comparaison à égalité stricte
    alert("vous avez atteint 18 fruits.");// fonction alert()

};

let noteEleve = 10;

if(noteEleve >= 10) {
alert("vous etes admis avec une note de "+ noteEleve);

};

let ageTelespectateur = 18;

if(ageTelespectateur <= 18) {  // si l'age est moins de 18ans
    alert("vous pouvez regarder le roi lion ! car vous avez " + ageTelespectateur);
};

if(ageTelespectateur >= 18) {  // si l'age est moins égal ou superieur a 18
    alert("vous pouvez regarder rambo ! car vous avez " + ageTelespectateur);
};

// la condition avec if else
let pointPermis = 12;
 if(pointPermis =12){ // si le point de permis est stictement egal a 12
    alert("vous avez un bonus!");


 } else{ // sinon
    alert("vous avez des malus!"); 
 }   
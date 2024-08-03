// Kamael Case
let MaSuperVariable = "Hello";

// Var = vieux JS
var unTexte = "Voici un texte";

// const = constante = donnée qui ne bouge pas
const prenom = "Justine";

// let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = "Je suis l'une chaine de caractères";
// salut 

let nouvelleChaine =
  "Chaine précédente : " + chaine + ". Voila c'etait le contenu";

//   Concatenation avec guillement altgr+7
let autreConcatenation = `Chaine précédente : ${chaine} + " Voila c'était le contenu`;
// console.log(nouvelleChaine);
// console.log(autreConcatenation);

// Les types de données
let string = "Je suis une chaine de caractère";
let number = 24;
let boolean = false;
// Tableau = il y a toujours des crochets
let array = ["je", "suis", 47, true];
// Object = accolade {}
let onject = {
  prenom: "Audre",
  age: 33,
  ville: "Bordeaux",
};

let arbre;

// Les opérateurs
// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 / 5);
// console.log(4 * 5);
// console.log(4 ** 5);

// Opérateur d'affectations
let total = 1;

total++;

total += 5;
total -= 5;
total *= 2;

console.log(total);

// Structure de controle
let x = 2;
let y = 5;

// if (x > y) {
//   alert("Yes x plus gros que y");
// } else if (y > x) {
//   alert("Y plus grand !");
// } else {
//   alert("Ils sont egaux");
// }

// On teste si la variable est true
if (x) {
  // console.log("x existe !");
}

if ((x = y)) {
  console.log("Ils sont égaux");
}

// Fonction classique (à l'ancienne)
function faireQuelqueChose() {
  console.log("Je fais quelque chose !");
  console.log(5 + 6);
  alert("Calcule terminé !");
}

// Il faut imprativement appeler la fonction pour qu'elle se joue
// appel de la fonction : faireQuelqueChose();

// fonction fléchée
const addition = (a, b) => {
  console.log(a + b);
};

addition(4, 3);
addition(432, 578481);

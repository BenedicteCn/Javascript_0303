function sayHello() {
  console.log("Bonjour monde");
}

sayHello();

let bonjour = "Bonjour ";
let letter;

letter = prompt('Quel est ton prénom stp ?');
bonjour += letter; //on rajoute la lettre saisie à la suite du mot
console.log(bonjour)

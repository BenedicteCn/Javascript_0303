const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//1

console.log("1/ Est-ce que tous les livres ont été au moins empruntés une fois ?")
result1 = books.forEach(book =>{ if (book.rented > 1) console.log("Oui mon capichef");})

//2

console.log("2/ Quel est livre le plus emprunté ?")
result2 = books.sort(function (a, b) {
  return a.rented - b.rented;
});
console.log(result2.pop())

//3

console.log("3/ Quel est livre le moins emprunté ?")
result3 = books.sort(function (a, b) {
  return b.rented - a.rented;
});
console.log(result3.pop())

//4

/*console.log("4/ Le livre avec l'ID: 873495 est")

result4 = books.filter(el => {
    return el.id === 873495
  })

console.log(result4)*/

//5

let removed;
for (let i = 0; i < books.length; i++){
  if (books[i].id == 133712){
    removed = books.splice(i,1);
  }
}
console.log(`5/ Le livre avec l'id 133712 vient d'être supprimé`);

//6
console.log("6/ Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")
result6 = books.sort(function(a,b){
  return a.title.localeCompare(b.title);
})
console.log(result6)

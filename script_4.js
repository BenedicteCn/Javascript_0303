const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//1
  result1 = entrepreneurs.filter(entrepreneur => entrepreneur.year > 1960 && entrepreneur.year < 1980);
  console.log("Les entrepreneurs qui sont nés dans les années 70 sont : ");
  console.log(result1);

//2

  result21 = entrepreneurs.filter(res => res.first).map(ele=>ele.first);
  result22 = entrepreneurs.filter(res => res.first).map(ele=>ele.last);
  console.log("Le prénom des entrepreneurs : ")
  console.log(result21)
  console.log("Le nom des entrepreneurs : ")
  console.log(result22)

//3
  console.log("L'âge de chaque inventeur aujourd'hui :")
  result3 = entrepreneurs.forEach(element => console.log(element.first + " : " + (2022 - element.year) + " ans"))

//4

  result4 = entrepreneurs.sort(function(a,b){
    return a.last.localeCompare(b.last);
  })
  console.log("Liste des entrepreneurs triés par ordre alpahbétique de leur nom de famille : ");
  console.log(result4)

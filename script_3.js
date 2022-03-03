nbr = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
pyramide = ""

  for(i = 0; i <= nbr; i++)
  {
    for(k = 1; k<=( nbr-i ); k++){
      pyramide += " ";}

    for(j = 1; j<i; j++){
    pyramide += "#";}

    pyramide += "\n";
  }


console.log(pyramide)

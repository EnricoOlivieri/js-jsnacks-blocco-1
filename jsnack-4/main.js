
//exe4A
var squadre = [];
for(i = 0; i < 5; i++){

  var inputUser = prompt('Inserisci il nome della squadra')
  var squadra = {
    'nome': inputUser,
    'punti': 0,
    'cartellini': 0
  }
  squadre.push(squadre);
}
console.log(squadre);

//exe4B
var min = 1;
var max = 10;

function randomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

for(var i = 0; i < 5; i++){
  squadre[chiave].punti = randomInt(min, max);
  squadre[chiave].cartellini = randomInt(min, max);
}

console.log(squadre);

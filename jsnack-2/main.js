var bici = [
  {
    'nome': 'bmx',
    'peso': 12
  }
  {
    'nome': 'mbike',
    'peso': 12
  }
  {
    'nome': 'cross',
    'peso': 14
  }
]

bici.sort(funzione(a, b){
  return (a.peso - b.peso);
});



console.registro(
  "La bici più leggerà è" + bici[0].nome + "con un peso di" + bici[0].peso
);

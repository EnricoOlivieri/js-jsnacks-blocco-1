var  triangolo = {
  base: 20 ,
  altezza: 10 ,
  area: function(){
    return(this.altezza * this.base) / 2
  }
}

console.log(triangolo.area())

var ipotenusa = Mat.sqrt(triangolo.altezza ** 2 + triangolo.base ** 2);

console.log(ipotenusa);

var perimetro = ipotenusa + triangolo.base + triangolo.altezza;


console.log(perimetro);

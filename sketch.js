let img;

function setup() {
  createCanvas(600, 400);
  img = loadImage('arbol.jpeg');

}

function draw() {
  image(img, 0, 0);
  ellipse(20, 30, 50);
}


var x = [];// esto es un arreglo
var y = [];// esto es un arreglo
var incremento = [];
var h = [];
var mensajes =[];

function setup() {
  createCanvas(600, 400);
  print(floor(random(1, 10)))
  for(var i = 0; i < 15; i = i +1){
    x[i] = floor(random(0, width));
    y[i] = 0;
    incremento[i] = floor(random(1,10));
    h[i] = floor(random(1, 5));
  }
  mensajes = ["Feliz Navidad", "Feliz Año Nuevo", "Alegría", "Amor", "Prosperidad","Feliz Navidad", "Feliz Año Nuevo", "Alegría", "Amor", "Prosperidad"];
  print(x);
  print(y);
  print(incremento);
  print(h);
}

function draw() {
  background('green');
  stroke('red');
  strokeWeight(3);
  noFill();
  for(var i = 0; i < 10; i = i +1){
     ellipse(x[i], y[i] ,h[i]);  
    text(mensajes[i], x[i]+10, y[i]+10);
    textSize(20);
    if (y[i] > height) {
      incremento[i] = incremento[i] * -1;
    }else if(y[i] <0 ){
      incremento[i] = incremento[i] * -1;
    }
    y[i] = y[i] + incremento[i];
  }
  
}
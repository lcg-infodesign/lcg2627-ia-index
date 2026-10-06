// dimensioni del foglio da disegno
let xMax = 400;
let yMax = 600;

// posizione iniziale del razzo (centro, 60% dell'altezza)
let xRocket = xMax/2;
let yRocket = yMax*0.6;

function setup() {
  createCanvas(xMax, yMax); // crea la finestra 400x600
  frameRate(30);            // 30 fotogrammi al secondo
}

function draw() {
  background("#C0E1FC"); // azzurro chiaro, ridisegnato a ogni fotogramma

  // testo nero con le coordinate del mouse
  fill(0); // nero
  textSize(20);
  text("mouseX: " + mouseX + ",\
     mouseY: " + mouseY,20,20)

  // disegnare le stelle
  push(); // aprire contesto di disegno
  noStroke(); // eliminare i bordi 

  // 120 stelle, posizione calcolata a partire da i
  for (let i=0; i < 120; i++){
    let starX = (i*37) % width + (i%3)*5;
    let starY = ((i*73) % height) + (1%7);

    // trasparenza casuale tra 150 e 255
    let randomTransparency = random(150, 255);
    // diametro casuale tra 2.8 e 5.8 pixel
    let randomSize = random(2.8, 5.8);

    // operatore modulo %: il tipo di stella dipende da i
    if(i%2==0){
      //stella tipo 1
      fill(255, 255, 150, randomTransparency);
      ellipse(starX, starY, randomSize);
    } else if (i%3==0){
      //stella tipo 2 (divisibile per 3)
      fill(255, 100, 255, randomTransparency);
      ellipse(starX, starY, randomSize);
    } else {
      //stella tipo 3 (tutti gli altri casi)
      fill(100, 255, 255, randomTransparency);
      ellipse(starX, starY, randomSize);
    }
  }
  pop(); // chiudere contesto: noStroke non vale per il razzo

  // razzo
  push();

  // corpo
  fill(220);
  stroke(40);
  rectMode(CENTER);
  rect(xRocket, yRocket+30, 80, 180, 20);

  // punta (triangolo rosso)
  fill(200, 40, 40);
  triangle(xRocket-40, yRocket-60, xRocket+40,yRocket-60, xRocket, yRocket-120)

  // finestrino (cerchio blu con bordo bianco)
  fill(40, 150, 220);
  stroke(255);
  strokeWeight(3);
  ellipse(xRocket, yRocket+30,48,48);

  pop();

  // muovere il razzo: a destra (riparte da 0 al bordo) e verso l'alto
  xRocket = (xRocket +1) % xMax;
  yRocket = yRocket -1;

  // quando yRocket supera la soglia, resettarla in basso
  let soglia = - (yMax * 0.6);
  if (yRocket < soglia){
    yRocket = yMax;
  }
}

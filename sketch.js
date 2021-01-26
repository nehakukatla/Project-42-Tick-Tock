var h, m, s, hAngle, mAngle, sAngle;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
  h = hour();
  m = minute(); 
  s = second();
}

function draw() {
  background("black");  

  hAngle = map(h,0,24,0,360);
  mAngle = map(m,0,60,0,360);
  sAngle = map(s,0,60,0,360);

  strokeWeight(7);

  push();
  rotate(hAngle);
  stroke(0,0,255);
  line(300,300,250,250);
  pop();

  push();
  rotate(mAngle);
  stroke(0,255,0);
  line(300,300,200,200);
  pop();

  push();
  rotate(sAngle);
  stroke(255,0,0);
  line(300,300,150,150);
  pop();

  //translate();

  drawSprites();
}

//IGNORE THE CODE BELOW
//
//
//
//
//fill("black");
//textSize(20);
//stroke(255,0,0);
//text("red",50,550);

//stroke(0,255,0);
//text("green",200,550);

//stroke(0,0,255);
//text("blue",390,550);


//noStroke();
//fill("white");
//text("= hours",100,550);

//text("= minutes",270,550);

//text("= seconds",440,550);
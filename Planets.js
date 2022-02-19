let canvasSize = [600, 600];
let numberOfStars = 100;
let stars = [];
let lines = [];
let frames = 0;
let fr = 60;

function setup() {
  createCanvas(canvasSize[0], canvasSize[1]);
  for (i = 0; i < numberOfStars; i++){
    stars.push([random(0, canvasSize[0]), random(0, canvasSize[1])]);
  }
  angleMode(RADIANS);
  frameRate(fr);
}

let starRadius = 25;
let planetOneRadius = 15;
let planetTwoRadius = 15;
let planetThreeRadius = 15;

let planetOneSpeed = 0.67;
let planetTwoSpeed = 0.13;
let planetThreeSpeed = 1
let planetOneOrbitRadius = 100;
let planetTwoOrbitRadius = 250;
let planetThreeOrbitRadius = 175;

let planetOneAngle = 0;
let planetTwoAngle = 0;
let planetThreeAngle = 0;

let starPosition = [canvasSize[0] / 2, canvasSize[1] / 2];
let planetOnePosition = [canvasSize[0] / 2, canvasSize[1] / 2 - planetOneOrbitRadius];
let planetTwoPosition = [canvasSize[0] / 2, canvasSize[1] / 2 - planetTwoOrbitRadius];
let planetThreePosition = [canvasSize[0] / 2, canvasSize[1] / 2 - planetThreeOrbitRadius];
console.log(planetOnePosition[0] + ", " + planetOnePosition[1]);
console.log(planetTwoPosition[0] + ", " + planetTwoPosition[1]);

planetOneSpeed = planetOneSpeed / 50;
planetTwoSpeed = planetTwoSpeed / 50;
planetThreeSpeed = planetThreeSpeed / 50;

function draw() {
  //frameRate(fr);
  background(0);
  noStroke();
  for (i = 0; i < stars.length; i++){
    fill(255);
    ellipse(stars[i][0], stars[i][1], 2);
    //text(stars[i][0], 15, 5 + i * 10);
  }
  
  planetOnePosition[0] = cos(planetOneAngle) * planetOneOrbitRadius + canvasSize[0] / 2;
  planetOnePosition[1] = sin(planetOneAngle) * planetOneOrbitRadius + canvasSize[0] / 2;
  //console.log(planetOnePosition[0] + ", " + planetOnePosition[1]);
  
  planetTwoPosition[0] = cos(planetTwoAngle) * planetTwoOrbitRadius + canvasSize[0] / 2;
  planetTwoPosition[1] = sin(planetTwoAngle) * planetTwoOrbitRadius + canvasSize[0] / 2;
  
  planetThreePosition[0] = cos(planetThreeAngle) * planetThreeOrbitRadius + canvasSize[0] / 2;
  planetThreePosition[1] = sin(planetThreeAngle) * planetThreeOrbitRadius + canvasSize[0] / 2;
  
  planetOneAngle = planetOneAngle + planetOneSpeed;
  planetTwoAngle = planetTwoAngle + planetTwoSpeed;
  planetThreeAngle = planetThreeAngle + planetThreeSpeed;
  
  /*
  if (frames % 21 == 0){
  lines.push([planetOnePosition[0], planetOnePosition[1], planetTwoPosition[0], planetTwoPosition[1], planetThreePosition[0], planetThreePosition[1]]);
  }
  
  stroke(255);
  strokeWeight(1);
    for (i = 0; i < lines.length; i++){
      line(lines[i][0], lines[i][1], lines[i][2], lines[i][3]);
      line(lines[i][0], lines[i][1], lines[i][4], lines[i][5]);
      line(lines[i][2], lines[i][3], lines[i][4], lines[i][5]);
    }
    */
  
  stroke(255);
  strokeWeight(1);
  line(planetOnePosition[0], planetOnePosition[1], planetTwoPosition[0], planetTwoPosition[1]);
  line(planetOnePosition[0], planetOnePosition[1], planetThreePosition[0], planetThreePosition[1]);
  line(planetTwoPosition[0], planetTwoPosition[1], planetThreePosition[0], planetThreePosition[1]);
  
    
  noStroke();
  fill(255, 255, 0);
  ellipse(starPosition[0], starPosition[1], starRadius);
  
  fill(255, 0, 0);
  ellipse(planetOnePosition[0], planetOnePosition[1], planetOneRadius);
  
  fill(0, 0, 255);
  ellipse(planetTwoPosition[0], planetTwoPosition[1], planetTwoRadius);
  
  fill(0, 255, 0);
  ellipse(planetThreePosition[0], planetThreePosition[1], planetThreeRadius);
  
  fill(255);
  text(frameRate(), 5, 15);
  
  frames++;
}

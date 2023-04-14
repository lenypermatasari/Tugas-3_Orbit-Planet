// NAMA : LENY PERMATASARI
// NIM  : 121160056
// PRODI : MATEMATIKA


let earthSize = 100;
let moonSize = 75;
let sunSize = 140;

let angle = 0;
let distance = 150;

let moons = ['🌕','🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔'];
let moonIndex = 0;

let earths = ['🌎', '🌍', '🌏'];
let earthIndex = 0;

let suns = ['🌞', '🌞', '🌞'];
let sunIndex = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(32);

  angle++;

  if(angle % 45 == 0){
    moonIndex++;
    if (moonIndex >= moons.length) {
      moonIndex = 0;
    }
  }

  if(angle % 120 == 0){
    earthIndex++;
    if (earthIndex >= earths.length) {
      earthIndex = 0;
    }
  }

  if(angle % 120 == 0){
    sunIndex++;
    if (sunIndex >= suns.length) {
      sunIndex = 0;
    }
  }

  let moonX = width / 1.9 + cos(radians(angle)) * distance;
  let moonY = height / 1.9 + sin(radians(angle)) * distance;

  
  let earthX = width / 2.2 + cos(radians(angle)) * distance;
  let earthY = height / 2.2 + sin(radians(angle)) * distance;

  textSize(earthSize);
  text(earths[earthIndex], earthX, earthY);
  
  textSize(sunSize);
  text(suns[sunIndex], width / 2, height / 2);


  textSize(moonSize);
  text(moons[moonIndex], moonX, moonY);  
}
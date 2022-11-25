var y1,x1,mySong,amplitude;

function preload(){
    mySong = loadSound('assets/massiveAttackAngel.mp3');
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    fill(0);
    stroke(255);
    y1 = window.innerHeight;
    x1 = window.innerWidth;
    amplitude = new p5.Amplitude();
}

function draw() {
    let p  = [];
    f = frameCount;
    background(0);
    var level = amplitude.getLevel();

    var bbb = map(level, 0, 1500, 0, 350);

    for (y = 70; y < y1; y += 10){
        beginShape();
        for(x = 0; x < x1; x += 6){
            dy = (bbb / (1 + pow(x - (x1/2), 4) / 8e6)) * noise(x / 30 + f / 50 + y);
            p.push({ x, y: y-dy });
            vertex(x, y-dy);
        }
        endShape();
    }

    console.log(level);
}
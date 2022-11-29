var y1,x1,mySong,amplitude;

function preload(){
    mySong = loadSound('assets/massiveAttackAngel.mp3');
    console.log('loaded');
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    stroke(255);
    y1 = window.innerHeight;
    x1 = window.innerWidth;
    console.log(mySong);
    mySong.play();
    amplitude = new p5.Amplitude();
    
}

function draw() {
    let p  = [];
    f = frameCount;
    background(0);

    textSize(65);
    fill(255)
    textAlign(CENTER, CENTER);
    text('JOY DIVISION',(x1/2), 70);
    textSize(37);
    text('UNKNOWN PLEASURES',(x1/2), 940);

    fill(0);
    var level = amplitude.getLevel();

    var bbb = map(level, 0, 1, 0, 150);
    for (y = 200; y < 900; y += 10){
        beginShape();
        for(x = 0; x < x1; x += 10){
            dy = (bbb / (1 + pow(x - (x1/2), 4) / 8e6)) * noise(x / 30 + f / 60 + y);
            p.push({ x, y: y-dy });
            vertex(x, y-dy);
        }
        endShape();
    }

    console.log(level);
}
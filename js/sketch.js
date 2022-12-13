var y1,x1,mySong,amplitude,bg1,bg2,opac,timer,highest,bg3,circleSize;

function preload(){
    mySong = loadSound('assets/massiveAttackAngel.mp3');
    console.log('loaded');
}

function setup() {
    bg1 = 0;
    bg2 = 255;
    opac = 255;
    circleSize = 10000;

    highest = 0;

    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    y1 = window.innerHeight;
    x1 = window.innerWidth;
    console.log(mySong);
    mySong.play();
    amplitude = new p5.Amplitude();

}

function draw() {
    stroke(bg2);
    let p  = [];
    f = frameCount;
    background(bg1,opac);

    

    fill(bg1);
    var level = amplitude.getLevel();

    var bbb = map(level, 0, 1, 0, 350);
    
    console.log(window.innerHeight);

    if (bbb > highest){
        highest = bbb;
        console.log(highest);
    }
    if (bbb > 100){
        stroke(0,150,150);
        circleSize = 0;
    }
    if (bbb < 100){
        stroke(bg2);
    }
    for (y = 200; y < (window.innerHeight - 86); y += 15){
        beginShape();
        for(x = 0; x < x1; x += 10){
            dy = (bbb / (1 + pow(x - (x1/2), 4) / 8e6)) * noise(x / 30 + f / 60 + y);
            p.push({ x, y: y-dy });
            vertex(x, y-dy);
        }
        endShape();
    }

    if (frameCount % 60 == 0 && timer > 0){
        timer--;
    }
    if (timer == 0){
        opac = 255;
    }

    circleSize += 100;
    strokeWeight(100);
    stroke(bg1);
    noFill();
    circle(width/2,height/2,circleSize);
    strokeWeight(1);
    stroke(bg2);
    circle(width/2,height/2,circleSize+100);
    circle(width/2,height/2,circleSize-100);

    textSize(65);
    fill(bg2)
    textAlign(CENTER, CENTER);
    text('JOY DIVISION',(x1/2), 70);
    textSize(37);
    text('UNKNOWN PLEASURES',(x1/2), (window.innerHeight - 46));
}

function mouseClicked(){
    if (bg1 == 0){
        bg1 = 255;
        bg2 = 0;
        opac = 40;
        timer = 1;
    }
    else{
        bg1 = 0;
        bg2 = 255;
        opac = 40;
        timer = 1;
    }
}
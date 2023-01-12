var y1,x1,mySong,amplitude,bg1,bg2,opac,timer,highest,bg3,circleSize,currentsong,song1,song2,song3,song4,song5,song6,song7,song8,song9,song10;
var menuopen = false;
var playing = false;

function preload(){
    song1 = loadSound('assets/disorder.mp3');
    song2 = loadSound('assets/dayofthelords.mp3');
    song3 = loadSound('assets/candidate.mp3');
    song4 = loadSound('assets/insight.mp3');
    song5 = loadSound('assets/newdawnfades.mp3');
    song6 = loadSound('assets/sheslostcontrol.mp3');
    song7 = loadSound('assets/shadowplay.mp3');
    song8 = loadSound('assets/wilderness.mp3');
    song9 = loadSound('assets/interzone.mp3');
    song10 = loadSound('assets/iremembernothing.mp3');
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
    //mySong.play();
    amplitude = new p5.Amplitude();

    currentsong = "none";

}

function draw() {
    stroke(bg2);
    let p  = [];
    f = frameCount;
    background(bg1,opac);

    

    fill(bg1);
    var level = amplitude.getLevel();

    var bbb = map(level, 0, 1, 0, 550);
    
    console.log(window.innerHeight);

    if (bbb > highest){
        highest = bbb;
        console.log(highest);
    }
    if (bbb > 100){
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
    if (menuopen == false){
        text('- I',20,30);
    }
    if (menuopen == true){
        fill(0,0,0,220);
        noStroke();
        rect(0,0,window.innerWidth/2, window.innerHeight);
        stroke(255);
        fill(255);
        textAlign(LEFT, TOP);
        text("1. Disorder",50,150);
        text("2. Day of the Lords",50,200);
        text("3. Candidate",50,250);
        text("4. Insight",50,300);
        text("5. New Dawn Fades",50,350);
        text("6. She's Lost Control",50,400);
        text("7. Shadowplay",50,450);
        text("8. Wilderness",50,500);
        text("9. Interzone",50,550);
        text("0. I remember Nothing",50,600);
        text("-. restart",50,800);
        text("=. stop",50,850);
        text("i. close",50,900);
        text("currently playing: ",50,1000);
        text(currentsong,50,1050);
    }
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

function keyPressed(){
    if (key === 'i'){
        if (menuopen === false){
            menuopen = true;
            if (playing == true){
                mySong.pause();
            }
        }
        else if (menuopen === true){
            menuopen = false;
            if (playing == true){
                mySong.play();
            }
        }
    }
    if (key === '-'){
        if (menuopen === true){
            mySong.stop();
            mySong.play();
            menuopen = false;
        }
    }
    if (key === '='){
        if (menuopen === true){
            mySong.stop();
            playing = false;
            menuopen = false;
        }
    }
    if (key === '1'){
        if (menuopen === true){
            mySong = song1;
            mySong.play();
            playing = true;
            menuopen = false;
            currentsong = "Disorder"
        }
    }
    if (key === '2'){
        if (menuopen === true){
            mySong = song2;
            mySong.play();
            playing = true;
            menuopen = false;
            currentsong = "Day of the Lords"
        }
    }
    if (key === '3'){
        if (menuopen === true){
            mySong = song3;
            mySong.play();
            playing = true;
            menuopen = false;
            currentsong = "Candidate"
        }
    }
    if (key === '4'){
        if (menuopen === true){
            mySong = song4;
            mySong.play();
            playing = true;
            menuopen = false;
            currentsong = "Insight"
        }
    }
    if (key === '5'){
        if (menuopen === true){
            mySong = song5;
            mySong.play();
            playing = true;
            menuopen = false;
            currentsong = "New Dawn Fades"
        }
    }
    if (key === '6'){
        if (menuopen === true){
            mySong = song6;
            mySong.play();
            playing = true;
            menuopen = false;
            currentsong = "She's lost Control"
        }
    }
    if (key === '7'){
        if (menuopen === true){
            mySong = song7;
            mySong.play();
            playing = true;
            menuopen = false;
            currentsong = "Shadowplay"
        }
    }
    if (key === '8'){
        if (menuopen === true){
            mySong = song8;
            mySong.play();
            playing = true;
            menuopen = false;
            currentsong = "Wilderness"
        }
    }
    if (key === '9'){
        if (menuopen === true){
            mySong = song9;
            mySong.play();
            playing = true;
            menuopen = false;
            currentsong = "Interzone"
        }
    }
    if (key === '0'){
        if (menuopen === true){
            mySong = song10;
            mySong.play();
            playing = true;
            menuopen = false;
            currentsong = "I remember Nothing"
        }
    }
}
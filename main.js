function preload(){

}

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function take_snapshot(){
    save('guest.png');
}

function draw(){
background(255);
     
     fill(0,256,0);
     rect(10, 10, 600, 500);
     strokeWeight(20);
     noStroke();
     
     fill(256,0, 0);
     circle(30, 20, 100);
     
     fill(256,0, 0);
     circle(570, 20, 100);

     fill(256,0, 0);
     circle(30, 480, 100);

     fill(256,0, 0);
     circle(570, 480, 100);

     image(video, 75, 75, 450, 350);
}
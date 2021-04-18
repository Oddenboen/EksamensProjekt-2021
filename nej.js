let canvasH = 900;
let canvasW = 1000;

let wheel;
let angel = 0;

var i = 1;
let test;

function preload(){
    wheel = loadImage('Roulette.png');
}

function setup(){
    createCanvas(canvasW, canvasH);
    background(157);
    image(wheel, 0, 0);
    frameRate(60);
    
}

/*function myLoop() {         //  create a loop function
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
        angel += 1;
        console.log(angel);
        i++;                    //  increment the counter
        if (i < 360) {           //  if the counter < 10, call the loop function
            myLoop();             //  ..  again which will trigger another 
        }                       //  ..  setTimeout()
        }, 1)
    }
  
  myLoop();     
    for (i = 0; i < 360; i++){
        angel += 1;
        console.log(angel);
        test.delay(1000);
    }*/




function draw() {
    angleMode(DEGREES);
    imageMode(CENTER);
    background(157);
    translate(450,420)
    rotate(angel);
    image(wheel, 0,0);
    angel += 1;
    
}

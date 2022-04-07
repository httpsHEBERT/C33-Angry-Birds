const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


var bg = "Images/background.png", gameState = "onSling", score = 0;
var backgroundImg, platform, ground;
var trunk1, trunk2, trunk3, trunk4;
var box1, box2, box3, box4;
var bird, slingshot;
var pig1, pig2;

function preload(){
    getTime();
}

function setup(){

    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700, 320, 70, 70);
    pig1 = new Pig(810, 350);
    box2 = new Box(920, 320, 70, 70);
    trunk1 = new Trunk(810, 260, 300, PI/2);

    box3 = new Box(700, 240, 70, 70);
    pig2 = new Pig(810, 215);
    box4 = new Box(920, 240, 70, 70);
    trunk2 =  new Trunk(810, 180, 300, PI/2);

    trunk3 = new Trunk(735, 130, 155, PI/2);
    box5 = new Box(810, 160, 70, 70);
    trunk4 = new Trunk(875, 130, 155, -PI/2);

    bird = new Bird(200, 50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    texts();
    display();
}

function texts(){

    fill("white");
    textSize(25);
    textFont("Geórgian");
    text("Score: " + score, width-300, 30);
}

function display(){

    ground.display();
    platform.display();

    box1.display();
    pig1.display();
    pig1.score();
    box2.display();
    trunk1.display();

    box3.display();
    pig2.display();
    pig2.score();
    box4.display();
    trunk2.display();

    trunk3.display();
    box5.display();
    trunk4.display();

    bird.display();
    slingshot.display();
}

function mouseDragged(){

    //if (gameState != "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){

    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){

    if(keyCode == 32){

        bird.trajectory = [];
        Matter.Body.setPosition(bird.body, {x: 200, y: 50});
        Matter.Body.setAngle(bird.body, 0);
        slingshot.attach(bird.body);
    }
}

async function getTime(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJson = await response.json();
    var dateTime = responseJson.datetime;
    var hour = dateTime.slice(11, 13);

    if(hour >= 06 && hour <= 19){
        bg = "Images/background.png";
    }else{
        bg = "Images/background1.jpg";
    }

    backgroundImg = loadImage(bg);
}
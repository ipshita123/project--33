const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bg;
var engine,world;
var maxSnow = 10;
var snow = [];
var rand;

function preload(){
bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg);  
  Engine.update(engine);
  rand = Math.round(random(1,4));
  if(frameCount % 5 === 0){
    snow.push(new Snow(random(0,800),30,10));
  }
  for(var i = 0; i < snow.length; i++){
    snow[i].display();
  }
}
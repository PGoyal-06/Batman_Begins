class Umbrella{

    constructor(x,y){
    
    var options={
    isStatic: true,
    }
    this.image = loadImage("Walking Frame/walking_1.png");
    this.radius = 50;
    this.umbrella = Bodies.circle(x,y,50,options);
    World.add (world,this.umbrella);
    }
    
    display(){
    
    imageMode(CENTER);
    var position = this.umbrella.position;
    image(this.image,position.x,position.y + 70,300,300);   
    
    }
    
        
    }
class Snow{
    constructor(x,y,r){
        var options = {
            restitution : 0.01,
            friction : 0.5
        }
        this.r = r;
        this.image = loadImage("snow5.webp");
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}
class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.5,
            friction:0.2,
            density:1.2
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        
    }
    display(){
        fill("black");
        stroke("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius);
        
    }
}
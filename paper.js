class Paper{
    constructor(x,y){
        var options={
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
            isStatic : false
        }
        this.body = Bodies.circle(x,y,12,options);
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,50,50);
    }
}
class Ball{
    constructor(x,y,r,c){
        var options = {
            restitution: 0.5,
            frictionAir: 0.01
          }
        this.ball = Bodies.circle(x,y,r,options);
        this.r = r
        this.c = c
        World.add(world,this.ball);
    }

    show(){
        var pos = this.ball.position
        fill(this.c)
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
    }

}
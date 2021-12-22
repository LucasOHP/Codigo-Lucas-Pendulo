class Rope{
    constructor(bodyA,bodyB){
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.001,
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    show(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
  
    }
}
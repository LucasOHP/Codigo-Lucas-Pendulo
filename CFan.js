class Fan{
    constructor(x,y,w,h){
        var options = {
            isStatic: true
          }
        this.fan = Bodies.rectangle(x,y,w,h,options);
        this.w = w
        this.h = h
        World.add(world,this.fan);
    }

    show(){
        var pos = this.fan.position
        Matter.Body.rotate(this.fan,angle);
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,this.w,this.h);
        pop()
        angle = angle+6.0;

    }
}
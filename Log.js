class Log{
    constructor(x,y,height,angle){
        var box_options={
             restitution:0.5,
             friction:1
          }
          this.body=Bodies.rectangle(x,y,20,height,box_options);
          this.width=20;
          this.height=height;
          Matter.Body.setAngle(this.body,angle)
          World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        fill("white")
        stroke("blue")
        strokeWeight(3)
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()
    }
}
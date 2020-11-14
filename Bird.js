class Bird{
    constructor(x,y){
        var box_options={
             restitution:0.5
          }
          this.body=Bodies.rectangle(x,y,50,50,box_options);
          this.width=50;
          this.height=50;
          World.add(world,this.body);
    }
    display(){
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        var angle=this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        fill("red")
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()
    }
}
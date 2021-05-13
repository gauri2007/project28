class paper {
  constructor(x, y, width, height) {
     
    var options = {
        'restitution':0.8,
        'friction':0,
        'density':1.0,
        isStatic:false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("paper.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    fill(225);
    imageMode(CENTER);
    image(this.image,0,0,70,70);
    //rect(0, 0, this.width, this.height);
    pop();
  }
};
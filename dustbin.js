class dustbin {
  constructor(x, y, width, height) {
    var options = {
        isStatic:true,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png");
    World.add(world, this.body);
    
  }
  display(){
    var pos =this.body.position;
    image(this.image,520, 500, 155, 175);
    push();
    translate(pos.x, pos.y);
    fill("white");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
  }
};
 
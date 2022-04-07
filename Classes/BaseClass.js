class BaseClass {

  constructor(x, y, width, height, angle){
    
    var options = {
      'restitution': 0.3,
      'friction': 0.7,
      'density': 1
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width, this.height = height;
    this.image = loadImage("Images/base.png");
    World.add(world, this.body);
  }

  display(){

    var angle = this.body.angle;

    push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
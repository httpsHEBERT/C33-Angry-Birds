class SlingShot {

  constructor(bodyA, pointB){

    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10
    }
        
    this.sling1 = loadImage('Images/sling1.png');
    this.sling2 = loadImage('Images/sling2.png');
    this.sling3 = loadImage('Images/sling3.png');
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  attach(body){
    this.sling.bodyA = body;
  }
    
  fly(){
    this.sling.bodyA = null;
  }

  display(){

    image(this.sling1, 200, 22);
    image(this.sling2, 172.7, 16);
        
    if(this.sling.bodyA){

      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;

      push();
        stroke(48, 22, 8);

        if(pointA.x < 220){

          if(pointA.x > 130){
            strokeWeight(7);
          }else if(pointA.x > 60 && pointA.x < 130){
            strokeWeight(5);
          }else{
            strokeWeight(3);
          }

          line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
          line(pointA.x-20, pointA.y, pointB.x+20, pointB.y+2);
          image(this.sling3, pointA.x-30, pointA.y-10, 15, 30);

        }else{

          if(pointA.x < 270){
            strokeWeight(7);
          }else if(pointA.x > 270 && pointA.x < 340){
            strokeWeight(5);
          }else{
            strokeWeight(3);
          }

          line(pointA.x+25, pointA.y, pointB.x-20, pointB.y);
          line(pointA.x+25, pointA.y, pointB.x+30, pointB.y+2);
          image(this.sling3, pointA.x+25, pointA.y-10, 15, 30);
        }            
      pop();
    }
  }
}
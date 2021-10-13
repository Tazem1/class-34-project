class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 500,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
    
  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      push();

      //set the value of stroke to hide the rope
      //this.Visibility = 0
      stroke(48, 22, 8);
      strokeWeight(4);

      //line(pointB.x, pointB.y, pointA.x, pointA.y);

      pop();
    }
  }
  /*fly(){
    this.sling.bodyA = null
  }*/
}

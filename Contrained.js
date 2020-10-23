class Contrained {
    constructor(bodyA,bodyB) {
     var options = {
         bodyA: bodyA,
         bodyB: bodyB,
         stiffness:0.6,
         lenght:15,
     }   
this.chain = Contraint.create (options);
World.add(world,this.chain)
    }

    display() {

        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
  strokeWeight(5);
  line (pointA.x,pointB.y,pointB.x,pointB.y);     
        
    }
}
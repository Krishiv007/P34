class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 250
        }
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
   }
 }
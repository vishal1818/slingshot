class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image = loadImage("sprites/sling1.png")
        this.image2 = loadImage("sprites/sling2.png")
        this.image3=loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display() {
        
        image(this.image, 250, 25)
        image(this.image2,225,25)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8)
            
            if (pointA.x>250) {
                strokeWeight(6);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y+10);
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y+10);    
            }
            else {
                strokeWeight(3);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y+10);
                line(pointA.x - 20, pointA.y, pointB.x + 20, pointB.y + 10);
                image(this.image3,pointA.x-25,pointA.y-10,10,30)
            }
           
        }
    }
    
}
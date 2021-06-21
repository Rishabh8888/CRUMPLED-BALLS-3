class launcher {
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB = pointB
        this.launcher = Constraint.create(options)
        World.add(world,this.launcher);
        
    }
        display() {
           
    }
        fly() {
            this.launcher.bodyA = null
        }
    
        attach(body) {
            this.sling.bodyA = body
        }
    }
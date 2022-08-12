class Spaceship{
    constructor(name, crewQuantity){
         this.name = name;
         this.crewQuantity = crewQuantity;
         this.currentyVelocity = 0;
    };

    static get descelerationRate(){
         return 0.17;
    }

    speedUp(acceleration){
         this.currentyVelocity += acceleration * (1 - Spaceship.descelerationRate);
    };
};
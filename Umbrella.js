class Umbrella{
    constructor(x, y){
        var options = { 
        'isStatic': true
        }
        this.umbrella = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.image = loadImage("walking_1.png");
        this.image2 = loadImage("walking_2.png");
        this.image3 = loadImage("walking_3.png");
        this.image4 = loadImage("walking_4.png");
        this.image5 = loadImage("walking_5.png");
        this.image6 = loadImage("walking_6.png");
        this.image7 = loadImage("walking_7.png");
        this.image8 = loadImage("walking_8.png");
        World.add(world, this.umbrella);
    }
 
      display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70,300,300);
      }



}
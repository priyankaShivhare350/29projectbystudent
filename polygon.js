class Polygon {
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20,20, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("files/polygon.png");
      this.body=Bodies.rectangle(this.x, this.y, width,height, options)

      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      //rect(0,0, this.width, this.height);
      imageMode(CENTER)
      image(this.image,200,550,70,70)
      pop();
    }
  }
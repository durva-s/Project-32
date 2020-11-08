class Box {
  constructor(x,y) {
    var options = {
      'isStatic': false,
    }
    this.body = Bodies.rectangle(x,y,25,30,options);
    this.visibility = 255;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(3);
      rect(pos.x, pos.y,30,35);
     }
     else{
       World.remove(world, this.body);
       push();
       this.visibility = this.visibility - 5;
       //tint(255,this.visibility);
       pop();
     }
  }
  score() {
    if(this.visibility < 0 && this.visibility > 105) {
      score++;
    }
  }
}
  
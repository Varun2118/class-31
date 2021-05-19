class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  this.pulli=loadImage("sprites/smoke.png")
  this.array=[] 
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
if(this.body.velocity.x>10&&this.body.position.x>200)
{
var birdpos=[this.body.position.x,this.body.position.y]
this.array.push(birdpos) 
}   
super.display();
    
for(var i=0;i<this.array.length;i++)
{
  image(this.pulli,this.array[i][0],this.array[i][1])
}
  }
}

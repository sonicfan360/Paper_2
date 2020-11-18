class pbox
{
   constructor(x,y,r){
    this.image = loadImage("trash_bin.png")
     var options={
     
      isStatic:false,
      restitution:0,
      friction:0,
       density:0
                    } 
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height
     
     World.add(world,this.body)
   }
   
} 
display()
{
var pboxpos=this.body.position;
push()

  translate(pboxpos.x,pboxpos.y);
  rectMode(CENTER)
  strokeWeight(3);
  image(this.image,0,0,this.r,this.r)
pop()

}



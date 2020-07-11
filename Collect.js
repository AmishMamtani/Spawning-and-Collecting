class Collect{
    constructor(x,y,width,height){
    }
    spawnMask(){
        if(frameCount%50===0){
            this.body=createSprite(random(100,1200),random(400,600),50,50);
            this.image = loadImage("Images/Mask.png")
            this.body.addImage("mask",this.image);
            this.body.scale=0.25;
            this.body.velocityX=Math.round(random(-2,-6));
            //console.log(this.body.velocityX)
            maskGroup.add(this.body);
            
        }
    }
}
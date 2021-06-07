class Paper{
    constructor(x,y,r){
        var option={
            isStatic:false,
            'restitution': 0.3,
                'friction':0,
                'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=70;

        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,(this.r-10)/2,option)
        World.add(world,this.body);
    }
    display(){
        var paperpos=this.body.position;
push ()
translate(paperpos.x, paperpos.y);
rectMode(CENTER);

//fill ("yellow");
imageMode(CENTER)

    image(this.image,0,0,this.r);
    pop ()
    }
}
class Bob
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
            restitution:1,
            friction:1,
            density:0.8			
			}
		
		this.radius=radius;
		
        this.x = x;
		this.y = y;
		this.body=Bodies.circle(this.x,this.y,(this.radius)/2, options);
        World.add(world, this.body);
        
	}
	display()
    {
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(6);
			fill(255,0,255);
			//imageMode(CENTER);

			ellipse(0,0,this.radius,this.radius);
			pop()
			
	}

}
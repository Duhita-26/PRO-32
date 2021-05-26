class Polygon {
    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':1.5,
            'density':2.0,
             isStatic: false
        }
        this.body = Bodies.rectangle(x, y, 10, 10,  options);
        this.image = loadImage('Sprites/polygon.1.png');
        World.add(world, this.body);
}
 
    display() {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");//canvas API Note: The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.

canvas.height = innerHeight;
canvas.width = innerWidth;

class Player{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    drawPlayer(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

    class Projectile{
        constructor(x, y, radius, color, velocity){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
        }
        draw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        update(){
            this.x = this.x + this.velocity.x;
            this.y = this.y + this.velocity.y;
        }
    }

const x = canvas.width/2;
const y = canvas.height/2;

const player = new Player(x, y, 50, "green");
player.drawPlayer();
 
const projectile = new Projectile(
    canvas.width/2, 
    canvas.height/2, 
    5, "red", {
        x: 1,
        y: 1
    });

function animate(){
    
    requestAnimationFrame(animate);
    // console.log("go")
    projectile.draw();
    projectile.update();
}

window.addEventListener("click", (event)=>{
    console.log(event.clientX);
    console.log(event.clientY);
    

    
});

animate();
console.log(projectile);
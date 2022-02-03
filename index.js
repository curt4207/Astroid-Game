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
            this.draw();
            this.x = this.x + this.velocity.x;
            this.y = this.y + this.velocity.y;
        }
    }

const x = canvas.width/2;
const y = canvas.height/2;

const player = new Player(x, y, 50, "green");
class Enemy{
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
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
}
 
const projectile = new Projectile(
    canvas.width/2, 
    canvas.height/2, 
    5, "red", {
        x: 1,
        y: 1
    }
);
const projectile2 = new Projectile(
    canvas.width/2,
    canvas.height/2,
    5,
    "purple", {
        x: -1,
        y: -1
    }
);

const projectiles = [];
const enemies = [];

function spawnEnemies(){
  setInterval(() => {
    const radius = Math.random() * (35 - 4) + 4;
    let x;
    let y;

        if(Math.random() < 0.5){
         x = Math.random() < 0.5 ? 0 - radius: canvas.width + radius;
        y = Math.random() * canvas.height;
        } 
        else{
        x = Math.random() * canvas.width;
        y = Math.random() < 0.5 ? 0 - radius: canvas.height + radius;   
        }

    const color = "purple";
    const angle = Math.atan2(
        canvas.height/2 -y, 
        canvas.width/2 -x );
       
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
        }
       enemies.push(new Enemy(x, y, radius, color, velocity))
      }, 1000)
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.drawPlayer();
    projectiles.forEach((projectile) =>{
        projectile.update();
    })

    enemies.forEach((enemy, index) => {
        enemy.update();

        projectiles.forEach((projectile, projectileIndex) => {
    const dist = Math.hypot(projectile.x - enemy.x, projectile. y - enemy.y);// returns the distance between two points.
    if(dist - enemy.radius - projectile.radius < 1)
    {
        enemies.splice(index, 1)
        projectiles.splice(projectileIndex, 1)
        
    }        
   })
})
}
window.addEventListener("click", (event)=>{
    const angle = Math.atan2(
        event.clientY - canvas.height/2, 
        event.clientX - canvas.width/2);
   
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
    }

    
    // console.log(event.clientY);
  projectiles.push(
      new Projectile(
          canvas.width/2,
         canvas.height/2, 
         5, 
         "red",
        velocity)
  )  

    
})

animate();
spawnEnemies();
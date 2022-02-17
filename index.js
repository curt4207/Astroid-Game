const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");//canvas API Note: The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.
canvas.height = innerHeight;
canvas.width = innerWidth;
{// let colors = [
//     "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
//     "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
//     "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
//     "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
//     "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
//     "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" ,
//     "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
//     "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
//     "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
//     "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
//     "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
//     "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
//     "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647",
//     "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
//     "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
//     "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647",
//     "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
//     "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
//     "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7",
//     "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8",
//     "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16",
//     "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce",
//     "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997",
//     "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be",
//     "#32d5d6", "#17232", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba",
//     "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043",
//     "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56",
//     "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
//     "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
//     "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
//     "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4",
//     "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06",
//     "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a",
//     "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065",
//     "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35",
//     "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44",
//     "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67",
//     "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff",
//     "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6",
//     "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"];
//     function colorLoop(){
    
//      for(let i = 0; i < colors.length; i++){
        
//         }
// }
// console.log(colorLoop());
}
let randomColor = "#" + Math.floor(Math.random() *16777215).toString(16);
console.log(randomColor)

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

const player = new Player(x, y, 25, "green");
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
    randomColor, {
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

    // color = randomColor;
    const angle = Math.atan2(
        canvas.height/2 -y, 
        canvas.width/2 -x );
       
    const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
        }
       enemies.push(new Enemy(x, y, radius, randomColor, velocity))
      }, 1000)
}

let animationId;

function animate(){
   animationId = requestAnimationFrame(animate);
   ctx.fillStyle = "black";//STOPPED HERE
   ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.drawPlayer();
    projectiles.forEach((projectile, index) =>{
        projectile.update();

        // Remove for edge of screen
        if(projectile.x + projectile.radius < 0 || projectile.x - projectile.radius > canvas.width || projectile.y + projectiles.radius < 0 || projectiles.y - projectiles.radius > canvas.height){
          setTimeout(()=> {
            projectiles.splice(index, 1)
          },0);
        }
    })

    enemies.forEach((enemy, index) => {
        enemy.update();
    //collision detection
    const dist = Math.hypot(player.x - enemy.x, player. y - enemy.y);
    if(dist - enemy.radius - player.radius < 1){
        cancelAnimationFrame(animationId);
        //End game
        // console.log("game over")
    }

        projectiles.forEach((projectile, projectileIndex) => {
    
        const dist = Math.hypot(projectile.x - enemy.x, projectile. y - enemy.y);// returns the distance between two points.
    if(dist - enemy.radius - projectile.radius < 1){
        setTimeout(() =>{
            enemies.splice(index, 1)
            projectiles.splice(projectileIndex, 1)
           //Remove 1 enemy on projectile contact  
        },0)
        
    }      
   })
})
}
window.addEventListener("click", (event)=>{
// console.log(projectiles)
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
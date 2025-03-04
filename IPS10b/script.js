const can1=document.getElementById("can1");
const ctx=can1.getContext("2d");
ctx.beginPath();
ctx.fillStyle="red";
ctx.fillRect(50,50,200,100);
ctx.beginPath();
ctx.arc(300,150,50,0,2*Math.PI);
ctx.fillStyle="blue";
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(400,300);
ctx.lineTo(500,300);
ctx.lineTo(450,200);
ctx.lineTo(400,300);
ctx.fillStyle="green";
ctx.fill();
ctx.stroke();


const can2 = document.getElementById("can2");
const ctx2 = can2.getContext("2d");
let color = document.getElementById("color").value;
let linewidth = document.getElementById("linewidth").value;
let drawing = false;
let lastX = 0;
let lastY = 0;
document.getElementById("color").addEventListener("input", (e) => color = e.target.value);
document.getElementById("linewidth").addEventListener("input", (e) => linewidth = e.target.value);
can2.addEventListener("mousedown", (e) => {
    drawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
can2.addEventListener("mouseup", () => drawing = false);
can2.addEventListener("mouseleave", () => drawing = false);
can2.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    ctx2.strokeStyle = color;
    ctx2.lineWidth = linewidth;
    ctx2.beginPath();
    ctx2.moveTo(lastX, lastY);
    ctx2.lineTo(e.offsetX, e.offsetY);
    ctx2.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
});

const can3=document.getElementById("can3");
const ctx3=can3.getContext("2d");
let circle={x:Math.random()*can3.width,y:Math.random()*can3.clientHeight,radius:20,dx:3,dy:3};
function animate(){
    ctx3.clearRect(0,0,can3.width,can3.height);
    ctx3.beginPath();
    ctx3.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
    ctx3.fillStyle="lime";
    ctx3.fill();
    circle.x+=circle.dx;
    circle.y+=circle.dy;
    if(circle.x+circle.radius>can3.width || circle.x-circle.radius<0) circle.dx*=-1;
    if(circle.y+circle.radius>can3.height || circle.y-circle.radius<0) circle.dy*=-1;
    requestAnimationFrame(animate);
}
animate();

const can4=document.getElementById("can4");
const ctx4=can4.getContext("2d");
let mouseX=0,mouseY=0;
can4.addEventListener("mousemove",(e)=>{
    ctx4.clearRect(0,0,can4.width,can4.height);
    ctx4.beginPath();
    ctx4.arc(e.offsetX,e.offsetY,15,0,Math.PI*2);
    ctx4.fillStyle="red";
    ctx4.fill();
});
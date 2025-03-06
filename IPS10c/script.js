const can=document.getElementById("can");
const ctx=can.getContext("2d");
let score=0;
const scoreboard=document.getElementById("s");
let ball={x:400,y:250,r:20,dx:1,dy:1};
let paddle={x:350,y:460,h:20,w:100};
let gameend=false;

function draw(){
    ctx.clearRect(0,0,can.width,can.height);
    ctx.beginPath();
    ctx.fillStyle="black";
    ctx.fillRect(paddle.x,paddle.y,paddle.w,paddle.h);
    ctx.fill();
    ctx.arc(ball.x,ball.y,ball.r,0,2*Math.PI);
    ctx.fillStyle="orange";
    ctx.fill();
    ball.x+=ball.dx;
    ball.y+=ball.dy;
    if(ball.x-ball.r<0 || ball.x+ball.r>can.width) ball.dx*=-1;
    if(ball.y+ball.r>can.height){
        gameend=true;
        alert(`Lost Game with Score: ${score}`)
    }
    if(ball.y-ball.r<0) ball.dy*=-1;
    if(ball.y+ball.r>paddle.y && ball.x-ball.r>paddle.x && ball.x+ball.r<paddle.x+paddle.w){
        score++;
        document.getElementById("s").textContent=score;
        ball.dy*=-1;
        ball.dy--;
    }
    if(!gameend) requestAnimationFrame(draw);
    else restart();
}
function restart(){
    ball={x:400,y:250,r:20,dx:1,dy:1};
    paddle.x=350;
    score=0;
    document.getElementById("s").textContent=score;
    gameend=false;
    draw();
}
document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowLeft" && paddle.x>0){
        paddle.x-=20;
    }
    if(e.key==="ArrowRight" && paddle.x+paddle.w<can.width){
        paddle.x+=20;
    }
})
draw();
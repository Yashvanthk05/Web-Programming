//Q1: Typing Speed Checker
let startTime;
const ques1 = document.getElementById('ques1');
const ques1res1 = document.getElementById('ques1res1');
const ques1res2 = document.getElementById('ques1res2');

ques1.addEventListener('input', () => {
  if (!startTime) {
    startTime = new Date();
  }
  ques1res2.textContent = ques1.value.length;
});

ques1.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const endTime = new Date();
    const totalTime = (endTime - startTime) / 1000;
    ques1res1.textContent = totalTime.toFixed(2);
    ques1.disabled = true;
  }
});


//Q2: Keypress Color Changer
const ques2=document.getElementById('ques2');
document.addEventListener('keypress',(e)=>{
    switch(e.key.toLowerCase()){
        case 'r':
            ques2.style.backgroundColor='red';
            break;
        case 'g':
            ques2.style.backgroundColor='green';
            break;
        case 'b':
            ques2.style.backgroundColor='blue';
            break;
        default:
            ques2.style.backgroundColor='white';
            break;
    }
})

//Q3: Arrow Key Move Box
const ques3=document.getElementById('ques3');
let posX=0,posY=0;
document.addEventListener('keydown',(e)=>{
    console.log("hi")
    const step=10;
    switch(e.key){
        case 'ArrowUp':
            posY-=step;
            break;
        case 'ArrowDown':
            posY+=step;
            break;
        case 'ArrowRight':
            posX+=step;
            break;
        case 'ArrowLeft':
            posX-=step;
            break;
    }
    ques3.style.transform=`translate(${posX}px,${posY}px)`;
})

//Q4 Button Hover Effect
const ques4=document.getElementById("ques4");
ques4.addEventListener('mouseenter',()=>{
    ques4.style.transform='scale(1.2)';
    ques4.style.backgroundColor='lightblue';
});
ques4.addEventListener('mouseleave',()=>{
    ques4.style.transform='scale(1.0)';
    ques4.style.backgroundColor='';
})

//Q5 Click to Reveal Text
const ques5=document.getElementById("ques5");
const ques5res=document.getElementById("ques5res");
ques5.addEventListener('click',()=>{
    if(ques5res.style.display==='none'){
        ques5res.style.display='block';
    }else{
        ques5res.style.display='none';
    }
})

//Q6 Bouncing Ball
const ques6=document.getElementById('ques6');
const ques6res=document.getElementById('ques6res');
ques6.addEventListener('click',()=>{
    ques6res.style.animation='bounce 1s infinite';
})

//Q7 Start Stop Horizontal moving ball
const ques7start=document.getElementById('ques7start');
const ques7stop=document.getElementById('ques7stop');
const horball=document.getElementById('horball');
let animationFrameId;
let positionX=0;
function animate(){
    positionX+=2;
    horball.style.left=`${positionX}px`;
    animationFrameId=requestAnimationFrame(animate);
}
ques7start.addEventListener('click',()=>{
    cancelAnimationFrame(animationFrameId);
    animate();
});
ques7stop.addEventListener('click',()=>{
    cancelAnimationFrame(animationFrameId);
})
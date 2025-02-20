function updateText(a){
    const ques1res=document.getElementById("ques1res");
    ques1res.textContent=`Result: ${a}`;
}

function changeColor(){
    const ques2=document.getElementById("ques2");
    ques2.style.backgroundColor="rgba(255, 42, 42, 0.2)";
    ques2.style.color="red";
    ques2.style.textShadow="0px 0px 10px";
    ques2.style.borderColor="rgba(255, 42, 42, 0.32)";
}

function resetColor(){
    const ques2=document.getElementById("ques2");
    ques2.style.backgroundColor="";
    ques2.style.color="";
    ques2.style.textShadow="";
    ques2.style.borderColor="";
}

function changeImage(){
    document.getElementById("ques3").src="matrix2.png"
}

function resetImage(){
    document.getElementById("ques3").src="matrix1.jpg";
}

function bgChange(){
    const ques4=document.getElementById("ques4").value;
    document.body.style.backgroundColor=ques4;
}

function validateEmail(){
    var ques5=document.getElementById("ques5").value;
    var q5errmsg=document.getElementById("q5errmsg");
    if(ques5.indexOf('@')===-1){
        q5errmsg.textContent="Email is Invalid";
        q5errmsg.style.color="red";
    }else{
        q5errmsg.textContent="Email is Valid";
        q5errmsg.style.color="lime";
    }
}

function highlightTxt(a){
    a.style.color="white";
    a.style.fontSize="24px";
}

function resetHighlight(a){
    a.style.color="";
    a.style.fontSize="";
}

function validatePassword(){
    const ques7=document.getElementById("ques7").value;
    const ques7res=document.getElementById("ques7res");
    if(ques7.length<6){
        ques7res.textContent="Password is Weak";
        ques7res.style.color="red";
    }else{
        ques7res.textContent="Password is Strong";
        ques7res.style.color="lime";
    }
}

function buttonEnabler(){
    const ques8=document.getElementById("ques8");
    const ques8btn=document.getElementById("ques8btn");
    ques8btn.disabled=!ques8.checked
}
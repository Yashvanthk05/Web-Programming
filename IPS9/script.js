function formsubmit(){
    let flag=true;
    const pass=document.getElementById("password").value;
    const confirmpass=document.getElementById("confirmpassword").value;
    if(pass!=confirmpass){
        alert("Password and Confirm Password Doesn't Match");
        flag=false;
    }
    const phone=document.getElementById("phonenum").value;
    const phonepat=/^[0-9]{10}$/;
    if(!phone.match(phonepat)){
        alert("Phone Number is not Valid");
        flag=false;
    }
    if(flag){
        alert("Form is Valid & Submitted!")
    }
}
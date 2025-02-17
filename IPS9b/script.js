function validatePassword(){
	const password=document.getElementById("password").value;
	const pattern=/(?=.*?[A-Z])(?=.*?[a-z])(?=.*\d)(?=.*?[#?!@$%^&*-]).{8,}/g
	const result1=document.getElementById("passwordres");
	if(pattern.test(password)){
		result1.textContent="Strong";
		result1.style.color="green";
	}else{
		result1.textContent="Weak";
		result1.style.color="red";
	}
}

function countCheckboxes(){
	const selectedBoxes=document.querySelectorAll('.checkbox:checked');
	const result2=document.getElementById("checkboxres");
	result2.textContent=`Count is: ${selectedBoxes.length}`;
}

function toggleText(){
	const txt=document.getElementById("toggletxt");
	if(txt.style.display==="none"){
		txt.style.display="block";
	}else{
		txt.style.display="none"
	}
}

function replaceText(){
	const sen=document.getElementById("sentence").value;
	const replacedtxt=sen.replace(/bad/g,"good");
	document.getElementById('replaceres').textContent=replacedtxt;
}

function changeColor(){
	document.getElementById("txtcolor").style.color="red";
}

document.getElementById("txtcount").addEventListener("input",function(){
		const txtin=this.value;
		console.log(txtin);
		document.getElementById("count").textContent=txtin.length;
});

function validatePhone(){
	const phone=document.getElementById("phone").value;
	const pattern=/\d{10}/g;
	const phoneres=document.getElementById("phoneres");
	if(pattern.test(phone)){
		phoneres.textContent="Valid Phone Number";
		phoneres.style.color="green";
	}else{
		phoneres.textContent="Invalid Phone Number";
		phoneres.style.color="red";
	}
}

function extractHashtags(){
	const hashin=document.getElementById('hashin').value;
	const hashtags=hashin.match(/#[a-zA-Z0-9]+/g);
	const hashtag=document.getElementById("hashtags");
	if(hashtags){
		hashtag.textContent=hashtags.join(", ");
	}else{
		hashtag.textContent="No Hashtags";
	}
}
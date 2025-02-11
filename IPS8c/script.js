let i;

//1. Create a Number List (for loop)
//· Ask the user for a number (n).
//· Use a for loop to generate a list of numbers from 1 to n and display them dynamically in the webpage.
let n1=window.prompt("Q1. Enter a Number");
let text1="";
for(i=1;i<=n1;i++){
	text1+=i+" ";
}
document.getElementById("q1").innerHTML=text1;

//2. Display Multiplication Table (while loop)
//Ask the user for a number.
//Display its multiplication table up to 10 dynamically.
let n2=prompt("Q2. Enter a Number:");
i=0
let text2="";
while(i<=10){
	text2+=n2+"x"+i+"="+i*n2+"<br>";
	i++;
}
document.getElementById("q2").innerHTML=text2;

//3. Guess the Number Game (do-while loop)
//Generate a random number between 1-10.
//Let the user guess until they get it right.
let text3="";
let userin;
let randnum;
do{
	randnum=Math.floor(Math.random()*10+1);
	userin=window.prompt("Q3. Enter your guess:");
	if(randnum!=userin){
		text3+=`Incorrect Guess ${userin}!<br>`;
	}
}while(randnum!=userin);
text3+=`Your Guess ${userin} is Correct!!`;
window.alert(`Your Guess ${userin} is Correct!!`);
document.getElementById("q3").innerHTML=text3;

//4. Generate Even and Odd Numbers (for loop)
//Create a webpage that asks the user for a number (n) and then displays two lists: one for even numbers and one for odd numbers from 1 to n.
let n4=window.prompt("Q4. Enter a Number:")
let even=[];
let odd=[]
for(i=1;i<=n4;i++){
	if(i%2==0){
		even.push(i);
	}else{
		odd.push(i);
	}
}
document.getElementById("q4").innerHTML=`Even List: ${even}<br>Odd List:${odd}<br>`

//5. Print Fibonacci Series (for loop)
//Write a program that generates the first N Fibonacci numbers based on user input using a for loop.
let n5=window.prompt("Q5. Enter a Number:");
let a=0;
let b=1;
let text5="";
text5+=`${a} ${b}`;
for(i=0;i<n5-2;i++){
	c=a+b;
	a=b;
	b=c;
	text5+=`${c} `;
}
document.getElementById("q5").innerHTML=text5;

//6. Find Prime Numbers (for loop)
//Create a webpage where the user enters a number (n), and the program displays all prime numbers from 1 to n.
let text6="";
let n6=window.prompt("Q6. Enter a Number");
function isPrime(num){
	if(num<=1) return false;
	for(i=2;i<num;i++){
		if(num%i==0){
			return false;
		}
	}
	return true;
}
for(let j=2;j<=n6;j++){
	if(isPrime(j)){
		text6+=j+" ";
	}
}
document.getElementById("q6").innerHTML=text6;

//7. Reverse a Number
let n7=window.prompt("Q7. Enter the Number:");
let rev=0;
do{
	rev=rev*10+n7%10;
	n7=Math.floor(n7/10);
}while(n7!=0);
document.getElementById("q7").innerHTML=rev;

//8. factorial
n8=prompt("Q8. Enter a Number:");
prod=1;
for(i=1;i<n8;i++){
	prod*=i;
}
document.getElementById("q8").innerHTML=prod;
//Q1: Creating and Accessing Object Properties
const mobile={brand:"Apple",model:"Iphone 16",price:88000,batteryCapacity:4000};
//Dot Notation
console.log("Dot notation");
console.log("Brand:",mobile.brand);
console.log("Model:",mobile.model);
console.log("Price:",mobile.price);
console.log("Battery Capacity:",mobile.batteryCapacity);
//Bracket Notation
console.log("Bracket Notation");
console.log("Brand:",mobile["brand"]);
console.log("Model:",mobile["model"]);
console.log("Price:",mobile["price"]);
console.log("Battery Capacity:",mobile["batteryCapacity"]);

//Q2: Adding, Updating, and Deleting Properties
console.log("Initial Mobile Object:",mobile);
//Add a new property color dynamically to the mobile object.
mobile.color="Titanium Gold";
mobile.price=99999;
delete mobile.batteryCapacity
console.log("Final Mobile Object:",mobile);

//Q3: Object Methods
function getDiscountedPrice(discount){
    return mobile.price*(1-(discount/100));
}
var discountedPrice=getDiscountedPrice(15);
console.log("Discounted Price:",discountedPrice);

//Q4: Using Object.keys(), Object.values(), and Object.entries()
function printObjectDetails(obj){
    console.log("All the Keys of the Object:",Object.keys(obj));
    console.log("All the Values of the Object:",Object.values(obj));
    console.log("Key-Value Pairs of Object:",Object.entries(obj));
}
printObjectDetails(mobile);

//Q5: Nested Objects
let student={
                name: "Alice",
                age: 21,
                address:{
                            city: "Los Angeles",
                            zip: "90001"
                        }
            }; 
console.log("City of the Address:",student.address.city);
console.log("Zip Code Before updating:",student.address.zip);
student.address.zip="600127";
console.log("Zip Code after updating:",student.address.zip);

//Q6: Variable Scope (Global vs Local)
let globalname="Yashvanth";
function testScope(){
    let localname="23BAI1589";
    console.log("Inside the Function");
    console.log("Global Variable Accessed:",globalname);
    console.log("Local Variable Accessed:",localname);
}
testScope();
console.log("Outside the Function");
console.log("Global Variable Accessed:",globalname);
//console.log("Local Variable Accessed:",localname);

//Q7: Hoisting Concept
function testDeclare(){
    console.log("Before Declaration:",registerno);
    var registerno="23BAI1589";
    console.log("After Declaration:",registerno);
}
testDeclare();

//Q8: Basic Arithmetic Operations
function calculate(a,b){
    console.log("Addition:",a+b);
    console.log("Subtraction:",a-b);
    console.log("Multiplication:",a*b);
    console.log("Division:",a/b);
    console.log("Modulus:",a%b);
    console.log("Exponentiation:",a**b);
}
calculate(47,3);

//Q9: Increment and Decrement Operators
let num=10;
console.log("Initial Number:",num);
console.log("Pre-Increment:",++num);
console.log("Post-Increment:",num++);
console.log("Pre-Decrement:",--num);
console.log("Post-Decrement:",num--);

//Q10: Compound Assignment Operators
let x=5;
console.log("Initial x:",x);
x**=2;
console.log("x after **=:",x);
x+=2;
console.log("x after +=:",x);
x-=2;
console.log("x after -=:",x);
x*=2;
console.log("x after *=:",x);
x/=2;
console.log("x after /=:",x);
x%=2;
console.log("x after %=:",x);
x=2;
console.log("x after =:",x);

//Q11
console.log("'10'==10:","10"==10);
console.log("'10'===10:","10"===10);
console.log("null==undefined:",null==undefined);
console.log("null===undefined",null===undefined);

//Q12	
let a=true;
let b=false;
console.log("a&&b:",a&&b);
console.log("a||b:",a||b);
console.log("!a:",!a);

//Q13
function isPositive(num){
    console.log(num===0?"Zero":num>0?"Positive":"Negative");
}
isPositive(0);
isPositive(-247);
isPositive(2335);

//Q14
function findMax(a,b,c){
        let largest=a;
        if(largest<b && largest>c){
            largest=b;
        }else if(largest>b && largest<c){
            largest=c;
        }else if(largest<b && largest<c){
            if(b>c){
                largest=b;
            }else{
                largest=c;
            }
        }
        return largest;
}
let largestNum=findMax(9,5,5);
console.log(largestNum);

//Q15
function greet(name="Guest"){
    console.log(`Hello, ${name}!`);
}
greet();
greet("Yashvanth");

//Q16: Arrow Functions
square=(n)=>{
    return n*n;
}
console.log(square(17));

//Q17: Callback Function
function logData(data){
    console.log("Data is:",data);
}
function processData(data,callback){
    callback(data);
}
processData(123456789,logData);

//Q18: Function Returning Another Function
function multiplyBy(factor){
    return (num)=>num*factor;
}
const result=multiplyBy(18);
console.log("3 Multiply by Factor 18:",result(3));

//Q19: Check if given year is leap year or not
function checkYear(year){
    if((year%4===0 && year%100!==0)||(year%400===0)){
        console.log(`${year} is a Leap Year`);
    }else{
        console.log(`${year} is not a Leap Year`);
    }
}
checkYear(1970);

//Q20: Find the Largest of Three Numbers
function largest(a,b,c){
    return a>b?(a>c?a:c):(b>c?b:c);
}
console.log("Largest of 47,56,33:",largest(47,56,33));

//Q21: Convert Temperatures Between Celsius and Fahrenheit
function ctof(celsius){
    return (celsius*9)/5 + 32;
}
function ftoc(fahrenheit){
    return ((fahrenheit-32)*5)/9;
}
console.log("32 Celsius in Fahrenheit:",ctof(32));
console.log("500 Fahrenheit in Celsius:",ftoc(500));
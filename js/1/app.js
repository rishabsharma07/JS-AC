let a=10;
let b=5;
// let output= "The total price is " + (a+b) + " Rupees";
let output= `The total price is ${a+b} Rupees`;  //template literals 
console.log(output);
let n=2;
let num='2'; 
console.log(n==num); //ignores the datatype and checks the value
console.log(n===num); //checks the datatypes too
console.log(0==" "); //true
console.log(0===" "); //false   
console.log(0==false); //true
console.log(0===false); //false
console.log(null==undefined); //true
console.log(null===undefined); //false 
console.log('a'>'A') //a=61 and A=41
console.log('*'>'$');
let s="apple";
console.log(s.length);

alert("This is a simple alert!");
console.log("This is a simple message");
console.error("This is a error message");
console.warn("This is a warning message");

let firstName= prompt("Enter your first name: ");
let lastName= prompt("Enter your last name: ");
// console.log("Welcome",firstName,lastName,"!");
let msg=(`Welcome ${firstName}  ${lastName} !`);
// let msg=("Welcome "+ firstName+" "+lastName + "!");
alert(msg);

//STRINGS
let msg="     hello      ";
let a=msg.trim();
console.log(a);
// let pass=prompt("Enter your password: ");
// let newpass=pass.trim();
// console.log(newpass);
let naam="Rishab Sharma";
let b=naam.toLowerCase();
console.log(b);
let c=naam.toUpperCase();
console.log(c);
let msg1="ILoveCoding"
let d= msg1.indexOf("Love");
console.log(d);
console.log(msg1.indexOf("z"));
console.log(msg1.indexOf("o")); //will give first occurence of letter

let msg2="   rishab   ";
let e= msg2.trim().toUpperCase();
console.log(e);

let msg3= "rishabsharma";
console.log(msg3.slice(6));
console.log(msg3.slice(0,6));

console.log(msg1.replace("Love", "do"));     //replaces love with do
console.log(msg1.replace("o", "x"));     //replaces the first occurence of o with x

console.log(naam.repeat(3));    

let msg4="ApnaCollege   ";
console.log(msg4.trim().replace("l","t").replace("l","t"));
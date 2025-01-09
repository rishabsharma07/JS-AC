//math object
console.log(Math.abs(-5)); //-ve number ko +ve bnadeta hai
console.log(Math.abs(5));
console.log(Math.pow(2,5)); // 2 ki power 5
console.log(Math.floor(5.999999)); //floor means nearest smallest integer pr chle jaayega
console.log(Math.floor(5.1)); //5.1 ka nearest lowest integer is 5
console.log(Math.floor(-5.1)); //-5.1 ka nearest lowest integer is -6
console.log(Math.ceil(5.999999)); //ceil means nearest greatest integer pr chle jaayega ,,in this case 6
console.log(Math.ceil(-5.1)); //-5.1 ka nearest greatest integer is -5
console.log(Math.random()); //random number generate krega


//to generate random numbers from 1 to 10
let step1=Math.random(); //generates random no.
let step2= step1 * 10; // mult by 10 as we want random numbers from 1 to 10...if we want from 1 to 100 then mult by 100 and so on
let step3=Math.floor(step2); //to generate integer out of float
let step4= step3+1; //now +1 is because the upper step will generate numbers from 1 to 9 as in random 0 se 1 hota h where 1 is not included
console.log(step4);

//now upper steps can be written in 1 line:
let random=Math.floor(Math.random()*10)+1;

//now if we want to generate random nos. from 21 to 25 then:

let random1=Math.floor(Math.random()*5)+21;

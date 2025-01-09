//THIS

const student={
    name: "rishab",
    age: 19,
    eng:95,
    maths:93,
    phy:97,
    getAvg(){
        console.log(this); //this refers to the object itself 
        let avg=(this.eng+this.maths+this.phy); //this is used to bring the object variable inside this method
        console.log(this.name,"got avg marks=",avg);
    }

};

//TRY AND CATCH

console.log("hello");
console.log("hello");
try{
    console.log(a);
}
catch{
    console.log("Caught an error"); //first try will work and if try me error hoga then catch will work 
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

//ARROW FUNCTION

const sum=(a,b)=>{
    console.log(a+b);
}
sum(3,4);

const power=(a,b)=>{
    console.log(a**b);
}

power(2,5);

//implicit return in arrow function

// const mul=(a,b)=>{  //this is normal way to return
//     return a*b;
// }

// console.log(mul(2,10));


const mul=(a,b)=>(a*b);  //in this it automatically understands that return is being used...and parenthesis aata h isme
console.log(mul(2,9));


//SET TIMEOUT : setTimeout(func,time);

console.log("Hello");
setTimeout(()=>{  //() is arrow func without arguments
    console.log("JAVASCRIPT");
},4000);  //4000 ms is 4 sec

console.log("Welcome to");

//SET INTERVAL: setInterval(func,time);

let id = setInterval(()=>{
    console.log("Hello World");
},2000); //ye 2sec baad repeat hota rhega means hr 2 sec me hello world print krwayega

let id2 = setInterval(()=>{
    console.log("Hi there!");
},3000);

//to stop this we use clearInterval(id); in console



//********************IMPORTANT************************ */

//normal function me jb this pass krenge to vo jo usko call lga rhi h vo uska this hai..
//arrow function ke liye this vo hai jo uske parent ko call lga rhi  hai ..ya uske parent ka parent is this of arrow


//QUES
//to print hello world 5 time in interval of 2 sec

let id10= setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(id10);
},10000); //as 2 sec ke interval me hello world 5 baar 10 sec me print hoyega

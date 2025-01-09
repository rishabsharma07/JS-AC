//ARRAY FUNCTIONS

//forEach
let arr=[1,2,3,4,5];

function print(el){
    console.log(el);
}
arr.forEach(print); //it is used to perform something with individual elements or it reads all the elements of array and you can perform functions you want to do
//or
// arr.forEach((el)=>{
//     console.log(el);  //syntax= arr.forEach(function);

// })

let students=[
    {
        name: "rishab",
        marks: 85,
    },
    {
        name:"aman",
        marks: 90,
    },
    {
        name:"naman",
        marks: 95,
    },
];

students.forEach((student)=>{
    console.log(student.marks)
});
//.map
let num=[1,2,3,4];
let double= num.map((el)=>{ //.map function bhi same forEach ki tarah sb elements ko read krta h but ye usko koi doosre variable me ek array ki tarah store krta h
    return el*2;
})
console.log(num);

let gpa= students.map((el)=>{
    return el.marks/10;
})
console.log(gpa);

//.filter
let nums=[1,2,3,4,7,8,2,9,10,11,12];
let even=nums.filter((el)=>{ //ye function iss condition se nums array ko filter krke filtered array ko even me store krdega
    return el%2==0;
});
console.log(even);

//every

let a=[2,4,6,8,10].every((el)=>(el%2==0)); //every is like and...if condition jo hai vo array ke saare elemets ke loye true hogi then it will return true else false
console.log(a);
let b=[2,4,6,7,10].every((el)=>{
    return el%2==0;
});
console.log(b);

//some

let c=[2,4,6,7,10].some((el)=>{ //some is like or... if condition jo hai vo array ke koi bhi element ke liye true hogi the it will return true
    return el%2==0;
});
console.log(c);
let d=[2,4,6,8,10].some((el)=>!(el%2==0));
console.log(d);

//reduce

let num2=[1,2,3,4];
let sum= num2.reduce((res,el)=> res+ el); //reduce me 2 parameter aate hai (accumulator,element)...isme accumulator ki value 0 hogi by default
console.log(sum);   


//maximum in array program:

let max=nums.reduce((max,el)=>{
    if(el>max){
        return el;
    } else{
        return max;
    }
});
console.log(max); 

//DEFAULT PARAMETERS

function sum1(a, b=2){
    return a+b;
};
console.log(sum1(1,4)); //a=1,b=4
console.log(sum1(2)); //a=2 , b=2

function sum2 (a=2,b){
    return a+b;
};
console.log(sum2(1,3)); //4
console.log(sum2(1)); //a=1,b=undefined ...ye paramters order wise leta hai

//spread (...)

console.log(Math.min(...nums));  /// three dots (...) is spread func in which each element is spreaded i.e array ki hrr individual value ko access krta h
console.log([..."hello"]);
//copying an array into another array


let arr1=[3,4,5,7,8,3];
let newarr=[...arr1];
console.log(newarr); //newarr is copied from arr1

let arr2=[...arr1,...newarr]; //made a new array containing arr1 and newarr

//spread in object

const data={
    email: "rishabsharma@gmail.com",
    password: "abcdefgh"

};

const dataCopy={...data, id:1}; //copied data into datacopy with new key value pair id

let obj1= {...arr1}; //array arr1 copied into object obj1 with key value pair
let obj2= {..."hello"}; // string hello copied into  obj2 with key value pair

//REST :ye multiple values ko collect krke 1 array me store krdeta h

function print1(...arg){
    for(let i=0;i<arg.length;i++){
        console.log("You gave us: ",arg[i]);
    }

};

print1(2,3,4,5,6,7,8,9); //multiple values input li or array me store krdia


function min(a,b,c,d){
    console.log(arguments); //hr ek function ke liye arguments pre defined hota h jo ki parameters ko store krta h
};
min(99,98,97,96);

function sum1(...arg){
     return arg.reduce((sum,el)=> sum+ el)
}; 
 
console.log(sum1(2,3,4,1)); 

//DESTRUCTURING

let names1=["tony","steve","virat","rohit","abc","xyz"];

let [winner,runnerUp,...others]=names1;
console.log(winner);
console.log(runnerUp);
console.log(others); //rest concept used...

//DESTRUCTURING IN OBJECTS

let studData={
    name:"abc",
    age:20,
    course:"btech",
    username:"abc@123",
    password:"123456",
};

// let {username, password}=studData;
// console.log(username);
// console.log(password);

// or

let {username: user , password: secret, city:place="Delhi"}=studData; //if city hoga in object then vo object wali city print krega
console.log(user);
console.log(secret);    
console.log(place);
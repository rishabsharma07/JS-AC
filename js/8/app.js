function hello() {
    console.log("hello!!");

}

hello();

function sum(a,b){
    console.log(a+b);
}

sum(3,7);

function printInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}
function calAvg(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}
function multTab(n){
    for(i=n;i<=n*10;i+=n){
        console.log(i);
    }
}

//return function

function retSum(a,b){
    console.log("helloo");
    return a+b;
    console.log("helloo"); //this will not work as return ke baad koi bhi statement work nhi kregi 
}

console.log(retSum(2,3));

let str=["hi","hello","bye","!"];
function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result+=str[i];
        
    }
    return result;

}

console.log(concat(str));





printInfo("rishab",19);
printInfo(16); //isme jo pehel aagyega vo pehele argument me jayega 
printInfo("rishab"); //agr dusra parameter paas nhi kiya toh undefined aajayega error nhi aayega
calAvg(3,3,3);
multTab(2);

//function expression(variable me func store krwana):

let s= function(a,b){
    return a+b;
}
console.log(s(10,90));


//higher order functions(func ke andr func)

function multGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}

let greet= function(){
    console.log("hello");
}

multGreet(greet,10);


//higer order return function

function oddevenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("wrong request");
    }
}
let request="odd"

//METHOD:

const calculator={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    },
};
//to access:
console.log(calculator.add(10,20));

// METHOD can also be written like this:

// const calculator={
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     },
// };
//ARRAYS
let students=["rishab","aman","naman"];
let num=[2,4,6,8];
console.log(num[0]);
let info=["rishab",19,8.5]; //different data types array
console.log(students[0][0]); //0 index ka 0 charater
console.log(students[0].length);

let fruits=["mango","apple","litchi"];
fruits[1]="banana";
console.log(fruits);

let cars=["beemer","maruti","audi","ferrari"];
cars.push("merc"); //adds the item at last of the array
console.log(cars); 
console.log(cars.pop()); //removes the last item and returns it
cars.unshift("mercedes"); //adds item to the start of the array
console.log(cars); 
cars.shift(); //removes first item from array and returns it
console.log(cars);
console.log(cars.indexOf("audi"));
console.log(cars.includes("beemer"));
console.log(cars.includes("xuv")); //false dega if not present
console.log(cars.indexOf("rolls royce")); //-1 when not present

let primary=["red","yellow","blue"];
let secondary=["orange","green","violet"];
console.log(primary.concat(secondary)); //it does'nt make a permanent change
console.log(primary.reverse()); //it makes a permanent change in original array  (primary)

console.log(cars.slice());
console.log(cars.slice(2,3));
console.log(cars.slice(-2));
console.log(cars.slice(-9)); //all items will be displayed

let colors=["red","yellow","blue","orange","green","violet"]; //.splice(start index,no.of items to be deleted,items to be added)
console.log(colors.splice(4)); //4 index se aage ke sb delete and returns the deleted items and also it makes permanent changes in array
console.log(colors);
console.log(colors.splice(0,1)); // 0 index se 1 elements htado means 0 index ka item delete 
console.log(colors);
console.log(colors.splice(1,0,"violet","green"));  //delete 0 elements and at 1 index at violet and green
console.log(colors);

let days=["mon","tues","fri","sat"];
days.sort();
console.log(days);

let marks=[34,12,54,44,100,93];
marks.sort();
console.log(marks); //it will not sort numbers as numbers pehle strings me convert honge fir ape code me convert hokr ye denge
const arr=[1,2,34,5,55,6];
arr.push(77);
arr.pop();
//constant array me elements add or remove krskte hain bs pura array nhi badal skte 
//for eg we cannot do arr=[9,10,11]; like this
//nested array:
let arr1=[[2,4],[3,6],[4,8]];
console.log(arr1.length);
console.log(arr1[0].length);
console.log(arr1[0][1]);
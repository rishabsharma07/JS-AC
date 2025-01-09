//object literals
const student={
    name: "rishab",
    age: 19,
    cgpa: 8.5

};
const item={
    price: 99.99,
    discount: 50,
    color:["red","pink"]
};
//get values from object literals
console.log(student.name);
console.log(item["price"]);
console.log(item["color"][1]);

let obj={
    1:"a",
    2:"b"
};
console.log(obj[1]); //ye pehle 1 number ko string me convert krdega then uski value print krega 

//add or update values
student.cgpa=8.7; //updates the value
student.city="Delhi"; //adds a new key value pair
student.gender="Male";

// delete student.city; deletes the property(key value pair)

//nested objects

const classInfo={
    rishab:{
        grade: "A",
        city: "Delhi"
    },
    aman:{
        grade: "A+",
        city: "Mumbai" 
    },
    naman:{
        grade: "A1",
        city: "Pune"
    },
};

console.log(classInfo.rishab);

classInfo.naman.city="Gurgaon";

const info=[
    {
        name:"rishab",
        grade:"A",
        city:"Gurgaon"
    },

    {   
        name:"aman",
        grade:"A+",
        city:"Mumbai"},
    {
        name:"naman",
        grade:"A1",
        city:"Pune"
    },
];
//accessing
console.log(info[0].name); //displaying
info[1].gender="male"; //adding 

info[2].city="Delhi";

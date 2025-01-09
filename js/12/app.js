let btn= document.querySelectorAll("button");
// btn.onclick= function(){
//     console.log("button was clicked");
//     alert("button was clicked");    
// }

function sayHello(){
    alert("Hello!");
};

function sayName(){
    alert("Rishab Sharma");
};

// btn.onclick=sayHello;
// for(button of btn){
//     button.onclick=sayHello;
//     button.onmouseenter= function(){
//         console.log("You hovered over a button");
//     }
// };

for(button of btn){
    // button.addEventListener("click",sayHello); //iska advantage ye hai ki ye 1 saath more than one function ko execute kr skta hai
    // button.addEventListener("click",sayName);
    button.addEventListener("dblclick",function(){
        console.log("you double clicked");
    })
}

let p= document.querySelector("p");
let box= document.querySelector(".box");

p.addEventListener("click",function(){
    console.log("CLICKED");
})


box.addEventListener("mouseenter",function(){
    console.log("Mouse hovered");
})

function changeColor(){
    console.dir(this.innerText);  //this in addEventListener 
    this.style.backgroundColor="blue";
}

p.addEventListener("click", changeColor); //changeColor fucntion call krega and function ka this will check p
box.addEventListener("click", changeColor);

let inp= document.querySelector("input");
inp.addEventListener("keydown",function(event){   //event is a default function 
    console.log("key=",event.key);
    console.log("code=",event.code); //these both gives the key and code of the keyboard key pressed
    console.log("key was pressed");
})

// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// })
let form= document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();  //it will prevent the page to go to the src mentioned in form html,... here action
//     alert("Form submitted");
// })
//or    
// form.addEventListener("submit",function(event){
//     event.preventDefault();  
//     let user=document.querySelector(".user");
//     let pass=document.querySelector(".pass");
//     console.log(user.value);
//     console.log(pass.value);
//     alert("Form submitted");
// })

//or

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.dir(form);  
//     let user=this.elements[0];  //this=form
//     let pass=this.elements[1];
//     console.log(user.value);
//     console.log(pass.value);
//     alert("Form submitted");
// })

form.addEventListener("submit",function(event){
    event.preventDefault();
});
let user=document.querySelector(".user");    
user.addEventListener("change",function(){ //ye bs final value dekhta hai
    console.log("change event");
    console.log("final value: ",this.value);
    
});

user.addEventListener("input",function(){ //ye hr ek character dekhta hai
    console.log("input  event");
    console.log("final value: ",this.value);
    
});

let inp1= document.querySelector("#text");
let para= document.querySelector(".para");
inp1.addEventListener("input",function(){
    console.log(inp1.value);
    para.innerText= inp1.value;
})

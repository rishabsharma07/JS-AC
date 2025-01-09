// let smallImg=(document.getElementsByClassName("oldimg"));

// for(let i=0; i<smallImg.length;i++){
//     console.dir(smallImg[i]);
// };


// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldimg")); //ye bs pehli occurence ko leta hai
// console.dir(document.querySelectorAll("div a"));
// //to take all the occurences:

// console.dir(document.querySelectorAll("p"));
// console.dir(document.querySelectorAll("div a"));


let para= document.querySelector("p");

// console.log(para.innerText); //it shows the text displayed on screen
// console.log(para.innerHTML);  //it shows the full html
// console.log(para.textContent); //it shows the text with hidden symbols

// para.innerText="abc";
// para.innerHTML="Hello! I am <b>Peter Parker</b>";

let heading= document.querySelector("h1");
// heading.innerHTML=`<u>${heading.innerText}</u>`;

let img= document.querySelector("img");

// console.log(img.getAttribute("id")); //getting name of id

// img.setAttribute("id","spidermanmimg"); change of id
// console.log(img.getAttribute("src"));
// img.setAttribute("src","./assests/amazingfantasy.jpg"); changing the source file

// heading.style.color="green";
// heading.style.backgroundColor="yellow";
// let links= document.querySelectorAll(".box a");

// for(let i=0;i<links.length;i++){
//     links[i].style.color="green";
// }

// OR

// for(link of links){
//     link.style.color="green"; //it is inline style means style property bs vohi info degi jo uske inline style me given ho
// }

console.log(img.classList); //it gives the class or no. of classes in the object

heading.classList.add("head"); //add class to elements
console.log(heading.classList); 
heading.classList.add("green"); //green is class made in css which will make the color green
heading.classList.add("underline");

heading.classList.remove("underline");

heading.setAttribute("class","underline"); //isme ye dikkat hai ki hum isme 1 se zyada classes 1 time pr add nhi kr skte isliye hum isko kam preference dete hai 
console.log(heading.classList.contains("green")); //it checks that the object contains the class or not

console.log(heading.classList.toggle("green")); //it checks if the object contains the class and if it contains then it removes it and returns false and if it doesnt contains the class it adds it and returns true
console.log(heading.classList.toggle("underline"));
let box= document.querySelector(".box");
box.classList.add("yellowBg");




let h4=document.querySelector("h4");
console.log(h4.parentElement);
console.log(box.children);
console.log(box.childElementCount);

let ul=document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[1].previousElementSibling);
console.log(ul.children[1].nextElementSibling);

img.previousElementSibling.style.color="red";

let newP=document.createElement("p");
newP.innerText="hi i am new";
box.appendChild(newP);

let btn= document.createElement("button");
btn.innerText="click me!";
newP.append("This is a new text");  
newP.append(btn);

box.prepend(newP);

let newBtn=document.createElement("button");
newBtn.innerText="New Button";

para.insertAdjacentElement("beforebegin",newBtn);
para.insertAdjacentElement("afterbegin",newBtn);
para.insertAdjacentElement("beforeend",newBtn);
para.insertAdjacentElement("afterend",newBtn);

let body=document.querySelector("body");

body.removeChild(newBtn);
para.remove();
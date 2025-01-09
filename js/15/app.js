let btn= document.querySelector("button");
let ul= document.querySelector("ul");
let inp= document.querySelector("input");

btn.addEventListener("click",function(){
    let item= document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";
    let dltBtn= document.createElement("button");
    dltBtn.innerText="delete";
    dltBtn.classList.add("delete");
    item.appendChild(dltBtn);
});
// let dltBtns= document.querySelectorAll(".delete");
// for(dltBtn of dltBtns){
//     dltBtn.addEventListener("click",function(){
//     let par= this.parentElement;
//     par.remove();

// }

// )};    isse new added tasks delete nhi honge

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let dltitem= event.target.parentElement;
        dltitem.remove();
        console.log("deleted");
    }
});
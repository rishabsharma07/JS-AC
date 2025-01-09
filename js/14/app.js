let div= document.querySelector("div");
let ul= document.querySelector("ul");
let lis= document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("div was clicked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("li was clicked");
    });

}
//event bubbling is there is means when i click div then it prints div was clicked
//but when i clicked ul was it prints both ul was clicked and div was clicked
//and when i click li then it prints li was clicked, ul was clicked and div was clicked

// so to prevent this we use event.stopPropagation();
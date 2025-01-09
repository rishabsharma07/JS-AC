let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2= document.querySelector("h2");
document.addEventListener("keypress",function(){
    if (started==false){
        console.log("game started");
        started=true;
        
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(() => {
        btn.classList.remove("gameflash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomInd= Math.floor(Math.random()*3);
    let randomClr= btns[randomInd];
    let randomBtn= document.querySelector(`.${randomClr}`);
    gameSeq.push(randomClr);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx){
    // let idx= level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if (userSeq.length==gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn= this;
    userFlash(btn);
    userClr= btn.getAttribute("id");
    userSeq.push(userClr);
    checkAns(userSeq.length-1)
};

let allBtns= document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}
const favmov="dhamaal";
let guess= prompt("Guess my favorite movie: ");

while((guess!=favmov)&&(guess!="quit")){
    guess= prompt("wrong guess..please try again ");
}

if(guess==favmov){
    console.log("Congrats");

}
else{
    console.log("You quit");
}
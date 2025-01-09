let fruits=["orange","kiwi","banana","apple","mango"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

let heroes=[["ironman","spiderman","thor"],["superman","flash","wonder woman"]];
for (let i=0;i<heroes.length;i++){
    for(let j=0;j<heroes[i].length;j++){
        console.log(i,j,heroes[i][j]);
    }
}

let cars=["bmw","bugatti","skoda","vw","kia","toyota","rr"];
for(car of cars){
    console.log(car);
}
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}
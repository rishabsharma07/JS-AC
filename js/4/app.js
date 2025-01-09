for(let i=1;i<=5;i++){
    console.log(i);
}
for(let i=5;i>=1;i--){
    console.log(i);
}
//ODD
for(let i=1;i<=15;i++){
    if(i%2!=0){
        console.log(i);
    }

}

//or
for(let i=1;i<=15;i=i+2){
    console.log(i);
}
//EVEN 
for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }

}

//or
for(let i=2;i<=10;i=i+2){
    console.log(i);
}
for(let i=5;i<=50;i=i+5){
    console.log(i);
}

let n=prompt("Enter the number: ");
n=parseInt(n);

for(let i=n;i<=n*10;i=i+n){
    console.log(i);
}
//nested loops
for(let i=1;i<=3;i++){
    console.log("outer loop: ",i)
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}
//while loop

let k=1;
while(k<=5){
    console.log(k);
    k++;
}
//even
let l=0;
while(l<=20){
    console.log(l);
    l=l+2;
}

let q=1;
while(q<=20){
    console.log(q);
    q=q+2;
}
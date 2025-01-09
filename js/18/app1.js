let url="http://universities.hipolabs.com/search?name=";
let country="india";
let btn= document.querySelector("button");

btn.addEventListener("click",async()=>{
    let state= document.querySelector("input").value;
    let colArr= await getCollege();
    show(colArr);
})

async function show(colArr){
    // let list= document.querySelector(".list");
    // list.innerText="";
    for(col of colArr){
        console.log(col.name);
    //     let li= document.createElement("li");
    //     li.innerText=col.name;
    //     list.appendChild(li);
    }

}

async function getCollege(){
    try{
        let res= await axios.get(url+country);
        return res.data;
    }
    catch(e){
        console.log("error: ",e);
    }

}
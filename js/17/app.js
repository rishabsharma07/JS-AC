// let jsonRes =
//   '{"fact":"The cat who holds the record for the longest non-fatal fall is Andy. He fell from the 16th floor of an apartment building (about 200 ft/.06 km) and survived.","length":157}';

// let validRes = JSON.parse(jsonRes); //to make json in js object
// console.log(validRes.fact);

// let student = {
//   name: "Rishab",
//   age: 19,
// };

// let stud = JSON.stringify(student); //to make js object to json
// console.log(stud);

let url = "https://catfact.ninja/fact";

// fetch(url) //it returns a promise
//   .then((res) => {
//     return res.json();
//   })
//   .then((data)=>{
//     console.log("data1= ",data.fact);   //fetch url hume promise return krta hai and then response ke liye hum .then use krte hai
//     return fetch(url);                  //but vo data hmare promise ke paas as headers hota hai so unn headers se data laane ke liye
//   })                                    // .json use krte hain and then .json also returns a promise fir .then ispe lgakr value obtain krte hai
//   .then((res)=>{
//     return res.json();
//   })
//   .then((data2)=>{
//     console.log("data2= ",data2.fact);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// api calls with async and await:

// async function getData() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }
//     catch(e){
//         console.log("error= ",e);
//     }

// }

// getData();

//or using axios:

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getFacts();
  console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
});
async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log("error= ", e);
    return "No fact found";
  }
}

// getFacts();

//CALL STACK
// function one(){
//     return 1;
// };

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans= two() + one();
//     console.log(ans);
// }

// three();


//CALLBACK:

// function savetoDb(data, success, failure){
//     let internetSpeed= Math.floor(Math.random() * 10) +1 ;
//     if(internetSpeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

//CALLBACK HELL:

// savetoDb(
//     "rishab",
//     ()=>{
//         console.log("success: your data was saved");
//         savetoDb(
//             "hello world",
//             ()=>{
//                 console.log("success2: your data was saved");
//                 savetoDb(
//                     "good morning",
//                     ()=>{
//                         console.log("success3: your data was saved");
//                     },
//                     ()=>{
//                         console.log("failure3: data not saved");
//                     }
//                 );
//             },
//             ()=>{
//                 console.log("failure2: data not saved")
//             }
//         );
//     },
//     ()=>{
//         console.log("failure: data not saved");
//     }
// );

//CALLBACK USING PROMISE

function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed= Math.floor(Math.random() * 10) +1 ;
        if(internetSpeed>4){
            resolve("success: data was saved");
        }
        else{
            reject("failure: weak connection");
        }
    });
}
// let request= savetoDb("rishab"); //request=promise
// request
// .then(()=>{
//     console.log("promised was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);   
// })

//or other way to write this:

// savetoDb("rishab")
// .then(()=>{
//     console.log("data1 saved");
//     savetoDb("hello world").then(()=>{
//         console.log("data2 saved");
//     })
// })
// .catch(()=>{
//     console.log("promise was rejected"); 
// })

//or PROMISE CHAINING:

savetoDb("rishab")
.then((result)=>{
    console.log("data1 saved");
    console.log(result);
    return savetoDb("hello world");
})
.then((result)=>{
    console.log("data2 saved");
    console.log(result);
    return savetoDb("sharma");
})
.then((result)=>{
    console.log("data3 saved");
    console.log(result);
})
.catch((error)=>{
    console.log("promise was rejected"); 
    console.log(error); 
})
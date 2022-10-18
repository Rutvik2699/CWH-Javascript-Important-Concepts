
//52 - Introduction to Callbacks
//Synchronous Programming

// let a = prompt("What is your age?");
// let b = prompt("What is your age?");
// let c = prompt("What is our fav color?")
// console.log(a+"is"+b+"years old and has "+c+"favourite color");

//Asynchronous programming
// console.log("Start");

// setTimeout(function(){
//     console.log("Hey I am good!");
// },3000
// )
// console.log("End");


// ==============================================================================================
//Callbacks
// function loadScript(src,Callback){
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload=function(){
//         console.log("Loaded script with src: "+src);
//         Callback(null,src);
//     };
//     script.onerror=function(){
//         console.log("Error loading script with SRC"+src);
//         Callback(new Error("Src got some error"))
//     }
//     document.body.appendChild(script);
// }
// function hello(error,src){
//     if(error){
//         console.log(error)
//         return
//     }
//     alert('Hello WOrld!'+src);
// }

// function goodMorning(src){
//     alert('Hello WOrld!');
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",hello);


//Video number 53
//Callback Hell OR Pyramid of Doom
//===============================================================================================

//Video number 54
//Intro to promises
 

// let promise = new Promise(function(resolve,reject){
//     alert("Hello")
//     resolve(56)
// })
// console.log("Hello")
// setTimeout(function(){
//     console.log("Hello in 2 seconds")
// },2000)

// console.log("My name is "+"John")
// console.log(promise)

//==============================================================================================
//Video number 55
//Promise .then() and .catch()

// let p1 = new Promise((resolve,reject)=>{
//     console.log("promise is pending")
//     setTimeout(()=>{
//       //  console.log("I am a promise and I am resolved")
//         resolve(true)
//     },5000)
// })

// let p2 = new Promise((resolve,reject)=>{
//     console.log("promise is pending")
//     setTimeout(()=>{
//        // console.log("I am a promise and I am rejected")
//         reject(new Error("I am an error"))
//     },5000)
// })
// p1.then((value)=>{
//     console.log(value)
// })

// // p2.catch((error)=>{
// //     console.log(value)
// // })


// p2.then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log(error)
// })

//===============================================================================================
//Video 56 
//Promise Chaining .then() calls

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     console.log("Resolved after 2 secs")
//     resolve(56)
// },2000)
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{ resolve("Promise 2")},2000)
       
//     })
//     return p2;
// }).then((value)=>{
//     console.log("we are done")
//     return 2
// }).then((value)=>{
//     console.log("Now we are pakka done")
// })




const loadScript =(src)=>{
    return new Promise((resolve,reject)=>{
    let script=document.createElement("script")
    script.type="text/javascript"
    script.src=src
    document.body.appendChild(script)
    script.onload=()=>{
            resolve(1)
    } 
    script.onerror=()=>{reject(0)}
})
}

let p1 = loadScript("https://www.youtbe.com/c/CodeWithHarry/videos") 
p1.then((value)=>{
    console.log(value)
}).then((value)=>{
    console.log("Second script ready")
}).catch((error)=>{
    console.log("we are sorry but we are having problem loading the script")
})
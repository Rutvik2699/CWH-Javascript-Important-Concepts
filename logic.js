
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




// const loadScript =(src)=>{
//     return new Promise((resolve,reject)=>{
//     let script=document.createElement("script")
//     script.type="text/javascript"
//     script.src=src
//     document.body.appendChild(script)
//     script.onload=()=>{
//             resolve(1)
//     } 
//     script.onerror=()=>{reject(0)}
// })
// }

// let p1 = loadScript("https://www.youtbe.com/c/CodeWithHarry/videos") 
// p1.then((value)=>{
//     console.log(value)
// }).then((value)=>{
//     console.log("Second script ready")
// }).catch((error)=>{
//     console.log("we are sorry but se are having problem loading the script")
// })

//===================================================================================

//Video 57 attaching multiple handlers to a promise
// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        // alert("Hey I am resolved")
//         resolve(1);
//     },2000)
// }) 
// p1.then(()=>{
//     console.log("Congratulations this promise is now resolved")
// })
// //Whichever handler is attached first will be resolved
// p1.then(()=>{
//     console.log("Hurray")
// })


// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        // alert("Hey I am resolved")
//         resolve(1);
//     },2000)
// }) 
// p1.then(()=>{
//     console.log("Congratulations this promise is now resolved")
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(4)
//         },6000)
//     })
// }).then((value)=>{console.log(value)})
// //Whichever handler is attached first will be resolved
// p1.then(()=>{
//     console.log("Hurray")
// })

//=================================================================================

//Video number 58 
//Promise API

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Value 1");
//     },1000);
// });


// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Value 2");
//         // reject(new Error("error"))
//     },2000);
// });

// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Value 3");
//     },3000);
// });

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })

//let promise_all = Promise.all([p1,p2,p3])
//If one fails other are executed
//let promise_all = Promise.allSettled([p1,p2,p3])

//Fastest one is resolved first 
//let promise_all = Promise.race([p1,p2,p3])
//
// let promise_all = Promise.any([p1,p2,p3])
// let promise_all = Promise.resolve(6)
// // let promise_all = Promise.reject("Hey")
// promise_all.then((value)=>{
//     console.log(value)
// })

//===============================================================================
//Video number 59 Async/Await in JS
//An async function always return a promise



// async function harry(){
//     let delhiWeather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("27 Deg")
//         },1000)
//     })
    
//     let bangloreWeather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("21 Deg")
//         },5000)
//     })
 
//     // delhiWeather.then(alert)
//     // bangloreWeather.then(alert)
//     console.log("Fetching Delhi weather ")
//     let delhiW=await delhiWeather
//     console.log("Fetched delhi  weather "+delhiW)
//     console.log("Fetching banglore weather ")
//     let bangloreW=await bangloreWeather
//     console.log("Fetched banglore  weather "+bangloreW)
//     return [delhiW,bangloreW]
// }
// console.log("welcome to weather control room")
// let a = harry()
// a.then((value)=>{
//     console.log(value)
// })

//====================================================================================
//Video 60 and 61 // Error Handling and error object



// try{
//     let age = prompt("Enter your age")
//     // throw new Error("Harry is not good")
//     age = Number.parseInt(age)
//     if(age>120){
//         throw new ReferenceError("This is probably not true52")
//         }
// }catch(error){
//     console.log(error.message)
//     console.log(error.name)    
//     console.log(error.stack)    

// }

// console.log("The script is still number")

//=====================================================================================

//Video number 62 //The finally clause
//It will run in all cases
// const f =()=>{
//     try{
//         let a =0;
//         console.log(program)
//         console.log("Program ran successfully")
//         return
//     }
//     catch(err){
//         console.log("This is an error")
//         console.log(p)
//     }
//     //Finally will run even if function fails or is successfull
//     finally{
//         console.log("I am a good boy")
//         //Close the file
//         //Exit the loop
//         //write to the log file
//     }} 

// f()

//=====================================================================================
//Video 66 Fetch API

// let p = fetch("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js")
// p.then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.headers)
//     return response.json()
// }).then((value2)=>{
//     console.log(value2)
// })

//===============================================================================
// //Video 67 POST Request
// const createTodo = async (todo) => {
//     let options = {
//             method: "POST",
//             headers: {
//                     "Content-type": "application/json"
//             },
//             body: JSON.stringify(todo),
//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response
// }

// const getTodo = async (id) => {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//     let r = await response.json()
//     return r
// }

// const mainFunc = async () => {
//     let todo = {
//             title: 'Harry2',
//             body: 'bhai2',
//             userId: 1100,
//     }
//     let todor = await createTodo(todo)
//     console.log(todor)
//     console.log(await getTodo(101))
// }

// mainFunc()

//===============================================================================

//Video 68 Cooookies
//Cookeis are small strings of data stored directly into the browser


// console.log(document.cookie)
// document.cookie = "name=harry1122334400"
// document.cookie = "name2=harry11223344002"
// document.cookie = "name2=harry"
// let key = prompt("Enter yoru key")
// let value = prompt("Enter yoru value")
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`

// //console.log(document.cookie)
// console.log(decodeURIComponent(document.cookie))

//===============================================================================
//Video number 69 Local Storage
// localStorage.setItem("name","Rutvik")

// let key =prompt("Enter the key you want to set??")
// let value =prompt("Enter the value you want to set??")

// localStorage.setItem(key,value)

// console.log(`he value at ${key} is ${localStorage.getItem(key)}`)

// if(key=="red" || key == "blue"){
//     localStorage.removeItem(key)
// }

// if(key==0){
//     localStorage.clear()
// }


//===============================================================================
//Video number 70 Session storage

// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name")
// sessionStorage.removeItem("name")


// window.onstorage=()=>{
//     alert("Changed")

// }



//==================================================================================
//Object Oriented Programming OOPS
//Video 75 Prototype and __proto__ 

let a ={
    name:"Rutvik",
    language:"Javascript",
    run:()=>{
        alert("Self run")
    }
}
console.log(a)

let p = {
    run:()=>{
        alert("run")
    }
}

p.__proto__={
    name:"Jackie"
}

a.__proto__=p
a.run()

console.log(a.name)
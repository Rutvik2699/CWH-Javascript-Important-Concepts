
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


// =====================================================
//Callbacks
function loadScript(src,Callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload=function(){
        console.log("Loaded script with src: "+src);
        Callback(null,src);
    };
    script.onerror=function(){
        console.log("Error loading script with SRC"+src);
        Callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}
function hello(error,src){
    if(error){
        console.log(error)
        return
    }
    alert('Hello WOrld!'+src);
}

function goodMorning(src){
    alert('Hello WOrld!');
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",hello);
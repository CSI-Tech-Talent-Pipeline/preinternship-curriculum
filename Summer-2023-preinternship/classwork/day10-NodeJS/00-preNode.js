//PRE NODE --- review essential JS for Node.js
//1. Arrow Expression
//anonymous function

//typical function 
function normalFunction (name){
    console.log(`Hello ${name}, This is a normal function.`)
}
normalFunction("Julia")


//Definining a named function by creating an arrow expression and save it to a variable.
let helloWorldVariable = (parameter) => {
    console.log(`Welcome ${parameter} to Tech Talent Pipeline, this is an arrow expression.`)
}

//calling the arrow function
helloWorldVariable("Alex")


//typical arrow function () => {}
console.log(() => console.log("this is anonymous"))




//2. Synchronous(Blocking I/O) vs Asynchronous (non-blocking In/Out)
// synchronous : First line of code gets executed first. From top to bottom

// Asynchronous: Code gets executed from the first line but it executes the asynchronous code separately 

//2. Asynchronous Concepts: Promise
//Promise example 1
//create the promise
const testLuck = new Promise((resolve, reject) => {
    let a = 3 + 4
    if (a === 6) {
      resolve('YES RESOLVED !')
    } else {
      reject(new Error('NO A is NOT 6'))
    }
  });

//consume the promise
testLuck.then(message => {
console.log(message) // Log the resolved value of the Promise
}).catch(error => {
console.error(error) // Log the rejected error of the Promise
});

//simplest promise //Promise example 2
let promiseExample = new Promise((resolve, reject) => {
    let a = 2 + 5
    if(a === 4){
        resolve("Success")
    }else{
        reject("Failed")
    }
})

promiseExample.then((message) => {
    console.log(message)
}).catch((message)=>{
    console.log(message)
})

//Promise example 3
 let anotherPromise = new Promise((resolve, reject) => {
     let b = 4 + 5
     if( b === 8){
         resolve("YES")
     }else{
         reject(new Error("NO"))
     }
 })

 anotherPromise.then((message) => {
     console.log(message)
 })
 .catch((error) => {
     console.error(error) //.error shows red in the console
 })


//Promise example 4
//create the promise
 let differentPromise = new Promise ((resolve, reject) => {
     let c = 3 * 3
     if( c === 9){
         resolve("YES 9")
     }else{
         reject(new Error("NOT 9"))
     }
 })

//consume
 differentPromise.then((message) => {
     console.log(message)
 })
 .catch((error) => {
     console.error(error)
 })


//Promise resolve all
let varOne = new Promise((resolve) =>{
    resolve("1")
})
let varTwo = new Promise((resolve) => {
    resolve("2")
})
let varThree = new Promise((resolve) => {
    resolve("3")
})

Promise.all([
    varOne,
    varTwo,
    varThree
]).then((message)=>{
    console.log(message)
})


// ## How to fetch data
// rule 1: The data needs to run it by http server. Not locally.

// Fetching data using promise
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => {
    console.log(response)
    return response.json();
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.error(err)
})



//async & await
const getTodos = async () => { //async always return "PROMISE"
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json()
    return data;
}
getTodos()
    .then(data => console.log(data))
    .catch((err) => console.error(err))


//3. setInterval(), setTimeout() methods
//setInterval()
const repeatHello = () => { //declare a variable with an arrow function
    setInterval(() => { //use the setInterval() method
        alert("hello")
    }, 1000)
}
repeatHello() //invoke the variable

//setTimeout()
const helloOnce = () => {
    setTimeout(() => {
        alert("HELLO")
    }, 1000)
}
helloOnce()




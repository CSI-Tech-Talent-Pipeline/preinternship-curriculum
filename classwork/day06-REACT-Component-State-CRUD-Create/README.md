## SWBAT  [Students Will Be Able To]
- [ ] Utilize `npx create-react-app`

- [ ] Understand what Fragment is and choose either Fragment or <> for JSX return value

- [ ] Visualize / identify Component hierarchy

- [ ] Briefly explain different ways to define function, including let, const and arrow

- [ ] Use `bootstrap` walk through the workflow

- [ ] Manipulate the DOM by changing values in `state` instead of using vanilla JS

- [ ] Explain what virtual DOM is

- [ ] Learn how to submit data

- [ ] Explain async/await


# CREATE REACT APP
`npx create-react-app client`
* Name the frontend folder as `client` (vs `server` for the backend)
* Clean up the React files, get rid of unnecessary codes and files. 
    delete 
     -logo.svg
     -webvital
     -app.js -> logo, everything in JSX

# Fragment
* import Fragment
    -app.js takes in Fragment 
    `import {Fragment} from react;`

    -Fragment: Fragments allow you to write cleaner, readable and maintainable code. They are not a replacement for <div>s in your HTML, but they offer a better approach to structuring and rendering your markup if you're using unnecessary <div>s in your code.

    -Fragment: A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

    ```js
    //App.js
    import { Fragment } from 'react';
    import './App.css';

    function App() {
    return (
        <Fragment>
            <div>
            </div>

            <div>
            </div>
        </Fragment>

        );
    }

    export default App;
    ```

     
# Component Based Architecture 
* Create `components` folder with below files for components
    -`AddTrack.js`
    -`Tracks.js`

          Index 

            |
            |

           App

            |
            |

        AddTrack

            |
            |

          Tracks

The component hierarchy focuses the component's scope of responsibility, creates meaningful relationships between components, encourages composability, and provides balance between flexibility and structure in our component library.

```js
//AddTrack.js
import React from 'react'

function AddTrack() {
    return (
        <div>
            Track Track ID  
        </div>
    )
}
export default AddTrack
```

* Creating a functional component/ a shortcut: add a new extension called `ES7 React`
* in the `Tracks.js` type `rfc` (React Functional Component) 
* voila ~

* In `App.js`, import `AddTrack.js`
```js
//App.js
import './App.css';
import AddTrack from "./components/AddTrack"

function App() {
  return (
    <>
      <AddTrack />
    </>
  );
}

export default App;
```

* Create a component, `Tracks.js` and import it in `AddTrack.js`

```js
//Tracks.js
import React from 'react'

export default function Tracks() {
    return (
        <div>
            DJ Track ID  
        </div>
    )
}
```


# arrow expressions
```js
//1. typical function 
function normalFunction (name){
    console.log(`Hello ${name}, This is a normal function.`)
}
normalFunction("Julia")

//2. const or let function
// Defining a named function by creating an arrow expression and save it to a variable.
let helloWorldVariable = (parameter) => {
    console.log(`Welcome ${parameter} to Tech Talent Pipeline, this is an arrow expression.`)
}
//calling the arrow function
helloWorldVariable("Alex")

//3. typical anonymous arrow function () => {}
console.log(() => console.log("this is anonymous"))
//console.log is a method, which is a function attached to an object

```



# Setup Bootstrap 4
[bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
    - add the CSS stylesheet in the <head></head> tag
    - add the JS script, right above </body> tag, inside of the <body></body> tag

* In the `App.js`, add a `className` attribute to the `div` tag

    ```js
    //App.js
    import { Fragment } from 'react';
    import './App.css';
    import AddTrack from './components/AddTrack';

    function App() {
    return (
        <Fragment>
            <div className = "container">
                <AddTrack/>
            </div>
        </Fragment>
        );
    }

    export default App;
    ```

* In `AddTrack.js` Style using bootstrap

    ```js
        <h1 className = "text-center mt-5">
            Input Todo
        </h1>

        <form className = "d-flex mt-5">
            <input type = "text" className = "form-control" />
            <button className = "btn btn-outline-dark btn-lg ml-3">
                add
            </button>
        </form>
    ```
    `text-center` place the text in the center
    `mt-5` margin top size 5
    `d-flex` display flexbox
    `form-control` form styling
    `btn` button 
    `btn-lg` large button
    `ml-3` margin left size 3

# STATE
* What is `state` in react?
State is used for data that needs to be dynamic. Where props are passed down from parents to children and are static, values stored in state are meant to change, especially as the user interacts with the DOM.

This is a key component of `declarative programming` in React: we tie our components to our state by integrating values in state into logic (e.g. conditional rendering). This way, changes in state eventually cause changes to the DOM.

To define state in a functional component, utilizing `hooks` we can do something like this:

```js
//step 1 import {useState} from 'react'
import React, {useState} from 'react'
import AddTrack from './AddTrack'

export default function AddTrack() {
    

    //step 2
    `useState([])` 
    //pass in a default state inside of the parenthesis. This time, it return an array.
    
    //step 3
    `const [] = useState([])`
    //set useState([]) in a variable, destructure the array, so equal to an array


    //step 4
    `const [tracks, setTracks] = useState([])`
    //The first element in the array, `tracks` is all of the Tracks,
    //The second element is a function that allows us to update the Tracks
    //it's using destructuring assignment to unpack values from array
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   
    const [tracks, setTracks] = useState(["Type your favorite song"])
    
    return(
        <Fragment>
            <h1 className = "text-center mt-5"> 
                Add Your Favorite Track
            </h1>

            <form className = "d-flex m-5" >
                <input 
                    type = "text" 
                    className="form-control" 
                    value = {track}
                    onChange = {(event) => setTrack(event.target.value)} />
                
                            //3. add the value attribute in the form's input tag
                            //4. add onChange attribute with a callback e => setTrack()
                            //5. Search for that input value in DOM.  e => console.log(e)
                            //                                             console.log(e.target)
                            //                                             console.log(e.target.value)
                            //6. using `e.target.value`, update the description state, using `setTrack`
                <button className="btn btn-info" >
                    ADD
                </button>
            </form>
        </Fragment>
}
```

# Virtual DOM
- React uses what you return in the render method to create what s called a virtual DOM
- A virtual DOM is an in memory representation on of a DOM.
- Any  time the value of one of your state variables change, React will update it s Virtual DOM.
- When defining the render func on, we are not trying to create the actual DOM, but the virtual DOM.
- React will take care of rendering the actual DOM. JSX is the language we use to generate the virtual DOM.

# SUBMIT
    ```js
    import React, { useState } from "react";

    const AddTrack = () => {

        const [tracks, setTracks] = useState(["Type your favorite song"])

        //1. create `onSubmitForm` function first using async/await
        const onSubmitForm = async (e)  => {
            //2. prevent the default refreshing action to happen after submit button
            e.preventDefault()

            try{ //3. send request
            
            //4 write error in the below first

                //5. declare a var name `body` and assign state, 'track'
                const body = {track}

                //6. Refer to mozilla's fetch POST request
                //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

                // 7. await fetch url        
                const response = await fetch("http://localhost:8080/tracks",  {
                    //8. post method to insert new data
                    method: "POST",
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                     //9. then turn the response into json data structure
                    body: JSON.stringify(body)
                })
                //10. then console.log that data
                console.log(response)

                
                //11. window.location = "/" //refresh and show the change
                window.location = "/"

                //12. don't forget to add `onSubmit` attribute to `form` when submit happens, fire `onSubmitForm` function 

                //4. write catch error 
            } catch(err){
                console.error(err.message)
            }
        }

        return(
            <>
                <h1 className = "text-center mt-5">
                    Input Todo
                </h1>

                //6. add `onSubmit` attribute to `form` when submit happens, fire `onSubmitForm` function 
                <form className = "d-flex mt-5" onSubmit = { onSubmitForm } >
                    <input 
                        type = "text" 
                        className = "form-control" 
                        value = {description}
                        onChange = {e => setDescription(e.target.value)} 
                        />
                    <button className = "btn btn-outline-dark btn-lg ml-3" >
                        add
                    </button>
                </form>
            </>
        )
    }

    export default AddTrack;
    ```

    * HTML attribute to manipulate DOM
        * <input type="text" name="title" id="title">
        * `id` is used to identify the HTML element through the Document Object Model (via JavaScript or styled with CSS). id is expected to be unique within the page.
        * `name` corresponds to the form element and identifies what is posted back to the server.


# Async/await 
```js
// Synchronous(Blocking I/O) vs Asynchronous (non-blocking In/Out)
// synchronous : First line of code gets executed first. From top to bottom

// Asynchronous: Code gets executed from the first line but it executes the asynchronous code separately 

//Asynchronous Concepts: Promise
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

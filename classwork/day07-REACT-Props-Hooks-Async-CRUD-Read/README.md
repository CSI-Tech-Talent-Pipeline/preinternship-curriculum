## SWBAT  [Students Will Be Able To]
- [ ] Props
    - [ ] string
    - [ ] number
    - [ ] function
    - [ ] boolean
    - [ ] object
- [ ] Distinguish between class component and functional component
- [ ] Use google font
- [ ] Utilize gradient background
- [ ] Understand how to code with `useEffect`
- [ ] Explain how we can fetch data from the server (CRUD: READ)
- [ ] Utilize bootstrap table in JSX
- [ ] Show `.map` method to iterate the json data
- [ ] Review `async` and `sync`


# Props
When you create components, one way to make them dynamic and reusable is by passing in _props_. For example, if we wanted to create several cards on our page using the `Card` component, we could do so like this:

```js

function Card(props) {
  return (
    <div id="card1" className="card"> 
      <h1>{props.greeting}</h1>
      <p>{props.subGreeting}</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <Card greeting="hi" subGreeting="hello" />
    <Card greeting="sup" subGreeting="what's up" />
  <div>,
  document.getElementById('root') 
)
```

The _props_ argument in our Card component defines an object that React will pass to our function when it is called, and it will use whatever attributes we add to our JSX component as key-value pairs on that props object.

One additional note on JSX syntax and props: if you need to define attributes on a component that aren't strings, you have to wrap those values in {}:

```js
ReactDOM.render(
  <div>
    <Card greeting="hi" number={7} boolean={false} callback={() => console.log("call me!")} object={{ key: "value" }} />
  <div>,
  document.getElementById('root') 
)
```


# Class Components
In React, there are two types of components: Function Components and Class Components. Function Components can be declared using the function keyword or as arrow functions; the requirement for a Function Component is that it returns valid JSX:
```js
function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>{props.bio}</h1>
    </div>
  )
}
//We can also use ES6 classes to define components:

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h1>{this.props.name}</h1>
        <p>{this.props.bio}</h1>
      </div>
    )
  }
}
```
For now, the primary difference between Class and Function Components is that for Class Components, we must:

Define a render method that returns valid JSX, and
Use this.props to access props



* google font

* gradient background

# CRUD : Read
# Build ListTracks
* Build ListTracks

    -`ListTracks.js` Component, create a table.
    -go to bootstrap/table and get a table that you like
    -copy and paste it in the component 
    -add `m-5` and `text-center` to the table tag `<table class="table table-striped m-5 text-center">`
    -change the table header row with track, edit, delete        
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Track</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            </tr>
        </thead>
    -turn the table body, comment the one row and delete the rest
        <tbody>
            {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr> */}
        </tbody>

   
    ## useEffect
        -`useEffect`: The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: `fetching data`, `directly updating the DOM`, and timers. useEffect accepts two arguments. 
        -`useState`: useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

    - 1. add { useEffect , useState } hooks into the component
    - 2. add useEffect
    ```js
    //2. add useEffect 
    useEffect(() => {
        getTracks();
    }) 

    return( //JSX
        <div></div>
    )
    ```

    -3. define getTracks function
    ```js
    //3 define `getTracks` function above the useEffect
    const getTracks = async =() => {
        try{

        }catch(err){
            console.error(err.message)
        }
    }

    //1  add useEffect 
    useEffect(() => {
        getTracks();
    }) 

    return( //JSX
        <div></div>
    )
    ```

    -4, 5, 6, 7, 8 Fetch the list from the server
    ```js
    //3 define `getTracks` function above the useEffect
    const getTracks = async () => {
        try{
            //4 fetch the track list. by default fetch request is GET method
            const response = await fetch("http://localhost:8080/todos")
            //5 parse the response into a json data structure. Make sure to add await so later when you use .map method, you can iterate the array, instead of promised array
            const jsonData = await response.json()

            //6 console log the data
            console.log(jsonData)
            
            //7 update the state using setState function (this will cause the console log never ending data)
            setTrack(jsonData)

        }catch(err){
            console.error(err.message)
        }
    }

    //2  add useEffect 
    useEffect(() => {
        getTracks();
    }) 

    return( //JSX
        <div></div>
    )
    ```

    - 8. notice that the console log is never ending with the data, this is because the useEffect is making requests continuously. To fix that, passing an empty array as the second argument to useEffect makes it only run on mount and unmount, thus stopping any infinite loops.

    Read more about it
    https://dmitripavlutin.com/react-useeffect-infinite-loop/

    ```js
    //1  
    useEffect(() => {
        getTracks();
    }, [])
    ```

    -9. Go to the Bootstrap and get the html tags

    return(
        <div className="row m-5">
            <h1 className="col text-center">   📻  🎸  🎵  List Tracks  🎵    🎸   📻  </h1>

            <table className="table table-striped m-5 text-center">
                <thead>
                    <tr>  
                        <th scope="col">#</th>
                        <th scope="col">Track</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>       

                {tracks.map(each => {
                return(
                    <tbody key={each.track_id}>
                    <tr>
                        <th >{each.track_id}</th>
                        <td>{each.track}</td>
                        <td>✏️</td>
                        <td>❌</td>
                    </tr>
                    </tbody>
                    )
                    })}

            </table>
        </div>
    )

    -10 send the track to track component



* Async 
Synchronous(Blocking I/O) vs Asynchronous (non-blocking In/Out)
-`synchronous programming`: 
    -First line of code gets executed first. 
    -From top to bottom. 
    -Synchronous programming is a programming model where operations take place `sequentially`.
    -JavaScript is always synchronous and single-threaded. 
-`Asynchronous programming`: 
    -Code gets executed from the first line but it executes the asynchronous code separately. 
    -It is a form of parallel programming that allows a unit of work to run separately from the primary application thread. 
    -When the work is complete, it notifies the main thread (as well as whether the work was completed or failed)

```js
//Synchronous JS execution
console.log("::::::::::::::::1::::::::::::::::::")
console.log("::::::::::::::::2::::::::::::::::::")
console.log("::::::::::::::::3::::::::::::::::::")
console.log("::::::::::::::::4::::::::::::::::::")
console.log("::::::::::::::::5::::::::::::::::::")
console.log("::::::::::::::::6::::::::::::::::::")

//Asynchronous JS execution
// ## How to fetch data
// The data needs to run it by http server. Not locally.

// Fetching data using promise
console.log("::::::::::::::::1::::::::::::::::::")
console.log("::::::::::::::::2::::::::::::::::::")
console.log("::::::::::::::::3::::::::::::::::::")
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => {
    console.log(response)
    return response.json();
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.error(err)
})
console.log("::::::::::::::::4::::::::::::::::::")
console.log("::::::::::::::::5::::::::::::::::::")
console.log("::::::::::::::::6::::::::::::::::::")


//async & await
console.log("::::::::::::::::1::::::::::::::::::")
console.log("::::::::::::::::2::::::::::::::::::")
console.log("::::::::::::::::3::::::::::::::::::")
const getTodos = async () => { //async always return "PROMISE"
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json()
    return data;
}
getTodos()
    .then(data => console.log(data))
    .catch((err) => console.error(err))
console.log("::::::::::::::::4::::::::::::::::::")
console.log("::::::::::::::::5::::::::::::::::::")
console.log("::::::::::::::::6::::::::::::::::::")
```

* Data 
{
    "track": "Blue Lights       by       Jorja Smith"
}

{
    "track": "Search       by       Surgeon"
}

{
    "track": "Starboy      by       The Weeknd"
}

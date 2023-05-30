## SWBAT  [Students Will Be Able To]
- [x] Review async / await issue from yesterday
- [x] Send the data to another component as a prop
- [x] Visualize how non-react and react browser sends http request to server and get response 
- [x] Explain benefit of React
- [x] Build routes using React Router
- [x] Delete one data, send a delete fetch request, using an emoji


## Assignment: bank of react : router

# async promise hell
The issue happened because we were iterating not a plan array but an array of promises. The `map()` method is going to be executed `synchronously` before all the `array of promises` gets executed, which is asynchronous. To fix that, we had to add `await` again when we turn the response into a json file. 

-add `await`
```js
//ListTracks.js
issue 
       //5. parse the response into a json data structure
       const jsonData = response.json()
to fix
       //5. parse the response into a json data structure
       const jsonData = await response.json()
```

-update the JSX as well using `.map`
```js
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
```


# send the data to another component as a prop

```js
//ListTracks.js

 <Track tracks = { tracks }/>
```

-copy the track.map code from ListTrack and paste it into Track.js
```js 
//Track.js
import React from 'react'

export default function Track( {tracks} ) {
    
    //console.log(tracks)
    
    return (
        <>
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
        </>
    )
}

```


# what is React Router?

![non-react-request](https://i.imgur.com/Vpg08qN.png)
* How non-react websites http request work? (server-side routing)
    -1. Type URL in the address bar and hit enter
    -2. Send the request to a server
    -3. The server handles it 
    -4. The server send a response back with a full HTML page with css and js
    -5. Users can view the content on the browser
    -6. User clicks a new link, such as `about` page
    -7. Browser sends a new request to the server
    -8. The server sends back the response with the `about` html, css and js.
    -9. The cycle continues 

    * with server-side routing you download an entire new webpage whenever you click on a link,

    Imagine the user clicking on a simple link: <a href="/hello">Hello!</a>
    *On a webapp that uses server side routing:
        -The browser detects that the user has clicked on an anchor element.
        -It makes an HTTP GET request to the URL found in the href tag
        -The server processes the request, and sends a new document (usually HTML) as a response.
        -The browser discards the old webpage altogether, and displays the newly downloaded one.


![react-request](https://i.imgur.com/30RiXUD.png)
* React application  (client-side routing)
    -1. Browser make http request
    -2. Server response with the html, js, css , also with REACT JS Bundle. From here on, React and React Router will take a full control of the application.
    -the html page we get back is virtually empty
    -then React inject the content dynamically using the components
    3. User clicks on a link.
    4. Then React Router will take care of the request and inject the component into the browser.
    - benefit : faster 


    * with client-side routing the webapp downloads, processes and displays new data for you.

    Imagine the user clicking on a simple link: <a href="/hello">Hello!</a>
    
    * If the webapp uses client side routing:

    The browser detects that the user has clicked on an anchor element, just like before.
    A client side code (usually the routing library) catches this event, detects that the URL is not an external link, and then prevents the browser from making the HTTP GET request.
    The routing library then manually changes the URL displayed in the browser (using the HTML5 history API, or maybe URL hashbangs on older browsers)
    The routing library then changes the state of the client app. For example, it can change the root React/Angular/etc component according to the route rules.
    The app (particularly the MVC library, like React) then processes state changes. It renders the new components, and if necessary, it requests new data from the server. But this time the response isn't necessarily an entire webpage, it may also be "raw" data, in which case the client-side code turns it into HTML elements.


# React router step by step set up
-create a `Nav` component
-go to the bootstrap website and get the html tags for the nav and change class to className
-do some styling using bootstrap tags

-run `$ npm install react-router-dom` in the terminal
-go to package.json and check react-router-dom and its version
-go to the root component, `App.js`
-Import { BrowserRouter, Routes, Route } meaning import BrowserRouter, Routes and Route  components.
-It should look like this at the end => `import { BrowserRouter, Routes, Route } from "react-router-dom"`

-Then we need to surround our application with the `BrowserRouter` component. All the component nested inside of app component have access to the `BrowserRouter`
-Where do we want our page content to go when we go to different pages?

-`Route` render out a component based on the URL
    -For `Nav` component, I want the nav to be displayed on all the pages. However, for `Add Track` and `List Track` component, I want them to appear only when the path matches that particular link to the page.

```js
//App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className = "container">  
              <Navbar />

              <Routes>
                <Route exact path="/" element = {<Home/>} /> 
                <Route exact path="/addtrack" element = {<AddTrack/>} /> 
                <Route exact path="/listtracks" element = {<ListTracks/>} /> 
              </Routes>
        </div>
    </BrowserRouter>
    );
}

export default App;
```

-Go to Bootstrap and find your nav style
```js
//Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav>
            <ul className="nav m-5 justify-content-center">
                <Link to="/">
                <li className="nav-item  m-5">
                    <a className="nav-link active" href="#">Home</a>
                </li>
                </Link>

                <Link to="/tracklist">
                <li className="nav-item  m-5">
                    <a className="nav-link active" href="#">Track List</a>
                </li>
                </Link>

                <Link to="addtrack">
                <li className="nav-item  m-5">
                    <a className="nav-link" href="#">Add Track</a>
                </li>
                </Link>
            </ul>
        </nav>
    )
}

```


# CRUD
# Delete

-1. add button html tag and className
```js
//Track.js
   <td><span onClick ={() => {
                            deleteTrack(each.track_id)
                        }}>❌</span></td>

```

-2. define the deleteTrack function above the JSX
```js
    const deleteTrack = async () => {
        try{

        }catch(err){
            console.error(err.message)
        }
    }
```

-3 delete fetch request
```js

    const deleteTrack = async (id) => {
        try{
           const deleteTrack = await fetch(`http://localhost:8080/tracks/${id}`,{
               method: "delete"
            })
            console.log("deleted", deleteTrack)
        }catch(err){
            console.error(err.message)
        }
    }
```

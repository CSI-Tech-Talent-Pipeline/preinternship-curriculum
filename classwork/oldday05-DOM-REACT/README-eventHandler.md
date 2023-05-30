### Event Handling 

## Learning Goals
- [ ] Use events to allow user interaction with the page
- [ ] Identify commonly used event types
- [ ] Identify important attributes on the event object and their uses
- [ ] Combine knowledge of DOM manipulation and events to allow user interaction to change DOM

### What are some common things users do on a webpage?
scroll
click
typing
search (type in an input field, submit a form)

[All the Events](https://developer.mozilla.org/en-US/docs/Web/Events)
[most common events](https://data-flair.training/blogs/javascript-event-types/)


## What are Web Events 🤔

- on the Web, events are fired inside the _browser window_, and tend to be attached to a specific item. This could be a single HTML element. There are a lot of different types of events that can occur, for example:

  - The user clicking the mouse over a certain element
  - hovering the cursor over a certain element.
  - The user pressing a key on the keyboard.
  - The user resizing or closing the browser window.
  - A web page finishing loading.
  - **A form being submitted.**
  - A video being played, or paused, or finishing play.
  - An error occurring.
- You will gather from MDN (and from glancing at the [MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)) that there are a lot of events that can be responded to.


* go to wikipedia page
peppermint

```js
//
const firstHeading = document.querySelector(".firstHeading")

firstHeading.addEventListener("click", () => console.log("clicked!"))

firstHeading.addEventListener("click", function(){
    firstHeading.style.color = "red"
    })
//you can add an argument, event
firstHeading.addEventListener("click", function(event){
    console.log(event)
    })
//this shows, where the mouse was clicked, etc a lot of information in the event. (also the argument can be any letters, not just e or event)

//Focus on target property
firstHeading.addEventListener("click", function(event){
    event.target.style.color = "red"
    })
//whatever the target was clicked, we are chaging that target to color red. Instead of the hard coding, `firstHeading` itself.

```


- Each available event has an **event handler**, which is a block of code (usually a user-defined **JavaScript function**) that will be run when the event fires. When such a block of code is defined to be run in response to an event firing, we say we are **registering an event handler**. Note that event handlers are sometimes called **event listeners** — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener **listens** out for the event happening, and the handler is the code that is run in response to it happening." - [MDN Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events).

- As it pertains to what we've seen so far, we can tell JavaScript to listen for certain events and invoke a **callback** function when that event occurs:

- We are telling `addEventListener` to invoke the **anonymous function** passed as the second argument **_when_** the event fires; we're waiting for something to happen then **responding** to this user event.


### activity

/*
  on clicking *any* <p> tag,
  change the font of that <p> tag to comic sans

  1. find the element we care about handling events on
  2. add an event listener with the event type and callback
  3. in the callback, tell js we want to happen

  Hints:
  - find a way to get access to ALL the <p> tags on the page
  - set the inline style's fontFamily property: "Comic Sans MS", cursive
*/

        ```js 
        mulP.forEach((each) => {
            each.addEventListener("click", (e) => {e.target.style.fontFamily = "Comic Sans MS"})
            })
        ```

        ```js
        const allPs = document.querySelectorAll("p")
        allPs.forEach(function (eachP){
            eachP.addEventListener("click", function(event){
                event.target.style.color = "red"
                event.target.style.fontFamily = '"Comic Sans MS", cursive'
                event.target.style.fontSize = '100px'
                console.log("all P s and all the quizzes")    
                })
        })
        ```


### Animal BnB Let's turn the dark mode on by toggling on and off
* open the airbnb page
* show the `index.html`
* Let's make that toggle work. Select the toggle on the top 

```js
const toggle = document.querySelector(".toggle-switch")
console.log(toggle)
```
* it's null. What should we do? why? becuase JS doesn't have an access to the HTML file yet.
* add `defer` in the script tag. You can also use DOM Content Loaded.

```js
document.addEventListener("DOMContentLoaded", function(){
    // dom manipulation code here :-)
})
```

* only the downside of the `document.addEventListener("DOMContentLoaded")` is that the variables are not available in the global scope. So we can't console.log the toggle in the dev tool.

* I prefer `defer` so we go team `defer`

### Steps to add event listener
1. find the element we care about handling events on
2. add an event listener with the event type and callback.
3. in the callback, tell js we want it to happen

1. find the element we care about handling events on
 `const toggle = document.querySelector("#toggle-dark-mode")`
 // console.log(toggle)
 //console log everywhere to see what you are doing

   * How to add dark mode?
        1. 
        ```css
        body.dark-mode {
            --bg-color: rgb(26, 26, 26);
            --font-color: rgb(218, 218, 218);
            --theme-primary: rgb(91,13,232);
            --shadow: rgba(60, 60, 60, 0.75);
        }
        ```
        2. so if we add "dark-mode" attribute to body tag, it will use the dark-mode css.

        3. Test it out in the html, dev tool.

        4. add the "dark-mode" class attribute in the body html tag.
        `document.body.classList.add("dark-mode")`

        * setAttribute can alos work 
        `document.body.setAttribute("id", "something")`

2. add an event listener with the event type and callback.
```js
toggle.addEventListener("click", () => {
    //3. in the callback, tell js we want it to happen
   document.body.classList.add("dark-mode")
} )
```
* go to the mozilla page, `js classList` 

* 
```js
toggle.addEventListener("click", () => {
   document.body.classList.toggle("dark-mode")
})
```

### Working on the form submit
// ************  submit   *************//
* back on airbnb, `dev tool` and `index.js`

## How do we utilize `submit`?
1. get the form element
2. add event listener
3. in the callback, get data from the form (look into the input field)
4. slap on the dom


// 1. get the form element
`const form = document.querySelector("#listing-form")`

// 2. add event listener
```js
form.addEventListener("submit", () => {
    console.log("hello")
})
```
* here back on dev tool, the console.log `hello` only appears for less than a second then it disappears. 
What's happening here? We see that the event happens but why does the console.log disappears?

The page refreshes after the submit happens.

When submit happens, the default behavior of the browser is
1. network request to a server
2. when the request goes out, it cause the refresh

so to prevent this default behavior to happen, we will use `event.preventDefault()`

```js
form.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log("hello")
})
```

* how to acess the typed input information?

    1. add debugger first
        ```js
        form.addEventListener("submit", (event) => {
        event.preventDefault()
        debugger
        console.log(event)
        })
        ```
    2. inside of the debugger, dev tool, console,
        look for `event`
        -`event.value` //doesn't show anything
        -`event.target.querySelector("#title")` 
        -`event.target.querySelector("#title").value` //end goal
        -`event.target.title` //better
        -`event.target.title.value`
    3. Declare and assign a variable
        ```js
        form.addEventListener("submit", (event) => {
        event.preventDefault()
        const titleVal = event.target.title.value
        })
        ```
    4. Declare and assign all other input values
        ```js
        const titleVal = event.target.title.value
        const imgVal = event.target.imageUrl.value
        const locVal = event.target.location.value
        const priceVal = event.target.price.value

        ```


// 3. in the callback, get data from the form (look into the input field)
        ```js
        const titleVal = event.target.title.value
        const imgVal = event.target.imageUrl.value
        const locVal = event.target.location.value
        const priceVal = event.target.price.value
        ```

// 4. slap on the dom

    * store all the data in one object first
        ```js
        const titleVal = event.target.title.value
        const imgVal = event.target.imageUrl.value
        const locVal = event.target.location.value
        const priceVal = event.target.price.value
        
        const listingObj = {
        title: titleVal,
        imageUrl: imgVal,
        location: locVal,
        price: priceVal
        }
        ```

//use the function below to slap it on the DOM
renderOneListing(listingObj)


## External Resources:
- [MDN Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN DOMContentLoaded Reference](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)
- [MDN `addEventListener` Reference](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Article on `Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [MDN Article on the `submit` event](https://developer.mozilla.org/en-US/docs/Web/Events/submit)
- [MDN Article on `input` tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input))
- [MDN Article on `createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Article on `textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- [MDN Article on Dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
- [JavaScript.info Article on Event Bubbling](https://javascript.info/bubbling-and-capturing)
- [most common event types](https://data-flair.training/blogs/javascript-event-types/)

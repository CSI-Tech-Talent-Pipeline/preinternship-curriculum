## SWBAT  [Students Will Be Able To]
# Intro to the DOM 📜

## Learning Goals
- [ ] Draw DOM tree by looking at HTML
- [ ] Explain what a DOM node is and what its most important attributes are
- [ ] Use the Chrome Dev tools to explore the DOM tree and its attributes 
- [ ] Use JS to select DOM nodes
- [ ] Use JS to add, remove, and edit DOM nodes
- [ ] Discuss `defer` 

### Three Pillars of Javascript
- Manipulating the DOM
- Handling Events
- Communicating with the Server

### The Document Object Model Overview
- What is the DOM?
  - The DOM (Document Object Model) is a representation of an HTML document as a **tree** (more on this later) that can be manipulated with JavaScript
  - Javascript is a language created to manipulate the DOM
  - "[JavaScript] DOM methods allow programmatic access to the tree; with them you can change the document's structure, style or content." - [MDN DOM Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (more on this later)

* Google -what's happening on the page? -source html
* airbnb index.html -browser -dev tool
* how to modify the text?

## The DOM is a Tree 🎄
- What is a tree in computer science? A data structure that represents some hierarchical structure; parent nodes (elements), child nodes, sibling nodes. Trees look like upside down trees:

![tree](https://i.imgur.com/9otIgXu.png)

- Here is another representation of a tree with a root node and several children or branches:

![tree data structure](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/300px-Binary_tree.svg.png)

- Here is a representation of our HTML as a tree. This is the DOM:

![tree structure via tutorial republic](https://www.tutorialrepublic.com/lib/images/html-dom-tree.gif)

---

- DOM (Document Object Model)
  - The DOM is a tree structure with several child `nodes`. All of the elements in the tree are related to each other. Some elements may have children:

- "The DOM model represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them you can change the document's structure, style or content." -

```html
<body>
  <div>
    <h1>Welcome to the DOM Dominion</h1>
    <p>A magical land of trees and <em>mystical</em> properties</p>
    <ul>
      <li>Explore the trees</li>
      <li>Discover mystical properties</li>
    </ul>
  </div>
</body>
```

* airbnb index.html
 * semantic HTML
  * The goal of the lecture is figuring out how to create these different elements programmatically. So instead of hard coding these html, take some objects and turn them into that html so we can dynamically generate this.

  * in the dev tool `console` type `document`.

  - This tree structure starts at the `document`, where `document` is the topmost **parent** of each individual `node` (HTML Element). Every single HTML element in the DOM is a `node`: `<p></p>`, `<h1></h1>`, `<img>`, etc. **If you are not comfortable with HTML syntax and/or HTML tags, go through the [intro to HTML section on W3Schools](https://www.w3schools.com/html/html_intro.asp)**

  * `console.dir(document)`: print out what properties that are available for us to use. It lists all the built in properties of document object. The list is long and overwhelming so you can ingore 95% of them so first, let's discuss more now what are the important ones.

  * Here is one way to select logo `Airbnb for Wild Animals`

  * `document.body`
  * `document.body.children`
  * `document.body.children[0]`
  * `document.body.children[0].children[0]`

  * issues with this method of traversing the dom tree.
   -not dynamic
   -tedious
   -typos

## CRUD(READ) 
### Selecting DOM Nodes

 * How should we select the logo `Airbnb for Wild Animals` dynamically?

 * `document.getElementById("menu")`  //only returns only the first element so be aware of it
 * `document.getElementsByClassName("logo")` //better for selecting multiple element with same argument

 * `document.querySelector("main")` //html element tag
 * `document.querySelector("#menu")` //id (number sign/ pound sign)
 * `document.querySelector(".logo")` //className
 * `document.querySelector("h2.logo")` //htmlelement tag + class
 * `document.querySelectorAll("")` // html element tag / class / id

 * using `querySelector` gives you more flexibility than using `getElementById`
 
 https://www.w3schools.com/cssref/css_selectors.asp

## CRUD(Update) 
### Modifying DOM Nodes

 - JavaScript allows us to **traverse** this tree to find and _manipulate_ different `nodes` 
 * Elements (`nodes`) have properties that can be manipulated (`style`, `textContent`, `innerHTML`, etc). 

 * `const logo = document.querySelector("h2.logo")` //Assign that node to a var
 * `console.dir(logo)` //The list of property is long so you can just refer to Dom-reference document

- How to make JS to manipulate the DOM?
 * `logo.textContent = "AnimalAirBnB"` //change the text attributes of the node

 * `logo.innerHTML = "<strong> AnimalAirBnB </strong>"` // you can add html as well as text to the node

- How to change the color of the font?
 * `logo.style.color = "green"` //change the color attributes of the node

 * `logo` //when we look at the logo then we can see that the JS has affected this DOM element.

- If we want to give the logo `id` what should we do?
* `logo.id = "glassFrog"`

# defer 
* define `defer`
    * If your script tag is in the head, JS is loaded before HTML, so when you have DOM codes, it wouldn't interact with the HTML and return errors. 

    * To fix the problem, add the `defer` attribute in the <script> tag in the header.

    * We don't add the script tag in the bottom because it takes awhile to download JS and CSS. 

    * `defer` attribute will prevent the DOMContentLoaded event from firing until the JS script has loaded and finished evaluating.

    ```html
    <head>
    <script src = "index.js" defer></script>
    </head>
    ```

### Delete Removing Nodes
- `logo.remove()` will remove the node on which it was called:

- how to delete multiple children?
- `const listingsSection = document.querySelector("#listings")`
- `listingsSection.innerHTML = ""`

---

### Technique 1: create individual nodes
### Creating DOM Objects
1. find a place to add the new elements
`const menu = document.querySelector("#menu")`

2. create the DOM node
`const subMenu = document.createElement("h4")`
console.log(subMenu)

3. define attributes on that node
`subMenu.textContent = "Finest (funniest) place on earth"`

4. slap it on the DOM (append to some parent element)
`menu.append(subMenu)` 


### technique 2: innerHTML
1. find a place in the DOm to append the things
`const listingSection = document.querySelector("#listings")`

2. add inner HTML 
`listingSection.innerHTML = "
      <div class="card">
        <div class="image">
          <img src="https://i.imgur.com/R3tzgrt.jpg"/>
          <button class="favorite">
            <span>🔥</span>
          </button>
        </div>
        <div class="details">
          <p class="info">
            <span>Middle Earth</span>
            <span class="rating">★ 4.23</span>
          </p>
          <h4 class="title">Upscale Leaf in Quiet Forest for Glass Frog</h4>
          <div class="price">
            <strong>$800</strong> / night
          </div>
        </div>
      </div>
"`


### Activity
- With your pair, navigate to your favorite website (NewYorkTimes or Twitter are good examples):
  - Select elements and save them to JavaScript variables
  - Remove at least 2 elements from the page
  - Modify elements (e.g., replace image url, change text, change CSS)
  - Create new elements and add them to the page
  - Change all instances of one word on the page
  - Replace all images on only a certain portion of the DOM
  - Change every other header
  - Bonus (Hard): replace all elements of one tag to another (e.g., `p` to `h1`)


- Creating new nodes `const myImg = document.createElement('img')`
- Adding attributes to elements `img.src = 'http://www.coooolimage.com'`
- Appending to node `document.body.appendChild(element)` will add that node to the `<body></body>`

---

[MDN Article on the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

---

---

## Manipulating the DOM with JavaScript Chart

| Selector name                      | Return shape   | Return type    | Live? | Reference             | can i call forEach? |
| ---------------------------------- | -------------- | -------------- | ----- | --------------------- | -------- |
| `document.getElementById()`        | Single element | Element        | N/A   | https://goo.gl/8cHGoy | N/A      |
| `element.getElementsByClassName()` | Collection     | HTMLCollection | Yes   | https://goo.gl/qcAhcp | No       |
| `element.getElementsByTagName()`   | Collection     | HTMLCollection | Yes   | https://goo.gl/QHozSh | No       |
| `element.querySelector()`          | Single element | Element        | N/A   | https://goo.gl/6Pqbcc | N/A      |
| `element.querySelectorAll()`       | Collection     | NodeList       | No    | https://goo.gl/vTfXza | Yes      |

---

## External Resources:

- [MDN Article on the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN NodeList reference](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [MDN HTMLCollection reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [CSS Selectors Cheatsheet](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [When are Selected HTML Elements Live](https://stackoverflow.com/questions/28163033/when-is-nodelist-live-and-when-is-it-static)
- [Difference Between the DOM and the BOM](https://stackoverflow.com/questions/4416317/what-is-the-dom-and-bom-in-javascript)

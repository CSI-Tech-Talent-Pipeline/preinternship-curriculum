## SWBAT  [Students Will Be Able To]
- [ ] Briefly explain the history of JS
- [ ] Understand the role of JS in web development
- [ ] Explain the relationship between HTML and JS
- [ ] Use script tags to load JS into an HTML page
- [ ] Explain the basic data types and data structures in JS
  - [ ] primitive datatype (Undefined, Null, Boolean, Number, String, Symbol)
  - [ ] non primitive datatype (object, array, function)
- [ ] Explain the difference between pass-by-value and pass-by-reference
- [ ] understand the destructuring assignment `const { description } = req.body`
- [ ] Understand higher order function and callback function
- [ ] Utilize callback function in array methods like `.forEach()`, `.map()`, and `.reduce()`

### History of JavaScript
* Early Days
  * Created by Brandon Eich at Netscape in 10 days in 1995
  * Many say it was marketing tactic to divert some attention from Java, which was the most buzzed-about language at the time
  * A (traditionally) client-side scripting language
  * Meant (traditionally) to run entirely on the user’s browser
  * HTML, CSS, JS 
  * The standard for JavaScript implementations is called ECMAScript
  * Given that there are several **competing** JavaScript engines, the [European Computer Manufacturers Association (ECMA)](https://en.wikipedia.org/wiki/Ecma_International) is responsible for standardizing JavaScript, referred to as [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)
  * The standard is updated yearly and the standard for that year is called ECMAScript 20xx (or ES 20xx); ES2015 or ES6 (ES version 6

### Role of JavaScript
  * In the context of web browsers, JS allows you to interact with the DOM (Document Object Model), so you can do things like:
  * Show and hide elements
  * Animate elements
  * Replace elements with other elements
  * Make requests to the server without reloading the page
  * The DOM is a programmatic representation of all of the HTML elements on the web page.

* Load JavaScript
  * JavaScript can be written directly in HTML through a `script` tag
  * It can also be loaded externally through a `script` tag with a `src` attribute
  * When the browser sees JavaScript, it attempts to run it immediately

### JavaScript Data Types Overview
 * Primitive data types 
    1. Symbol
    2. Undefined
    3. Null
    4. Boolean
    5. Number
    6. String

 * Non-Primitive types, object  
    1. { key : value }
    2. [ array ]
    3. function (){}

Different data types are pass by reference and pass by value.

### Primitives Data Type
* Undefined
  * A variable that is declared but not assigned a value

    ```js
    let someVar
    console.log(someVar) // => undefined
    ```

* Null
  * An assignment value that represents nothing.

    ```js
    let someVar = null
    console.log(someVar) // => null
    ```

* Boolean
  * 6 Falsey values
    * False: `false`
    * Zero: `0`
    * Empty string: `""`
    * Null: `null`
    * Undefined: `undefined`
    * Not a number: `NaN`

  * Truthy values 
  (everything else)

* Number
  * Negative `-1`
  * Exponent `-1e2`
  * Float `-1.1e2`
  * NaN `'hello' * 3`
  * parseInt / parseFloat

      ```js
      parseInt('123')             // => 123
      parseInt('123.456')         // => 123
      parseFloat('123.456')       // => 123.456
      parseInt('one two three')   // => NaN
      ```

* Symbol
  * Only used as somewhat private, unique identifiers for object properties, i.e. object keys. (Don't worry much about these.)

    ```js
    let sym = Symbol()
    console.log(sym) // => Symbol()
    ```

* String
  * `'I'm a string in single quotes'`
  * `"I'm a string in double quotes"`
  * `` `I'm a string template with backticks and interpolation ${'Yay!'}` ``
  * string interpolation `` backticks 

### Primitives Data Type
**Pass-by-Value**
when you declare a variable and pass it to a function, a *copy* of the variable is passed, not the original object in memory.

![toilet-paper-undefined-null](https://i.imgur.com/aorgaMH.png)



### Non-Primitives Data Type
* Array
    * Arrays can contain any data type.

    ```js
    let arr = [1, 2, 3, "a", "b", "c", { hello: 'world' }]  

    arr.indexOf("a")

    for(let i = 0; i < arr.length; i++){
      console.log(arr[i])
    }
    ```


* Object
  * A loaded word in JavaScript. Basically everything that's not a primitive is an object. Objects describe key-value pairs, like hashes in Ruby. They also describe arrays, functions, prototypes, and other complex data types.

  * Object literals
    * Also known as plain-old JavaScript objects (POJOs), these are really simple key-value pairs. The keys are strings (or Symbols), and the values are any data type, including other objects.

      ```js
      const fred = { name: 'Fred', age: 26 }
      const jone = { name: 'Jone' }
      const school = {
        students: [fred, jone]
      }
      ```
    * You access properties of objects in one of two ways: dot-notation or bracket-notation. With the brackets, the value that is passed in needs to evaluate to a String or a Symbol.

      ```js
      const fred = { name: 'Fred', age: 26 }
      const jone = { name: 'Jone' }
      const nameKey = 'name'
      console.log(`${fred.name} is ${fred.age}`) // => "Fred is 26"
      console.log(`My friend's name is ${jone[nameKey]}`) // => "My friend's name is Jone"
      ```

    * destructuring assignment
      ```js
        const obj = {firstName: ‘Jon’, favColor: ‘blue’}
        const {firstName, favColor} = obj
        console.log(firstName,favColor) // ‘Jon’, ‘blue'
      ```

* Function
  * Definition VS invocation. **THIS IS SUPER IMPORTANT**

    ```js
    function functionName() {
      console.log('Pancake technology is truly incredible. What a time to be alive!')
    }

    functionName

    // VS
    functionName()
    ```

  * Another point to note is that _functions always return undefined unless explicitly returning otherwise_. **PLEASE BURN THIS INTO YOUR MEMORY**. There is only one case of implicit returns in JavaScript and that's with one-line arrow functions without braces (more on that later).

  * Function declaration
    * This is simply a variable assignment and a function expression mashed into one. It ALWAYS begins with the `function` keyword and needs a name.

      ```js
      function doSomething() {
        return true
      }

      console.log(doSomething) // f doSomething()
      ```

### Non-Primitives Data Type
**Pass-by-reference**: when you declare a variable and pass it to a function, the object in memory itself is passed, not a copy of the object.





### Type Checking
The original way of checking types, [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof), is a little unreliable when looking at some objects like arrays, which return "object". This works best for primitive values. For example:

```js
typeof 2 //‘number’ 

typeof ‘Jon’ //‘string’

parseInt('DUCK') //NaN

typeof parseInt('DUCK') //'number'

typeof NaN //'number'
```

![wut](https://media.giphy.com/media/IQ47VvDzlzx9S/giphy.gif)




### Variable Declaration
  <!-- * var 
    * The original method of declaring a variable in JS
  
      ```js
      var variableName = 123
      ``` -->

  * let
    * The new way to declaring variables since ES6 in 2015
    * The variable can be reassigned.

      ```js
      let variableName = 234
      ```
  * const 
    * Another way to declare variables as of ES6 in 2015.
    * Variable names CANNOT be reassigned.

      ```js
      const variableName = 345
      ```

### Reassigning the variable
  * let
    ```js
    let variableName = 123
    console.log(variableName)

    variableName = 567
    console.log(variableName)
    ```
  * const
    ```js
    const variableName = 123
    console.log(variableName)

    variableName = 567
    console.log(variableName)
    ```


### Higher-Order Function
  * A Higher-Order Function is any function that operates on any other function, either by taking them in as arguments or returning them.
  
  * In JavaScript, this is facilitated by the fact that functions are First-Class Functions

  ```js
  function outerFunc(callbackFunc){
      return callbackFunc();
  }
  ```

  * In the above example, the Higher-Order function is the outerFunc function because it takes in a callback (cb) and returns the invocation of the callback inside of it.


### Callback Function

  * A callback function is any function that is passed into another function as an argument, which is then invoked inside of the outer function to complete some kind of routine or action.

  * Callback functions can be declared functions, function expressions, or even anonymous functions depending on your needs and the context in which you are using them.

  ```js
  function outerFunc(cb){
      return cb();
  }
  ```

  * Looking at the same example from before, the callback in this case is cb, as it is being passed into the outerFunc function and is invoked inside of it.


## Array Methods
  * To solidify understanding of higher order functions and callbacks, we are going to look at some of the more popular iterative array methods provided for us by JavaScript.
  * Some of the most popular are forEach, map, and reduce

  ### array.forEach() //vals
  * The forEach method takes a callback and runs it once for each element in the array.
  * forEach can also take an optional index argument to keep track of the index that you are currently working with. 
  * forEach function does not mutate the array that it is being operated on, and does not return any value itself.

  ```js
    let numbers = ["h","e", "l", "l", "o", 2, 3, 4, 5, 6, 7, 8 ]

    //1. for loop
    for( let index = 0 ; index < numbers.length; index++ ){
        console.log(numbers[index], index)
    }

    //2. long call back function 
    numbers.forEach(callbackFunc)

    function callbackFunc (m){
        console.log(m)
    }
    //3. arrow function 
    numbers.forEach((item, idx) => {
        console.log(item, idx)}
        )
    //4.  one liner 
    numbers.forEach(( item ) => console.log(item))

    //Quizzzzz iterate this letter
    let letters = ["a", "b", "a", "c", "c"]

    // { a: 2, b: 1, c: 2}
  ```

  ### array.map() 
  * The map method takes a callback function and creates a new array by performing the callback on each array element.
  * map can also take an optional index array.
  * map does not mutate the original array. It instead returns a new array of the same length as the original array with the result of operating the callback function.
   ```js
      // .map 
      const itemArray = [
          {genre: "val1", bpm: "val2"},
          {genre: "hip hop", bpm: 130 },
          {genre: "pop", bpm: 120},
          {genre: "indie rock", bpm: 100}
      ]

      const genreName = itemArray.map ( (eachItemObj) => {
          return eachItemObj.bpm
      })

      console.log(genreName)
    ```
  


### array.reduce() // 1 val
  * The reduce method takes a callback function and an iterator (which can be any data type) and runs the callback on each array element to reduce it to a single value.
  * Your callback should take at least two arguments, which are regularly known as previous and next. These will be used to reduce each value in the array into the iterator, and as such your callback must return a value to be used on the next iteration.
  * Reduce does not mutate the original array, but it does return a new value based on the callback function.


  ```js
    let numbers =[ 2, 5, 20, 9, 3, 5, 7, 100000, 8 , 13]

    // arr.reduce()
    function maxNum ( acc, val) {
        console.log("ACC::", acc, "Current Val::", val)
        if(val > acc){
            acc = val
        }
        return acc;
    }

    let biggestNum = numbers.reduce(maxNum)
    console.log(biggestNum)

    // arr.reduce()
    let biggestNum = numbers.reduce((acc, val) => {
        if (val>  acc){
            console.log(acc, val)
            acc = val
        }
        return acc;
    }, 0)

    console.log(biggestNum)
  ```



---

## Documentation

- **PLEASE ALSO BURN THIS INTO YOUR MEMORY**. Always start with [MDN](https://developer.mozilla.org/en-US/) when looking at JS documentation. W3 Schools is great for HTML and CSS, **NOT SO MUCH FOR JAVASCRIPT**.

(all hail Mozilla)

- **INDENTATION AND PROPER STYLE ARE ALSO SUPER IMPORTANT MOVING FORWARD**. Airbnb has an amazing [JavaScript Style Guide](https://github.com/airbnb/javascript) if you're unsure about how to format your JS code. Trust me, learn to indent properly now before you end up in a curly bracket hellscape.

![who would win, curly boi](https://i.kym-cdn.com/photos/images/facebook/001/257/329/781.jpg)

---


---

## External Resources
- [ECMA](https://en.wikipedia.org/wiki/Ecma_International)
- [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
- [HTTP Request Response Cycle](https://www.oreilly.com/library/view/using-google-app/9780596802462/ch01.html)
- [Browser Wars](https://en.wikipedia.org/wiki/Browser_wars)
- [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich)
- [Netscape](https://en.wikipedia.org/wiki/Netscape)
- [How to use console.log and others](https://console.spec.whatwg.org/#dir)
- [Javascript Equality Table](https://dorey.github.io/JavaScript-Equality-Table/

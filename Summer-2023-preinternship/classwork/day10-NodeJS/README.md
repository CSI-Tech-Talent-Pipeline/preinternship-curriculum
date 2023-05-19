# SWBAT
- [ ] explain what protocol is
- [ ] define front end and backend
- [ ] understand difference between the relational database and the noSQL database
- [ ] explain what API is
- [ ] understands one of the roles of the backend, such as authentication and authorization
- [ ] explain NodeJS, ExpressJS, PostgreSQL
- [ ] Review essential JS concepts
    * - [ ] arrow function
    * - [ ] synchronous code vs asynchronous code
    * - [ ] promise
    * - [ ] async/await
- [ ] Know what node.js is
- [ ] Install Node.js for your operating system
- [ ] Learn how to enter node REPL (Read/Eval/Print/Loop)
- [ ] Be able to define what module is
- [ ] Learn how to get the builtin module
- [ ] Utilize `console` module


## What is protocol?
Frontend (browser) request to backend (server) then backend response with html, css, and js back to the frontend. A protocol describes the syntax and meaning of messages going back and forth between two (or more) communicating parties. In computing, this is generally used for describing network protocols at all levels.

## What is frontend?
Client side

## What is backend?
-Server side where the data is being organized, collected. 
-Backend gets http requests from the browser then it response with data.
-database
-backend needs a way to programmatically access, change and analyze the data stored in the backend.
-Server side of a web application handles tasks such as authorization and authentication.

## How to store data? What are 2 types of databases?
1. relational databases
    tables with columns and rows
    ex) SQL, MYSQL, PostgreSQL
2. non-relational databases (noSQL databases)
    key-value pairs or document storage model
    ex) MongoDB, Redis

## What is an API?
analogy) *favorite track playlist, add, edit, list them, delete. 
         *e-commerce site, price, bought item, then number of available item being added and subtracted.

Create
Reading
Updating
Deleting
information stored in a database

In order to interact with data, back-end includes a webAPI (Application Program Interface)
HTTP request-response cycle

An Application Programming Interface (API) is description of functions/methods/procedures : What parameters they take, what they return and the expected effect of calling it

in the REST API world: The same, but instead of function/method/procedure calls we have HTTP requests and responses.

A protocol is an API, but an API is not necessarily a protocol.

## Authentication (server side logic)
Authentication is the process of validating the identity of a user. ex) credentials  // username : _____ password: ______

## Authorization (server side logic)
Authorization controls which users have access to which resources and actions. ex) admin vs new user

## What is NodeJS?
NodeJs is a runtime environment that lets V8 engines to execute JS code

## What is ExpressJS?
Express.js is a NodeJS framework

## Postgres, Express, React and Node

## Review essential JS concepts
    # Arrow Expression
    Demo code in index.html/index.js and chrome console

    ## Synchronous code(Blocking I/O) VS. Asynchronous Non-Blocking I/O(input/output)
      * synchronous : First line of code gets executed first. From top to bottom. JS is synchronous
      * Asynchronous: Code gets executed from the first line but it executes the asynchronous code separately. NodeJS is asynchronous

      *promise
      -A promise is a JS object that represents the eventual outcome of an asynchronous operation.
      -3 outcomes: 1:pending, 2:fulfilled condition(response/data), 3:rejected condition(error)
      -

      ```js
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
            return response.json()
        })
        .then((data) =>{
            return data
        })
        .catch((err)=>{
            console.error(err)
        })
      ```

      * async/await
      The async...await syntax is a simplified version of promise object. 

      ```js
      const getData = async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
          const data = await response.json()
          return data
      }
      getData()
        .then(data => console.log(data))
        .catch(err => console.error(err))
      ```

### Finally Node JS
-NodeJS is a run time environment that execute JS code with Chrome's V8 engine to build backend web servers.
-invented by Ryan Dahl in 2009
-JS was a client side language but with NodeJS, developers can write server side API with JS
-used by Netflix, Uber, Paypal, eBay and so on 
-https://nodejs.org/api/
-https://developer.mozilla.org/en-US/docs/Web/JavaScript


## Install Node
https://nodejs.org/en/


## 
```
$node                | open REPL (read/eval/print/loop)
$.editor             | open editor
$console.log(global) | 
$Object.keys(global) | list of the properties in the global object
$global.newKey = val | add a new property in the global object
```

## What is module?
Modularity is a software design technique, where one program has distinct parts, each providing a single piece of the overall functionality.

* can be included in other files by using 
```
require()
```
* core modules (built-in modules)
so developers don't have to reinvent the wheel each time.
can be found in lib/

-console
-process
-os
-util

* examples of module
-express
-babel
-console
-util
-os


# How to download and install packages locally
`npm i <package name>`
check `node_modules` folder 


## How to access core modules
```
$require('module').builtinModules
```

## console module
```
$node
$console
```

* then you will see a list of console module's methods, such as .log(), .error(), .table()

```
$console.table(["apples", "oranges", "bananas"]);
```
will print a table
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │ 'apples'  │
│    1    │ 'oranges' │
│    2    │ 'bananas' │
└─────────┴───────────┘

* console is a global module so console methods can be access from anywhere and the `require()` function is not necessary.

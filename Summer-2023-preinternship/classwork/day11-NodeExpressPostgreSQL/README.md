# DAY 11 NODE JS EXPRESS JS POSTGRESQL

# SWBAT 
- [ ] visualize/explain `RESTful API` and `HTTP request`

- [ ] utilize `npm init`

- [ ] install `expressJS` and explain how ExpressJS will be helpful for the application

- [ ] understand importance of `Cors`

- [ ] utilize express by require express module

- [ ] start the postgreSQL server and actively listen to it 

- [ ] choose a better method to run the server (by using `nodemon`) to eliminate having to kill and restart the server for each code updates `npm run watch`

- [ ] create a `middleware`

- [ ] create a postgreSQL database and a table

- [ ] navigate the database hello

- [ ] write `SQL codes` to perform CRUD operation

- [ ] connect the `postgreSQL` `database` and the `server`

- [ ] explain what the `pool` is 

- [ ] define and require pool 

- [ ] `RESTful API/CRUD operation` : explain how RESTful API operates between the client and the database

- [ ] Create, or add new entries

- [ ] Read, retrieve, search, or view existing entries

- [ ] Update, or edit existing entries

- [ ] Delete, deactivate, or remove existing entries

- [ ] utilize `try / catch` structure with `async / await` function


## Applications to download postgreSQL, pgAdmin, postman
* mac users
    * https://postgresapp.com/ and 
    * PostgreGUI(graphic user interface) tool: pgadmin: https://www.pgadmin.org/

* Step by step download https://www.youtube.com/watch?v=fZQI7nBu32M
    * postgresql: https://www.postgresql.org/
    * PostgreGUI(graphic user interface) tool: pgadmin: https://www.pgadmin.org/

* make sure to save the password bc we will be using it often in the future.

* If you have a path issue, when you run psql, use brew
    * https://brew.sh/ `$/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
    * https://formulae.brew.sh/formula/postgresql `$brew install postgresql`
* postman https://www.postman.com/


# REST API

## RESTful API

+------------------+----------------+-----------------+
|       CRUD       |      HTTP      |       SQL       |
+------------------+----------------+-----------------+
|      CREATE      |      POST      |     INSERT      |
+------------------+----------------+-----------------+
|       READ       |       GET      |      SELECT     |
+------------------+----------------+-----------------+
|      UPDATE      |       PUT      |      UPDATE     |
+------------------+----------------+-----------------+
|      DELETE      |     DELETE     |      DELETE     |
+------------------+----------------+-----------------+


![restAPI](https://i.imgur.com/yXrq7qX.png)

* restful API uses transfer protocol in order to run CRUD operation.

* Transfer protocol : HTTP request (Post, Get, Put, Delete)

* Restful API takes the HTTP request then instructs the DB what kinds of CRUD operation needs to be done. 

* CRUD operation does NOT happen in the RESTful API, only happens in the DB.


`$npm init`
## What is npm init?
* `NPM init` will initialize NPM, to manage Node packages. 
* `package.json` file will be created with a summary of your NPM. 
* Modules will be located in the `node_modules` folder.
* NPM will track of all the packages in our application

`$npm i express` 
## What is express?
Express, is a back end web application framework for Node.js, released as free and open-source software. It is designed for building web applications and APIs. Express allows developers to quickly create a server in nodeJS. 

`$npm i pg`
# What is pg?
pg stands for PostgreSQL. It will be our SQL relational database management system.

`SQL vs postgreSQL`
SQL server is a database management system which is mainly used for e-commerce and providing different data warehousing solutions. PostgreSQL is an advanced version of SQL which provides support to different functions of SQL like foreign keys, sub-queries, triggers, and different user-defined types and functions.

`mongoDB vs postgreSQL`
MongoDB is a NoSQL database where each record is a document consisting of key-value pairs that are similar to JSON objects with schemas. 

`benefit of postgre`
-Postgres performed between 4 and 15 times faster than MongoDB across a range of scenarios
-A lot of companies use SQL so it is good to get used to SQL queries.
-Easy to learn!

`$npm i cors` 
## What is `cors`?
* CORS(Cross-Origin Resource Sharing) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. Simply put it allows different domain applications to interact with each other.

ex) The server is going to be running on `localhost:8080` and react will be running on `localhost:4000` Cors will connect the domains.

`$touch index.js`
## create an index.js

## How to use the express module?
On the top of index.js, require express. 

```js
//index.js
const express = require('express')
const app = express(); 
```

## How to start the server?
In order for the server to start, the app needs to listen to the port number. Use the callback function indicating that the server has started.

```js
const PORT = 8080
app.listen(PORT, () => {
 console.log(`SERVER HAS STARTED ON PORT ${PORT} !!!!`)
})
```

* run `node index.js`
- The issue here is that when we change the code every time, it wouldn't automatically update. 
- We don't want to use `$node index.js`, which we constantly have to kill the server terminal and restart whenever there are new changes.

`$npm i nodemon --save -dev`
# Nodemon

## Why use nodemon?
* We don't want to use $node index.js, which we constantly have to kill the server terminal and restart whenever there are new changes.
* Nodemon watches a single file and every time there's any changes, it's going to instantly restart it. 

debug
`nodemon ./index.js` not working
`in the package.json add `  "watch": "nodemon ./index.js",` in the "scripts"`
`$npm run watch`


## If you get an error starting server on 5000 
 $lsof -i tcp:5000 
 get the PID
 $kill -9 <PID digit>
 if still doesn't kill
 $sudo kill -9 <PID digit>

#### If that still doesn't work, work on 4000 or 8080

## What is CORS?
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
```js
//index.js
const cors = require("cors")
```
* CORS(Cross-Origin Resource Sharing) is an HTTP header based mechanism that allows a server to indicate any origins(domain, scheme, or port) other than its own from which a browser should permit loading resources.

* Simply put, Cors allows different domains application to interact with each other. 
ex) The server is going to be running on `localhost:8080` and react will be running on `localhost:4000` Cors will connect the frontend domain host and the backend domain host in order to run the postgres queries.


## How to use middleware?
Middleware is software that lies between an operating system and the applications running on it. Essentially functioning as a hidden translation layer, middleware enables communication and data management for distributed applications.

```js
//index.js
const cors = require("cors")

//middleware
app.use(cors())
app.use(express.json())
```

## Create the postgres database and table

## explain the diagram
### postgresql
* postgreSQL has multiple databases on its own that are not related to your application.
* We will create a database first.
* then will create a table inside of the database.

postgreSQL > database > table

## How to write SQL code
Create a `database.sql` file in the server folder.
We will use this to write sql code to copy and paste later in the command line or in the http request. It's visually easier to use.

## Useful postgreSQL commands

* SQL convention
```
CREATE DATABASE <database name>;

CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);

\l : list all database in postgresql
\c : move inside a database
\dt : show table in database
```

```sql example
CREATE DATABASE flowerBlueapp;

CREATE TABLE flower(
  flower_id SERIAL PRIMARY KEY,
  color VARCHAR(255)
);
```
## What is SERIAL?
The SERIAL data type stores a sequential integer.

## What is the primary key?
Primary key is a unique key that identifies each row in a database table.

## What is VARCHAR(255)?
Allowing 255 characters

## Using `postgres` super admin
`postgres` is the super user that allows the developer to access all the database and tables in the postgres. 


``` t
$psql -U postgres
```
* if psql doesn't run on your local machine, try to `brew install postgresql` or just use the `POSTGRES APP`

* enter the password

* postgres=# Now you are in the postgres database. You need to create a new database.

* How to list all the database in postgresql
postgres=# `\l`

* How to create a new database named `flowerBlueApp`?
```
postgres=# CREATE DATABASE flowerBlueapp;
```

* How to move inside the `flowerBlueApp` database?
```
postgres=# \c flowerBlueapp;
```

* How to show all the tables in the database `flowerBlueapp` ?

```
flowerBlueapp=# \dt; 
```

* How to show one table called, `flower` in the database?
```
SELECT * FROM flower;
```


# Connect the PostgreSQL database and Express server

With the pool from the PG(Pretty Good or PostGre) library, it is pretty easy to connect the postgreSQL database and the Express server. 

## What is Pool?
Pool is a middleware, part of postgres library that connects the postgreSQL database to the server. With the pool, we can run queries with postgreSQL.


* create `db.js` file.
```js
//db.js
const Pool = require("pg").Pool;

const pool = new Pool({
 user: "greem",
 password: "",
 host: "localhost",
 port: "5432",
 database: "flowerBlueapp"
})

module.exports = pool;
```

* add the pool module in the `index.js`

```js
//index.js
const pool = require("./db")
```

* pool.query example
```js
app.get("/flowers", async(req, res) => {
  const allflowers = await pool.query("SELECT * FROM flower");
  res.json(allflowers.rows);
 }
```


# RESTful API Routes with PostgreSQL Queries

## 1. Create (Post) data

## In the POSTMAN app
* Look for the HTTP request, either GET, POST, PUT, DELETE
* specify the route with the URL
* click `body`
* JSON
* ``
* send

## back in the VSC
```js
//routes REST api request
//create a flower
app.post("/flowers", async (req, res) => {
  //1. `app.post("path", async (req, res) => {} )` using `app.post` decides the URL path that you will use, then utilizes the async arrow function.

  try{
  // 2. try / catch

   const {color} = req.body;
  //3. In try, create a new object key called `color` with the object, `req.body`.

  //4. create a new variable called `newflower` using `await` and connect the server and the database using a pool query and add the SQL code.
   const newflower = await pool.query("
   INSERT INTO flower (color) 
   VALUES($1) RETURNING *
   " , [color]
   );

   //5. IT NEEDS TO BE ONE LINE LOL
   //const newflower = await pool.query("INSERT INTO flower (color) VALUES($1) RETURNING *" , [color]);

  //6. Send back the client the `res` as a json data format with the newflower.rows[0] object.
   res.json(newflower.rows[0]);
  } catch(err){
   console.error(err.message)
  }
})
```

`async` request : it's going to take a while to receive the data back from the database. Therefore, utilizing the asynchronous request allows the nodeJS to execute other codes while it's waiting for the db to respond.

`req` request from the client side
`res` response that we are sending back to the client 

`try catch` it catches the errors 



## 2. Read/get all data

* app.get async
* try / catch
* in try, create a variable called `allDatas` 
* use pool.query and insert the SQL code to read all data.
* Test the `GET` request in the Postman

```SQL
SELECT * FROM tableName
```

```js

app.get("/path", async (req, res) => {

  try{
    const allDatas = await pool.query("
    SELECT * FROM flower");

    res.json(allData.rows);
  }catch(err){
    console.error(err.message)
  }

})
```


## 3. Read/get one data
* The path is `/path/:id` : `/:id` allows the path to be dynamic and it will only show that particular row of data that matches the id number.
ex) `/path/12`
* Get the id by using `req.params`
* Create a variable, oneData, with the pool.query and SQL codes, using the `id` 
* Send back the client the `res` as a json data format with the newflower.rows[0] object.

```js
app.get("/path/:id", async (req, res) => {
  try{
    console.log(req.params); // { id: '1' } if the path was "/path/:id" was "/path/1"
    const { id } = req.params; 
    const oneData = await pool.query("
    SELECT * FROM tableName
    WHERE column_id = $1"
    , [id]);
    res.json(oneData.rows[0])
  }catch(err){
    console.error(err.message)
  }
})
```


## 4. UPDATE / PUT one data
* `app.put` with the the path, particular row you want to edit
* async / try/ catch
* define the id using the `req.params` for the row id
* Utilize color with `req.body` to update
* Store the `pool.query` in a variable, `updateData` then use the SQL query to `UPDATE`
* Specify the column the data needs to be updated `SET columnName = $1`
*  Specify the location where the id equals the id `WHERE secondColumn = $2`
*  Return the response back to the client with the "the data was updated"

```js
app.put("/path/:id", async (req, res) => {
  try{
    const { id } = req.params;
    const { color } = req.body
    const updateData = await pool.query("
    UPDATE tableName 
    SET flower_id = $1 //update this with the new color
    WHERE color = $2 //the location where the id equals the id
    ", [id, color])
    res.json("DATA was updated")
  }catch(err){
    console.error(err.message)
  }
})
```


## 5. DELETE one data

* `app.delete` with the `/path/:id` to specify the row to delete
* async/await / try/catch
* define the id with `req.params`
* utilize `pool.query` with the SQL code for delete


```js
app.delete("/path/:id", async (req, res) => {
  try{
  const { id } = req.params;
  const deletedData = await pool.query("DELETE FROM tableName WHERE data_id = $1", [id])
  res.json("::::: One row deleted ::::: ")
  } catch(err){
    console.error(err.message)
  }
})
```

## SWBAT  [Students Will Be Able To]
* [ ] Demonstrate the concept of an Entity Relationship Diagram
* [ ] Define entity
* [ ] Define instance
* [ ] Define attribute
* [ ] Define primary key
* [ ] Explain Cardinality
* [ ] One object to one object relationship
* [ ] one object to many objects relationship
* [ ] Many to many relationship

* [ ] Define Object Relational Mapper (ORM)
* [ ] Distinguish between ORM and SQL
* [ ] Demonstrate that ORMs are the pattern connecting scripting languages and databases


https://docs.google.com/spreadsheets/d/10RYlo0CKgQGOUCMjOpWngAFtWWbJ5D0p5__LYZQdOE0/edit#gid=0

# ERD (Entity Relationship Diagram) (Schema design)
* Entity
* Entity represents a person, place, or thing that you want to track in a database.
* Entity will become a table in the database.
eg) customer table has many customers' info

* Instance
* Instance is a rwo in the table
eg) Single customer row is an instance of the entity customer


* Attribute
* Attribute describes various characteristics about an individual entity.
* Attribute is columns in the table
eg) customer's first name, address, phone number, etc
eg) it's okay if some customers have same name


* Primary Key/Identifier
* Primary key is an attribute that uniquely identifies an instance of the entity.

## Entity Relationship Diagram Relationship
* Relationship
-has
-belongs to
eg) A customer can have 0 to many items
eg) A purchase belongs to a customer and an item

* Cardinality
* The count of instances that are allowed or are necessary between entity relationships.
* Cardinality tells us how many rows we need from one table before we can link it to another table.
* Minimum / Maximum

* Crow's Foot Notation ------------------<
* it represents cardinality 


## One-to-one relationship
A single instance(row) of one entity(table) has a relationship to a single instance(row) of another entity(table).
- eg) country ------- capital
- eg) person ------- passport 
- eg) person ------- driver license number

## One-to-many relationship
A single instance(row) of entity can have a relationship with many instances of another entity.
- eg) customer --------< pizza orders
- eg) employer --------< employees
- eg) bus ------------< passengers
- eg) youtube video ----------< comments
- eg user ------------< tweets
    A User has many Tweets
    A Tweet belongs to a User

https://twitter.com/coffee_dad?lang=en

  
## Many-to-Many relationship
Many instances of an entity can have many instances of another entity.
- eg1) Student ----< enrollment >---- course
- eg2) Customer ----< purchase >---- item
- eg3) Food ----< Review >----- Eater
        A Food has many Reviews
        A Review belongs to a Food
        A Review belongs to a Eater
        A Eater has many Reviews
        A Food has many Eaters through Reviews
        A Eater has many Foods through Reviews

        foods - id, name, cuisine 
        reviews - id, review, food_id, eater_id 
        eaters - id, name

Object - key;value pair, instance of a class, data/behavior
Relational - one - one, one-many, many to many, relational database
Mapper 

ORM: Instead of using SQL queries, ORM sends JS object to the database

![orm-sequelize](https://i.imgur.com/ReEg5nW.png)

# ORM (Object Relational Mapper) (Sequelize)

* What is an ORM?
Object - instance of a class, data/behavior
Relational - many/many, one/many, relational database
Mapper - 

Object–relational mapping is a technique for converting data between incompatible type systems using object-oriented programming languages. 


-Sequalize: Oldest ORM, solid choice, JS ORM, not easiest to learn, not auto migration, 

-TypeORM: can run on NodeJS, better than Sequalize for some developers, naming connection is confusing, better integration with Typescript, have auto migration but not perfect, 

-Prisma: 
better than traditional ORMs. good for typeScript,
It generate entire schema for you


* https://sequelize.org/
* `$ npm install --save sequelize`
* `$ npm install pg-hstore`
deserializing JSON data to hstore format
https://www.npmjs.com/package/pg-hstore

* `npm install express-handlebars`
A Handlebars view engine for Express 
https://www.npmjs.com/package/express-handlebars

```js
//index.js
//require modules
const express = require('express');
const app = express();

const exphbs = require('express-handlebars'); //A Handlebars view engine for Express 
const bodyParser = require('body-parser'); //parses the HTTP request body into a Json object. 
const path = require('path'); //core node module for path
const cors = require('cors'); //domain

//database
const pool = require("./db"); //old database connection

//port digit
const PORT = 8083

const { Sequelize } = require('sequelize');

const sequelizedb = new Sequelize('postgres://greem:@localhost:5422/car') // Example for postgres
//`var sequelize = new Sequelize("postgres://username:password@localhost:5432/databaseName");`

sequelizedb.authenticate()
    .then( () => {
        console.log('Database connected...')
    })
    .catch(err => console.error(err.message))
```
* to make it more organized,
* send the sequelizeDB to `config` folder
* create `config` then `sequlizedb.js`

```js
//config/sequalizedb.js
const { Sequelize } = require('sequelize');

module.exports = new Sequelize('postgres://greem:@localhost:5422/car') // Example for postgres
```

* require sequelize DB in the index.js
```js
//index.js
const sequelizedb = require('./config/sequalizedb');
```

### model
* create model
```js
//models/car.js
const { Sequelize } = require('../config/sequalizedb');
const sequelizedb = require('../config/sequalizedb');

const Car = sequelizedb.define('car', {
    car_id:{
        type: Sequelize.STRING
    },
    color:{
        type: Sequelize.STRING
    },
    name:{
        type: Sequelize.STRING
    },
    price:{
        type: Sequelize.STRING
    }
})

module.exports = Car;
```


### Routes
* R-1  create a folder, `routes`, and file `cars.js`
```js
//routes/cars.js

```

* R-2 require the routes/cars
```js
//index.js
//ROUTES
app.use('/cars', require('./routes/cars'));
```

* R-3 in the index.js and cut all the routes that we built yesterday and bring them to the `routes/cars.js`

* R-4  `routes/cars.js` get express, router then test the get route and export the module
```js
//routes/cars.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send("CARS"))
module.exports = router;

```

* R-5  check `http://localhost:8083/cars`

* R-6 continue and get the actual data from your database.....








# SQL
https://sqlbolt.com/

# Postgres is a TCP server

```js
 try {
const data = await client.query('SELECT * FROM users'); data.rows.forEach(function (rowObject) {
    console.log(rowObject); // { name: 'Claire' }
  });
} catch (err) { console.error(err);
}
``` 
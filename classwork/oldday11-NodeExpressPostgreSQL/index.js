const express = require('express') // requiring express module
const app = express() // app will have access to express
const cors = require("cors")
const pool = require("./db")

const exphbs = require("express-handlebars") // view engine for express
const bodyParser = require("body-parser") //parses HTTP request to JSON obj
const path = require("path") 

const PORT = 8090;
//require('cors') // require cors

const sequelize = require('./config/sequelizedb');


sequelize.authenticate()
    .then( () => {
        console.log(" SEQUELIZE DB has been CONNECTED - ")
    })
    .catch(err => console.error(err.message))



//middleware
app.use(cors());
app.use(express.json());


//ROUTES
app.use('/pizzas', require('./routes/pizzas'))

//post 
app.post("/pizzas", async (req, res) => {
    try{
        ///{"topping": "cheese"}
        
      const { topping } = req.body; //creating a new obj. key is called topping with the object, req.body { topping: cheese }

      const newTopping = await pool.query("INSERT INTO pizzatable (topping) VALUES ($1) RETURNING *", [topping])

      res.json(newTopping.rows[0])

    }catch(err){
        console.error(err.message)
    }
})


//GET ALL
app.get("/pizzas", async (req, res) => {
    try{
        const allToppings = await pool.query("SELECT * FROM pizzatable");
        res.json(allToppings.rows)
    }catch(err){
        console.error(err.message)
    }
})

//GET one data

app.get("/pizzas/:id", async (req, res) => {

    try{
        console.log(req.params)
        const { id } = req.params;
        const oneData = await pool.query(`SELECT * FROM pizzatable WHERE topping_id = $1`, [id])
        res.json(oneData.rows[0])
        
    }catch(err){
        console.error(err.message)
    }
})


//Update
//id, column name, newdata
app.put("/pizzas/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const { topping } = req.body;
        const updateData = await pool.query("UPDATE pizzatable SET topping_id = $1 WHERE topping = $2", [id, topping])

    //  "UPDATE pizzatable 
    //  SET topping_id =  3 //row
    //  WHERE topping = "pineapple" //column
        res.json("Topping was updated")
    }catch(err){
        console.error(err.message)
    }
})



app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING on the port ${PORT} !!`)})
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const authCtrl = require('./controllers/authController');
const itemCtrl = require("./controllers/itemController");
const app = express();

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;
const port = 4000;

app.listen(port, () => {
   console.log(`Running on port, ${port}`) 
})

app.use(express.json());

app.use(
    session({
      secret: SESSION_SECRET,
      resave: true,
      saveUninitialized: false
    })
  );

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log("connected")
  })
  .catch(err => console.log(err));;


// authorization routes
app.post('/auth/register', authCtrl.register);

app.post('/auth/login', authCtrl.login);

app.get('/auth/logout', authCtrl.logout);

//products routes
app.get("/products", itemCtrl.getAllItems)


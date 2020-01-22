require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const authCtrl = require('./controllers/authController');
const itemCtrl = require("./controllers/itemController");
const cartCtrl = require("./controllers/cartController");
const nodemailer = require("nodemailer");

const stripe = require("stripe")("sk_test_TUpCkOMjbyuI7ndRqt2D0qaS00ujNcuwZL");
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

  app.use( express.static( `${__dirname}/../build` ) );

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log("connected")
  })
  .catch(err => console.log(err));
//nodemailer



// authorization routes
app.post('/auth/register', authCtrl.register);

app.post('/auth/login', authCtrl.login);

app.get('/auth/logout', authCtrl.logout);
app.post("/auth/ForgotPassword", authCtrl.sendEmail);
app.put("/auth/ForgotPassword", authCtrl.forgotPassword);
//products routes

app.get("/products/ForMen", itemCtrl.getForMen);
app.get("/products/Beauty", itemCtrl.getCosmetics);
app.get("/products/SkinCare", itemCtrl.getSkinCare);
app.get("/products/Hair", itemCtrl.getHair);

//cart
app.post("/cart", cartCtrl.checkout);
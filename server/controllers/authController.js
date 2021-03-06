const bcrypt = require('bcrypt');

const nodemailer = require("nodemailer")
module.exports = {
    register: async (req, res, next) => {
        const { username, email, password } = req.body;
        const db = req.app.get('db');
        const emailResult = await db.get_user_email(email);
        const existingEmail = emailResult[0];
        if(existingEmail) {
            return res.status(409).send("Email already in use")
        } 
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        const registeredUser =  await db.register_user(username, email, hash);
        const user = registeredUser[0];
        req.session.user = {
            id: user.id,
            username: user.username,
            email: user.email
        };
        res.status(200).send(req.session.user)
    },


    login: async (req, res, next) => {
        const { email, password } = req.body;
        const db = req.app.get('db');
        const emailFound = await db.get_user_email(email);
        const user = emailFound[0];
        if(!user) {
            res.status(401).send("User Not Found");
        } else {
            bcrypt.compare(password, user.password).then(authenticated => {
                console.log(password)
                console.log(user)
                console.log(bcrypt.compare(password, user.password))
                console.log(authenticated)
                if(authenticated) {
                    req.session.user = { 
                        id: user.id,
                        email: user.email,
                        username: user.username
                    }
                    res.status(200).send(req.session.user)
                } else {
                    res.status(403).send("incorrect information")
                }
                
            })
        } 
         
    },

    logout: async (req, res, next) => {
        req.session.destroy();
        res.sendStatus(200);
        console.log(req.session)

    },

    forgotPassword: async (req, res, next) => {
        const { email, password } = req.body;
        const db = req.app.get("db");
        const emailFound = await db.get_user_email(email);
        const userFound = emailFound[0];
        if(!userFound) {
           return res.status(409).send("Email not found")
        }
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        const newPassword = await db.forgot_password(hash, email);
        res.sendStatus(200);

    },

    sendEmail: async (req,res,next) => {
        const { email } = req.body;
        console.log(email)
        console.log(process.env.PASSWORD)
        let transporter = nodemailer.createTransport({
            service: "gmail",
            port : 587,
            secure: false,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD
            }
          });
          let mailOptions = {
            from: "PRO_TOUCH QA",
            to: email,
            subject: "Password",
            text: 'Postcard',
            html: "Password Updated"
          };
          transporter.sendMail(mailOptions, (err, data) => {
            if(err){
                console.log("Error", err)
                res.sendStatus(409)
            } else {
                console.log("email sent")
                res.sendStatus(200)
            }
          })
    },
    deleteAccount: async (req, res, next) => {
        
        const {email} = req.body;
        const db = req.app.get("db");
        const emailResult = await db.get_user_email(email);
        const existingEmail = emailResult[0];
        if(!existingEmail) {
            return res.status(409).send("Email not found")
        } else {
            await db.delete_user(email)
            req.session.destroy();
            
            res.sendStatus(200);
        }
        

    }

}
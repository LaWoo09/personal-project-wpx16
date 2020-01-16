const bcrypt = require('bcrypt');

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

    }
}
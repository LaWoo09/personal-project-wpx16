const products = require("../data.json");

console.log(products) 


module.exports = {
    getAllItems: (req, res, next) => {
        res.status(200).send(products)
    }

}
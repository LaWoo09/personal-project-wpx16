const products = require("../../src/data.json");

console.log(products) 


module.exports = {
    getAllItems: (req, res, next) => {
        res.status(200).send(products)
    },

    getForMen: (req, res, next) => {
        let formen = products.filter(product => product.formen === true);
       res.status(200).send(formen);
       
    }

}
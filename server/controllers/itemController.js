




module.exports = {
    getSkinCare: async (req, res, next) => {
        const db = req.app.get('db');
        const products = await db.get_skincare('skincare');
        res.status(200).send(products)
    },
   
    getForMen: async (req, res, next) => {
        const db = req.app.get('db');
        const products = await db.get_formen(true);
        console.log(products)
        res.status(200).send(products); 
    },

    getCosmetics: async (req, res, next) => {
        const db = req.app.get('db');
        const products = await db.get_cosmetics("cosmetics");
        console.log(products)
        res.status(200).send(products);
       
    },
    getHair: async (req, res, next) => {
        const db = req.app.get('db');
        const products = await db.get_hair("hair");
        console.log(products)
        res.status(200).send(products)
    },

   





}


module.exports = {
    getOrderHistory: async (req, res, next) => {
        const db = req.app.get("db");
        const orders_history = await db.orders_history();
        res.status(200).send(orders_history)
        
    }
}
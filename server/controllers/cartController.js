const stripe = require("stripe")("sk_test_TUpCkOMjbyuI7ndRqt2D0qaS00ujNcuwZL");



module.exports = {
    checkout: async (req, res, next) => {
        console.l
        console.log("Request:", req.body)
        let error;
        let status;
        try {
            const { product, token } = req.body;
            const customer = await stripe.customers.create({
                email: token.email,
                source: token.id
            });
            const charge = await stripe.charges.create({
                amount: null,
                currency: "usd",
                customer: customer.id,
                reciept_email: token.email,
                description: `Purchased the ${null}`,
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip
                    }
                }
            });
            console.log("Charge:", {charge});
            status = "success"
        } catch(error) {
            console.log("Error:", error)
            status = "failure"
        }
    }
}
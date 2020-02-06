 
 
 const stripe = require("stripe")("sk_test_TUpCkOMjbyuI7ndRqt2D0qaS00ujNcuwZL")
 
 
 module.exports = {
    checkout: async (req, res, next) => {
            // recieves request on body
        console.log("Request:", req.body)
        
        let error;
        let status;

        const { token } = req.body
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });
        console.log("the token:", token)
        const charge = await stripe.charges.create({
            amount: 1000 * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email, 
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
        

    }
  }
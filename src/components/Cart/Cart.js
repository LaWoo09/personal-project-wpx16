import React from "react";
import { Button, Card, CardSubtitle, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {removeFromCart} from "../../redux/reducer";
import axios from "axios"
import {toast} from "react-toastify";

toast.configure();
class Cart extends React.Component {
    constructor() {
        super();
        this.deleteFromCart = this.deleteFromCart.bind(this);
        this.handleToken = this.handleToken.bind(this);
    }

    deleteFromCart(index) {
        const { cart } = this.props;
        cart.splice(index, 1);
        this.props.removeFromCart(cart);
           
    }

    async handleToken (token, addresses, products) {
        console.log({token, addresses})
        
       const response = await axios.post("/cart", { token, addresses });
        const {status} = response.data;
        if(status === "success") {
          toast("success", {type: "success"})
        } else {
            toast("Error", {type: "error"})
        }
       

    }

    
   

    render() {
        
        const { cart } = this.props;
        
        
        const totals = cart.map(product => {
            
            return  product.product_price ;
            
        });
       const allTotals = totals.reduce((acc, cV) => {
           return acc + cV
       },0)
       
      console.log(this.props)
     
        const mappedItems = cart.map((product, index) => {
            return <div key={index}>  
                        <Card key={index}>
                              <CardImg src={product.img} alt="item-img"/>
                            <CardBody>
                                <CardTitle>{product.product_name}</CardTitle>
                                <CardSubtitle>${product.product_price}</CardSubtitle>
                                <CardText>{product.desription}</CardText>
                                <Button onClick={() => this.deleteFromCart(index)}>Delete</Button>
                            </CardBody>
                        </Card>      
                    </div>    

        })

        return (
            <div>
                
                {this.props.cart.length > 0 ? (<div>
                    <div>{mappedItems}</div>
                    <div>
                    <div>Total:${allTotals}</div>
                        <StripeCheckout stripeKey="pk_test_fmciBAtTdkCdeMAM0R0aM77h00sVcqhpVF"
                         token={this.handleToken}
                         billingAddress
                         shippingAddress
                         amount={allTotals * 100}
                         name={this.props.cart.product_name}
                        />
                    </div>
                </div>) : null}





               
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}



export default connect(mapStateToProps,{removeFromCart})(Cart);
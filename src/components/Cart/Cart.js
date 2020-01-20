import React from "react";
import { Button, Card, CardSubtitle, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";



class Cart extends React.Component {

    deleteFromCart() {
        const { cart } = this.props;
        if(cart.includes(this.props.product)){
        let index = cart.indexOf(this.props.product)
        let result = cart.splice(index, 1);
       this.setState({
           cart: result
       })
    } else {
        return;
    }
    }

    handleToken(token, addresses) {
        console.log({token, addresses})

    }
   

    render() {
        
        const { cart } = this.props;
        console.log(cart);
        const mappedItems = cart.map((product, index) => {
            return <div key={index}>
                    <Card>
                        <CardImg src={product.img} alt="item-img"/>
                        <CardBody>
                            <CardTitle>{product.product_name}</CardTitle>
                            <CardSubtitle>${product.product_price}</CardSubtitle>
                            <CardText>{product.desription}</CardText>
                            <Button onClick={this.deleteFromCart}>Delete</Button>
                        </CardBody>
                    </Card>
                    <StripeCheckout stripeKey="pk_test_fmciBAtTdkCdeMAM0R0aM77h00sVcqhpVF"
                    token={this.handleToken}
                    billingAddress
                    shippingAddress
                    amount={product.product_price * 100}
                    name={product.product_name}/>
                     </div>
        })

        return (
            <div>
               { mappedItems }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}



export default connect(mapStateToProps)(Cart);
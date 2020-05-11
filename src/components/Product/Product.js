import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../../redux/reducer"

class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            price: this.props.product.product_price
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.addToCart = this.addToCart.bind(this);
      
       
    }

    increment() {
        const { product_price } = this.props.product
        this.setState({
            count: this.state.count + 1,
            price: this.state.price + product_price
        }); 
    }

    decrement() {  
        const { product_price } = this.props.product  
        if(this.state.count !== 1) {
            this.setState({
                count: this.state.count - 1,
                price: this.state.price - product_price
            })
        } else {
            return;
        }
    }

    addToCart() {
        const { cart } = this.props;
        if(!cart.includes(this.props.product)) {
            let newPrice = this.props.product.product_price * this.state.count
            this.props.product.qty = this.state.count;
            this.props.product.product_price = newPrice
            this.props.addToCart(this.props.product);
        } else {
            this.props.product.qty = this.props.product.qty + this.state.count; 
            this.props.product.product_price = this.props.product.product_price + this.state.price;  
        } 
    }

   
    
    render() { 
        const { product } = this.props;
        return (
            <div >
                <div><label>Name:{product.product_name}</label></div>
                <img src={product.img} alt="product-img"/>
                <div>Price:${this.state.price}</div>
               
                <div><button onClick={this.decrement}/>Qty:{this.state.count}<button onClick={this.increment}/></div>
                <button onClick={this.addToCart}>Add To Cart</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps,{addToCart})(Product);
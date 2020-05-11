import React from "react";
import axios from "axios";
import Product from "../Product/Product"
import { connect } from "react-redux";

class SkinCare extends React.Component {
    constructor() {
        super();
       this.state = {
        skincare: []

       }
    }

    componentDidMount() {
        this.getSkincare();
    }

    getSkincare() {
        axios.get("/products/SkinCare").then(res => {
            this.setState({
                skincare: res.data
            })
        })
    }

    render() {
        const { skincare } = this.state
        const mappedItems = skincare.map(product => {
            return <Product key={product.product_id} product={product}/>
        }) 
            
        
        return (
            <div className='skinItems'>
                {mappedItems}
            </div>
        )
    
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(SkinCare);


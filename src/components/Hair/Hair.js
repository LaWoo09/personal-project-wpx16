import React from "react";
import axios from "axios";
import Product from "../Product/Product"



class Hair extends React.Component {
    constructor() {
        super();
        this.state = {
            hair: []
        }
        this.getHair = this.getHair.bind(this)
    }

    componentDidMount() {
        this.getHair();
    }

    getHair() {
        axios.get("/products/Hair").then(res => {
            this.setState({
                hair: res.data
            })
        })
    }

    render() {
        const { hair } = this.state;
        const mappedItems = hair.map(product => {
            return <Product key={product.product_id} product={product}/>
        })
        return (
            <div className="hair">
                {mappedItems}
            </div>
        )
    }
}


export default Hair;
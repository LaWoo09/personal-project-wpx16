import React from "react";
import Product from "../Product/Product"
import axios from "axios";

class Beauty extends React.Component {
    constructor() {
        super();
        this.state = {
            cosmetics: []
        }
        this.getCosmetics = this.getCosmetics.bind(this)
    }

    componentDidMount() {
        this.getCosmetics();
    }

    getCosmetics() {
        axios.get("/products/Beauty").then(res => {
            this.setState({
                cosmetics: res.data
            })
        })
    }

    render() {
        const { cosmetics } = this.state;
        const mappedItems = cosmetics.map(product => {
            
            return <Product key={product.product_id} product={product}/>
        })
        return(
            <div>
                {mappedItems}
            </div>
        )
    }
}

export default Beauty;
import React from "react";
import axios from "axios";
import Product from "../Product/Product"
import "./ForMen.css"

class ForMen extends React.Component {
    constructor(){
        super();
        this.state = {
            formen: []
        }
        this.getForMen = this.getForMen.bind(this);
        
    }

    componentDidMount() {
        this.getForMen();
    }

    getForMen() {
        axios.get("/products/ForMen").then(res => {
            this.setState({
                formen: res.data
            })
        })
    }


    render() {
        const { formen } = this.state;
        const mappedItems = formen.map(product => {
           
            return <Product key={product.product_id} product={product}/>
        })

        return (
        <div className="ForMen">
            {mappedItems}
        </div>
        )
    }

}

export default ForMen;
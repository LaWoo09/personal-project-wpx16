import React from "react";
import axios from "axios";

class Orders extends React.Component {
    constructor() {
        super();
        this.state = {
            orders: []
        }
    }
    componentDidMount() {
        
    }

    getOrderHistory() {
       axios.get("/orders_history").then(res => {
           this.setState({
               orders: res.data
           })
       })
    }

    redner() {
        return (
            <div>

            </div>
        )
    }
}

export default Orders;
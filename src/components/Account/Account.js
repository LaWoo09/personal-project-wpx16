import React from "react";
import { Dropdown, Input } from "semantic-ui-react";
import { connect } from "react-redux";




class Account extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            editing: false
        }
        this.isEditing = this.isEditing = this.isEditing.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

isEditing() {
    this.setState({
        editing: !this.state.isEditing
    })
}


changeHandler(key, value) {
    this.setState({
        [key]: value
    })
}


    render() {
     
        return (
            <div>
               
               <button>Delete Account</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(Account);
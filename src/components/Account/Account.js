import React from "react";
import { Dropdown, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import axios from "axios";




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
        this.deleteAccount = this.deleteAccount.bind(this);
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

deleteAccount() {
    const { email } = this.props.user
    axios.delete("/auth/Account", {email})
}


    render() {
     console.log(this.props)
        return (
            <div>
               <div><input/></div>
               <button onClick={this.deleteAccount}>Delete Account</button>
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
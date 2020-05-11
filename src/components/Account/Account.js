import React from "react";
import { Dropdown, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import axios from "axios";




class Account extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
        }
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
    const { email } = this.state
    axios.delete("/auth/Account", {email})
}


    render() {
     console.log("ok:", this.props.user)
     console.log(this.state.email)
        return (
            <div>
               <div> 
                   <input
                     name="email" required onChange={(event) => this.changeHandler(event.target.name, event.target.value)} 
                    type="text"
                    placeholder="Email"
                    />
                </div>
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
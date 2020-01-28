import React from "react";
import axios from "axios";



class ForgotPassword extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            confirmedPassword: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.sendEmail = this.sendEmail.bind(this);

    }

    changeHandler(key, value) {
        this.setState({
            [key]: value
        })
    }

    sendEmail() {
        const { email } = this.state;
        axios.post("/auth/ForgotPassword", { email }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
            
        
    }

    updatePassword() {
        const { email, password } = this.state;
        axios.put("/auth/ForgotPassword", { email, password }).then(() => {
            this.sendEmail();
            
            }).then(() => {
                this.setState({
                    email: "",
                    password: ""
            });
           
            this.props.history.push("/")
        });
    }

    render() {
        return(
            <div>
                <div>Please Enter your email:<input 
                name="email" 
                type="email" 
                onChange={(event) => this.changeHandler(event.target.name, event.target.value)}
                placeholder="email"/></div>
                <div>Please enter new password:<input 
                name="password" 
                type="password"
                onChange={(event) => this.changeHandler(event.target.name, event.target.value)}
                placeholder="password"/></div>
                <button onClick={this.updatePassword}>Submit</button>
            </div>
        )
    }
}

export default ForgotPassword;
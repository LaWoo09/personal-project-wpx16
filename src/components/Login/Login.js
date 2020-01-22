import React from "react";
import axios from "axios";
import { connect } from "react-redux"
import { setUser } from "../../redux/reducer"
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    changeHandler(key, value) {
        this.setState({
            [key]: value
        })
    }

    login() {
        const { email, password } = this.state;
        axios.post("/auth/login", { email, password }).then(user => {
           this.props.setUser(user)
            this.setState({
             email: "",
             password: ""
         })
            this.props.history.push('/')
        }).catch(err => {
            this.setState({email: "", password: ""})
            alert(err.response.request.response);
        })
    }
  

    render() {
        return (
            <div>
                <div>
                    <input
                     name="email" required onChange={(event) => this.changeHandler(event.target.name, event.target.value)} 
                    type="text"
                    placeholder="Email"
                    />
                </div>
                 <div>
                    <input
                    name="password"
                    type="password"
                    onChange={(event) => this.changeHandler(event.target.name, event.target.value)}
                    placeholder="password"
                    />
                </div>
                <button onClick={()=> this.login()}>LOGIN</button>
            </div>
        )
    }

}

export default connect(null, {setUser})(Login);
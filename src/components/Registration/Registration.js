import React from "react";
import axios from "axios";
import { setUser } from "../../redux/reducer"
import { connect } from "react-redux"


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            error: {
                username: false,
                email: false,
                password: false
            }
        }
    }


    changeHandler(key, value) {
        this.setState({
            [key]: value
        })
    }
    
   
    

    async register() {
        const { username, email, password } = this.state;
        await axios.post("/auth/register", { username, email, password }).then(user => {
        this.props.setUser(user)
            this.setState({
                username: "",
                email: "",
                password: ""
            });
            this.props.history.push('/')
            
        })
    }

   

    render() {
        
        return (
            <div>
                 <div>
                    <input
                     name="username"  
                     onChange={(event) => this.changeHandler(event.target.name, event.target.value)} 
                    type="text"
                    placeholder="Username"
                    />
                </div>
                <div>
                    <input
                     name="email"  
                     onChange={(event) => this.changeHandler(event.target.name, event.target.value)} 
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
                <button onClick={()=> this.register()}>Sign Up</button>
            </div>
        )
    }

}


export default connect(null, {setUser})(Registration);
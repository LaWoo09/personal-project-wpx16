import React from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { logout } from "../../redux/reducer"
import axios from "axios";
import "./Header.css"


function Header(props) {
    const { user } = props;
    const logout = () =>  {
        axios.get("/auth/logout").then(() => {
            props.logout()
            props.history.push('/')
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    
        
        return (
            <div className="container">
                {!user ?<div> <div><Link to="/auth/login">Login</Link> / <Link to="/auth/register">Sign-Up</Link></div> 
               <div><Link to="/auth/ForgotPassword">Forgot Password</Link></div>
               </div>
                :
                <div><Link to="/" onClick={logout}>Logout</Link> / <Link to="/auth/Account">Account</Link>
                <h1>Welcome, {user.username.toUpperCase()}</h1><Link to="/cart">Cart</Link></div>}
                <img src="https://via.placeholder.com/150" alt="logo"/>
                <h1 className="business">PRO-TOUCH</h1>
                <p className="mission">the connection between love, beauty and hair</p>
                <Navbar/>
            </div>
           
        )  
}

const mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps,{logout})(Header)
import React from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { logout } from "../../redux/reducer"
import axios from "axios";



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
            <div>
                {!user ? <div><Link to="/auth/login">Login</Link> / <Link to="/auth/register">Sign-Up</Link></div> 
                : <div><Link to="/" onClick={logout}>Logout</Link>
                <h1>Welcome, {user.username.toUpperCase()}</h1><Link to="/cart">Cart</Link></div>}
                <p>THE CONNECTION BETWEEN <img src="https://via.placeholder.com/150

C/O https://placeholder.com/" alt="logo"/>LOVE, BEAUTY, AND HAIR</p>
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
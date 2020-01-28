import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"



export default function Navbar() {
    
    return <div className="Navbar">
        <Link to="/products/SkinCare">Skin Care</Link>
        <Link to="/products/Beauty">Beauty</Link>
        <Link to="/products/ForMen">For Men</Link>
        <Link to="/products/Hair">Hair</Link>
    </div>
}
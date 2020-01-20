import React from "react";
import {  Switch, Route } from "react-router-dom";

import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Cart from "./components/Cart/Cart";
import Beauty from "./components/Beauty/Beauty";
import Hair from "./components/Hair/Hair";
import SkinCare from "./components/SkinCare/SkinCare";
import ForMen from "./components/ForMen/ForMen";


export default (
    <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/auth/register" component={Registration}/>
        <Route path="/auth/login" component={Login}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/products/Beauty" component={Beauty}/>
        <Route path="/products/Hair" component={Hair}/>
        <Route path="/products/ForMen" component={ForMen}/>
        <Route path="/products/SkinCare" component={SkinCare}/>
    </Switch>
)
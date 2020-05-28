import React, {Component} from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Cart from "./CartComponent";

class Main extends Component{

    constructor(props){
        super(props);
        
    }

    render(){

        const HomePage = ()=>{
            return(
                <Home />
            );
        }

        return(
            <div className="main">
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/menu" component={Menu} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route path="/cart" component={Cart} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
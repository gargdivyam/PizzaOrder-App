import React from "react";
import { Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';
import Menu from "./MenuComponent";
import {Route, Link} from 'react-router-dom';



function RenderCardone(){
    return(
        <Card>
            <CardImg src="image/pizzaItaliano.jpg" alt="Pizza Italioano" />
            <CardBody style={{backgroundColor:"grey"}}>
                <CardTitle><b>Pizza Italioano</b></CardTitle>
                <CardText>Authentic Italian pizzas are based with nonna's special fresh tomato sauce.
                    This rich sauce must be prepared with peeled Italian tomatoes, preferably with San Marzano peeled tomatoes, 
                    and then blanched with salt, fresh basil.</CardText>
            </CardBody>
        </Card>
    );
}

function RenderCardtwo(){
    return(
        <Card>
            <CardImg src="image/cheeseBurst.jpg" alt="CheeseBurst" />
            <CardBody style={{backgroundColor:"grey"}}>
                <CardTitle><b>CheeseBurst Pizza</b></CardTitle>
                <CardText>A unique and popular pizza type which has a thick crust with yummy liquid or molten cheese inside. 
                    the topping and the spread used in this recipe is very similar to any other pizza, 
                    but is filled with molten cheese in it.</CardText>
            </CardBody>
        </Card>
    );
}

function RenderCardthree(){
    return(
        <Card>
            <CardImg src="image/classic.jpg" alt="Classic Pizza" />
            <CardBody style={{backgroundColor:"grey"}}>
                <CardTitle><b>Classic Pizza</b></CardTitle>
                <CardText>Farmhouse Pizza is one of the most popular pizza, so learn how to make it at home. 
                    The concept of farmhouse pizza is adding toppings which are available in all seasons and they compliment perfectly to each other.</CardText>
            </CardBody>
        </Card>
    );
}

function Home(){

    return(
        <div className="container">
            <div className="homecontent">
                <h3 className="welcomefont">Welcome To Pizza.com</h3>
                <p className="homepara">WE DELIVER YOU THE BEST PIZZA.</p>
                <Link to="/menu" className="btn btn-outline-warning" >Order now </Link>
                <div className="row align-items-start">
                     <div className="col-12 col-md m-1">
                        <RenderCardone />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCardtwo />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCardthree />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
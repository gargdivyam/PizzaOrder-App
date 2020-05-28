import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import Cart from "./CartComponent";
import { addToCart } from "../Actions/action";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';




function Menu({products,addToCart}) {

    
  

    function RenderItem1() {
        return (
            <div style={{ textAlign: "center" }}>
                <Card>
                    <CardImg src="/image/my-vegpizza.jpg" alt="Veg Pizza" />
                    <CardTitle><b>Veg Pizza</b></CardTitle>
                    <CardText>Price: <b>$5</b></CardText>
                </Card>
                <button type="button" className="btn btn-primary" onClick={() => addToCart(0)}>Add to cart</button>            
            </div>

        );
    }

    function RenderItem2() {
        return (
            <div style={{ textAlign: "center" }}>
                <Card>
                    <CardImg src="/image/Panner_Veggie-1.jpg" alt="Panner Pizza" />
                    <CardTitle><b>Paneer Vegie</b></CardTitle>
                    <CardText>Price: <b>$8</b></CardText>
                </Card>
                <button type="button" className="btn btn-primary" onClick={() => addToCart(1)}>Add to cart</button>
            </div>
        );
    }

    function RenderItem3() {
        return (
            <div style={{ textAlign: "center" }}>
                <Card>
                    <CardImg src="/image/deluxCorn.jpg" alt="Corn Pizza" />
                    <CardTitle><b>Deluxe Corn</b></CardTitle>
                    <CardText>Price: <b>$8.85</b></CardText>
                </Card>
                <button type="button" className="btn btn-primary" onClick={() => addToCart(2)}>Add to cart</button>
            </div>
        );
    }

    function RenderItem4() {
        return (
            <div style={{ textAlign: "center" }}>
                <Card>
                    <CardImg src="/image/Paneer_Makhni-1.jpg" alt="PaneerMakni Pizza" />
                    <CardTitle><b>Paneer Makhni Pizza</b></CardTitle>
                    <CardText>Price: <b>$10</b></CardText>
                </Card>
                <button type="button" className="btn btn-primary" onClick={() => addToCart(3)}>Add to cart</button>
            </div>
        );
    }

    function RenderItem5() {
        return (
            <div style={{ textAlign: "center" }}>
                <Card>
                    <CardImg src="/image/pannerOnion.jpg" alt="Paneer Onion Pizza" />
                    <CardTitle><b>Paneer Onion Pizza</b></CardTitle>
                    <CardText>Price: <b>$7.90</b></CardText>
                </Card>
                <button type="button" className="btn btn-primary" onClick={() => addToCart(4)}>Add to cart</button>
            </div>
        );
    }

    function RenderItem6() {
        return (
            <div style={{ textAlign: "center" }}>
                <Card>
                    <CardImg src="/image/Vegoverloaded.jpg" alt="Veg Overloaded Pizza" />
                    <CardTitle><b>Vez Overloaded Pizza</b></CardTitle>
                    <CardText>Price: <b>$11</b></CardText>
                </Card>
                <button type="button" className="btn btn-primary" onClick={() => addToCart(5)}>Add to cart</button>
            </div>
        );
    }

    function RenderItem7() {
        return (
            <div style={{ textAlign: "center" }}>
                <Card>
                    <CardImg src="/image/Double_Cheese_Margherita.jpg" alt="Double Cheese Margherita" />
                    <CardTitle><b>Double Cheese Margherita</b></CardTitle>
                    <CardText>Price: <b>$6.80</b></CardText>
                </Card>
                <button type="button" className="btn btn-primary" onClick={() => addToCart(6)}>Add to cart</button>
            </div>
        );
    }

    function RenderItem8() {
        return (

            <div style={{ textAlign: "center" }}>
                <Card>
                    <CardImg src="/image/Chickenoverloaded.png" alt="chicken Pizza" />
                    <CardTitle><b>Chicken Overloaded</b></CardTitle>
                    <CardText>Price: <b>$12.75</b></CardText>
                </Card>
                <button type="button" className="btn btn-primary" onClick={() => addToCart(7)}>Add to cart</button>
            </div>
        );
    }

    function RenderItem9() {
        return (
            <div style={{ textAlign: "center" }}>
                <Card>
                    <CardImg src="/image/PanPizza1.jpg" alt="Pan Pizza" />
                    <CardTitle><b>Pan Pizza</b></CardTitle>
                    <CardText>Price: <b>$11.5</b></CardText>
                </Card>
                <button type="button" className="btn btn-primary" onClick={() => addToCart(8)}>Add to cart</button>
            </div>
        );
    }

   

    return (
        <div className="menuitem">
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                        <BreadcrumbItem><Link to="/cart" >Cart</Link></BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row align-items-start">
                    <div className="col-sm">
                        <RenderItem1 />

                    </div>
                    <div className="col-sm">
                        <RenderItem2 />
                    </div>
                    <div className="col-sm">
                        <RenderItem3 />
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col-sm">
                        <RenderItem4 />
                    </div>
                    <div className="col-sm">
                        <RenderItem5 />
                    </div>
                    <div className="col-sm">
                        <RenderItem6 />
                    </div>
                    <div className="row align-items-start">
                        <div className="col-sm">
                            <RenderItem7 />
                        </div>
                        <div className="col-sm">
                            <RenderItem8 />
                        </div>
                        <div className="col-sm">
                            <RenderItem9 />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


const mapStateToProps = (state) =>{
    return{
        products: state.products
 };

}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch,
        addToCart: id => dispatch(addToCart(id))
    }

}



export default connect(mapStateToProps,mapDispatchToProps)(Menu);
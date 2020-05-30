import React,{Component} from "react";
import {Breadcrumb, BreadcrumbItem, Label, Input, Modal, ModalBody, ModalHeader, ModalFooter, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { Jumbotorn } from 'reactstrap';
import { Link } from "react-router-dom";
import { addQuantity , subtractQuantity, emptyCart, removeFromCart } from "../Actions/action";
import { Card } from 'reactstrap';


class Cart extends Component{

    constructor(props){
        super(props);
        this.state={
            show: false,
            isAvail: false
        };
        
    }
    handleModal(){
        this.setState({show: !this.state.show})
    }

    handleCheckout(){
        this.setState({isAvail: !this.state.isAvail})
        alert("Your order has been confirmed. Thank you for ordering on pizza.com");
    }
   

    render(){
        const {products, addQuantity, subtractQuantity, emptyCart} = this.props;
       // console.log(this.props);
        const productList = products.length ? (
            products.filter(product=>{return product.quantity>=1}).map(product=>{
                return(
                    <div className="cart" key={product.id}>
                       <div className="card" style={{width:"40rem"}}>
                           <ul className="list-group list-group-flush">
                                <li>
                                    <img src={product.image} height="90px" />
                                    <b>{product.name}</b>    <button type="button" className="btn btn-primary btn-sm" onClick={()=>subtractQuantity(product.id)}>-</button>  {product.quantity}
                                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>addQuantity(product.id)}>+</button> 
                                       <b>Price : ${product.quantity*product.price}</b>
                                </li>
                           </ul>
                       </div>
                    </div>
                )})
        ) : (
            <div className="center">Nothing in the cart</div>
        )

        const totalprice = ()=>{
            var total = 0;
            products.forEach(item =>total = total + item.quantity * item.price);
            return total;
        }
        

       
      //  let addModalClose = ()=> this.setState({addModalShow: false});

        return(
            <div className="containercart">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active> Cart</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                
                <div className="jumbotron">
                {productList}
                </div>
                <div style={{textAlign:"center"}}>
                        <button className="btn btn-outline-danger" onClick={()=>emptyCart()}>Delete</button>
                </div>
                <div className="totalprice" style={{textAlign:"center"}}><h3>Total Price: ${totalprice()}</h3>
                
                </div>
                <div>
                <button className="btn btn-outline-dark" onClick={()=>this.handleModal()}>Add Address</button>
                </div>
                <div>
                <button className="btn btn-success" onClick={()=>this.handleCheckout()}>Confirm Order</button>
                </div>
                
                <Modal show={this.state.show}>
                    <ModalHeader>
                            Add Address
                    </ModalHeader>
                    <ModalBody>
                        <div className="contaier">
                            <Label htmlFor="pincode">Pincode</Label>
                            <Input type="number" placeholder="Pincode" name="pincode" id="pincode" />
                            <Label htmlFor="House No.">House No./Building name</Label>
                            <Input type="text" placeholder="House No., Building name*" name="houseno" id="houseno" />
                            <Label htmlFor="Road name">Road Name, Area Colony</Label>
                            <Input type="text" placeholder="Road Name, Area Colony*" name="area" id="area" />
                            <Label htmlFor="City">City</Label>
                            <Input type="search" placeholder="City" name="city" id="city" />
                            <Label htmlFor="State">State</Label>
                            <Input type="search" placeholder="State" name="citystate" id="citystate" />
                            <Label htmlFor="Name">Name</Label>
                            <Input type="text" placeholder="Name" name="name" id="name"/>
                            <Label htmlFor="mobile number">Mobile Number</Label>
                            <Input type="number" placeholder="10-digit mobile number*" name="mobilenumber" id="mobilenumber" />
                        </div>    
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="danger" onClick={()=>this.handleModal()}>Save</Button>
                    </ModalFooter>
                </Modal>
                
                

               
                
            </div>
        )
         
    }
}

const mapStateToProps = (state) =>{
    return{
        products: state.products
 };

}

const mapDispatchToProps = (dispatch)=>{
    return{
        addQuantity: id=>dispatch(addQuantity(id)),
        subtractQuantity : id=>dispatch(subtractQuantity(id)),
        emptyCart : ()=>dispatch(emptyCart()),
        removeFromCart : ()=>dispatch(removeFromCart())
        }
    }


export default connect(mapStateToProps,mapDispatchToProps)(Cart);
import React,{Component} from "react";
import {Breadcrumb, BreadcrumbItem, Label, Input, Modal, ModalBody, ModalHeader, ModalFooter, Button, Form, FormGroup} from 'reactstrap';
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
        this.handleModal = this.handleModal.bind(this);
        this.handleCheckout = this.handleCheckout.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        
    }
    handleModal(){
        this.setState({
            show: !this.state.show
        });
    }

    handleCheckout(){
        this.setState({isAvail: !this.state.isAvail})
        alert("Your order has been confirmed. Thank you for ordering on pizza.com");
    }

    handleAddress(event){
        this.handleModal();
        alert("Pincode: " + this.pincode.value + "House No: "+ this.houseno.value + "Area:"+ this.area.value+ "city: "+this.city.value+
        "State: "+this.citystate.value+ "Name: "+this.name.value+ "Mobile No: "+this.mobilenumber.value);
        event.preventDefault();
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
                <div style={{textAlign:"center"}}>
                <button className="btn btn-outline-dark" onClick={()=>this.handleModal()}>Add Address</button>
                </div>
                <div style={{textAlign:"center"}}>
                <button className="btn btn-success" onClick={()=>this.handleCheckout()}>Confirm Order</button>
                </div>
                
                <Modal show={this.state.show} toggle={this.handleModal}>
                    <ModalHeader toggle={this.handleModal}>
                            Add Address
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleAddress}>
                            <FormGroup>
                            <Label htmlFor="pincode">Pincode</Label>
                            <Input type="number" placeholder="Pincode" name="pincode" id="pincode" 
                            innerRef={(input)=>this.pincode=input}/>
                            </FormGroup>
                            <FormGroup>
                            <Label htmlFor="houseno">House No./Building name</Label>
                            <Input type="text" placeholder="House No., Building name*" name="houseno" id="houseno" 
                            innerRef={(input)=>this.houseno=input}/>
                            </FormGroup>
                            <FormGroup>
                            <Label htmlFor="area">Road Name, Area Colony</Label>
                            <Input type="text" placeholder="Road Name, Area Colony*" name="area" id="area" 
                            innerRef={(input)=>this.area=input}/>
                            </FormGroup>
                           <FormGroup>
                           <Label htmlFor="city">City</Label>
                            <Input type="search" placeholder="City" name="city" id="city" 
                            innerRef={(input)=>this.city=input}/>
                           </FormGroup>
                            <FormGroup>
                            <Label htmlFor="citystate">State</Label>
                            <Input type="search" placeholder="State" name="citystate" id="citystate" 
                            innerRef={(input)=>this.citystate=input}/>
                            </FormGroup>
                            <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" placeholder="Name" name="name" id="name"
                            innerRef={(input)=>this.name=input}/>
                            </FormGroup>
                            <FormGroup>
                            <Label htmlFor="mobilenumber">Mobile Number</Label>
                            <Input type="number" placeholder="10-digit mobile number*" name="mobilenumber" id="mobilenumber" 
                            innerRef={(input)=>this.mobilenumber=input}/>
                            </FormGroup>
                            
                        </Form>    
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" value="submit" className="bg-danger">Save</Button>
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
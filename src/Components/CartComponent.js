import React,{Component} from "react";
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { Jumbotorn } from 'reactstrap';
import { Link } from "react-router-dom";
import { addQuantity , subtractQuantity, emptyCart, removeFromCart } from "../Actions/action";
import { Card } from 'reactstrap';
//import { TextField } from '@material-ui/core';
import {Modal, Button} from 'react-bootstrap';

class Cart extends Component{

    constructor(props){
        super(props);
        this.state={
            show: false
        }
    }
    handleModal(){
        this.setState({show: !this.state.show})
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
                
                    <button className="btn btn-success" onClick={()=>this.handleModal()}>Confirm order</button>
                </div>
                <Modal show={this.state.show}>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Address
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <input type="number" placeholder="Pincode" />
                            <input type="text" placeholder="House No., Building name*" />
                            <input type="text" placeholder="Road Name, Area Colony*" />
                            <input type="search" placeholder="City*" />
                            <input type="text" placeholder="State*" />
                            <input type="text" placeholder="Name*" />
                            <input type="number" placeholder=" 10-digit mobile number*" />
                            
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={()=>this.handleModal()}>Save</Button>
                    </Modal.Footer>
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
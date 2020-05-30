import React, {Component} from "react";
import { Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";


class Confirm extends Component{

    constructor(props){
        super(props);
        this.state = {
            Avail: false
        }
    }

    handleFeedbackModal(){
        this.setState({
            Avail: !this.state.Avail
        });
    }

    handleFeedBack(event){
        this.handleFeedbackModal();
        alert("Name: " + this.name.value + "Contact Number: " + this.mobilenumber.value + "Email: " + this.email.value + 
        "Feedback: " + this.feedback.value);
        event.preventDefault();

    }

    render(){
        return(
            <div className="confirmed">
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <h2 className="welcomefont">Your order is confirmed. Thank you for ordering on Pizza.com</h2>
                        <h3 className="welcomefont">Please provide Feedback</h3>
                        <Button className="bg-primary" onClick={this.handleFeedbackModal}>Feedback</Button>
                    </div>
                    
                </div>
                <Modal isOpen={this.state.Avail} toggle={this.handleFeedbackModal}>
                    <ModalHeader toggle={this.handleFeedbackModal}>Feedback</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleFeedBack}>
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" placeholder="Enter Name" name="name" id="name" 
                                innerRef={(input)=>this.name=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="mobilenumber">Mobile Number</Label>
                                <Input type="number" placeholder="Mobile Number" name="mobiolenumber" id="mobilenumber" 
                                innerRef={(input)=>this.mobilenumber=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="text" placeholder="Email Address" name="email" id="email" 
                                innerRef={(input)=>this.email=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="feedback">Feedback</Label>
                                <Input type="textarea" placeholder="Enter Your Feedback" rows="10" name="feedback" id="feedback" 
                                innerRef={(input)=>this.feedback=input}/>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-danger">Send Feedback</Button>
                        </Form>

                    </ModalBody>
                </Modal>

            </div>
        );
    }
}
export default Confirm;
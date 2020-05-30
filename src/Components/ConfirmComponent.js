import React, {Component} from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";


class Confirm extends Component{
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
                    
                </div>

            </div>
        );
    }
}
export default Confirm;
import React  from "react";
import { Navbar,Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component{

        render(){
           return (
            <Navbar bg="light" expand="lg">
                <Link to = {""} className = "navbar-brand">
                    <img src = "mainlogo.png" width = "25" height = "25" alt = "brand" />
                    Mobile Shop

                </Link>
            
                <Nav className="mr-auto">
                    <Link to = {"add"} className = "nav-link">Add Mobile</Link>
                    <Link to = {"list"} className = "nav-link">Mobile List</Link>
                </Nav>
               
            </Navbar>
            );
                
        }
}

export default NavigationBar;
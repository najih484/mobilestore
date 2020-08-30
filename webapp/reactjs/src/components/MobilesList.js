import React from "react";
import {Card, Table,Button,ButtonGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import axios from "axios";

class MobilesList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            mobiles: []
        };
    
    }

    componentDidMount(){
        this.getMobiles();
        
    }

    getMobiles(){
        axios.get("http://localhost:8080/mobiles")
            .then(response => response.data)
            .then((data) =>{
                this.setState({mobiles:data});
            });

    }

    deleteMobile = (mobileId) =>{
        axios.delete("http://localhost:8080/mobiles/"+mobileId)
            .then(response =>{
                if(response.data!=null){
                    alert("Mobile Deleted Successfully")
                    this.setState({
                        mobiles: this.state.mobiles.filter(mobile => mobile.id !== mobileId)

                    });
                }
            });


    };




    render(){
        return(
          <Card className={"border border-light bg-light text-black"}>
              <Card.Header className={"border bg-dark text-white"}>
                  <FontAwesomeIcon icon= {faList} />
                  MobilesList
              </Card.Header>
              <Card.Body>
                <Table>
                    <thead>
                        <tr>
                        <th>Model</th>
                        <th>Brand</th>
                        <th>Release_Year</th>
                        <th>Price</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            this.state.mobiles.length === 0 ?
                            <tr>
                                <td colSpan="6">No Books Available.</td>
                            </tr> :
                            this.state.mobiles.map((mobile) => (
                            <tr key={mobile.id}>
                            
                                <td>{mobile.model}</td>
                                <td>{mobile.brand}</td>
                                <td>{mobile.release_year}</td>
                                <td>{mobile.price}</td>
                                <td>
                                    <ButtonGroup>

                                        <Link to = {"edit/"+mobile.id}>
                                            <Button size = "sm" variant = "primary">
                                                <FontAwesomeIcon icon= {faEdit} />
                                            </Button>
                                        </Link>
                                        <Button size = "sm" variant = "danger" onClick = {this.deleteMobile.bind(this, mobile.id)}><FontAwesomeIcon icon= {faTrash} /></Button>

                                    </ButtonGroup>

                                </td>
                            </tr>))
                    }
                    </tbody>
                </Table>
              </Card.Body>
          </Card>
        );        
                                                      
                    
    }
}


export default MobilesList;
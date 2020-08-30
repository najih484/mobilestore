import React from "react";
import {Card, Form, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

class Mobiles extends React.Component{

    constructor(props) {
        super(props);
        this.state = this.initialState;
        
        this.mobileChange = this.mobileChange.bind(this);
        this.submitMobile = this.submitMobile.bind(this);
    }

    initialState = {
        id:'', model:'', brand:'', release_year:'', price:''
    };

    componentDidMount(){
        const mobileId = +this.props.match.params.id;

        if(mobileId){
            this.getMobileById(mobileId);
        }
    }

    getMobileById = (mobileId) =>{
        axios.get("http://localhost:8080/mobiles/"+mobileId)
                .then(response =>{
                    if(response.data!=null){
                        this.setState({
                            id:response.data.id,
                            brand:response.data.brand,
                            model:response.data.model,
                            release_year:response.data.release_year,
                            price:response.data.price

                        });

                    }
                });
    };


    resetMobile = () => {
        this.setState(()=> this.initialState);
    }


    submitMobile = event => {
        event.preventDefault();

        const mobile ={
            brand:this.state.brand,
            model:this.state.model,
            release_year:this.state.release_year,
            price:this.state.price

        };

        axios.post("http://localhost:8080/mobiles",mobile)
            .then(response =>{
                if(response.data!=null){
                    this.setState(this.initialState);
                    alert("Mobile saved successfully");
                }

            });
    }

    updateMobile = event => {
        event.preventDefault();

        const mobile ={
            id:this.state.id,
            brand:this.state.brand,
            model:this.state.model,
            release_year:this.state.release_year,
            price:this.state.price

        };

        axios.put("http://localhost:8080/mobiles",mobile)
            .then(response =>{
                if(response.data!=null){
                    this.setState(this.initialState);
                    alert("Mobile Updated successfully");
                }

            });

    }

    mobileChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    

    render(){

        const {model, brand, release_year, price} = this.state;
        return(
            <Card className={"border border-light bg-light text-black"}>
                <Card.Header className={"border bg-dark text-white"}>{this.state.id?"Update Mobile Data":"Add Mobile Data"}</Card.Header>

                <Form onReset = {this.resetMobile} onSubmit = {this.state.id ? this.updateMobile : this.submitMobile} id = "mobileFormId">    
                    <Card.Body>
            

                        <Form.Group controlId = "formGridModel">
                            <Form.Label>Model</Form.Label>
                            <Form.Control  required autoComplete = "off"
                            type="text" name = "model" 
                            value={model} onChange={this.mobileChange}
                            placeholder="Enter the Model" />
                        </Form.Group>

                        <Form.Group controlId = "formGridBrand">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control required autoComplete = "off"
                            type="text" name = "brand" 
                            value={brand} onChange={this.mobileChange} 
                            placeholder="Enter the Brand" />
                        </Form.Group>

                        <Form.Group controlId = "formGridYear">
                            <Form.Label>Release_Year</Form.Label>
                            <Form.Control required autoComplete = "off"
                            type="number" name = "release_year" 
                            value={release_year} onChange={this.mobileChange} 
                            placeholder="Enter the year of release" />
                        </Form.Group>

                        <Form.Group controlId = "formGridPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control required autoComplete = "off"
                            type="number" name = "price" 
                            value={price} onChange={this.mobileChange} 
                            placeholder="Enter the Price" />
                        </Form.Group>

                    </Card.Body>

                    <Card.Footer>
                        <Button variant="success" type="submit">
                        <FontAwesomeIcon icon= {faSave} />
                            {this.state.id?"update":"Submit"}
                        </Button>{' '}
                        <Button variant="info" type="reset">
                        <FontAwesomeIcon icon= {faUndo} />
                            Reset
                        </Button>
                    </Card.Footer>

                </Form>
            
            </Card>

        );
    }
}

export default Mobiles;
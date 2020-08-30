import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Container,Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Mobiles from './components/Mobiles';
import MobilesList from './components/MobilesList';

function App() {

  const marginTop = {
    marginTop:"20px"
  };

  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Container>
          <Row>
            <Col lg = {12} style = {marginTop}>
              <Switch>
                <Route path ="/" exact component = {Welcome}/>
                <Route path ="/add" exact component = {Mobiles}/>
                <Route path ="/edit/:id" exact component = {Mobiles}/>
                <Route path ="/list" exact component = {MobilesList}/>
              </Switch> 
            </Col>
          </Row>
        </Container>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

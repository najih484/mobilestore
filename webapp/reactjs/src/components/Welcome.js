import React from "react";
import { Jumbotron } from "react-bootstrap";

class Welcome extends React.Component{
    render(){
        return(
            <Jumbotron className = "text-dark">
    
              <h1>Welcome to the World of Mobiles!!</h1>
              <p>
                This is a shop, where you can purchase any model of mobile phones. Also, We have imported mobile phones.
                Thanks for Visiting!!
              </p>

              <footer className = "blockquote-footer">
                  Mobile Shop
              </footer>
  
            </Jumbotron>

        );
    }

}

export default Welcome;
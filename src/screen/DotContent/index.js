import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css';
class DotContent extends Component {
    render() {
        return (

            <Container style={{margin:"0px"}}>
                {this.Rows( <img className="img" alt="txt"src="https://www.techcarebd.com/wp-content/themes/techcare/img/dots.png"/>)}
                {this.Rows( <p className="msg"> {this.props.message}</p>)}
            </Container>

        )
    }

    Rows=(element)=>{
      return(
        <Row>
        <Col sm="1"></Col>
        <Col sm="10" style={{ display: "flex", justifyContent: "center" }}>
           {element}
        </Col>
        <Col sm="1"></Col>
    </Row>
      )
    }
}

export default DotContent;
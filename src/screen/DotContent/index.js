import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css';
class DotContent extends Component {
    render() {
        return (

            <Container>
                {this.Rows( <img className="img" alt="txt"src="https://www.techcarebd.com/wp-content/themes/techcare/img/dots.png"/>)}
                {this.Rows( <p className="msg"> {this.props.message}</p>)}
            </Container>

        )
    }

    Rows=(element)=>{
      return(
        <Row>
        <Col sm="2"></Col>
        <Col sm="9" style={{ display: "flex", justifyContent: "center" }}>
           {element}
        </Col>
        <Col sm="1"></Col>
    </Row>
      )
    }
}

export default DotContent;
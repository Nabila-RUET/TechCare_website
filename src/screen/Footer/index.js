import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
class Footer extends Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col className="col-6">
                    <img className="logo" src="https://www.techcarebd.com/wp-content/themes/techcare/img/logo-color.svg"/>
                    </Col>
                </Row>
            </Container>
        )
    }
                }
export default Footer;
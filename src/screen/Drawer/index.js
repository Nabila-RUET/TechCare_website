import React, { Component } from 'react';
import ReactDrawer from 'react-drawer';
import { Container, Row, Col } from 'reactstrap';
import 'react-drawer/lib/react-drawer.css';
import './index.css';

class SideDrawer extends Component {
    render() {
        return (
            <ReactDrawer
                open={this.props.open}
                position={this.props.position}
                onClose={this.props.onDrawerClose}
            >
                <Container className="drawerContent">
        <Row>
            <Col>
                <img className="drawerLogo" src="https://www.techcarebd.com/wp-content/themes/techcare/img/drawer-logo.png" />
                <span><i onClick={this.props.onDrawerClose} className="fa fa-times" style={{ padding: "0px", margin: "0px", border: "0px" }}></i></span>
                <div className="lineSeparator"></div>
            </Col>
        </Row>
        
    </Container>
            </ReactDrawer>
        )
    }

}
export default SideDrawer;
import React, { Component } from 'react';
import './index.css';
import { Container, Row, Col } from 'reactstrap';
import LetstalkBtn from '../LetsTalk';
class CoverImg extends Component {
    constructor() {
        super()
        this.state = {
            hover: null
        }
    }

    render() {
        return (
            <div style={{ background: "url('https://www.techcarebd.com/wp-content/themes/techcare/img/UX.jpg') no-repeat fixed", backgroundSize: "cover" }}>
               <Container>
                    {this.Rows(<p className="text">We Bring Ideas To Life</p>)}
                    {this.Rows(<p className="txt">We are development company building experience across mobile & web</p>)}
                    {this.Rows(<LetstalkBtn
                        txt="Let's talk"
                        colorbg="#21a64a"
                        colorbgr="transparent"
                        colorbc="2px solid #21a64a"
                        colorbclr="2px solid white"
                        col="white"
                        colr="white" />)}
                    <Row>
                        <Col sm="2"></Col>
                        <Col sm="9" style={{ display: "flex", justifyContent: "center" }}>
                            <button onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}
                                style={{
                                    backgroundColor: this.state.hover ? "#21a64a" : "transparent",
                                    border: this.state.hover ? "2px solid #21a64a" : "2px solid white"
                                }}
                                className="roundBtn">
                                <i style={{ verticalAlign: "middle", marginLeft: "50px", color: "white" }} class="fa fa-angle-down"></i></button>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                </Container>

            </div>
        )
    }
    Rows = (element) => {
        return (
            <Row>
                <Col sm="2"></Col>
                <Col sm="9" style={{ display: "flex", justifyContent: "center" }}>
                    {element}
                </Col>
                <Col sm="1"></Col>
            </Row>
        )
    }
    MouseOver = () => {
        this.setState({ hover: true })
    }
    MouseOut = () => {
        this.setState({ hover: false })
    }
}

export default CoverImg;
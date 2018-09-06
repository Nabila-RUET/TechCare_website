import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css';
import DotContent from '../DotContent';
import Figure from './figureCaption';

class WeDo extends Component {
    render() {
        return (
            <div className="wrapper">
                <div style={styles.whitePortion}>
                    <Container className="content" style={styles.workChart}>
                        <DotContent message="What We Do" />
                        <Row style={styles.rowStyle}>
                            <Col sm="1"></Col>
                            <Col sm="9">
                                <p style={styles.headtext}>Our main focus is to make user experience very simple and easy.Simplicity is our strength.</p>
                            </Col>
                            <Col sm="1"></Col>
                        </Row>
                        <Row style={styles.rowStyle}>
                            <Figure
                                src="https://www.techcarebd.com/wp-content/themes/techcare/img/experience-design.svg"
                                caption="Experience Design"
                                Description=" We find out the main focus points of an idea first to make usability the best." />

                            <Figure
                                src="https://www.techcarebd.com/wp-content/themes/techcare/img/interface-design.svg"
                                caption="Interface Design"
                                Description="  We keep the Visual design easy for the eye of the users. Love to do clean design. " />
                        </Row>
                        <Row style={styles.rowStyle}>
                            <Figure
                                src="https://www.techcarebd.com/wp-content/themes/techcare/img/app-development.svg"
                                caption="Mobile App Development"
                                Description=" We translate the idea into reality. This magic is created by our awesome mobile app development team. " />

                            <Figure
                                src="https://www.techcarebd.com/wp-content/themes/techcare/img/web-development.svg"
                                caption="Web App Development"
                                Description=" Idea of web app is brought to life by our brilliant web app development team. " />
                        </Row> 
                    </Container>
                </div>
                <div style={styles.greenPortion}></div>
            </div>
        )
    }
}

export default WeDo;

const styles = {
    whitePortion: {
        minheight: '500px',
        width:"auto",
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
    },
    greenPortion: {
        minHeight: '50px',
        width:"auto",
        backgroundColor: '#21a64a',

    },
    workChart:
    {
        minHeight: '200px',
        minWidth: '80vw',
        zIndex: '50',
        backgroundColor: 'white',
        marginBottom: '-5%',

    },
    rowStyle: {
        display: "flex",
        justifyContent: "center",
        marginBottom:"50px"
    },
    headtext: {

        textAlign: "center",
        fontFamily: 'Gotham-Book',
        fontSize: "22px",
        lineHeight: "30px",
        color: "#999"



    }

}
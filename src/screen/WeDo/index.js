import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css';
class WeDo extends Component {
    render() {
        return (
            // <div className="wrapper">
            // <div className="content"></div>
            // <div className="background">
            // <div style={{minHeight:"800px",backgroundColor:"white"}}></div>
            // <div style={{minHeight:"100px",backgroundColor:"green"}}></div>
            // </div>
            // </div>

            <div className="wrapper">
                <div style={styles.whitePortion}>
                    <div className="content" style={styles.workChart}>

                    </div>
                </div>
                <div style={styles.greenPortion}>

                </div>
            </div>
        )
    }
}

export default WeDo;

const styles = {
    whitePortion: {
        minHeight: '500px',
        minWidth: '500px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
    },
    greenPortion: {
        minHeight: '500px',
        minWidth: '500px',
        backgroundColor: 'green',
        zIndex:'0'
    },
    workChart:
    {
        minHeight: '200px',
        minWidth: '80vw',
        zIndex:'50',
        backgroundColor:'white',
        marginBottom:'-5%'
    
    }

}
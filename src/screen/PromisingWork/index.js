import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
class PromisingWork extends Component {
    render() {
        return (
            <div style={style.flexContainer}>
                <div style={style.content}>
                
                </div>
                <div style={style.content}>
                <img  style={{width:"600px",height:"400px",justifyContent:"flex-end"}}src="https://www.techcarebd.com/wp-content/themes/techcare/images/works/project1.jpg"/>
                </div>
            </div>
        )
    }
}
export default PromisingWork;

const style = {
    flexContainer: {
        display: "flex",
        alignItems: "stretch",
        backgroundColor: "#21a64a",
        height: "auto"
    },
    content: {
        backgroundColor: "#21a64a",
        color: "white",
        margin: "10px",
        width:"520px",
        textAlign: "center",
        lineHeight: "75px",
        fontSize: "30px",
        flexGrow: "6",
        height:"auto",
        margin:"0px",
        justifyContent:"flex-end"
    }
}
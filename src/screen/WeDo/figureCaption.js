import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
const Figure = ({ caption, Description, src }) => {
    return (
        <Col  sm="4">
        <div style={style.image}>
            <img style={style.img} src={src} /></div>
            <div>
            <h5 style={style.h}>{caption}</h5>
            <p style={style.p}>{Description}</p>
            </div>
        </Col>

    )
}
export default Figure;

const style = {
    image:{
      display:"flex",
      justifyContent:"center"
    },
    img: {
        width: "55px",
        height: "55px",

    },
    h: {
        fontSize: "14px",
        lineHeight: "30px",
        textAlign: "center",
    },
    p: {
        fontSize: "18px",
        fontFamily: "Gotham-Book",
        lineHeight: "30px",
        textAlign:"center",
        color:"grey"
        
    }

}
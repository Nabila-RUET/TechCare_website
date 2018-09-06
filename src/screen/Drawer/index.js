import React, { Component } from 'react';
import ReactDrawer from 'react-drawer';
import { Container, Row, Col } from 'reactstrap';
import 'react-drawer/lib/react-drawer.css';
import './index.css';
import LetstalkBtn from '../LetsTalk';

class SideDrawer extends Component {
 
render() {
       return (
          <Container>
          <div style={{display:"flex"}}>
                <img className="drawerLogo" src="https://www.techcarebd.com/wp-content/themes/techcare/img/drawer-logo.png" />
              <span>  <i onClick={this.props.onDrawerClose} className="fa fa-times" style={{ padding: "0px", margin: "0px", border: "0px",color:"black",justifyContent:"flex-end" }}></i>
              </span>
            </div>
                <div className="lineSeparator"></div>
                
                <ul style={{color:"dimgray"}}className="list">
                <li>About</li>
                <li>Process</li>
                <li>Projects</li>
                </ul>
                <ul style={{fontSize:"15px",color:"lightgray"}} className="list">
                <li>Careers</li>
                <li>Clients</li>
                <li>Blog</li>
                <li>Contacts</li>
                </ul>
                <div  className="lineSeparatorr"></div>
                <Row >
                    
                <LetstalkBtn 
                  txt="Let's talk"
                  colorbg="#21a64a"
                  colorbgr="white"
                  colorbc="2px solid #21a64a"
                  colorbclr="2px solid #21a64a"
                  col="white"
                  colr="#21a64a"/>
                
            
                <i style={style.icon} class="fa fa-facebook"></i>
                <i style={style.icon} class="fa fa-google-plus"></i>
                <i style={style.icon} class="fa fa-linkedin "></i>
                <i style={style.icon} class="fa fa-play"></i>
                
                </Row>
          </Container>
            
        )
    }

}
export default SideDrawer;

const style={
    icon:{
        color:"gray",
        margin:"0px",
        padding:"15px",
        display:"flex",
        justifyContent:"center",
        marginTop:"35px"
    },
}
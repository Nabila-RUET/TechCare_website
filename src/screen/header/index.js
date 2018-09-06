import React, { Component } from 'react';
import './index.css';
import 'react-drawer/lib/react-drawer.css';
import DrawerContent from '../Drawer';
import { Container, Row, Col } from 'reactstrap';
import MediaQuery from 'react-responsive';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            open: false
        }

    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }


    handleScroll = () => {

        if (window.scrollY > 5) {
            console.log("should lock");
            this.setState({
                scrollingLock: true
            });
        } else if (window.scrollY < 5) {
            console.log("not locked");
            this.setState({
                scrollingLock: false
            });
        }

    }
   
    openDrawer = () => {
        this.setState({ open: !this.state.open })
        // console.log('after click : ',this.state.open)
    }

    onDrawerClose = () => {
        this.setState({ open: false })
    }


    render() {
        //    console.log('click : ',this.state.open)
        return (
            <Container fluid className="app-header" 
                style={{ position: "fixed", backgroundColor: this.state.scrollingLock ? "white" : "transparent",
                boxShadow: this.state.scrollingLock ? "0px 3px 10px -7px rgba(0,0,0,0.56)": "none"}} >
            <Col sm="3" >
                <img className="logo" src={this.state.scrollingLock?"https://www.techcarebd.com/wp-content/themes/techcare/img/logo-color.svg" :"https://www.techcarebd.com/wp-content/themes/techcare/img/logo-white.svg"}/>
            </Col>
            <Col sm="4" md="5" >
           
                <MediaQuery maxDeviceWidth={991}>
                    {(matches) => {
                        if (matches) {
                            return(
                            <p style={{display:"none"}}className="heading">App Design And Development Company</p>
                            )
                        } else {
                            return(
                                <p style={{color:this.state.scrollingLock?"dimgray":"white"}}className="heading">App Design And Development Company</p>)
                            
                        }
                    }}
              
            </MediaQuery>
            </Col>
            <Col  sm={{size:2, offset:3}} md={{size:2, offset:2}}>
            <Row>
            <MediaQuery maxDeviceWidth={991}>
                    {(matches) => {
                        if (matches) {
                            return(
                                <p style={{display:"none"}} className="link" >Projects</p>
                            )
                        } else {
                            return(
                                <p style={{color:this.state.scrollingLock?"dimgray":"white"}}  className="link" >Projects</p>)
                            
                        }
                    }}
              
            </MediaQuery>
              <i className="fa" 
              style={{color:this.state.scrollingLock?"dimgray":"white",backgroundColor:this.state.scrollingLock?"white":"transparent"}}
                    onClick={this.openDrawer}
                   >
                    &#xf0c9;
                    </i>
                    <div className="drawer" style={{width:this.state.open ? '400px' : '0px'}}>
                    <DrawerContent onDrawerClose={this.onDrawerClose}
                    open={ this.openDrawer }
                    />
                    </div>
                  {/* {console.log('open:',this.state.open)} */}
                    </Row>
                   </Col> 
                </Container>
        )
    }


}
export default Header;


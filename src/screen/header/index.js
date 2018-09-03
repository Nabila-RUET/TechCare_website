import React, { Component } from 'react';
import './index.css';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import SideDrawer from '../Drawer';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';



class Header extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            position: 'right',
            isOpen: false,
            scrollingLock: false
        }

    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
   
    handleScroll=()=> {

        if (window.scrollY > 5) {
          console.log("should lock");
          this.setState({
            scrollingLock: true
          });
        } else if (window.scrollY < 5) {
          console.log("not locked" );
          this.setState({
            scrollingLock: false
          });
        }
      
      }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    toggleDrawer = () => {
        this.setState({ open: !this.state.open })
       // console.log('after click : ',this.state.open)
    }

    onDrawerClose = () => {
        this.setState({ open: false })
    }
  
    
    render() {
     //   console.log('before click : ',this.state.open)
        return (
            <div>
            <div style={{ width: "100%", position: this.state.scrollingLock ? "fixed" : "relative",backgroundColor:this.state.scrollingLock? "transparent" : "white"}}>
                <Navbar className="app-header" light expand="md">
                    <NavbarBrand href="/">
                        <img className="logo" src="https://www.techcarebd.com/wp-content/themes/techcare/img/logo-color.svg" />
                    </NavbarBrand>
                    
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    
                    <span className="heading">App Design And Development Company</span>
                    
                        <Nav className="ml-auto" navbar>
                       
                            <NavItem>
                                <NavLink className="link" >Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <i className="fa"
                                    onClick={this.toggleDrawer}
                                    disabled={this.state.open}>
                                    &#xf0c9;
                                </i>
                               <SideDrawer open={this.state.open}
                                           position={this.state.position}
                                           onDrawerClose={this.onDrawerClose}/>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar></div>
                <div style={{height:"500px",backgroundColor:"green"}}></div>
                <div style={{height:"500px",backgroundColor:"aqua"}}></div>
                <div style={{height:"500px",backgroundColor:"blue"}}></div>
            </div>


        )
    }


}
export default Header;

const style={
    drawer:{
        backgroundColor:"white"
    }
}
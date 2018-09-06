import React,{Component} from 'react';
import {Container,Row,Col} from 'reactstrap';
import './index.css';
class ClientLogo extends Component{
    render(){
        return(
            <Container className="container">
                <Row style={{display:"flex",justifyContent:"center"}}>
                    <img className="image" alt="logo" src="https://www.techcarebd.com/wp-content/themes/techcare/images/clients/onnorokom_group.png"/>
                    <img className="image" alt="logo" src="https://www.techcarebd.com/wp-content/themes/techcare/images/clients/Transfer To.png"/>
                    <img className="image" alt="logo" src="https://www.techcarebd.com/wp-content/themes/techcare/images/clients/rokomari.png"/>
                    <img className="image" alt="logo" src="https://www.techcarebd.com/wp-content/themes/techcare/images/clients/onnorokom electronics.png"/>
                    <img className="image" alt="logo" src="https://www.techcarebd.com/wp-content/themes/techcare/images/clients/stokhaus.png"/>
                </Row>
            </Container>

        )
    }
}
export default ClientLogo;
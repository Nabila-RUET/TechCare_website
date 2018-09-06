import React, { Component } from 'react';
import  Header from '../header';
import CoverImg from '../CoverImage';
import DotContent from '../DotContent';
import ClientLogo from '../ClientLogo';
import WeDo from '../WeDo';
import PromisingWork from '../PromisingWork';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <CoverImg />
                <div style={{display:"flex",justifyContent:"center"}}>
                <DotContent message="Some of our great clients" /></div>
                <ClientLogo />
                <WeDo/>
                <PromisingWork/>
            </div>
        )
    }
}
export default Home;
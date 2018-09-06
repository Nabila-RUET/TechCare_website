import React, { Component } from 'react';
import  Header from '../header';
import CoverImg from '../CoverImage';
import DotContent from '../DotContent';
import ClientLogo from '../ClientLogo';
import WeDo from '../WeDo';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <CoverImg />
                <DotContent message="Some of our great clients" />
                <ClientLogo />
                <WeDo/>
            </div>
        )
    }
}
export default Home;
import React from 'react';
import FooterContainer from '../containers/footer';
import FaqsContainer from '../containers/faqs';
import { JumbotronContainer } from '../containers/jumbotron';

function home(props) {
    return (
    <>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
        
    </>
    );
}

export default home;
import React from 'react';
import { OptForm } from '../components';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import FaqsContainer from '../containers/faqs';
import { JumbotronContainer } from '../containers/jumbotron';

function home(props) {
    return (
    <>
     <HeaderContainer>
     <OptForm>
        <OptForm.Input placeholder="Email address" />
               <OptForm.Button>Try it now</OptForm.Button>
               <OptForm.Text> 
                 Ready to watch? Enter your email to create or restart yor membership
               </OptForm.Text>
     </OptForm>
     </HeaderContainer>
     <JumbotronContainer />
     <FaqsContainer />
     <FooterContainer />
    
    </>
    );
}

export default home;
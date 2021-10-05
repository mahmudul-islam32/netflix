import React from 'react';

import { Accordian, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

function FaqsContainer() {
    return (
        <Accordian>
           <Accordian.Title>Frequently Asked Questions</Accordian.Title>
           {faqsData.map((item) => (
             <Accordian.Item key={item.id}>
                <Accordian.Header>{item.header}</Accordian.Header>
                <Accordian.Body>{item.body}</Accordian.Body>
             </Accordian.Item>
           ))}

           <OptForm>
               <OptForm.Input placeholder="Email address" />
               <OptForm.Button>Try it now</OptForm.Button>
               <OptForm.Text> 
                 Ready to watch? Enter your email to create or restart yor membership
               </OptForm.Text>
           </OptForm>
        </Accordian>
    );
}

export default FaqsContainer;
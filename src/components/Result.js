import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';


    const Message = styled.p`

        background-color: #1385a2;
        border-radius: 5px;
        margin-top: 1rem;
        padding: 0.7rem;
        text-align: center;
        margin: 1rem;
        color: #ffffff;

    `;

    const TextQuotation = styled.p`

        color: #ffffff;
        padding: 1rem;
        text-transform: uppercase;
        font-weight: bold;
        margin: 0 auto;

    `;

    const QuoteResult = styled.div `

        text-align: center;
        padding: .5rem;
        background-color:#383838;
        position: relative;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    
    `;


    const Result = ({quotation}) => {


        return ( 
            (quotation === 0)
            ?<Message>Choose brand, year and type of insurance.</Message>
        :   ( 
            < QuoteResult>
                <TransitionGroup className="result">
                    <CSSTransition
                        classNames="result"
                        key={quotation}
                        timeout={{enter: 1500, exit: 1500}}>
                        <TextQuotation> Total: $ {quotation} </TextQuotation>
                    </CSSTransition>
                </TransitionGroup>
            </QuoteResult>
            )
        )

        
    }
    
Result.propTypes = {
    quotation: PropTypes.number.isRequired
}
 
export default Result;
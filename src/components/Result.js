import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';


const Message = styled.p`

    background-color: #9fd2ee;
    margin-top: 1rem;
    padding: 0.7rem;
    text-align: center;
    margin: 1rem;
    color: #00838F;

`;

const TextQuotation = styled.p`

    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0 auto;

`;

const QuoteResult = styled.div `

    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: #9fd2ee;
    margin-top: 1rem;
    position: relative;
   


`;


const Result = ({quotation}) => {


    return ( 
        (quotation === 0)
         ?<Message>Choose brand, year and type of insurance.</Message>
    :   ( 
        < QuoteResult>
            <TransitionGroup
                
                 className="result">
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
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SummaryContent = styled.div`

    padding: 1rem;
    font-family: 'Slabo 27px';
    text-align: center;
    background-color: #82aebd;
    color: #fff;
    margin-top: 1rem;

    ul{

        padding: 0.5rem;
        font-family: 'Nunito';
    }

`;

const Summary = ({data}) => {

    const {brand, year, plan} = data;

    if(brand === '' || year === '' || plan === ''){

        return null;
    }
    return ( 
        <SummaryContent>
        <h2>Quotation Summary</h2>
        <ul>
            <li>Brand: {brand}</li>
            <li>Year: {year} </li>
            <li>Plan: {plan} </li>

        </ul></SummaryContent>
     );
}
 

Summary.propTypes = {
    data: PropTypes.object.isRequired
}
export default Summary;
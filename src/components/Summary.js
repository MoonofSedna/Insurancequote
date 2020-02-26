import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

    const SummaryContent = styled.div`

        padding: 1rem;
        font-family: "Nunito";
        text-align: center;
        background-color:#1385a2;
        color: #fff;
        margin-top: 1rem;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;

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
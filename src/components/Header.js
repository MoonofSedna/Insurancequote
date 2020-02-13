import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const HeaderContent = styled.header`

    background-color: #6b9eb1;
    padding: 10px;
    font-weight: bold;
    color: #ffff;
    margin-top: 20px;
`;

const TextHeader = styled.h1 `
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align:center;`

const Header = ({title}) => {

    return(
        <HeaderContent >
            <TextHeader >{title}</TextHeader >
        </HeaderContent >
    )


}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;

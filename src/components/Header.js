import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';



    const HeaderContent = styled.header`

        background-color: #383838;
        padding: 10px;
        font-weight: bold;
        color: #ffff;
        margin-top: 10px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    `;

    const TextHeader = styled.h1 `
        font-size: 2rem;
        margin:0;
        font-family: 'Nunito', serif;
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

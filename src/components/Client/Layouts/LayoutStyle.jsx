import React from 'react';
import HeaderStyle from '../header/HeaderStyle';
import FooterStyle from '../footer/FooterStyle';

const LayoutStyle = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <HeaderStyle />
                {children}
                <FooterStyle />
            </div>
        </>
    );
};

export default LayoutStyle;
import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li><Link href="/">Home</Link></li>                
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/services">Services </Link></li>
                <li><Link href="/team">Team</Link></li>                
                <li><Link href="/blog">blog</Link></li>
                <li><Link href="/faq">FAQ</Link></li>         
                <li><Link href="/contact-us">contact</Link></li>


                
            </ul>
        </>
    );
};

export default MainMenu;
"use client"
import React from 'react';
import MainMenu from './MainMenu';
import useStickyMenu from '../hooks/useStickyMenu';
import useSubMenuToggle from '../hooks/useSubMenuToggle';
import useSidebarMenu from '../hooks/useSidebarMenu';
import Link from 'next/link';
import logoLightSolid from "@/assets/img/logo.png"
import logo from '@/assets/img/logo.png';
import Image from 'next/image';
import useSidebarInfo from '../hooks/useSidebarInfo';
import useSearchBar from '../hooks/useSearchBar';

const MainHeaderStyle = () => {

    const isMenuSticky = useStickyMenu();
    const toggleSubMenu = useSubMenuToggle();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();
    const { openSearch, searchOpen, searchClose } = useSearchBar();

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <header className='adjust-height'>
            <nav className={`navbar mobile-sidenav navbar-style-one navbar-sticky navbar-default validnavs white navbar-fixed on menu-center no-full ${isMenuSticky ? 'sticked' : 'no-background'} ${isOpen ? "navbar-responsive force-sticky" : ""}`}>
                    <div className="top-search">
                        <div className="container-xl">
                            <form onSubmit={handleSearch}>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-search"></i></span>
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <span className="input-group-addon close-search" onClick={searchClose}><i className="fa fa-times"></i></span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container nav-box d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link className="navbar-brand" href="/">
                                <Image src={logoLightSolid} className="logo logo-display" alt="Logo" />
                                <Image src={logo} className="logo logo-scrolled" alt="Logo" />
                            </Link>
                        </div>
                        <div className="main-nav-content">
                            <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                                <Image src={logo} alt="Logo" />
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                    <i className="fa fa-times"></i>
                                </button>
                                <MainMenu navbarPlacement="navbar-center" isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} />
                            </div>
                        </div>
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu}></div>
                </nav>
            </header>
        </>
    );
};

export default MainHeaderStyle;
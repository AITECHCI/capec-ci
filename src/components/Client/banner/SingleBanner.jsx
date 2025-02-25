import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBanner = ({ banner }) => {
    const { bgthumb, title, title1, title2, shapethumb, btntext } = banner;

    return (
        <>
            <div className="banner-thumb bg-cover shadow dark" style={{ background: `url(/assets/img/banner/1.png`}}></div>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-10 offset-xl-0">
                        <div className="content">
                            <h5>{title || "Titre par défaut"}</h5>
                            <h4><strong>{title1 || "Sous-titre par défaut"}</strong></h4>
                            <h6>{title2 || "Sous-titre optionnel"}</h6>
                            <div className="button mt-40">
                                <Link className="btn-animation" href="/contact-us">
                                    <i className="fas fa-arrow-right"></i>
                                    <span>{btntext || "En savoir plus"}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-bg">
                <Image src={`/assets/img/shape/${shapethumb}`} width={916} height={693} alt="Shape" />
            </div>
        </>
    );
};

export default SingleBanner;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBanner = ({ banner }) => {
    const { bgThumb, title, title1, title2, shapeThumb, btnText } = banner

    return (
        <>
            <div className="banner-thumb bg-cover shadow dark" style={{ background: `url(/assets/img/banner/${bgThumb})` }}></div>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-10 offset-xl-0">
                        <div className="content">
                            <h5>{title}</h5>
                            <h4><strong>{title1}</strong></h4> <h6> {title2}</h6>
                            <div className="button mt-40">
                                <Link className="btn-animation" href="/contact-us"><i className="fas fa-arrow-right"></i> <span>{btnText}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-bg">
                <Image src={`/assets/img/shape/${shapeThumb}`} width={916} height={693} alt="Shape" />
            </div>
        </>
    );
};

export default SingleBanner;
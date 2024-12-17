import Link from 'next/link';
import React from 'react';

const SingleServices = ({ data }) => {
    const { id, icon, title, text } = data

    return (
        <>
            <div className="services-style-one">
                <i className={icon}></i>
                <h4><Link href={`/services/${id}`}>{title}</Link></h4>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleServices;
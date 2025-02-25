import LayoutStyle from '@/components/Layouts/LayoutStyle';
import Services from '@/components/services/Services';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb'; // Assurez-vous de l'importer
import React from 'react';

export const metadata = {
    title: "capec-ci - Services"
};

const ServicesPage = () => {
    return (
        <>
            <LayoutStyle>
                <BreadCrumb breadCrumb="Services" title="Our Services" />
                <Services/>
            </LayoutStyle>
        </>
    );
};

export default ServicesPage;
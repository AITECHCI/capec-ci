import LayoutStyle from '@/components/Layouts/LayoutStyle';
import Services from '@/components/services/Services';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import TeamStyle1 from '@/components/team/TeamStyle1';
import RequestCallStyle1 from '@/components/request/RequestCallStyle1';
import PriceStyle1 from '@/components/price/PriceStyle1';
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
                <ProcessStyle1 />
                <PartnerStyle1 sectionClass="default-padding bg-gray" />
                <TeamStyle1 teamTitle={true} />
                <RequestCallStyle1 />
                <PriceStyle1 priceTitle={true} sectionClass="primary" />
            </LayoutStyle>
        </>
    );
};

export default ServicesPage;
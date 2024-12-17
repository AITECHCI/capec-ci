import LayoutStyle from '@/components/Layouts/LayoutStyle';
import ServiceDetailsContent from '@/components/services/ServiceDetailsContent';
import React from 'react';
import Services2Data from '@/assets/jsonData/services/Services2Data.json'

export const metadata = {
    title: "capec-ci - Consulting Business - Services Details"
}

const ServiceDetailsPage = ({ params }) => {

    const { id } = params
    const data = Services2Data.find(service => service.id === parseInt(id))

    return (
        <>
            <LayoutStyle breadCrumb="Service" title="Service">
                <ServiceDetailsContent serviceInfo={data} />
            </LayoutStyle>
        </>
    );
};

export default ServiceDetailsPage;
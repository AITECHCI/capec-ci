import LayoutStyle from '@/components/Layouts/LayoutStyle';
import AboutStyle from '@/components/about/AboutStyle';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import TeamStyle1 from '@/components/team/TeamStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb'; // Assurez-vous de l'importer
import React from 'react';

export const metadata = {
    title: "capec-ci - About Us"
};

const AboutUsPage = () => {
    return (
        <>
            <LayoutStyle>
                <BreadCrumb breadCrumb="About Us" title="About Us" />
                <AboutStyle />
                <ProcessStyle1 sectionClass="bg-gray" />
                <PartnerStyle1 sectionClass="default-padding" />
                <TeamStyle1 sectionClass="bg-gray" teamTitle={true} />
                <TestimonialStyle1 />
            </LayoutStyle>
        </>
    );
};

export default AboutUsPage;
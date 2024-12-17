import LayoutStyle from '@/components/Layouts/LayoutStyle';
import AboutStyle from '@/components/about/AboutStyle';
import BannerStyle from '@/components/banner/BannerStyle';
import Blog from '@/components/blog/Blog';
import ChooseStyle1 from '@/components/choose/ChooseStyle1';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import ProjectStyle1 from '@/components/project/ProjectStyle1';
import RequestCallStyle1 from '@/components/request/RequestCallStyle1';
import ServicesStyle1 from '@/components/services/ServicesStyle';
import TeamStyle1 from '@/components/team/TeamStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "capec-ci"
}

const Home = () => {
    return (
        <>
            <LayoutStyle>
                <BannerStyle />
                <AboutStyle />
                <ServicesStyle1 />
                <ProcessStyle1 />
                <ChooseStyle1 />
                <PartnerStyle1 sectionClass="default-padding" />
                <TeamStyle1 sectionClass="bg-gray" teamTitle={true} />
                <ProjectStyle1 />
                <RequestCallStyle1 />
                <TestimonialStyle1 />
                <Blog sectionClass="bg-gray" />
            </LayoutStyle>
        </>
    );
};

export default Home;
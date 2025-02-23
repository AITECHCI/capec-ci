import LayoutStyle from '@/components/Layouts/LayoutStyle';
import ChooseStyle1 from '@/components/choose/ChooseStyle1';
import PriceStyle1 from '@/components/price/PriceStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "capec-ci - Pricing"
}

const PricingPage = () => {
    return (
        <>
            <LayoutStyle breadCrumb="Pricing" title="Pricing Plan">
                <PriceStyle1 sectionClass="primary" />
                <ChooseStyle1 />
                <TestimonialStyle1 />
            </LayoutStyle>
        </>
    );
};

export default PricingPage;
import LayoutStyle from '@/components/Layouts/LayoutStyle';
import FaqStyle2 from '@/components/faq/FaqStyle2';
import React from 'react';

export const metadata = {
    title: "capec-ci - Faq"
}

const FaqPage = () => {
    return (
        <>
            <LayoutStyle breadCrumb="FAQ" title="Frequently Asked Question">
                <FaqStyle2 fullFaq={true}/>
            </LayoutStyle>
        </>
    );
};

export default FaqPage;
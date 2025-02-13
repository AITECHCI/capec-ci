import LayoutStyle from '@/components/Layouts/LayoutStyle';
import FaqStyle2 from '@/components/faq/FaqStyle2';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb'; // Assurez-vous de l'importer
import React from 'react';

export const metadata = {
    title: "capec-ci - Faq"
};

const FaqPage = () => {
    return (
        <>
            <LayoutStyle>
                <BreadCrumb breadCrumb="FAQ" title="Frequently Asked Questions" />
                <FaqStyle2 fullFaq={true} />
            </LayoutStyle>
        </>
    );
};

export default FaqPage;
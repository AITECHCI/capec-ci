import LayoutStyle from '@/components/Layouts/LayoutStyle';
import ContactMap from '@/components/contact/ContactMap';
import ContactUsContent from '@/components/contact/ContactUsContent';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb'; // Assurez-vous de l'importer
import React from 'react';

export const metadata = {
    title: "capec-ci - Contact Us"
};

const ContactUs = () => {
    return (
        <>
            <LayoutStyle>
                <BreadCrumb breadCrumb="Contact Us" title="Contact Us" />
                <ContactUsContent />
                <ContactMap />
            </LayoutStyle>
        </>
    );
};

export default ContactUs;
import LayoutStyle from '@/components/Layouts/LayoutStyle';
import ContactMap from '@/components/contact/ContactMap';
import ContactUsContent from '@/components/contact/ContactUsContent';
import React from 'react';

export const metadata = {
    title: "capec-ci - Consulting Business - Contact Us"
}

const ContactUs = () => {
    return (
        <>
            <LayoutStyle breadCrumb="contact-us" title="Contact Us">
                <ContactUsContent />
                <ContactMap />
            </LayoutStyle>
        </>
    );
};

export default ContactUs;
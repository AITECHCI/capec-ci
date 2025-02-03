"use client"
import LayoutStyle from '@/components/Layouts/LayoutStyle';
import ErrorPageContent from '@/components/NotFound/ErrorPageContent';
import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <LayoutStyle breadCrumb="error" title="Error">
                <ErrorPageContent />
            </LayoutStyle>
        </>
    );
};

export default ErrorPage;
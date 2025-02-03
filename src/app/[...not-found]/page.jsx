import LayoutStyle from '@/components/Layouts/LayoutStyle';
import NotFoundContent from '@/components/NotFound/NotFoundContent';
import React from 'react';

const NotFoundPage = () => {
    return (
        <>
            <LayoutStyle breadCrumb="404" title="404 Page">
                <NotFoundContent />
            </LayoutStyle>
        </>
    );
};

export default NotFoundPage;
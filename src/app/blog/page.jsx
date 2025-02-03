import LayoutStyle from '@/components/Layouts/LayoutStyle';
import Blog from '@/components/blog/Blog';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb'; // Vérifie cette importation
import React from 'react';

export const metadata = {
    title: "capec-ci - Blog"
}

const BlogWithSidebarPage = () => {
    return (
        <>
            <LayoutStyle>
                <BreadCrumb breadCrumb="Blog" title="Blog" />
                <Blog />
            </LayoutStyle>
        </>
    );
};

export default BlogWithSidebarPage;
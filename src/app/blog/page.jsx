import LayoutStyle from '@/components/Layouts/LayoutStyle';
import BlogWithSidebarContent from '@/components/blog/BlogWithSidebarContent';
import React from 'react';

export const metadata = {
    title: "capec-ci - Consulting Business - Blog With Sidebar"
}

const BlogWithSidebarPage = () => {
    return (
        <>
            <LayoutStyle breadCrumb="blog-with-sidebar" title="Blog With Sidebar">
                <BlogWithSidebarContent />
            </LayoutStyle>
        </>
    );
};

export default BlogWithSidebarPage;
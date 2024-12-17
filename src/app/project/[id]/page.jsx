import LayoutStyle from '@/components/Layouts/LayoutStyle';
import ProjectDetailsContent from '@/components/project/ProjectDetailsContent';
import React from 'react';
import Project2Data from '@/assets/jsonData/project/Project2Data.json'

export const metadata = {
    title: "capec-ci - Project Details"
}

const ProjectDetailsPage = ({ params }) => {

    const { id } = params
    const data = Project2Data.find(project => project.id === parseInt(id))

    return (
        <>
            <LayoutStyle breadCrumb="Project-details" title="Project Details">
                <ProjectDetailsContent projectInfo={data} />
            </LayoutStyle>
        </>
    );
};

export default ProjectDetailsPage;
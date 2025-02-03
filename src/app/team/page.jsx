import LayoutStyle from '@/components/Layouts/LayoutStyle';
import TeamStyle1 from '@/components/team/TeamStyle1';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb'; // Assurez-vous de l'importer
import React from 'react';

export const metadata = {
    title: "capec-ci - Team"
};

const TeamPage = () => {
    return (
        <>
            <LayoutStyle>
                <BreadCrumb breadCrumb="Team" title="Team Members" />
                <TeamStyle1 fullTeam={true} sectionClass="bg-gray" />
            </LayoutStyle>
        </>
    );
};

export default TeamPage;
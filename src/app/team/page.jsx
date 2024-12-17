import LayoutStyle from '@/components/Layouts/LayoutStyle';
import TeamStyle1 from '@/components/team/TeamStyle1';
import React from 'react';

export const metadata = {
    title: "capec-ci - Consulting Business - Team"
}

const TeamPage = () => {
    return (
        <>
            <LayoutStyle breadCrumb="team" title="Team Members">
                <TeamStyle1 fullTeam={true} sectionClass="bg-gray" />
            </LayoutStyle>
        </>
    );
};

export default TeamPage;
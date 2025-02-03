import TeamDetailsContent from '@/components/team/TeamDetailsContent';
import React from 'react';
import TeamData from '@/assets/jsonData/team/TeamData.json';
import LayoutStyle from '@/components/Layouts/LayoutStyle';

export const metadata = {
    title: "capec-ci - Team Details"
}

const TeamDetails = ({ params }) => {

    const { id } = params
    const data = TeamData.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutStyle breadCrumb="Team-details" title="Team Details">
                <TeamDetailsContent teamInfo={data} />
            </LayoutStyle>
        </>
    );
};

export default TeamDetails;
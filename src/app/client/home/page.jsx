import LayoutStyle from '@/components/Client/Layouts/LayoutStyle'; // Vérifiez ce chemin
import BannerStyle from '@/components/Client/banner/BannerStyle';
import ChooseStyle1 from '@/components/Client/choose/ChooseStyle1';
import PartnerStyle1 from '@/components/Client/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/Client/process/ProcessStyle1';
import ProjectStyle1 from '@/components/Client/project/ProjectStyle1';
import RequestCallStyle1 from '@/components/Client/request/RequestCallStyle1';
import Services from '@/components/Client/services/Services';
import TeamStyle1 from '@/components/Client/team/TeamStyle1';
import TestimonialStyle1 from '@/components/Client/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
  title: "CAPEC-CI : Cellule d'Analyse des Politiques Economiques du CIRES"
};

const Home = () => {
  return (
    <>
      <LayoutStyle>
        <BannerStyle />
        <Services />
        <ProcessStyle1 />
        <ChooseStyle1 />
        <PartnerStyle1 sectionClass="default-padding" />
        <TeamStyle1 sectionClass="bg-gray" teamTitle={true} />
        <ProjectStyle1 />
        <RequestCallStyle1 />
        <TestimonialStyle1 />
      </LayoutStyle>
    </>
  );
};

export default Home;
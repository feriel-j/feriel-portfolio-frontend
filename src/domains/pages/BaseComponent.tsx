import React, { useContext } from "react";
import "../../_dist/BaseComponent.css";
import HeroCard from "../../components/HeroCard";
import AboutMe from "../../components/AboutMe";
import MainContainer from "../communs/MainContainer";
import SkillsComponent from "../../components/SkillsComponent";
import ExecuteScrollComponent from "../../utils/ExecuteScrollComponent";
import {
  refAboutContext,
  refContext,
  refCvContext,
  refProjectsContext,
  refSkillsContext,
  refTestimonialsContext,
} from "../layouts/MainLayout";
import DownloadCv from "../../components/DownloadCv";
import TestimonialsComponent from "../../components/TestimonialsComponent";
import Footer from "../../components/Footer";
import ProjectsContainer from "../../components/ProjectsContainer";

const BaseComponent = () => {
  const myTopRef = useContext(refContext);
  const myAboutRef = useContext(refAboutContext);
  const mySkillsRef = useContext(refSkillsContext);
   const myProjectsRef=useContext(refProjectsContext)
  const myTestimonialsRef = useContext(refTestimonialsContext);
  const myCvRef = useContext(refCvContext);

  return (
    <section  className="wrapper base-component-container">
      <HeroCard ref={myTopRef}  />
      <MainContainer >
        <AboutMe ref={myAboutRef} />
        <SkillsComponent ref={mySkillsRef} />
        <ProjectsContainer ref={myProjectsRef}/>
        <TestimonialsComponent ref={myTestimonialsRef} />
        <DownloadCv ref={myCvRef} />
        <Footer />
      </MainContainer>
      <ExecuteScrollComponent scrollRef={myTopRef} />
    </section>
  );
};

export default BaseComponent;

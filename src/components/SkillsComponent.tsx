import React, { forwardRef } from "react";
import BigTitle from "./BigTitle";
import "../_dist/SkillsComponent.css";
import SkillsCard from "./SkillsCard";


interface SkillsComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
  }

const SkillsComponent = forwardRef<HTMLElement,SkillsComponentProps> ((props,ref) => {
  return (
    <section {...props} ref={ref} className="skills-container">
      <BigTitle>My Skills</BigTitle>

      <div className="skills-wrapper">
        <div className="skills-inner-wrapper">
          <h1>React Js</h1>
          <h1>Javascript</h1>
          <h1>Typescript</h1>
          <h1>Node Js</h1>
          <h1>Express</h1>
          <h1>CSS</h1>
          <h1>Less</h1>
          <h1>Rest API</h1>
          <h1>Redux</h1>
          <h1>React Js</h1>
          <h1>Javascript</h1>
          <h1>Typescript</h1>
          <h1>Node Js</h1>
          <h1>Express</h1>
          <h1>CSS</h1>
          <h1>Less</h1>
          <h1>Rest API</h1>
          <h1>Redux</h1>
        </div>
        <div className="skills-content">
          <SkillsCard
            title="Frontend"
            items={[
              "React Js",
              "Typescript",
              "Redux",
              "HTML",
              "CSS",
              "Less",
              "Vue Js","Storybook"
            ]}>
            test 1
          </SkillsCard>
          <SkillsCard title="Backend" items={["Node Js", "Nest Js","API Design (REST, GraphQL)","Microservices Architecture","Swagger","Postman"]}>
            test 2
          </SkillsCard>
          <SkillsCard title="Database" items={["MongoDB", "Postgresql"]}>
            test 3{" "}
          </SkillsCard>
          <SkillsCard
            title="Soft Skills"
            items={[
              "Leadership",
              "Technical Problem Solving",
              "Planning & Organization",
              "Mentorship & Coaching",
            ]}>
            test 4
          </SkillsCard>
        </div>
        <div className="skills-inner-wrapper w-2">
          <h1>React Js</h1>
          <h1>Javascript</h1>
          <h1>Typescript</h1>
          <h1>Node Js</h1>
          <h1>Express</h1>
          <h1>CSS</h1>
          <h1>Less</h1>
          <h1>Rest API</h1>
          <h1>Redux</h1>
          <h1>React Js</h1>
          <h1>Javascript</h1>
          <h1>Typescript</h1>
          <h1>Node Js</h1>
          <h1>Express</h1>
          <h1>CSS</h1>
          <h1>Less</h1>
          <h1>Rest API</h1>
          <h1>Redux</h1>
        </div>
      </div>
    </section>
  );
});
SkillsComponent.displayName="SkillsComponent"
export default SkillsComponent;

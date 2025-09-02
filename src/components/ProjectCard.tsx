import React, { useState } from "react";
import "../_dist/ProjectCard.css";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  projecttitle?: string;
  imageproject?: string;
  description?:string;
  stack?:React.ReactNode;
  children: React.ReactNode;
  nda?: true;
  id?: string;
}
const ProjectCard = ({ ...props }: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      {...props}
      className={`project-card-container ${
        props.className && props.className
      }`}>
      <div
        id={props.nda && "invisible"}
        className="project-card-header "
        onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}>
        <h1 className="project-title">{props.projecttitle}</h1>
        <figure>
          <img src={props.imageproject} alt={props.projecttitle} />
        </figure>
      </div>
      {props.nda && isVisible && (
        <h1 className="nda-title">Hidden for NDA resaons</h1>
      )}
      <div className="project-card-content">
        <h2>Description</h2>
        <p>
          {props.description}
        </p>
        <h2>Tech Stack</h2>
        {props.stack}
        <h2>Responsibilities </h2>
        {props.children}
      </div>
    </div>
  );
};

export default ProjectCard;

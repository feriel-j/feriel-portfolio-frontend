import React, { forwardRef } from "react";
import BigTitles from "./BigTitle";

import "../_dist/ProjectsContainer.css";
import ProjectCard from "./ProjectCard";

interface ProjectsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
}

const ProjectsContainer = forwardRef<HTMLElement, ProjectsContainerProps>(
  (props, ref) => {
    return (
      <section {...props} ref={ref} className="projects-container">
        <BigTitles>Projects</BigTitles>
        <div className="projects-content">
          <ProjectCard
            projecttitle="Portfolio Ala"
            imageproject="./images/Contact.png"
            description="A dynamic and responsive portfolio website showcasing Ala’s work. The homepage features smooth scrolling and accessible navigation between sections. The projects page translates a designer’s Figma mockups into a fully responsive, visually appealing layout. The contact page enables users to reach out via a fully functional contact form with email integration, form validation, and keyboard accessibility support."
            stack={
              <ul>
                <li>
                  {" "}
                  <span>Frontend:</span> React, TypeScript, Less, CSS
                </li>
                <li>
                  <span>Layout & Styling:</span> Flexbox, Grid
                </li>
                <li>
                  <span>Design:</span> Figma
                </li>
                <li>
                  <span>Form Handling:</span> EmailJS
                </li>
                <li>
                  <span>Code Structure:</span> Custom hooks, reusable
                  components, micro-components
                </li>
                <li>
                  <span>Accessibility & UX:</span> Smooth scroll, keyboard
                  navigation
                </li>
              </ul>
            }>
            <ul>
              <li>
                Implemented responsive multi-page layout using Flexbox and Grid.
              </li>
              <li>
                Translated Figma designs into fully responsive projects page.
              </li>
              <li>
                Developed smooth navigation and section scrolling on the
                homepage.
              </li>
              <li>
                Built reusable custom components and micro-components for
                modularity.
              </li>
              <li>
                Created custom hooks to manage state and reusable logic
                efficiently.
              </li>
              <li>
                Implemented contact form functionality with EmailJS, validation,
                and accessibility features.
              </li>
              <li>
                Ensured overall accessibility and user-friendly experience
                across the website.
              </li>
            </ul>
          </ProjectCard>
          <ProjectCard
            nda
            projecttitle="SRV Arcsec Map "
            imageproject="./images/arksec.png"
            description="A presentation of original Figma designs using smooth transitions to showcase layouts and interactions. This project serves as a visual representation or schema for design presentations, emphasizing layout fidelity, reusable components, and a touch of creative CSS magic."
            stack={
              <ul>
                <li>
                  <span>Frontend:</span> React, TypeScript
                </li>
                <li>
                  <span>Layout & Styling:</span> Grid, Flexbox, Less
                </li>
                <li>
                  <span>Design:</span> Figma
                </li>
              </ul>
            }>
            <ul>
              <li>
                Converted Figma designs into interactive React components.
              </li>
              <li>
                Implemented smooth transitions and animations for a professional
                presentation flow.
              </li>
              <li>Built responsive layouts using Grid and Less.</li>
              <li>
                Developed custom and reusable components for consistent design
                and code efficiency.
              </li>
              <li>
                Applied advanced CSS techniques to enhance visuals and
                interactivity.
              </li>
              <li><span>Tech Lead:</span>
              Conducted code reviews, prepared and assigned tasks, coordinated
              with designers and backend developers, and ensured smooth project
              delivery.</li>
            </ul>
          </ProjectCard>
          <ProjectCard
            nda
            projecttitle="Front page ERATHIS"
            imageproject="./images/executive.png"
            description="A visually rich frontpage created from an original Figma design, serving as a high-fidelity representation or schema for presentations. Smooth transitions and responsive layout ensure an engaging user experience. The project emphasizes modularity and reusability, with components documented in Storybook for maintainability and easy collaboration."
            stack={
              <ul>
                <li>React & TypeScript</li>
                <li>Flexbox & CSS Grid for layout</li>
                <li>Less for styling</li>
                <li>Storybook for component documentation</li>
                <li>Smooth CSS transitions and animations</li>
              </ul>
            }>
            <ul>
              <li>
                Translated Figma designs into dynamic, responsive React
                components.
              </li>
              <li>
                Built reusable and custom components to streamline development.
              </li>
              <li>
                Documented all components in Storybook for clarity and
                maintainability.
              </li>
              <li>
                Applied advanced CSS techniques for layout, animations, and
                visual polish.
              </li>
              <li>
                Ensured a seamless, presentation-ready user experience with
                smooth transitions.
              </li>
               <li><span>Tech Lead:</span>
              Conducted code reviews, prepared and assigned tasks, coordinated
              with designers and backend developers, and ensured smooth project
              delivery.</li>
            </ul>
          </ProjectCard>
          <ProjectCard
            nda
            projecttitle="Front page KWK"
            imageproject="./images/kwk.png"
            description="A feature-rich frontpage inspired by a Figma design, focusing on interactivity and user engagement. The site includes register, sign-in, and contact functionalities, seamlessly connected to a Node.js backend API. The design maintains responsiveness and accessibility while using a modular approach with reusable components."
            stack={
              <ul>
                <li>React & TypeScript</li>
                <li>Redux for state management</li>
                <li>Axios for API communication</li>
                <li>Node.js backend API</li>
                <li>Flexbox & CSS Grid for layout</li>
                <li>Less for styling</li>
                <li>Smooth navigation and transitions</li>
              </ul>
            }>
            <ul>
              <li>
                Implemented authentication flows (register & sign-in) integrated
                with a backend API.
              </li>
              <li>
                Built reusable and custom React components for UI and
                functionality.
              </li>
              <li>
                Managed application state with Redux and handled API requests
                with Axios.
              </li>
              <li>
                Ensured responsive layouts and smooth navigation across devices.
              </li>
              <li>
                Developed and styled the project based on Figma design, keeping
                accessibility in mind.
              </li>
               <li><span>Tech Lead:</span>
              Conducted code reviews, prepared and assigned tasks, coordinated
              with designers and backend developers, and ensured smooth project
              delivery.</li>
            </ul>
          </ProjectCard>
          <ProjectCard
            nda
            projecttitle="KWK Application"
            imageproject="./images/kwk-app.png">
            {" "}
            test
          </ProjectCard>
          <ProjectCard
            nda
            projecttitle="KWK Application"
            imageproject="./images/kwk-app.png">
            {" "}
            test
          </ProjectCard>
          <ProjectCard
            projecttitle="Happy Travelling"
            imageproject="./images/happy.png"
            description="A comprehensive travel platform designed for travelers to explore destinations, share experiences, and connect with the community. The application provides a rich interface to browse destinations, read and post travel stories, interact with other users, and participate in travel events."
            stack={
              <ul>
                <li>React.js</li>
                <li>Redux Toolkit for state managemen</li>
                <li>Node.js & MongoDB for backend and data storage</li>
                <li>CSS for styling</li>
                <li>Carousel and calendar libraries for interactive UI</li>
              </ul>
            }>
            <ul>
              <li>
                Developed the Home page with a carousel and destination
                presentation sections.
              </li>
              <li>
                Implemented Stories page allowing users to share travel
                experiences, post images, rate destinations, and discover travel
                tips.
              </li>
              <li>
                Built a community interaction feature where users can post
                questions, react, and respond to other travelers.
              </li>
              <li>
                Created an Events section for travelers to organize meetups,
                complete with event forms and calendar integration.
              </li>
              <li>
                Implemented user authentication with register and sign-in
                features, including private routes for protected content.
              </li>
              <li>
                Managed state efficiently with Redux Toolkit and connected the
                frontend to a Node.js & MongoDB backend.
              </li>
              <li>
                Ensured responsive layouts, smooth navigation, and an intuitive
                user experience across the application.
              </li>
            </ul>
          </ProjectCard>
        </div>
      </section>
    );
  }
);
ProjectsContainer.displayName = "ProjectsContainer";
export default ProjectsContainer;

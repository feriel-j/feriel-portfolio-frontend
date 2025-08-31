import React, { forwardRef } from "react";
import BigTitles from "./BigTitle";
import "../_dist/TestimonialsComponent.css";
import TestimonialCard from "./TestimonialCard";


interface TestimonialsComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
  }

const TestimonialsComponent =forwardRef<HTMLElement,TestimonialsComponentProps>( (props,ref) => {
  return (
    <section {...props} ref={ref} className="testimonials-container">
      <BigTitles>Testimonials</BigTitles>
      <div className="testimonials-card-container">
          <TestimonialCard name="Aladdin Bahri" post="Freelance Designer | UI/UX & Graphic Design" image="ala.svg">
            I wholeheartedly recommend Feriel for front-end development
            positions. I've had the pleasure of collaborating closely with her,
            witnessing her remarkable proficiency in HTML, CSS, JavaScript, and
            various frameworks. Feriel consistently translates design concepts
            into intuitive user interfaces, demonstrating both technical
            excellence and a collaborative approach. She delivers high-quality
            work with professionalism and a positive attitude, making her an
            invaluable asset to any team or project.
          </TestimonialCard>
          <TestimonialCard name="Aymen Chatti" post="Branch manager of Belgian subsidiary ( Erathis TN)" image="aymen.svg">
            I wholeheartedly recommend Feriel for front-end development
            positions. I've had the pleasure of collaborating closely with her,
            witnessing her remarkable proficiency in HTML, CSS, JavaScript, and
            various frameworks. Feriel consistently translates design concepts
            into intuitive user interfaces, demonstrating both technical
            excellence and a collaborative approach. 
          </TestimonialCard>
      </div>
    </section>
  );
});
TestimonialsComponent.displayName="TestimonialsComponent"
export default TestimonialsComponent;

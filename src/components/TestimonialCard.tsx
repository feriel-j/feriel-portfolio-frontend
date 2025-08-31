import React from "react";
import "../_dist/TestimonialCard.css"
interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  name?: string;
  post?: string;

  children: React.ReactNode;
  id?: string;
}
const TestimonialCard = ({ ...props }: TestimonialCardProps) => {
  return (
    <div {...props} className={` testimonial-container`}>
      <div className="testimonial-content">
        <div className="titles-section">
          <h1>{props.name}</h1>
          <h2>{props.post}</h2>
        </div>

        <p>{props.children}</p>
      </div>
      <figure>
        <img src={`images/${props.image}`} alt={`Photo ${props.name}`} />
      </figure>
    </div>
  );
};

export default TestimonialCard;

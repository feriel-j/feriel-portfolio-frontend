import React, { HTMLProps } from "react";
import "../_dist/BigTitle.css"

interface BigTitlesProps extends HTMLProps<HTMLHeadingElement> {
  id?: string;
  
}

const BigTitles = ({ ...props }: BigTitlesProps) => {
  return (
    <h1 {...props} className={`big-titles-container ${props.className?props.className:""}`} >
        {props.children}
      </h1>
   
  );
};

export default BigTitles;

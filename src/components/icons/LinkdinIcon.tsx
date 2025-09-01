import React, { SVGProps } from "react";

import "../../_dist/Icon.css";

interface LinkdinIconProps extends SVGProps<SVGSVGElement> {
  id?: string;
}

const LinkdinIcon = ({ ...props }: LinkdinIconProps) => {
  return (
    <svg
        {...props}
      onClick={props.onClick}
      id={props.id}
      className={
        props.className ? `icon-container ${props.className}` : "icon-container"
      }
      width="1em"
      height="1em"
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill="none">
      <rect
        width="132"
        height="132"
        x="30"
        y="30"
        stroke="currentColor"
        strokeWidth="12"
        rx="16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M66 86v44"
      />
      <circle cx="66" cy="64" r="8" fill="currentColor" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="12"
        d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"
      />
    </svg>
  );
};

export default LinkdinIcon;

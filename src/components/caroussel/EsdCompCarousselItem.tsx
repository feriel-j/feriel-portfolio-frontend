import React from "react";
// import "../../_dist/EsdCompCarousselItem.css";

export interface EsdCompCarousselItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children:string;
  heading?:string;
}

 const EsdCompCarousselItem:React.FC<EsdCompCarousselItemProps> = ({ ...props }) => {
 
  //--------------------------------------------------------------
  return <div {...props}><div className="left-side">{` step ${props.children}`}</div>
  <div className="center-side">
    <div className="card-1">
      Actors
      <ul>
        <li>PM</li>
        <li>Dispatch desk</li>
      </ul>
    </div>
    <div className="card-2">
      Actors
      <ul>
        <li>PM</li>
        <li>Dispatch desk</li>
      </ul>
    </div>
    <div className="card-3">
      Actors
      <ul>
        <li>PM</li>
        <li>Dispatch desk</li>
      </ul>
    </div>
  </div></div>;
};

export default EsdCompCarousselItem;

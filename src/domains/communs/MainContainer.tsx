import React, { useContext } from "react";
import "../../_dist/MainContainer.css";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import { useScrollToTop } from "../../utils/HandleScrollToTop";
import { refContext } from "../layouts/MainLayout";

interface MainContainerProps extends React.ButtonHTMLAttributes<HTMLElement> {
  id?: string;
}



const MainContainer = ({ ...props }: MainContainerProps) => {
  const scrollToTop = useScrollToTop();
  const myTopRef = useContext(refContext);  

  return (
    <main 
      {...props}
      className={`main-container-component ${
        props.className ? props.className : null
      }`}>
      <div className="main-content">{props.children}</div>
      <ButtonPrimary
        className="to-top-btn"
        onClick={() => {scrollToTop(myTopRef);console.log(myTopRef)}}>
        Top
      </ButtonPrimary>
       <p className="copright-par">©Feriel Jabri - All rights reserved 2025.</p>

    </main>
  );
};

export default MainContainer;

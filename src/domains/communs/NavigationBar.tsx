import React, { useContext, useRef } from "react";
import "../../_dist/NavigationBar.css";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import { useNavigate } from "react-router";
import {
  refAboutContext,
  refContext,
  refCvContext,
  refProjectsContext,
  refSkillsContext,
  refTestimonialsContext,
} from "../layouts/MainLayout";
import { useScrollToTop } from "../../utils/HandleScrollToTop";

type Item = {
  name: string;
  ref: React.RefObject<HTMLElement> | null;
};

const NavigationBar = () => {
  const navigate = useNavigate();

    const myTopRef = useContext(refContext);  
  
  const myAboutRef = useContext(refAboutContext);
  const mySkillsRef = useContext(refSkillsContext);
  const myProjectsRef = useContext(refProjectsContext);
  const myTestimonialsRef = useContext(refTestimonialsContext);
  const myCvRef = useContext(refCvContext);
  const listRef = useRef<(HTMLLIElement | null)[]>([]);

  const scrollToTop = useScrollToTop();

  // the click function
  const handleClick = (ref: React.RefObject<HTMLElement> | null) => {
    navigate("/");
    setTimeout(() => scrollToTop(ref), 200);
  };

  //the keyboard function for accessibility

  const handleKeyboard = (
    e: React.KeyboardEvent<HTMLElement>,
    ref: React.RefObject<HTMLElement> | null,
    index: number,
    listRefs: (HTMLElement | null)[]
  ) => {
    switch (e.key) {
      case "Enter":
        navigate("/");
        setTimeout(() => {
          if (ref?.current) {
            scrollToTop(ref);
          }
        }, 200);
        break;

      case "ArrowRight":
        e.preventDefault();
        if (index + 1 < listRefs.length) {
          listRefs[index + 1]?.focus();
        }
        break;

      case "ArrowLeft":
        e.preventDefault();
        if (index - 1 >= 0) {
          listRefs[index - 1]?.focus();
        }
        break;

      default:
        break;
    }
  };

  //Navbar Item list---------
  const Items = [
    { name: "About", ref: myAboutRef },
    { name: "Skills", ref: mySkillsRef },
    { name: "Projects", ref: myProjectsRef },
    { name: "TESTIMONIALS", ref: myTestimonialsRef },
    { name: "CV", ref: myCvRef },
  ];

  return (
    <nav tabIndex={0} className="navigation-bar-container">
      <h1
        tabIndex={0}
        role="button"
        onClick={() => handleClick(myTopRef)}
        onKeyDown={(e) => {
          if (e.key === "Enter") navigate("/");
        }}>
        Feriel J
      </h1>
      <ul>
        {Items.map((item: Item, index) => (
          <React.Fragment key={index}>
            <li
              tabIndex={0}
              ref={(el) => {
                listRef.current[index] = el;
              }}
              onKeyDown={(e) =>
                handleKeyboard(e, item.ref, index, listRef.current)
              }
              onClick={() => handleClick(item.ref)}
              onTouchStart={() => handleClick(item.ref)}>
              {item.name}
            </li>
          </React.Fragment>
        ))}
      </ul>
      <ButtonPrimary
        onClick={() => navigate("/contact")}
        onKeyDown={(e) => {
          if (e.key === "Enter") navigate("/contact");
        }}>
        Contact Us
      </ButtonPrimary>
    </nav>
  );
};

export default NavigationBar;

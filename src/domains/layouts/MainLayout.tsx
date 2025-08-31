import React, { createContext, useRef } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../communs/NavigationBar";
import "../../_dist/MainLayout.css";

// Create the refContext using createContext for the to scroll to top
export const refContext = createContext<React.RefObject<HTMLElement> | null>(
  null
);
export const refAboutContext =
  createContext<React.RefObject<HTMLElement> | null>(null);
export const refSkillsContext =
  createContext<React.RefObject<HTMLElement> | null>(null);
export const refProjectsContext =
  createContext<React.RefObject<HTMLElement> | null>(null);
export const refTestimonialsContext =
  createContext<React.RefObject<HTMLElement> | null>(null);
export const refCvContext = createContext<React.RefObject<HTMLElement> | null>(
  null
);
const MainLayout = () => {
  const myTopRef = useRef<HTMLElement>(null!);
  const myAboutRef = useRef<HTMLElement>(null!);
  const mySkillsRef = useRef<HTMLElement>(null!);
  const myProjecstRef = useRef<HTMLElement>(null!);
  const myTestimonialRef = useRef<HTMLElement>(null!);
  const myCvRef = useRef<HTMLElement>(null!);

  return (
    <refContext.Provider value={myTopRef}>
      <refAboutContext.Provider value={myAboutRef}>
        <refSkillsContext.Provider value={mySkillsRef}>
          <refProjectsContext.Provider value={myProjecstRef}>
            <refTestimonialsContext.Provider value={myTestimonialRef}>
              <refCvContext.Provider value={myCvRef}>
                <main  className="main-layout-container">
                  <NavigationBar />
                  <Outlet />
                </main>
              </refCvContext.Provider>
            </refTestimonialsContext.Provider>
          </refProjectsContext.Provider>
        </refSkillsContext.Provider>
      </refAboutContext.Provider>
    </refContext.Provider>
  );
};

export default MainLayout;

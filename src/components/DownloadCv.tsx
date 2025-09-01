import React, { forwardRef, useState } from "react";
import "../_dist/DownLoadCv.css";
import ButtonPrimary from "./buttons/ButtonPrimary";
import BigTitle from "./BigTitle";

interface DownloadCvProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
  }
const DownloadCv =forwardRef<HTMLElement,DownloadCvProps> ((props,ref) => {
  const [showCv, setShowCv] = useState(false);
  return (
    <section {...props} ref={ref} className="download-cv-contanier">
      <BigTitle>My CV</BigTitle>
      <p>You can download my cv by clicking on the download Button.</p>
      <ButtonPrimary onClick={() => setShowCv(true)}>
        {" "}
         <a
          href="files/Feriel-Jabri-EN.pdf"
          target="_blank"
          download={"Feriel-Jabri-CV.pdf"}
          rel="noopener noreferrer">
          Downoald my Cv
        </a> 

      </ButtonPrimary>
      {showCv && (
        <div
          onClick={() => setShowCv(!showCv)}
          className="img-container"
          // href="files/Feriel-Jabri-EN.pdf"
          // target="_blank"
          // download={"Feriel-Jabri-CV.pdf"}
          rel="noopener noreferrer">
          <img src="images/Feriel-Jabri-CV-1.svg" alt="cv feriel first page" />
          <img src="images/Feriel-Jabri-CV-2.svg" alt="cv feriel second page" />
        </div>
      )}
    </section>
  );
});
DownloadCv.displayName="DownloadCv"
export default DownloadCv;

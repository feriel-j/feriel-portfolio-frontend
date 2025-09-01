import React from "react";
import "../_dist/Footer.css";
import BigTitles from "./BigTitle";
import ButtonPrimary from "./buttons/ButtonPrimary";
import { Link } from "react-router";

const Footer = () => {
  return (
    <section className="footer-container">
      <BigTitles>Feriel Jabri</BigTitles>

      <h2>Shoot me a message — or don’t. But you should. </h2>
      {/* <figure>
            <img src="images/feriel.png" alt="feriel" />
        </figure> */}
      <ButtonPrimary>
        {" "}
        <Link to="/contact">Contact Me</Link>
      </ButtonPrimary>
      <div className="footer-content">
        <a
          className="social-content"
          href={"tel:+21621122439"}
          target="_blank"
          rel="noreferrer">
          Phone : +216 21 122 439
        </a>

        <a
          className="social-content"
          href={"mailto:feriel.jabri00@gmail.com"}
          target="_blank"
          rel="noreferrer">
          Email : feriel.jabri00@gmail.com
        </a>

        <a
          className="social-content"
          href={"https://www.linkedin.com/in/feriel-jabri/"}
          target="_blank"
          rel="noreferrer">
          Linkedin : Feriel
        </a>
        <a
          className="social-content"
          href={"https://github.com/feriel-j"}
          target="_blank"
          rel="noreferrer">
          Github : Feriel
        </a>
      </div>
    </section>
  );
};

export default Footer;

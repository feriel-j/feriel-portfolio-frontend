import React from "react";
import ContactForm from "../communs/ContactForm";

import "../../_dist/ContactUs.css";
import ContactButton from "../../components/buttons/ContactButton";
import TwitterIcon from "../../components/icons/TwitterIcon";

const ContactUs = () => {
  return (
    <section className="contact-us-container">
      <div className="contact-content">
        <h1>✨ Let’s make magic happen.</h1>
        <figure>
          <img src="/images/feriel-2.svg" alt="" />
        </figure>

        <p>
          Whether you’re reaching out with a brilliant idea, a burning question,
          <br /> or just good vibes — I’m all ears.
        </p>
        <p>
          Drop me a line by email, give me a call, or fill out the form below.
        </p>
        <p> I’ll be in touch soon!</p>

        <ContactButton icon={<TwitterIcon />} linkurl={"tel:+21621122439"}>
          (+216) 21 122 439
        </ContactButton>
        <ContactButton icon={<TwitterIcon />} linkurl={"mailto:feriel.jabri00@gmail.com"}>
          feriel.jabri00@gmail.com
        </ContactButton>
        <ContactButton icon={<TwitterIcon />} linkurl={""}>
          Linkedin
        </ContactButton>
        <ContactButton icon={<TwitterIcon />} linkurl={""}>
          Github
        </ContactButton>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactUs;

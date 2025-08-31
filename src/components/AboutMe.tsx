import React, { forwardRef } from 'react'
import BigTitle from './BigTitle'

interface AboutMeProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
  }

const AboutMe=forwardRef<HTMLElement,AboutMeProps> ((props,ref) => {
  return (
    <section {...props} ref={ref}>
        <BigTitle>About Me</BigTitle>
        <div className="about-container">
          <img src="images/webinar-animate.svg" alt="ani" />
          <div className="description-section">
            <h2>From Hydraulic Engeneering to Web Developement ...</h2>
            <p>
              Hi, I’m Feriel — a Frontend Developer with an unconventional path.
              I spent 10 years in the world of hydraulic engineering, working
              across different roles and industries, always searching for
              purpose and passion in my work.
            </p>
            <p>
              That passion finally clicked when I discovered web development
              through a bootcamp. I fell in love with the creativity, the
              challenge, and the constant learning the field offers. After
              completing my training, I started as a developer at GoMyCode, then
              joined Erathis IT, where I quickly grew into a Tech Lead role.
            </p>
            <p>
              Today, I specialize in building clean, scalable, and user-focused
              interfaces using React and TypeScript. My journey taught me that
              it’s never too late to reinvent yourself — and I bring that same
              drive and curiosity to every line of code I write.
            </p>
          </div>
        </div>{" "}
    </section>
  )
})
AboutMe.displayName="AboutMe"
export default AboutMe

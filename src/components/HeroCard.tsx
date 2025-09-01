import React, { forwardRef } from 'react'
// import ButtonPrimary from './buttons/ButtonPrimary'
import"../_dist/HeroCard.css"

const HeroCard =forwardRef<HTMLHeadElement>( (props,ref) => {
  return (
    <header {...props} ref={ref} className="hero-container">
        <div className="title-section">
          <h1>Feriel Jabri</h1>
          <h2>Fullstack Web Developer</h2>
          <p>
            I’m a Fullstack JavaScript Developer with a focus on building clean,
            scalable web applications. I use React and TypeScript to craft
            intuitive user interfaces, and Node.js, Express, and MongoDB to
            develop reliable backend systems. I care about writing maintainable
            code, designing solid architecture, and working closely with teams
            to bring ideas to life.
          </p>
         
          {/* <ButtonPrimary>More Info</ButtonPrimary> */}
        </div>
          <img
          className="background background-1"
          src="images/parallax-layer-1.svg"
          alt="layer 1"
        />
          <img
            className="background background-2"
            src="images/parallax-layer-2.svg"
            alt="layer 2"
          />
          <img
            className="foreground-1"
            src="images/parallax-layer-3.svg"
            alt="layer 3"
          />
          <img
            className="foreground-2"
            src="images/parallax-layer-4.svg"
            alt="layer 4"
          />
          <img
            className="foreground-3"
            src="images/parallax-layer-5.svg"
            alt="layer 5"
          />
        {/* </div> */}
      </header>
  )
})
HeroCard.displayName="HeroCard"
export default HeroCard

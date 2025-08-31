import React from 'react'
import "../_dist/Footer.css"
import BigTitles from './BigTitle'

const Footer = () => {
  return (
    <section className='footer-container'>
        <BigTitles>Feriel Jabri</BigTitles>

        <h2>Shoot me a message — or don’t. But you should. </h2>
        <figure>
            <img src="images/feriel.png" alt="feriel" />
        </figure>
        <div className="footer-content">

        </div>
       

    </section>
  )
}

export default Footer

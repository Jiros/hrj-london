import React from 'react'
import "./CompanySection.css"
import { StaticImage } from "gatsby-plugin-image"


function CompanySection() {
    return (
    <div>
        <section class="splash">
        <p> Welcome to</p>
        <StaticImage
                    src="../../images/hrj-london-logo.png"
                    loading="eager"
                    width={750}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                />
        <p>A strategic brand and marketing <br/> communications consultancy.</p>
        </section>
        <p class="footer">Our site is currently in development, but if you're intrigued enough to want to know<br/>more about who we are and what we do, please contact us at  <a href="mailto:info@HRJLondon.com">info@HRJLondon.com</a></p>
        
    </div>
    
    )
    }

export default CompanySection
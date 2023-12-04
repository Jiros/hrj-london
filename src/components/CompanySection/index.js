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
    </div>
    )
    }

export default CompanySection
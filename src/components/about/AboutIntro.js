import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
// Import Svg Images
import ShapeGraphic from "../../images/shapes-graphic.svg"
import Graphic_4 from "../../images/graphic-04.svg"

const AboutIntro = () => {
    return (
        <div className="c-about-intro">
            <div className="l-container">
                <div className="c-about-intro__col">
                    <div className="c-about-intro__description">
                        <p>We fearlessly tackle complicated challenges with empathy and intuition. Your business is made to grow, and it shouldn't take time. We are here to make sure you excel in your industry.</p>
                    </div>
                    <figure className="c-about-intro__graphic-01">
                        <img src={Graphic_4} alt={`Working Graphic`}/>
                    </figure>
                </div>
                <div className="c-about-intro__col">
                    <figure className="c-about-intro__graphic-02">
                        <img src={ShapeGraphic} alt={`Shape Graphic`}/>
                    </figure>
                    <div className="c-about-intro__image">
                        <StaticImage
                            src={`../../images/about-intro-image.jpg`}
                            alt={`a work desk in kathmandu.`}
                            className=""
                        ></StaticImage>
                        <p className="c-about-intro__figcaption">
                            A work desk in kathmandu.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutIntro

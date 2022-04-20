import * as React from "react"
import triangleIcon from "../../images/triangle-path.svg";

const HighlightContent = () => {
    return (
        <div className={`c-highlight-content`}>
            <div className={`container`}>
                <div className="c-highlight-content__intro">
                    <p>We stand for the uncompromised commitment to quality of work we deliver at a pace.</p>
                    <img className={`c-highlight-content__path`} src={triangleIcon} alt="triangle"/>
                </div>
                <blockquote className="c-highlight-content__quote">

                    <p>Whether it is with marketing, business strategy, branding, building a <i>damn good
                        website</i>, <i>large scale softwares</i>, <i>extending your team</i>, <i>long-term
                        partnerships</i>, we businesses do anything they should do.</p>

                </blockquote>
            </div>
        </div>
    )
}

export default HighlightContent
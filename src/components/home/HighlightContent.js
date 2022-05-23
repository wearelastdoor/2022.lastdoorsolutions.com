import * as React from "react"
import triangleIcon from "images/triangle-path.svg";
import {
    HighlightContentIntro,
    HighlightContentPathImg,
    HighlightContentQuote,
    HighlightContentWrapper
} from "styles/home/HighlightContent.Style";

const HighlightContent = () => {
    return (
        <HighlightContentWrapper>
            <div className={`l-container`}>
                <HighlightContentIntro>
                    <p>We stand for the uncompromised commitment to quality of work we deliver at a pace.</p>
                    <HighlightContentPathImg src={triangleIcon} alt={`triangle`}/>
                </HighlightContentIntro>
                <HighlightContentQuote>
                    <p>Whether it is with marketing, business strategy, branding, building a <i>damn good
                        website</i>, <i>large scale softwares</i>, <i>extending your team</i>, <i>long-term
                        partnerships</i>, we businesses do anything they should do.</p>

                </HighlightContentQuote>
            </div>
        </HighlightContentWrapper>
    )
}

export default HighlightContent
import * as React from "react";
import badge from "../../images/work-with-us-badge.svg";
import TransitionLink from "gatsby-plugin-transition-link";
import {animateObjects, newContent} from "../layout";
import {useEffect} from "react"
import $ from 'jquery'

const HighlightCta = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            $(document).ready(function () {
                var text = ["Team", "Project", "Partnership"],
                    counter = 0,
                    elem = $(".c-highlight-cta__title"),
                    elemChild = elem.find('strong');
                setInterval(change, 3500);

                function change() {
                    elemChild.fadeOut(function () {
                        elem.prop('title', elem.text())
                        elemChild.html(text[counter]);
                        counter++;
                        if (counter >= text.length) {
                            counter = 0;
                        }
                        elemChild.fadeIn();
                    });
                }
            })
        }
    })

    return (
        <section className={`c-highlight-cta`}>
            <div className={`container`}>
                <div className="c-highlight-cta__holder">
                        <span className={`c-highlight-cta__decorate`}><span
                            className={`screen-reader-text`}>decorate</span></span>
                    <div className="c-highlight-cta__card">
                        <TransitionLink className={`c-highlight-cta__btn`}
                                        to="/contact/"
                                        title="Contact"
                                        exit={{
                                            length: 0.6,
                                            trigger: ({exit, e, node}) => animateObjects(exit, node),
                                        }}
                                        entry={{
                                            delay: 0.7,
                                            trigger: ({entry, node}) => newContent(node),
                                        }}
                        >
                            <img className={`c-highlight-cta__badge`} src={badge} alt={`badge`} height={195}
                                 width={195}/>

                            <span className={`screen-reader-text`}>Contact</span>
                        </TransitionLink>
                        <div className="c-highlight-cta__content">
                            <h2 className={`c-highlight-cta__title`} title={`Let’s
                                build your ideal Team today!`}>Let’s
                                build your ideal <strong>Team</strong> today!</h2>
                            <div className={`c-highlight-cta__description`}>
                                <p>Please tell us a bit about you, your project, and how best to reach you. We’ll
                                    get right back to you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HighlightCta
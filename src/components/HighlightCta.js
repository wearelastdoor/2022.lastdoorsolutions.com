import * as React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import {useEffect} from "react"
import $ from 'jquery'
import {animateObjects, newContent} from "components/layout";
import badge from "images/work-with-us-badge.svg";

import {
    CtaCard,
    CtaContent,
    CtaDecoration,
    CtaDescription,
    CtaHolder,
    CtaTitle,
    CtaWrapper
} from "styles/home/HighlightCta.Style";

const HighlightCta = ({themeColor}) => {
    const theme = themeColor !== undefined ? ' ' + themeColor : ''
    useEffect(() => {
        if (typeof window !== "undefined") {
            var text = ["Team", "Project", "Partnership"],
                counter = 0,
                elem = $(".c-highlight-cta__title"),
                elemChild = elem.find('strong');
            setInterval(change, 3500);

            function change() {
                elemChild.fadeOut(function () {
                    elemChild.html(text[counter]);
                    const currentTitleText = elem.text()
                    elem.prop('title', currentTitleText)
                    counter++;
                    if (counter >= text.length) {
                        counter = 0;
                    }
                    elemChild.fadeIn();
                });
            }
        }
    }, [])

    return (
        <CtaWrapper className={`${theme}`}>
            <div className={`l-container`}>
                <CtaHolder>
                    <CtaDecoration className={`c-highlight-cta__decorate`}/>
                    <CtaCard>
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
                                        }}>
                            <img className={`c-highlight-cta__badge`} src={badge} alt={`badge`} height={195}
                                 width={195}/>
                            <span className={`visually-hidden`} dangerouslySetInnerHTML={{__html: 'Contact'}}/>
                        </TransitionLink>
                        <CtaContent>
                            <CtaTitle className={`c-highlight-cta__title`} title={`Let’s
                                build your ideal Team today!`} dangerouslySetInnerHTML={{
                                __html: `Let’s build your
                            ideal <strong>Team</strong> today!`
                            }}/>
                            <CtaDescription>
                                <p>Please tell us a bit about you, your project, and how best to reach you. We’ll
                                    get right back to you.</p>
                            </CtaDescription>
                        </CtaContent>
                    </CtaCard>
                </CtaHolder>
            </div>
        </CtaWrapper>
    )
}

export default HighlightCta
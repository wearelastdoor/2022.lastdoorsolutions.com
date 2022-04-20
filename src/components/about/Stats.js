import * as React from "react"

const Stats = () => {
    return (
        <div className="c-stats">
            <div className="l-container">
                <section className="c-stats__content">
                    <span className="c-stats__offset-bg c-stats__offset-bg--primary"></span>
                    <span className="c-stats__offset-bg c-stats__offset-bg--secondary"></span>
                    <h2 className="c-stats__title" title={`Last Door’s story`}>
                        Last Door’s story
                    </h2>
                    <div className="c-stats__description">
                        <p>We began our agency in 2003, intending to provide creative and technical solutions for
                            brands in the United States and local agencies in Nepal. Working together on projects for
                            these regions allowed us to ascend while maintaining significant standards across cultures
                            and within them! Over time, our clientele in the U.K., Australia, and across Europe have
                            welcomed us with open arms as well. Our work has paid off nicely over time after every
                            project or partnership because it makes what we do worthwhile - which is why you'll see we
                            have been working with many companies for years.
                        </p>
                        <p>
                            We've built a team that can help your brand (small or large) succeed in any environment. Our
                            bespoke services have created success stories for clients and partners, proving our
                            expertise and ability to grow their business by sky-rocketing through digital means.
                        </p>
                        <p>
                            We are committed to our client's needs and desire for a high-quality product. Therefore, we
                            stand behind the uncompromising work that we do, backed by an in-house team of experts and a
                            vast network of tech workers who can scale up any level or type if required.
                        </p>
                    </div>
                    <div className="c-stats__counter c-stats__counter--experience show-on-desktop">
                        <p className="c-stats__counter-number">
                            18 <sup>+</sup>
                        </p>
                        <p className="c-stats__counter-label">years of operation</p>
                    </div>
                    <div className="c-stats__counter c-stats__counter--partners show-on-desktop">
                        <p className="c-stats__counter-number">
                            900 <sup>+</sup>
                        </p>
                        <p className="c-stats__counter-label">clients and <br/>partners served</p>
                    </div>
                </section>
                <div className="c-stats__counter-holder">
                    <div className="c-stats__counter c-stats__counter--experience show-on-tablet">
                        <p className="c-stats__counter-number">
                            18 <sup>+</sup>
                        </p>
                        <p className="c-stats__counter-label">years of operation</p>
                    </div>
                    <div className="c-stats__counter c-stats__counter--partners show-on-tablet">
                        <p className="c-stats__counter-number">
                            900 <sup>+</sup>
                        </p>
                        <p className="c-stats__counter-label">partners served</p>
                    </div>
                    <div className="c-stats__counter c-stats__counter--pleased-client">
                        <p className="c-stats__counter-number">
                            100 <sup>%</sup>
                        </p>
                        <p className="c-stats__counter-label">client satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats

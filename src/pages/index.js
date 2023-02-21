import * as React from "react"
import Seo from "../components/seo"

// Import Components
import MainHero from "../components/home/MainHero.js"
import Intro from "../components/home/Intro.js"
import OurClient from "../components/home/OurClient.js"
import FeaturedWork from "../components/home/FeaturedWork.js"
import FeaturedStory from "../components/home/FeaturedStory.js"
import HighlightContent from "../components/home/HighlightContent.js"
import HighlightCta from "../components/HighlightCta.js"
import Footer from "../components/footer";

const IndexPage = () => {
    return (
        <>
            <Seo/>
            <main className="main">
                <MainHero
                    title={`Mastery of wordpress, drupal and frontend.`}
                    description={`<p>We shake hands with agencies to back their team by providing dedicated developers in tech stack like WordPress, Drupal, Laravel, Shopify, React, NextJS  and other web technologies.</p>`}
                    linkUrl="/contact/"
                    linkTitle={`Contact us`}
                />

                <Intro title={`A seamless travel booking experience.`}
                       listDescription={[
                           {
                               description: `Last Door has immense expertise in product development and strategizing it to foster growth. Last Door did a fantastic job pulling off a rock-solid and industry-leading travel e-commerce portal. The site has also seen a massive upsurge in conversion with the UX & Design strategy.`,
                               listUser: `Paul Gurung`,
                               listDesignation: `President, Discovery World Trekking`
                           }
                       ]}
                />
                <OurClient/>
                <FeaturedWork/>
                <FeaturedStory/>
                <HighlightContent/>
                <HighlightCta/>
            </main>
            <Footer/>
        </>
    )
}

export default IndexPage

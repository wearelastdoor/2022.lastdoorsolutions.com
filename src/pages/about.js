import * as React from "react"
import Seo from "../components/seo"
import {motion} from "framer-motion"

// Import Components
import PageBanner from "../components/pageBanner.js"
import AboutIntro from "../components/about/AboutIntro.js"
import Stats from "../components/about/Stats.js"
import Leadership from "../components/about/Leadership.js"
import Cta from "../components/cta";
import Footer from "../components/footer";

const AboutPage = () => (
    < >
        <main className="main">
            <Seo/>
            <motion.div
                initial={({x: 0}, false)}
                animate={{x: "100%"}}
                className="box"/>
            <PageBanner pageName={`Our Story`} title={`Create,  excel, grow, & repeat.`}/>
            <AboutIntro/>
            <Stats/>
            <Leadership/>
            <Cta/>
        </main>
        <Footer/>
    </>
)

export default AboutPage

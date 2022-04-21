import * as React from "react"
import Seo from "../components/seo"

// Import Components
import PageBanner from "../components/pageBanner.js"
import ImageCarousel from "../components/work/ImageCarousel.js"
import CaseStudy from "../components/work/CaseStudy.js"
import HighlightCta from "../components/HighlightCta.js"
import Footer from "../components/footer";

const WorkPage = () => (
    <>
        <Seo/>
        <main className="main">
            <PageBanner pageName={`Work`} title={`Rare blend of assorted work`}/>
            <ImageCarousel/>
            <CaseStudy/>
            <HighlightCta/>
        </main>
        <Footer/>
    </>
)

export default WorkPage

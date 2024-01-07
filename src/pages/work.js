import * as React from "react";
import Seo from "../components/seo";

// Import Components
import PageBanner from "../components/pageBanner.js";
import ImageCarousel from "../components/work/ImageCarousel.js";
import PastClients from "../components/work/PastClients.js";
import CaseStudy from "../components/work/CaseStudy.js";
import HighlightCta from "../components/HighlightCta.js";
import Footer from "../components/footer";

const WorkPage = () => (
  <>
    <Seo />
    <main className="main">
      <PageBanner
        pageName={`Work`}
        title={`Trusted by many, ready to earn your trust too.`}
        pageDescription={`Explore below to discover a selection of outstanding products we've proudly collaborated on with our partners.`}
        containerWidth={720}
      />
      <ImageCarousel />
      <PastClients />
      <CaseStudy />
      <HighlightCta />
    </main>
    <Footer />
  </>
);

export default WorkPage;

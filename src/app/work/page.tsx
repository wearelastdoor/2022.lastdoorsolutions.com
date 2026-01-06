import * as React from "react";

// Import Components
import PageBanner from "@/components/pageBanner/PageBanner";
import ImageCarousel from "@/components/work/imageCarousel/ImageCarousel";
import PastClients from "@/components/work/pastClients/PastClients";
import CaseStudy from "@/components/work/caseStudy/CaseStudy";
import HighlightCta from "@/components/highlightCta/HighlightCta";
import Footer from "@/components/footer/footer";

const WorkPage = () => (
  <>
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

    <Footer />
  </>
);

export default WorkPage;

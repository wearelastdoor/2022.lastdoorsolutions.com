import * as React from "react";
import dynamic from "next/dynamic";

// Import Components
import PageBanner from "@/components/pageBanner/PageBanner";

const ImageCarousel = dynamic(
  () => import("@/components/work/imageCarousel/ImageCarousel")
);
const PastClients = dynamic(
  () => import("@/components/work/pastClients/PastClients")
);
const CaseStudy = dynamic(
  () => import("@/components/work/caseStudy/CaseStudy")
);
const HighlightCta = dynamic(
  () => import("@/components/highlightCta/HighlightCta")
);
const Footer = dynamic(() => import("@/components/footer/footer"));

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

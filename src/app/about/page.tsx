// Import Components
import dynamic from "next/dynamic";

import AboutIntro from "@/components/about/aboutIntro/AboutIntro";
import PageBanner from "@/components/pageBanner/PageBanner";

const Stats = dynamic(() => import("@/components/about/stats/Stats"));
const Leadership = dynamic(
  () => import("@/components/about/leadership/Leadership")
);
const HighlightCta = dynamic(
  () => import("@/components/highlightCta/HighlightCta")
);
const Footer = dynamic(() => import("@/components/footer/footer"));

export const metadata = {
  title: "About Last Door",
  description:
    "We provide creative and technical solutions for brands in the United States, U.K., Australia, across Europe and local agencies in Nepal.",
};

const AboutPage = () => (
  <>
    <PageBanner
      pageName={`Our Story`}
      title={`Create, excel, grow, & repeat.`}
    />
    <AboutIntro />
    <Stats />
    <Leadership />
    <HighlightCta themeColor="dark" />

    <Footer />
  </>
);

export default AboutPage;

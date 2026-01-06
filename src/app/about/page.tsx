// Import Components

import AboutIntro from "@/components/about/aboutIntro/AboutIntro";
import PageBanner from "@/components/pageBanner/PageBanner";
import Stats from "@/components/about/stats/Stats";
import Leadership from "@/components/about/leadership/Leadership";
import HighlightCta from "@/components/highlightCta/HighlightCta";
import Footer from "@/components/footer/footer";

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

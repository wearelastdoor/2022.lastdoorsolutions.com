import * as React from "react";
import Seo from "../components/seo";
import { motion } from "framer-motion";

// Import Components
import PageBanner from "../components/pageBanner.js";
import AboutIntro from "../components/about/AboutIntro.js";
import Stats from "../components/about/Stats.js";
import Leadership from "../components/about/Leadership.js";
import HighlightCta from "../components/HighlightCta";
import Footer from "../components/footer";

const AboutPage = () => (
  <>
    <main className="main">
      <Seo
        title="About Last Door | Last Door Team"
        description="We provide creative and technical solutions for brands in the United States, U.K., Australia, across Europe and local agencies in Nepal."
      />
      <motion.div
        initial={({ x: 0 }, false)}
        animate={{ x: "100%" }}
        className="box"
      />
      <PageBanner
        pageName={`Our Story`}
        title={`Create,  excel, grow, & repeat.`}
      />
      <AboutIntro />
      <Stats />
      <Leadership />
      <HighlightCta themeColor={`c-highlight-cta--dark`} />
    </main>
    <Footer />
  </>
);

export default AboutPage;

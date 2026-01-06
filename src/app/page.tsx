"use client";

import * as React from "react";

// Import Components

import MainHero from "@/components/home/mainHero/MainHero";
import Intro from "@/components/home/intro/Intro";
import OurClient from "@/components/home/client/OurClient";
import FeaturedStory from "@/components/home/featuredStory/FeaturedStory";
import HighlightContent from "@/components/home/highlightContent/HighlightContent";
import FeaturedWork from "../components/home/featuredWork/FeaturedWork";
import HighlightCta from "@/components/highlightCta/HighlightCta";
import Footer from "@/components/footer/footer";

const IndexPage = () => {
  return (
    <>
      <MainHero
        title={`Crafting Exceptional Digital Experiences.`}
        description={`<p>At Last Door, we are architects of the digital world, designing and building beautiful, impactful digital products, brands, and experiences.</p>`}
        linkUrl="/about"
        linkTitle={`About Us`}
      />

      <Intro
        title={`A seamless travel booking experience.`}
        listDescription={[
          {
            description: `Last Door has immense expertise in product development and strategizing it to foster growth. Last Door did a fantastic job pulling off a rock-solid and industry-leading travel e-commerce portal. The site has also seen a massive upsurge in conversion with the UX & Design strategy.`,
            listUser: `Paul Gurung`,
            listDesignation: `President, Discovery World Trekking`,
          },
        ]}
      />
      <OurClient />
      <FeaturedWork />
      <FeaturedStory />
      <HighlightContent />
      <HighlightCta />

      <Footer />
    </>
  );
};

export default IndexPage;

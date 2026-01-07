"use client";

import * as React from "react";
import dynamic from "next/dynamic";

// Import Components

import MainHero from "@/components/home/mainHero/MainHero";
import Intro from "@/components/home/intro/Intro";

const OurClient = dynamic(() => import("@/components/home/client/OurClient"));
const FeaturedStory = dynamic(
  () => import("@/components/home/featuredStory/FeaturedStory")
);
const HighlightContent = dynamic(
  () => import("@/components/home/highlightContent/HighlightContent")
);
const FeaturedWork = dynamic(
  () => import("../components/home/featuredWork/FeaturedWork")
);
const HighlightCta = dynamic(
  () => import("@/components/highlightCta/HighlightCta")
);
const Footer = dynamic(() => import("@/components/footer/footer"));

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

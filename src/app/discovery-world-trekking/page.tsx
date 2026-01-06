import * as React from "react";

// Import Components
import PageBanner from "@/components/pageBanner/PageBanner";
import CaseStudyIntro from "@/components/CaseStudy/caseStudyIntro/CaseStudyIntro";
import FrontShowCase from "@/components/CaseStudy/frontShowCase/FrontShowCase";
import ResponsiveShowCase from "@/components/CaseStudy/responsiveShowcase/ResponsiveShowCase";
import ShowCaseCarousel from "@/components/CaseStudy/showCaseCarousel/ShowCaseCarousel";
import ContentWithLogos from "@/components/CaseStudy/contentWithLogos/ContentWithLogos";
import TitleWithImage from "@/components/CaseStudy/titleWithImage/TitleWithImage";
import Heading from "@/components/CaseStudy/heading/Heading";
import ImageContent from "@/components/CaseStudy/imageContent/ImageContent";
import Quote from "@/components/CaseStudy/quote/Quote";
import HighlightCard from "@/components/CaseStudy/highlightCard/HighlightCard";
import HighlightCta from "@/components/highlightCta/HighlightCta";
import Footer from "@/components/footer/footer";

const DiscoveryWorldTrekkingPage = () => {
  return (
    <>
      <PageBanner
        pageName={`Case Study`}
        title={`Discovering a better digital presence.`}
        containerWidth={720} //Container maxWith set here: number only
        themeType={`dark`} //use "dark" for dark & "light" for light theme || or null: On default it`s light
      />

      <CaseStudyIntro
        themeType="dark" //use "dark" for dark & "light" for light theme || or null: On default it`s light
        description={`<p>Last Door did ground research and decided to redo the DWT’s site from scratch to redefine the user interaction and create a seamless travel booking experience.</p>`}
      />

      <FrontShowCase
        themeType="dark" //use "dark" for dark & "light" for light theme || or null: On default it`s light
        title="Not just a website"
        description={`A refined visual language to support the beautiful Nepalese scenery that brought the natural life into a website.`}
      />

      <ResponsiveShowCase
        themeType="dark" //use "dark" for dark & "light" for light theme || or null: On default it`s light
        title="A website that fits on all your devices"
      />

      <ShowCaseCarousel
        themeType="dark" //use "dark" for dark & "light" for light theme || or null: On default it`s light
        title="Exemplary interface, well thought UX"
        description={`A holistic approach to let the travellers open up their choices with easy navigation of user interfaces and choices to narrow down their wishes`}
      />

      <ContentWithLogos
        themeType="dark" //use "dark" for dark & "light" for light theme || or null: On default it`s light
        title="Turbo speed with a robust engine"
        description={`We decided upon Laravel & React to back up the huge site with hundreds of trips, with each having detailed information and tons of content. We made a custom CMS which is super easy to navigate and use.`}
      />

      <TitleWithImage
        themeType="dark" //use "dark" for dark & "light" for light theme || or null: On default it`s light
        title="A system that takes no effort to use"
      />

      <Heading
        themeType="dark" //use "dark" for dark & "light" for light theme || or null: On default it`s light
        title="And, what about the results?"
        description={`As soon as we launched the site, we were amazed by the results that showed up—an increase in user interaction & conversion from the website.`}
      />

      <ImageContent
        id={1} //id from imageContent.json to get the content from respective object
        themeType="dark" //use "dark" for dark & "light" for light theme || or null: On default it`s light
        layout="" //use "reversed" for reversed layout or "" empty for detault layout
      />
      <ImageContent
        id={2}
        themeType="dark" //use "dark" for dark & "light" for light theme || or null: On default it`s light
        layout="reversed" //use "reversed" for reversed layout or "" empty for detault layout
      />

      <Quote
        themeType="dark" //use "dark" for dark & "light" for light theme || or null: On default it`s light
        blockQuote={`In 2019, Last Door built a rock-solid web site for Discovery World
        Trekking, which turned out to be the pioneer`}
        quoteAuthor="Paul Gurung"
        designation="Founder, Discovery World Trekking"
      />
      <ImageContent
        id={3}
        themeType="dark" //use "dark" for dark & "light" for light theme || or null: On default it`s light
        layout="" //use "reversed" for reversed layout & "" empty for detault or remove layout
      />
      <ImageContent
        id={4}
        themeType="dark" //use "dark" for dark & "light" for light theme || or null: On default it`s light
        layout="reversed" //use "rev      ersed" for reversed layout or "" empty for detault layout
      />
      <HighlightCard
        themeType="dark" //use "dark" for dark & "light" for light theme || or null: On default it`s light
        title="number 1"
        description="<p>Overall, the discovery world trekking site stands as the number one website in the Nepalese Travel Industry</p>"
      />
      <HighlightCta />

      <Footer />
    </>
  );
};

export default DiscoveryWorldTrekkingPage;

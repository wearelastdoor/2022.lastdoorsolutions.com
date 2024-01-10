import * as React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { newContent, animateObjects } from "./../layout";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const CaseStudy = () => {
  const data = useStaticQuery(graphql`
    {
      ourWork: ourWorksJson {
        caseStudies {
          isCaseStudy
          backgroundColor
          title
          name
          description
          logo {
            baseUrl {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            width
          }
          image {
            baseUrl {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            width
          }
          button {
            url
            title
          }
        }
      }
    }
  `);
  return (
    <section className="c-case-study">
      <div className="l-container">
        <header className="c-case-study__header">
          <p className="c-case-study__lead-text">Latest</p>
          <h2 className="c-case-study__main-title" title="Case studies">
            Case studies
          </h2>
        </header>
        {data.ourWork.caseStudies.map((caseStudy, i) => (
          <div
            className={`c-case-study__card ${
              i % 2 !== 0 ? "c-case-study__card--reversed" : ""
            }`}
          >
            <div
              className="c-case-study__media"
              style={{ background: `${caseStudy.backgroundColor}` }}
            >
              <div className="c-case-study__logo">
                <Img
                  fluid={caseStudy.logo.baseUrl.childImageSharp.fluid}
                  alt={caseStudy.logo.alt}
                  style={{ maxWidth: `${caseStudy.logo.width}px` }}
                  fadeIn={false}
                />
              </div>
              <p className="c-case-study__logo-name">{caseStudy.name}</p>

              <div className="c-case-study__first-letter">
                <Img
                  fluid={caseStudy.image.baseUrl.childImageSharp.fluid}
                  alt={caseStudy.image.alt}
                  style={{ maxWidth: `${caseStudy.image.width}px` }}
                  fadeIn={false}
                />
              </div>
            </div>
            <div className="c-case-study__content">
              <h2
                className="c-case-study__title"
                dangerouslySetInnerHTML={{ __html: caseStudy.title }}
              />
              <div
                className="c-case-study__description"
                dangerouslySetInnerHTML={{ __html: caseStudy.description }}
              />
              {caseStudy.isCaseStudy ? (
                <TransitionLink
                  to={caseStudy.button.url}
                  className="c-btn c-btn--light"
                  exit={{
                    length: 0.6,
                    trigger: ({ exit, e, node }) => animateObjects(exit, node),
                  }}
                  entry={{
                    delay: 0.7,
                    trigger: ({ entry, node }) => newContent(node),
                  }}
                >
                  {caseStudy.button.title}
                  <span></span>
                </TransitionLink>
              ) : (
                <a
                  href={caseStudy.button.url}
                  className="c-btn c-btn--light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {caseStudy.button.title}
                  <span></span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;

import * as React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Masonry from "react-masonry-css";
import { newContent, animateObjects } from "./../layout";

const FeaturedWork = () => {
  const breakpointColumns = {
    default: 2,
    767: 1,
  };

  const data = useStaticQuery(graphql`
    {
      items: featuredWorksJson {
        header {
          subTitle
          title
        }
        works {
          backgroundColor
          title
          image {
            alt
            url {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            width
          }

          logo {
            alt
            width
            url {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }

          linkUrl
          category
        }
      }
    }
  `);

  return (
    <section className={`c-featured-work`}>
      <div className={`container`}>
        <div className={`c-featured-work__header`}>
          <strong className={`c-featured-work__lead-text`}>
            {data.items.header.subTitle}
          </strong>
          <h2
            className={`c-featured-work__heading`}
            title={data.items.header.title}
          >
            {data.items.header.title}
          </h2>
        </div>
        <Masonry
          breakpointCols={breakpointColumns}
          className="c-featured-work__grid"
          columnClassName={`c-featured-work__column`}
        >
          {data.items.works.map((data, i) => {
            return (
              <div
                className={`c-featured-work__item ${
                  i % 2 !== 0 ? "c-featured-work__item--alt" : ""
                }`}
                key={i}
              >
                <div
                  className={`c-featured-work__card`}
                  style={{ background: data.backgroundColor }}
                >
                  <a
                    href={data.linkUrl}
                    target={`_blank`}
                    rel={"noopener noreferrer"}
                  >
                    <span className={`screen-reader-text`}>{data.title}</span>
                  </a>

                  <Img
                    className="c-featured-work__logo"
                    fluid={data.logo.url.childImageSharp.fluid}
                    alt={data.logo.alt}
                    style={{ maxWidth: data.logo.width }}
                  />

                  <h3 className={`c-featured-work__title`}>{data.title}</h3>
                  <p className={`c-featured-work__category`}>{data.category}</p>
                  <figure className="c-featured-work__letter">
                    <Img
                      fluid={data.image.url.childImageSharp.fluid}
                      alt={data.image.alt}
                      style={{ maxWidth: data.image.width }}
                    />
                  </figure>
                </div>
              </div>
            );
          })}
        </Masonry>
        <div className={`c-featured-work__footer`}>
          <TransitionLink
            to="/work/"
            className={`c-btn c-btn--dark-alt`}
            title="Our works"
            exit={{
              length: 0.6,
              trigger: ({ exit, e, node }) => animateObjects(exit, node),
            }}
            entry={{
              delay: 0.7,
              trigger: ({ entry, node }) => newContent(node),
            }}
          >
            {`View Our Work`}
            <span />
          </TransitionLink>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;

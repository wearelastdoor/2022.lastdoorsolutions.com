import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageContent = ({ themeType, id, layout }) => {

  const data = useStaticQuery(graphql`
    {
      alldata: allImageContentJson {
        edges {
          node {
            id
            contentId
            description
            title
            image {
              src {
                childImageSharp {
                  fluid(maxWidth: 2004, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              alt
            }
          }
        }
      }
    }
  `);

  return (
    <section className={`c-image-content ${themeType} ${layout}`}>
      {data.alldata.edges.map((data) =>
        data.node.contentId === id ? (
          <div className="l-container" key={data.node.id}>
            <div className="c-image-content__content">
              <h2
                className="c-image-content__title"
                dangerouslySetInnerHTML={{ __html: data.node.title }}
              />
              <div
                className="c-image-content__description"
                dangerouslySetInnerHTML={{
                  __html: data.node.description,
                }}
              />
            </div>
            <div className="c-image-content__image">
              <div
                className="c-image-content__imageInner"
                style={{ maxWidth: data.node.image.width }}
              >
                <Img
                  fluid={data.node.image.src.childImageSharp.fluid}
                  alt={data.node.image.alt}
                  loading="auto"
                />
              </div>
            </div>
          </div>
        ) : null
      )}
    </section>
  );
};

export default ImageContent;

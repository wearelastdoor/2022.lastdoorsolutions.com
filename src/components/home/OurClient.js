import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// Import svg Image
import teamWorkGraphic from "../../images/team-work.svg";

const OurClient = () => {
  const data = useStaticQuery(graphql`
    {
      items: ourClientJson {
        header {
          subTitle
          title
          description
        }
        clients {
          image {
            alt
            width
            baseUrl {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <section className="c-our-client">
      <div className="l-container">
        <header className="c-our-client__header">
          <div className="c-our-client__header-content">
            <h2 className="c-our-client__lead-text">
              {data.items.header.subTitle}
            </h2>
            <h3
              className="c-our-client__title"
              title={`${data.items.header.title}`}
            >
              {data.items.header.title}
            </h3>
            <p className="c-our-client__description">
              {data.items.header.description}
            </p>
          </div>
          <figure className="c-our-client__image">
            <img
              src={teamWorkGraphic}
              alt={`we craft brands, that people love`}
              height={354}
              width={334}
            />
          </figure>
        </header>
        <div className="c-our-client__card">
          <div className="l-grid">
            {data.items.clients.map((data, index) => {
              return (
                <div className="c-client" key={index}>
                  <Img
                    className="c-client__logo"
                    fluid={data.image.baseUrl.childImageSharp.fluid}
                    alt={data.image.alt}
                    style={{ width: `${data.image.width}px` }}
                    fadeIn={false}
                  />
                </div>
              );
            })}
          </div>
          <div className="c-our-client__intro">
            <div className="c-our-client__details">
              <p>
                We are the nearest experience to having an internal team for
                your agency, minus all the crazy costs & administrative burdens.
                We are the nearest experience to having an internal team for
                your agency, minus all the crazy costs & administrative burdens.
              </p>
            </div>
            <a href="mailto:pravash@lastdoorsolutions.com" className="c-btn c-btn--dark-alt">
              REQUEST PARTNER WORK <span></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClient;

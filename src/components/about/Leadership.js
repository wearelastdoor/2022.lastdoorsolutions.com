import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";

const Leadership = () => {
  const imageSize = 180;
  const data = useStaticQuery(graphql`
    {
      ourTeam: ourTeamJson {
        id
        teams {
          name
          designation
          image {
            baseUrl {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  `);

  return (
    <section className="c-leadership">
      <div className="l-container">
        <div className="c-leadership__content">
          <h2 className="c-leadership__title" title={`Our Team`}>
            Our Team
          </h2>
          <div className="c-leadership__description">
            <p>
              We value trust, encourage curiosity, and nourish talent. If you
              are a rare combination of passion, ambition, and imagination then
              join our team, we are in it together.
            </p>
          </div>
        </div>
        <div className="l-grid">
          {data.ourTeam.teams.map((team) => {
            const { id, name, designation, image } = team;
            return (
              <div className="l-grid__column" key={id}>
                <div className="c-leadership-card c-leadership-card--outline">
                  <Img
                    className="c-leadership-card__image"
                    fluid={image.baseUrl.childImageSharp.fluid}
                    alt={image.alt}
                    style={{ maxWidth: `${imageSize}px` }}
                  />

                  <h3 className="c-leadership-card__title">{name}</h3>
                  <p className="c-leadership-card__subTitle">{designation}</p>
                </div>
              </div>
            );
          })}

          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--linked">
              <StaticImage
                src={`../../images/dummy-face.png`}
                alt="Dummy Face"
                className="c-leadership-card__image"
              />
              <p className="c-leadership-card__title">Join Us</p>
              <a
                href="mailto:hello@lastdoorsolutions.com"
                className="cover-link"
              >
                <span className="visually-hidden">
                  hello@lastdoorsolutions.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Slider from "react-slick";

const PastClients = () => {
  const data = useStaticQuery(graphql`
    {
      clients: pastClientsJson {
        logos {
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
        }
      }
    }
  `);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <Slider {...settings} className="past-clients">
      {data.clients.logos.map(({ image }, i) => {
        const { baseUrl, alt, width } = image;
        return (
          <div style={{ width: `${width}px` }}>
            <Img
              fluid={baseUrl.childImageSharp.fluid}
              alt={alt}
              fadeIn={false}
              style={{ maxWidth: `${width}px` }}
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default PastClients;

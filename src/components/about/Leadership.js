import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Leadership = () => {
  return (
    <section className="c-leadership">
      <div className="l-container">
        <div className="c-leadership__content">
          <h2 className="c-leadership__title" title={`Join the Last Door Team`}>
            Join the Last Door Team
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
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--outline">
              {/*<StaticImage*/}
              {/*  src={`../../images/pk.jpeg`}*/}
              {/*  alt="Pravash Karki"*/}
              {/*  className="c-leadership-card__image"*/}
              {/*></StaticImage>*/}
              <StaticImage
                  src={`../../images/dummy-face.png`}
                  alt="Dummy Face"
                  className="c-leadership-card__image"
              ></StaticImage>
              <p className="c-leadership-card__figcation">Pravash Karki</p>
            </div>
          </div>
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--outline">
              {/*<StaticImage*/}
              {/*  src={`../../images/bishal.jpeg`}*/}
              {/*  alt="Bishal Mishra"*/}
              {/*  className="c-leadership-card__image"*/}
              {/*></StaticImage>*/}
              <StaticImage
                  src={`../../images/dummy-face.png`}
                  alt="Dummy Face"
                  className="c-leadership-card__image"
              ></StaticImage>
              <p className="c-leadership-card__figcation">Bishal Mishra</p>
            </div>
          </div>
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--linked">
              <StaticImage
                src={`../../images/dummy-face.png`}
                alt="Dummy Face"
                className="c-leadership-card__image"
              ></StaticImage>
              <p className="c-leadership-card__figcation">join us</p>
              <a href="mailto:hello@lastdoorsolutions.com" className="cover-link">
                <span className="visually-hidden">hello@lastdoorsolutions.com</span>
              </a>
              {/* 
              <TransitionLink
                to="/contact/"
                className="cover-link"
                exit={{
                  length: 0.6,
                  trigger: ({ exit, e, node }) => animateObjects(exit, node),
                }}
                entry={{
                  delay: 0.8,
                  trigger: ({ entry, node }) => newContent(node),
                }}
              >
                <span className="visually-hidden">want to join?</span>
              </TransitionLink> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership

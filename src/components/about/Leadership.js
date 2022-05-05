import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Leadership = () => {
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
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--outline">
              <StaticImage
               src={`../../images/team/anibesh_thapa.png`}
               alt="Anibesh Thapa"
               className="c-leadership-card__image"
              ></StaticImage>
              <h3 className="c-leadership-card__title">Anibesh Thapa</h3>
              <p className="c-leadership-card__subTitle">Web Developer</p>
            </div>
          </div>
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--outline">
              <StaticImage
               src={`../../images/team/dinesh_khadka.png`}
               alt="Dinesh Khadka"
               className="c-leadership-card__image"
              ></StaticImage>
              <h3 className="c-leadership-card__title">Dinesh Khadka</h3>
              <p className="c-leadership-card__subTitle">FrontEnd Developer</p>
            </div>
          </div>
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--outline">
              <StaticImage
               src={`../../images/team/bishal_mishra.png`}
               alt="Bishal Mishra"
               className="c-leadership-card__image"
              ></StaticImage>
              <h3 className="c-leadership-card__title">Bishal Mishra</h3>
              <p className="c-leadership-card__subTitle">Product Lead/Designer</p>
            </div>
          </div>
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--outline">
              <StaticImage
               src={`../../images/team/harry_chaudhary.png`}
               alt="Harry Chaudhary"
               className="c-leadership-card__image"
              ></StaticImage>
              <h3 className="c-leadership-card__title">Harry Chaudhary</h3>
              <p className="c-leadership-card__subTitle">FrontEnd Developer</p>
            </div>
          </div>
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--outline">
              <StaticImage
               src={`../../images/team/payas_chettri.png`}
               alt="Payas Chettri"
               className="c-leadership-card__image"
              ></StaticImage>
              <h3 className="c-leadership-card__title">Payas Chettri</h3>
              <p className="c-leadership-card__subTitle">Creative Head</p>
            </div>
          </div>
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--outline">
              <StaticImage
               src={`../../images/team/pravash_karki.png`}
               alt="Pravash Karki"
               className="c-leadership-card__image"
              ></StaticImage>
              <h3 className="c-leadership-card__title">Pravash Karki</h3>
              <p className="c-leadership-card__subTitle">Founder/CEO</p>
            </div>
          </div>
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--outline">
              <StaticImage
               src={`../../images/team/purna_man_shakya.png`}
               alt="Purna Shakya"
               className="c-leadership-card__image"
              ></StaticImage>
              <h3 className="c-leadership-card__title">Purna Shakya</h3>
              <p className="c-leadership-card__subTitle">HR &amp; Finance</p>
            </div>
          </div>
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--outline">
              <StaticImage
               src={`../../images/team/rajan_lama.png`}
               alt="Rajan lama"
               className="c-leadership-card__image"
              ></StaticImage>
              <h3 className="c-leadership-card__title">Rajan lama</h3>
              <p className="c-leadership-card__subTitle">WP Programmer</p>
            </div>
          </div>
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--outline">
              <StaticImage
               src={`../../images/team/sujal_karki.png`}
               alt="Sujal Karki"
               className="c-leadership-card__image"
              ></StaticImage>
              <h3 className="c-leadership-card__title">Sujal Karki</h3>
              <p className="c-leadership-card__subTitle">Project Manager</p>
            </div>
          </div>
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--outline">
              <StaticImage
               src={`../../images/team/sunita_pathak.png`}
               alt="Sunita Pathak"
               className="c-leadership-card__image"
              ></StaticImage>
              <h3 className="c-leadership-card__title">Sunita Pathak</h3>
              <p className="c-leadership-card__subTitle">Operations Executive</p>
            </div>
          </div>
          <div className="l-grid__column">
            <div className="c-leadership-card c-leadership-card--linked">
              <StaticImage
                src={`../../images/dummy-face.png`}
                alt="Dummy Face"
                className="c-leadership-card__image"
              ></StaticImage>
              <p className="c-leadership-card__title">join us</p>
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

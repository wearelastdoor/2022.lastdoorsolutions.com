import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ContactForm = () => {
  return (
    <section className="c-contact">
      <div className="l-container">
        <div className="c-contact__card">
          <header className="c-contact__header">
            <h2 className="c-contact__title" title="Easy talk">
              Easy talk
            </h2>
            {/* <p>
              Fill in the form, or, if you prefer,
              <mark>
                <a href="mailto:pravash@lastdoorsolutions.com">
                  send us an email
                </a>
              </mark>
            </p> */}
          </header>
          <div className="c-contact__body">
          <address className="contactPerson">
                <div className="contactPerson__wrap">
                  <figure>
                    <StaticImage
                      src={`../../images/footer/pravash_karki.png`}
                      alt={`Display Picture of Pravash Karki`}
                      className="contactPerson__image"
                    ></StaticImage>
                    <span className="contactPerson__location">NP</span>
                  </figure>
                  <div className="contactPerson__details">
                    <h3 className="contactPerson__name">
                      Pravash <span>Karki</span>
                    </h3>
                    <a
                      href="mailto:pravash@lastdoorsolutions.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      pravash@lastdoorsolutions.com
                    </a>
                    <a
                      href="tel:+9779851167777"
                      rel="noreferrer"
                      target="_blank"
                      className="contactPerson__phone"
                    >
                      +977 9851 167 777
                    </a>
                  </div>
                </div>
              </address>
              <address className="contactPerson">
                <div className="contactPerson__wrap">
                  <figure>
                    <StaticImage
                      src={`../../images/footer/bishal_mishra.png`}
                      alt={`Display Picture of Bishal Mishra`}
                      className="contactPerson__image"
                    ></StaticImage>
                    <span className="contactPerson__location">USA</span>
                  </figure>
                  <div className="contactPerson__details">
                    <h3 className="contactPerson__name">
                      Bishal <span>Mishra</span>
                    </h3>
                    <a
                      href="mailto:bishal@lastdoorsolutions.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      bishal@lastdoorsolutions.com
                    </a>
                    <a
                      href="tel:+9779851167777"
                      rel="noreferrer"
                      target="_blank"
                      className="contactPerson__phone"
                    >
                      +1 (267) 278 3588
                    </a>
                  </div>
                </div>
              </address>
          </div>
        </div>
        <div className="c-contact__image">
          <StaticImage
            src="../../images/graphic-05.png"
            alt="Holding Evelope"
            height={369}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

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
          </header>
          <div className="c-contact__body">
            <address className="contactPerson">
              <div className="contactPerson__wrap">
                <figure>
                  <StaticImage
                    src={`../../images/footer/pravash_karki.png`}
                    alt={`Display Picture of Pravash O`}
                    className="contactPerson__image"
                  ></StaticImage>
                </figure>
                <div className="contactPerson__details">
                  <h3 className="contactPerson__name">
                    Prav <span>O</span>
                  </h3>
                  <address className="contactPerson__address">
                      Kathmandu, Nepal
                    </address>
                  <div className="contactPerson__links">
                    <a
                      href="https://wa.me/16314193281"
                      className="contactPerson__phone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (631) 419 3281
                    </a>

                    <a
                      href="https://wa.me/9779851167777"
                      className="contactPerson__phone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      985 116 7777
                    </a>
                    <a href="mailto:pravo@lastdoorsolutions.com">pravo@lastdoorsolutions.com</a>
                  </div>
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
                </figure>
                <div className="contactPerson__details">
                  <h3 className="contactPerson__name">
                    Bishal <span>Mishra</span>
                  </h3>
                  <address className="contactPerson__address">
                      San Francisco, CA
                    </address>
                  <div className="contactPerson__links">
                      <a
                        href="tel:+12672783588"
                        className="contactPerson__phone"
                      >
                        (267) 278 3588
                      </a>
                      <a href="mailto:bishal@lastdoor.co">bishal@lastdoor.co</a>
                    </div>
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

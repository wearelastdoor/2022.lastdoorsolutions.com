import * as React from "react";
import Seo from "../components/seo";
import ScaleCarousel from "../components/anchorwave/scaleCarousel";
import Footer from "../components/footer";
import kingsUkLogo from "../images/twins-uk/kings-twins-uk-logo.webp";
import projectImage1 from "../images/twins-uk/twins-showcase-01.webp";
import projectImage2 from "../images/twins-uk/twins-showcase-02.webp";
import projectImage3 from "../images/twins-uk/twins-showcase-03.webp";
import HighlightCta from "../components/HighlightCta";

const TwinsUkPage = () => {
  return (
    <>
      <Seo
        title="Last Door's Client, Twins UK, Kings College of London"
        description="Last Door was able to move all the offline information to the website, and the users could access their data from anywhere, at any time."
      />
      <ScaleCarousel />
      <main className={`main`}>
        <div className={`c-twins-hero`}>
          <div className={`container`}>
            <figure className={`c-twins-hero__img`}>
              <img
                src={kingsUkLogo}
                alt={`Kings Twins Uk Logos`}
                style={{ maxWidth: `730px` }}
                height={200}
                width={730}
              />
            </figure>
          </div>
        </div>

        <div className={`c-twins-intro`}>
          <div className={`container`}>
            <h2
              className={`c-twins-intro__title`}
              title={`Largest registry for twins in the UK`}
            >
              Largest registry for twins in the UK
            </h2>
            <div className={`c-twins-intro__description`}>
              <p>
                TwinsUK is the UK’s largest adult twin registry and the most
                clinically detailed globally. Twinszone & TwinsUK both are an
                informative website dedicated to twins joining the TwinsUK
                registry contributing to the fascinating field of genetic health
                research and how they keep twins informed about the exciting
                research findings through our newsletters and amazing ‘research
                stories and blogs.’
              </p>
            </div>
          </div>
        </div>
        <div className={`c-showcase`}>
          <div className={`container`}>
            <h2 className={`c-showcase__title`} title={`Twinzone`}>
              Twinzone
            </h2>
            <div className={`c-showcase__carousel scale-carousel`}>
              <div className={`c-front-showcase__image`}>
                <img
                  src={projectImage1}
                  alt={`Agency Coach project, Last Door`}
                />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage2} alt={`Amg Aesthetics, Last Door`} />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage1} alt={`Amg Aesthetics, Last Door`} />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage2} alt={`Amg Aesthetics, Last Door`} />
              </div>
            </div>
          </div>
        </div>
        <section
          className={`c-showcase-detail c-showcase-detail--bg-secondary`}
        >
          <div className={`container`}>
            <h2 className={`c-showcase-detail__title`}>The Challenge</h2>
            <div className="c-showcase-detail__description">
              <p>
                Over the years, we set up a team of experienced designers,
                developers, and project managers who can handle any project, no
                matter how big or small the scope.
              </p>
            </div>
          </div>
        </section>
        <section
          className={`c-showcase-detail c-showcase-detail--bg-secondary`}
        >
          <div className={`container`}>
            <h2 className={`c-showcase-detail__title`}>The Approach</h2>
            <div className="c-showcase-detail__description">
              <p>
                Twinszone needed a much more user-friendly, customized website
                design to showcase their information and help twins access the
                information resources. The goal was to combine a smooth
                exploration experience with the reflection of the brand. Users
                need to easily search the information, log in to access their
                data, explore educational resources, and see local results to
                help them find SISU products online and in stores.
              </p>
            </div>
          </div>
        </section>

        <div className={`c-showcase-features`}>
          <div className={`container`}>
            <div className={`c-showcase-features__card`}>
              <div className={`c-showcase-features__grid`}>
                <div className={`c-showcase-features__column`}>
                  <h2 className="c-showcase-features__title">Deliverables</h2>
                  <ul className={`c-showcase-features_list`}>
                    <li>Wireframes</li>
                    <li>High-Fidelity Mockup</li>
                    <li>Marketing Materials</li>
                    <li> Support Tickets</li>
                    <li>Sitemaps</li>
                    <li> Information Architecture</li>
                    <li> CMS</li>
                  </ul>
                </div>
                <div className={`c-showcase-features__column`}>
                  <h2 className="c-showcase-features__title">Tools & Skills</h2>
                  <ul className={`c-showcase-features_list`}>
                    <li> Google Docs</li>
                    <li>Invision</li>
                    <li>Paper Sketch</li>
                    <li> HTML, CSS, JS</li>
                    <li>Balsamiq</li>
                    <li> PHP, WordPress</li>
                    <li> Sketch App</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`c-showcase c-showcase--large`}>
          <div className={`container`}>
            <div
              className={`c-showcase__carousel scale-carousel`}
              data-scale="1"
            >
              <div className={`c-front-showcase__image`}>
                <img
                  src={projectImage3}
                  alt={`Agency Coach project, Last Door`}
                />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage3} alt={`Amg Aesthetics, Last Door`} />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage3} alt={`Amg Aesthetics, Last Door`} />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage3} alt={`Amg Aesthetics, Last Door`} />
              </div>
            </div>
          </div>
        </div>
        <section
          className={`c-showcase-detail c-showcase-detail--bg-transparent`}
        >
          <div className={`container`}>
            <h2 className={`c-showcase-detail__title`}>The Process</h2>
            <div className="c-showcase-detail__description">
              <p>
                Twinszone needed a much more user-friendly, customized website
                design to showcase their information and help twins access the
                information resources. The goal was to combine a smooth
                exploration experience with the reflection of the brand. Users
                need to easily search the information, log in to access their
                data, explore educational resources, and see local results to
                help them find SISU products online and in stores.
              </p>
            </div>
          </div>
        </section>
        <section
          className={`c-showcase-detail c-showcase-detail--bg-transparent`}
        >
          <div className={`container`}>
            <h2 className={`c-showcase-detail__title`}>The Approach</h2>
            <div className="c-showcase-detail__description">
              <p>
                We were able to move all the offline information to the website,
                and the users could access their data from anywhere, at any
                time. In addition, we were able to automate the registration of
                twins with an easy online signup form. The way we transferred
                the offline data of the twins to the website and went 100%
                digital, the client was fully satisfied and offered us with the
                researchers website, which was a huge success.
              </p>
            </div>
          </div>
        </section>

        <div className={`c-showcase`}>
          <div className={`container`}>
            <h2 className={`c-showcase__title`} title={`TwinsUK`}>
              TwinsUK
            </h2>
            <div className={`c-showcase__carousel scale-carousel`}>
              <div className={`c-front-showcase__image`}>
                <img
                  src={projectImage1}
                  alt={`Agency Coach project, Last Door`}
                />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage2} alt={`Amg Aesthetics, Last Door`} />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage1} alt={`Amg Aesthetics, Last Door`} />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage2} alt={`Amg Aesthetics, Last Door`} />
              </div>
            </div>
          </div>
        </div>
        <section
          className={`c-showcase-detail c-showcase-detail--bg-secondary`}
        >
          <div className={`container`}>
            <h2 className={`c-showcase-detail__title`}>The Challenge</h2>
            <div className="c-showcase-detail__description">
              <p>
                Over the years, we set up a team of experienced designers,
                developers, and project managers who can handle any project, no
                matter how big or small the scope.
              </p>
            </div>
          </div>
        </section>
        <section
          className={`c-showcase-detail c-showcase-detail--bg-secondary`}
        >
          <div className={`container`}>
            <h2 className={`c-showcase-detail__title`}>The Approach</h2>
            <div className="c-showcase-detail__description">
              <p>
                Twinszone needed a much more user-friendly, customized website
                design to showcase their information and help twins access the
                information resources. The goal was to combine a smooth
                exploration experience with the reflection of the brand. Users
                need to easily search the information, log in to access their
                data, explore educational resources, and see local results to
                help them find SISU products online and in stores.
              </p>
            </div>
          </div>
        </section>

        <div className={`c-showcase-features`}>
          <div className={`container`}>
            <div className={`c-showcase-features__card`}>
              <div className={`c-showcase-features__grid`}>
                <div className={`c-showcase-features__column`}>
                  <h2 className="c-showcase-features__title">Deliverables</h2>
                  <ul className={`c-showcase-features_list`}>
                    <li>Wireframes</li>
                    <li>High-Fidelity Mockup</li>
                    <li>Marketing Materials</li>
                    <li> Support Tickets</li>
                    <li>Sitemaps</li>
                    <li> Information Architecture</li>
                    <li> CMS</li>
                  </ul>
                </div>
                <div className={`c-showcase-features__column`}>
                  <h2 className="c-showcase-features__title">Tools & Skills</h2>
                  <ul className={`c-showcase-features_list`}>
                    <li> Google Docs</li>
                    <li>Invision</li>
                    <li>Paper Sketch</li>
                    <li> HTML, CSS, JS</li>
                    <li>Balsamiq</li>
                    <li> PHP, WordPress</li>
                    <li> Sketch App</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`c-showcase c-showcase--large`}>
          <div className={`container`}>
            <div
              className={`c-showcase__carousel scale-carousel`}
              data-scale="1"
            >
              <div className={`c-front-showcase__image`}>
                <img
                  src={projectImage3}
                  alt={`Agency Coach project, Last Door`}
                />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage3} alt={`Amg Aesthetics, Last Door`} />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage3} alt={`Amg Aesthetics, Last Door`} />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage3} alt={`Amg Aesthetics, Last Door`} />
              </div>
            </div>
          </div>
        </div>
        <section
          className={`c-showcase-detail c-showcase-detail--bg-transparent`}
        >
          <div className={`container`}>
            <h2 className={`c-showcase-detail__title`}>The Process</h2>
            <div className="c-showcase-detail__description">
              <p>
                Twinszone needed a much more user-friendly, customized website
                design to showcase their information and help twins access the
                information resources. The goal was to combine a smooth
                exploration experience with the reflection of the brand. Users
                need to easily search the information, log in to access their
                data, explore educational resources, and see local results to
                help them find SISU products online and in stores.
              </p>
            </div>
          </div>
        </section>
        <section
          className={`c-showcase-detail c-showcase-detail--bg-transparent`}
        >
          <div className={`container`}>
            <h2 className={`c-showcase-detail__title`}>The Approach</h2>
            <div className="c-showcase-detail__description">
              <p>
                We were able to move all the offline information to the website,
                and the users could access their data from anywhere, at any
                time. In addition, we were able to automate the registration of
                twins with an easy online signup form. The way we transferred
                the offline data of the twins to the website and went 100%
                digital, the client was fully satisfied and offered us with the
                researchers website, which was a huge success.
              </p>
            </div>
          </div>
        </section>

        <section className={`c-accordion`}>
          <div className={`container`}>
            <div className="c-accordion__intro">
              <h2 className={`c-accordion__heading`} title={`FAQs`}>
                FAQs
              </h2>
            </div>
            <div className={`c-accordion__item`}>
              <div className={`c-accordion__header`}>
                <h3 className={`c-accordion__title`}>
                  How often do we have meetings?
                </h3>
                <button type={`button`} className={`c-accordion__button`}>
                  <span className={`screen-reader-text`}>
                    accordion action button
                  </span>
                </button>
              </div>
              <div className={`c-accordion__body`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                </p>
              </div>
            </div>
            <div className={`c-accordion__item`}>
              <div className={`c-accordion__header`}>
                <h3 className={`c-accordion__title`}>
                  How many resources do you allocate for Anchorwave?
                </h3>
                <button type={`button`} className={`c-accordion__button`}>
                  <span className={`screen-reader-text`}>
                    accordion action button
                  </span>
                </button>
              </div>
              <div className={`c-accordion__body`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                </p>
              </div>
            </div>
            <div className={`c-accordion__item`}>
              <div className={`c-accordion__header`}>
                <h3 className={`c-accordion__title`}>
                  What’s the most common type of project?
                </h3>
                <button type={`button`} className={`c-accordion__button`}>
                  <span className={`screen-reader-text`}>
                    accordion action button
                  </span>
                </button>
              </div>
              <div className={`c-accordion__body`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                </p>
              </div>
            </div>
          </div>
        </section>
        <HighlightCta />
      </main>
      <Footer />
    </>
  );
};

export default TwinsUkPage;

import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import $ from "jquery"
import {useEffect} from "react";

const ShowCaseCarousel = ({themeType, title, description}) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            $(document).ready(() => {
                $(".c-3d-carousel__item").on("click", function () {
                    $(this).attr("class", "c-3d-carousel__item c-3d-carousel__item-active")
                    let activeSlide = $(this).attr("data-slide")
                    $(this)
                        .siblings()
                        .each(function () {
                            let slideNumber = $(this).attr("data-slide")

                            if (slideNumber <= activeSlide) {
                                $(this).attr(
                                    "class",
                                    "c-3d-carousel__item c-3d-carousel__item-before c-3d-carousel__item-before--" +
                                    (activeSlide - slideNumber)
                                )
                            } else {
                                $(this).attr(
                                    "class",

                                    "c-3d-carousel__item c-3d-carousel__item-after c-3d-carousel__item-after--" +
                                    (slideNumber - activeSlide)
                                )
                            }
                        })
                })

                $(".next")
                    .unbind("click")
                    .bind("click", function (i) {
                        $(".c-3d-carousel__item-active").next().click()
                    })
                $(".prev")
                    .unbind("click")
                    .bind("click", function (i) {
                        $(".c-3d-carousel__item-active").prev().click()
                    })
            })
        }
    })

    const data = useStaticQuery(graphql`
    {
      images: showcase3DCarouselJson {
        dwt {
          image {
            alt
            url {
              childImageSharp {
                id
                fluid(maxWidth: 2004, quality: 100) {
                   ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

    return (
        <section className={`c-carousel-showcase ${themeType}`}>
            <div className="l-container">
                <header className="c-carousel-showcase__header">
                    <h2 className="c-carousel-showcase__title" title={title}>
                        {title}
                    </h2>
                    <p className="c-carousel-showcase__description">{description}</p>
                </header>
            </div>

            <div className="c-carousel-showcase__carousel">
                <div className="c-3d-carousel">
                    <div className="c-3d-carousel__inner">
                        {data.images.dwt.map((data, index) => {
                            const slideItem = index + 1
                            const activeSlide = 3
                            return (
                                <div
                                    className={
                                        activeSlide === slideItem
                                            ? `c-3d-carousel__item c-3d-carousel__item-active`
                                            : activeSlide < index + 1
                                                ? `c-3d-carousel__item c-3d-carousel__item-after c-3d-carousel__item-after--${
                                                    slideItem - activeSlide
                                                }`
                                                : `c-3d-carousel__item c-3d-carousel__item-before c-3d-carousel__item-before--${
                                                    activeSlide - slideItem
                                                }`
                                    }
                                    key={data.image.url.childImageSharp.id}
                                    data-slide={slideItem}
                                >
                                    <Img
                                        fluid={data.image.url.childImageSharp.fluid}
                                        alt={data.image.alt}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="slider-control">
                <button className="c-btn c-btn--light prev">Prev <span></span></button>
                <button className="c-btn c-btn--light next">Next <span></span></button>
            </div>
        </section>
    )
}

export default ShowCaseCarousel

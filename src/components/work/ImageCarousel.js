import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
const ImageCarousel = () => {
  const height = 380

  var settings = {
    dots: false,
    arrows: false,
    speed: 500,
    variableWidth: true,
    infinite: true,
    swipeToSlide: true,
  }
  return (
    <Slider {...settings} className="c-image-carousel">
      <div className="c-image-carousel__item">
        <StaticImage
          className="c-image-carousel__image"
          src="../../images/carousel-image-01.jpg"
          height={height}
          alt="peace nepal treks"
          title="peace nepal treks"
        />
        <figcaption className="c-image-carousel__figcation">
          peace nepal treks
        </figcaption>
      </div>
      <div className="c-image-carousel__item">
        <StaticImage
          className="c-image-carousel__image"
          src="../../images/carousel-image-02.jpg"
          height={height}
          alt="Mountain View"
          title="Far West Nepal"
        />
        <figcaption className="c-image-carousel__figcation">
          Far West Nepal
        </figcaption>
      </div>
      <div className="c-image-carousel__item">
        <StaticImage
          className="c-image-carousel__image"
          src="../../images/carousel-image-03.jpg"
          height={height}
          alt="Mountain View"
          title="Hotel Jal Mahal"
        />
        <figcaption className="c-image-carousel__figcation">
            hotel jal mahal
        </figcaption>
      </div>
      <div className="c-image-carousel__item">
        <StaticImage
          className="c-image-carousel__image"
          src="../../images/carousel-image-04.jpg"
          height={height}
          alt="Filming In Nepal"
        />
        <figcaption className="c-image-carousel__figcation">
          Filming In Nepal
        </figcaption>
      </div>
    </Slider>
  )
}

export default ImageCarousel

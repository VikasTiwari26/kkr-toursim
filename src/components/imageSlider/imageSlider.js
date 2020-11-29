import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  gitaJayantiPic3,
  gitaJayantiPic4,
  gitaJayantiPic5,
  gitaJayantiPic6,
  gitaJayantiPic7,
} from "../../images/images";
import "./imageSlider.css";

class ImageSlider extends Component {
  state = {};

  getImagesForSlider = () => {};

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 1000,
    };
    return (
      <Slider {...settings}>
        <div className="imgpad">
          <img className="imgdetails" src={gitaJayantiPic3} />
        </div>
        <div className="imgpad">
          <img className="imgdetails" src={gitaJayantiPic4} />
        </div>
        <div className="imgpad">
          <img className="imgdetails" src={gitaJayantiPic5} />
        </div>
        <div className="imgpad">
          <img className="imgdetails" src={gitaJayantiPic6} />
        </div>
        <div className="imgpad">
          <img className="imgdetails" src={gitaJayantiPic7} />
        </div>
      </Slider>
    );
  }
}

export default ImageSlider;

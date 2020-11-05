import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick"
import { gitaJayantiPic1, gitaJayantiPic2 } from '../../images/images';
import "./imageSlider.css"

class ImageSlider extends Component {
    state = {  }

    getImagesForSlider =()=>{

    }

    render() { 
        let settings = {  
            dots: true,  
            infinite: true,  
            speed: 500,  
            centerMode: true,  
            slidesToShow: 1,  
            slidesToScroll: 1,
            autoplay:true,  
            arrows:true, 
            autoplaySpeed:2000  
            };  
        return ( 
            <Slider {...settings}>
                <div className="imgpad">
                    <img className="imgdetails" src={gitaJayantiPic1}/>
                </div>
                <div className="imgpad">
                    <img className="imgdetails" src={gitaJayantiPic2}/>
                </div>
            </Slider>
         );
    }
}
 
export default ImageSlider;
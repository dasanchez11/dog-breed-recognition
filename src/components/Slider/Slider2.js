import React, {Component} from 'react'
import './Slider.css'
import image1 from './img1.jpeg'
import image2 from './img2.jpeg'
import image3 from './img4.png'
import Slidersfull from './Slider'

const initialState = {
  slideIndex:1
}


class Slider extends Component{
  constructor(){
    super();
    this.state= initialState
    }
  componentDidMount(){
    this.showSlides(this.slideIndex)
  }


  plusSlides = (n) => {
    const{slideIndex} = this.state
    let newVar = slideIndex+n
    this.setState({slideIndex: newVar})
    this.showSlides(newVar);


  };

  // Thumbnail image controls
  currentSlide = (n) => {
    const{slideIndex} = this.state
    this.showSlides(this.setState({slideIndex:n}));
  };

  showSlides = (n) => {
    const{slideIndex} = this.state;
    let i;
    const slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.setState({slideIndex:1})}
    if (n < 1) {this.setState({slideIndex: slides.length})}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }


  render(){
    return (
      <div>
        <Slidersfull image1={image1} image2={image2} image3={image3} plusSlides={this.plusSlides} currentSlide={this.currentSlide}
        initializeSlides={this.initializeSlides}/>
      </div>
  )
  }
}

export default Slider;

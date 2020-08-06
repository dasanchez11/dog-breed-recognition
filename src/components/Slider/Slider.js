import React from 'react'
import './Slider.css'

const Slidersfull = ({image1,image2,image3,plusSlides,currentSlide}) => {
  return(
    <div>
        {/* // Slideshow container */}
        <div>
          <h1 className="white tc bw2 shadow6">Identify the breed of your dog with our Artificial Inteligence Model</h1>
        </div>
        <div className="slideshow-container" style={{borderRadius:'5px'}}>
            {/* // Full-width images with number and caption text */}
            <div className="mySlides fade" style={{objectFit:'cover'}}>
              <div className="numbertext">1 / 3</div>
              <img src={image1} style={{width:"500px",borderRadius:'5px'}}/>
              {/* <div className="text">Caption Text</div> */}
            </div>
            <div className="mySlides fade" style={{objectFit:'cover'}}>
              <div className="numbertext">2 / 3</div>
              <img src={image2} style={{width:"500px",borderRadius:'5px'}}/>
              {/* <div className="text">Caption Two</div> */}
            </div>

            <div className="mySlides fade" style={{objectFit:'cover'}}>
              <div className="numbertext">3 / 3</div>
              <img src={image3} style={{width:"500px",borderRadius:'5px'}}/>
              {/* <div className="text">Caption Three</div> */}
            </div>
            {/* //  Next and previous buttons */}
            {/* // &#10094; &#10095; "this.plusSlides(1)" */}

            <a className="prev" onClick={()=> plusSlides(-1)}>Prev</a>
            <a className="next" onClick={() => plusSlides(1)}>Next</a>

      </div>
        <br/>

      {/* // The dots/circles */}
        <div style={{"text-align":"center"}}>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
        </div>
    </div>
    )
}

export default Slidersfull;

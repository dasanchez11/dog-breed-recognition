const slider = () => {
  return(
    <div>
      // Slideshow container
      <div className="slideshow-container">
          // Full-width images with number and caption text
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src="img1.jpg" style={{"width:100%"}}/>
            <div className="text">Caption Text</div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src="img2.jpg" style={{"width:100%"}}/>
            <div className="text">Caption Two</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src="img3.jpg" style={{"width:100%"}}/>
            <div className="text">Caption Three</div>
          </div>

        //  Next and previous buttons
          <a className="prev" onclick={"plusSlides(-1)"}>{&#10094;}</a>
          </div>
          </div>)
          <a className="next" onclick={"plusSlides(1)"}>&#10095;</a>
      </div>

      <br>

    // The dots/circles
      <div style={{"text-align:center"}}>
        <span className="dot" onclick={"currentSlide(1)"}></span>
        <span className="dot" onclick={"currentSlide(2)"}></span>
        <span className="dot" onclick={"currentSlide(3)"}></span>
      </div>
    </div>
  )
};

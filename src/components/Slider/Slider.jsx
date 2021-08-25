import React,{useState} from 'react';
import imagen1 from './img1.jpg'
import imagen2 from './img2.jpg'
import imagen3 from './img3.jpg'
import './Slider.css'


const Slider = () =>{
    const images = [imagen1,imagen2,imagen3]
    const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

    const slideRight = () => {
        setIndex((index + 1) % images.length); // increases index by 1
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
        setIndex(images.length - 1); // returns last index of images array if index is less than 0
        } else {
        setIndex(nextIndex);
        }
    };

    return (
        images.length > 0 && (
          <div style={{display:'flex', justifyContent:'center'}}>
            <button  className='prev' onClick={slideLeft}>{"<"}</button>
            <div className='center' style={{width:'600px', height:'400px', borderRadius:'3px',margin:'0'}}>
                <img style={{borderRadius: '2px'}} src={images[index]} alt={index} height='400px'  />
            </div>
            <button className='next' onClick={slideRight}>{">"}</button>
          </div>
        )
      );
};

export default Slider
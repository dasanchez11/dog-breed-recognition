import React from 'react'
import './FaceRecognition.css'



const FaceRecognition = ({imageUrl}) =>{
  return (
    <div className="center ma">
      <div className="mt2 ">
        <img id='inputimage ' className='imagen'  alt='' src={imageUrl} width='500px' height='auto' />
      </div>
    </div>

  )
}

export default FaceRecognition;

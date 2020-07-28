import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange,onButtonSubmit}) =>{
  return (
    <div>
      <p className='f5 center'>
        {'This Magic Brain will detect the breed of your dog'}
      </p>
      <div className='center'>
        <div className=" form center pa4 br3 shadow-5">
          <input id="image-selector" text="Upload dog image" className="f4 pa2 w-70 center" type='file' onChange={onInputChange}/>
          <button onClick={onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
        </div>
      </div>
      <img id='inputimage' className='imagen center' alt='' src="" width='500px' height='auto' />
    </div>

  )
}

export default ImageLinkForm;

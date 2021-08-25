import React from 'react'
import Slider from '../Slider/Slider';

const Navigation = ({onRouteChange,isSignedIn}) =>{
    if (isSignedIn){
      return(
          <nav style={{display:"flex",justifyContent:'flex-end'}} >
            <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer white'> Sign Out </p>
          </nav>
      )
    } else {
      return(
        <div>
          <nav style={{display:"flex",justifyContent:'space-between'}} >
            <div style={{display:"flex"}} >
              <p className='f3 ling dim white pointer pa3'>Home</p>
              <p className='f3 ling dim white pointer pa3'>About</p>
            </div>
            <div className='dtc v-mid w-75 tr' >
              <p onClick={() => onRouteChange('signin')} className='f3 link dim white underline pa3 pointer dib'> Sign In </p>
              <p onClick={() => onRouteChange('register')} className='f3 link dim white underline pa3 pointer dib'> Register </p>
            </div>
          </nav>
          <Slider/>
        </div>

  )
}
}

export default Navigation;

import React from 'react'




const Probabilities = ({box,final}) =>{
    if (final) {
      return (
        <div className="center ma " >
          <div className="pa 20">
          <p> {box.first} <span id="1st-prediction"></span></p>
          <p> {box.second} <span id="2nd-prediction"></span></p>
          <p> {box.third} <span id="3rd-prediction"></span></p>
          </div>
        </div>
      )}
    else {
      return (
        <div>
        </div>
      )
    }

  }


export default Probabilities;

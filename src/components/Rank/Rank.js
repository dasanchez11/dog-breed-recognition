import React from 'react';




const Rank = ({name,entries}) =>{
  return (
    <div className=' ma4 nt0'>
      <div className='center white f3'>
        {`${name}, your curent entry count is`}
      </div>
      <br></br>
      <div className='center white f1'>
        {entries}
      </div>
    </div>

  )
}

export default Rank;

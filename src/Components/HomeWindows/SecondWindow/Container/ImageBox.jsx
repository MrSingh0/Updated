import React from 'react'
import { useState } from 'react'
import "./style.css"

const ImageBox = ({url}) => {

  return (
    <div className='imagebox h-52'>
      <img src={url} alt="" srcset="" />
    </div>
  )
}

export default ImageBox

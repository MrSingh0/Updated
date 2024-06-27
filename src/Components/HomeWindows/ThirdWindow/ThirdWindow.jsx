import React from 'react'
import leaf from "../../../assets/leaf.png"
import "./style.css"

const ThirdWindow = () => {
  return (
    <div className='third flex'>
      <div className='text'>
        <h1>WHY FOREFRONT?</h1>
        <p>We are the preferred choice for sustainable battery application solutions due to our unwavering commitment to environmental  responsibilt, continuous innovation, ans practical utility for end-users. Our proven track record, extensive research and development, and positive market traction demonstrate our experties and reliabiltyin the industry. Join us in leading the charge towards a cleaner, greener tomorrow with ForFront.</p>
      </div>
      <div className='con'>
        <img src={leaf} alt="" srcset="" />
      </div>
    </div>
  )
}

export default ThirdWindow

import React from 'react'
import ContentBox from './ContentBox'
import ImageBox from './ImageBox'
import first from '../../../../assets/first.png'
import second from '../../../../assets/second.png'
import third from '../../../../assets/third.png'
import "./style.css";

const Container = () => {
  return (
    <div className='sec flex justify-center'>
      <div className='box'>
        <ImageBox url={first} />
        <ContentBox data = "Our innovation centers around the development of a cutting-edge battery kit with unparalleled versatility."/>
      </div>
      
      <div className='box'>
        <ContentBox data = "One of the key benefits of our toolkit is the significant reduction in metal consumption."/>
        <ImageBox url={second} />
      </div>

      <div className='box'>
        <ImageBox url={third}/>
        <ContentBox data = "We take pride in our unwavering commitment to sustainability. In addition to the functional aspects of our toolkit."/>
      </div>
    </div>
  )
}

export default Container

import React from 'react'
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';

const ContentBox = ({data}) => {
  return (
    <div className='flex h-48 p-3 font-medium '>
        <h1 className="text-white">{data}</h1>
    </div>
  )
}

export default ContentBox

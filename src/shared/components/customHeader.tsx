// import React from 'react'

interface Props {
    title: string;
    desc?: string;
}

const CustomHeader = ( {title, desc}: Props ) => {
  return (
    <div>
        <div className='content-center'>
            <h1>{ title }</h1>
            { desc && <p>{ desc }</p> }
        </div>
    </div>
  )
}

export default CustomHeader

import React from 'react'

const Video = () => {
  return (
    <div className='relative flex-col flex h-full w-full'>
      <video autoPlay muted loop
      className='rotate-180 absolute top-[] left-0 z-[1] w-full h-full object-cover'
      >
        <source   src='/video/blackhole.webm'/>
      </video>
    </div>
  )
}

export default Video

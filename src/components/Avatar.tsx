import React from 'react'

const Avatar = ({ name }: { name: string }) => {
  return (
    <div className='flex items-center justify-center shadow-md drop-shadow w-12 h-12 rounded-full bg-secondary'>
        <h1 className='text-xl text-brand'>{name[0]}</h1>
    </div>
  )
}

export default Avatar
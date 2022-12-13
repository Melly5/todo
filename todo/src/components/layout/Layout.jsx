import React from 'react'

export const Layout = ({children}) => {
  return (
    <div className='flex items-center justify-center w-screen py-10 bg-gray-900 h-screen'>{children}</div>
  )
}


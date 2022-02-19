import { NextPage } from 'next'
import React from 'react'

const Navbar: NextPage = () => {
  return (
    <>
      <div className="flex space-x-24 w-full bg-red-900 items-center justify-center">
        <div className="basis-2/5 bg-pink-500">logo</div>
        <div className='basis-1/5 bg-amber-500'>menu</div>
        <div className='bg-cyan-500'>button</div>
      </div>
    </>
  )
}

export default Navbar

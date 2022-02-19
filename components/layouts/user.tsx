import { NextPage } from 'next'
import React from 'react'
import Navbar from '../templates/navbar'

interface UserProps {
  children?: React.ReactNode | any
}

export const User: React.FC<UserProps> = ({children}) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  )
}

export default User

import React from 'react'

interface DefaultProps {
  children?: React.ReactNode
}

const Default: React.FC<DefaultProps> = ({ children }) => {
  return <div>{children}</div>
}

export default Default

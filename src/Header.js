import React from 'react'

const Header = ({title}) => {
  return (
    <header >
        <h1 className=' text-center fw-bold '>{title}</h1>
        <hr></hr>
    </header>
  )
}

export default Header
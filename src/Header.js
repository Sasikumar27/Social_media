import React from 'react'

const Header = ({title}) => {
  return (
    <header >
        <h1 className='fw-bold text-center'>{title}</h1>
        <hr></hr>
    </header>
  )
}

export default Header
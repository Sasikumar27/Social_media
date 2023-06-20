import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='Footer'>
        <hr></hr>
        <h5 className='text-center'>copyright &copy;{year}</h5>
    </footer>
  )
}

export default Footer
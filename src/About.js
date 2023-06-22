import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

const About = () => {
   return (
    <main>
          <div className='about'>
            <h3 className='m-1 p-1 text-center'>Hello..</h3>
            <h5 className='text-center'>Thanks for visiting...!</h5>
            <br /><br /><br /><br /><br />
            <p className='text-center'>Follow me on <br />
            <a  href='https://www.linkedin.com/in/sasikumar-c-225874212'><AiOutlineLinkedin/>  </a>
            <a  href="https://www.instagram.com/sasi_200ns" > <AiOutlineInstagram /> </a> </p>
            <p className='text-center'>For more Projects Visit..<a href="https://github.com/Sasikumar27">< BsGithub /></a></p>


          </div>     
    </main>
  )
}

export default About
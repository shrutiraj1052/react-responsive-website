import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
      <div className='row'>
        <div className='col-6 p-25'>
        <h3>ABOUT US</h3>
        <h1>Welcome TO CSE LIBRARY</h1>
        <p>
           The Digilib is a digital library students of 
           cse deparment of rit
        </p>
        <div className='about_btn'>
        <a href=''className="btn btn-smart">
        READ MORE
        </a>
        </div>

        </div>
        <div className='col-6'>
<div className='about_img'>
    <img src='/img/rit.png' alt='rit'/>
</div>
        </div>
      </div>
      
      </div>  
    </div>
  )
}

export default About
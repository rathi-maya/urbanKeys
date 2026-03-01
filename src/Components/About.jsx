import React from 'react'
import AboutImg from '../Assets/AboutPage.jpg'
function About() {
  return (
    <div>
        <div className='text-center mt-6'>
        <h1 className='text-4xl font-bold mb-4'>About <span className='font-normal underline underline-offset-4 decoration-1'>Our Brand</span></h1>
        <p className='text-gray-500'>We don't just sell Properties</p>
        <p className='text-gray-500'>We help you find a place to call home</p>
        </div>
        <div className='mt-6'>
            <img className='w-75 h-75' src={AboutImg} alt="" />
        </div>
    </div>
  )
}

export default About
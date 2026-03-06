import React from 'react'

function Contact() {
  return (
    <div className='max-w-6xl mx-auto px-6'>
        <div className="text-center mt-6">
        <h1 className="text-4xl font-bold mb-4">
          Contact{" "}
          <span className="font-normal underline underline-offset-4 decoration-1">
            With Us
          </span>
        </h1>
         <p className="text-gray-500">Ready to Make a Move? Let's Build Your Future Together</p>
        </div>
        <div  className='font-semibold'>
        <div className=' flex flex-col gap-4 w-full md:w-1/2 mx-auto mt-8'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Your Name' className='border border-gray-500 p-2' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Your Email' className='border border-gray-500 p-2'  />
            <label htmlFor="">Your Message</label>
            <textarea placeholder='Your Message' className='border border-gray-500 p-2' rows={5} />
            
        </div>
        <div className='text-center m-6'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded font-semibold'>Send Message</button>
        </div>
        </div>
    </div>
  )
}

export default Contact
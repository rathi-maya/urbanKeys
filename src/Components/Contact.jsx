import {React, useState} from 'react'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSend =()=>{
    if(!name || !email || !message){
        alert("Please fill in all fields.");
        return;
    }
    alert("Message Sent!");
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className='max-w-6xl mx-auto px-6 mt-12'>
        <div className="text-center mt-6">
        <h1 className="text-4xl font-bold mb-4">
          Contact{" "}
          <span className="font-normal underline underline-offset-4 decoration-1">
            With Us
          </span>
        </h1>
         <p className="text-gray-500">Ready to Make a Move? Let's Build Your Future Together</p>
        </div>
        <div  className='font-regular text-gray-700 mt-8'>
        <div className=' flex flex-col gap-4 w-full md:w-1/2 mx-auto mt-8'>

            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Your Name'className='border border-gray-500 p-2'
            value={name}
            onChange={(e)=>setName(e.target.value)} />

            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Your Email' className='border border-gray-500 p-2' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)} />
            
            <label htmlFor="">Your Message</label>
            <textarea placeholder='Your Message' className='border border-gray-500 p-2' rows={5} 
            value={message}
            onChange={(e)=>setMessage(e.target.value)} />
            
        </div>
        <div className='text-center m-6 '>
        <button className='bg-blue-500 text-white px-4 py-2 rounded font-semibold' onClick={handleSend}>Send Message</button>
        </div>
        </div>
    </div>
  )
}

export default Contact
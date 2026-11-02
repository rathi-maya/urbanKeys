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
     <section id="contact" className=" py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className='max-w-6xl mx-auto px-6 mt-16 '>
         <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">
         LET’S BUILD YOUR DREAM TOGETHER 🤝
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Contact{" "}
          <span className="font-normal italic underline underline-offset-8 decoration-1 text-gray-700">
            With Us
          </span>
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          Ready to Make a Move? Let's Build Your Future Together
        </p>
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
        <button className='bg-blue-500 hover:bg-blue-500 active:bg-blue-800 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl text-sm sm:text-base' onClick={handleSend}>Send Message</button>
        </div>
        </div>
    </div>
     </section>
  )
}

export default Contact
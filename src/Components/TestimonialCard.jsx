import React from 'react'

const TestimonialCard =({ image, name, role, rating, message}) =>{
    return(
        <div className='bg-white shadow-xl rounded-xl p-6 w-80 text-center'>
            <img src={image} alt="" className='w-16 h-16 rounded-full mx-auto mb-4' />
             <h3>{name}</h3>
             <p className='text-gray-600'>{role}</p>
             <div>
                {"⭐".repeat(rating)}
             </div>
               <p className="text-gray-600 mb-4">"{message}"</p>
        </div>
    )
}

export default TestimonialCard;
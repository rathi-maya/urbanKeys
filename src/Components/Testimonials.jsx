import React from 'react'
import TestimonialCard from './TestimonialCard'

const testimonials = [
   {
    name: "John Carter",
    role: "Home Buyer",
    message: "From searching to finalizing the deal, their team supported us every step of the way. Finding our dream home wouldn’t have been possible without them.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=1"
  },
  {
    name: "Emma Watson",
    role: "Property Investor",
    message: "They made our dream of owning a home feel simple and stress-free. Today, we wake up every day grateful for the place we now call home.",
    rating: 4,
    image: "https://i.pravatar.cc/100?img=2"
  },
  {
    name: "David Smith",
    role: "First Time Buyer",
    message: "This wasn’t just a property purchase — it was the start of a new chapter in our lives. We couldn’t be happier with the outcome and the team’s dedication to making it happen.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=3"
  }
]

const Testimonials = () => {
  return (
   <section>
          <div className="text-center mt-6">
        <h1 className="text-4xl font-bold mb-4">
          Customer{" "}
          <span className="font-normal underline underline-offset-4 decoration-1">
            Testimonials
          </span>
        </h1>
         <p className="text-gray-500">Ready to Make a Move? Let's Build Your Future Together</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 justify-items-center ">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              image={item.image}
              name={item.name}
              role={item.role}
              rating={item.rating}
              message={item.message}
            />
          ))}
        </div>
   </section>
  )
}

export default Testimonials

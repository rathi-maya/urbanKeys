import React from 'react'
import TestimonialCard from './TestimonialCard'

const testimonials = [
   {
    name: "John Carter",
    role: "Home Buyer",
    message: "From searching to finalizing the deal, their team supported us every step of the way. Finding our dream home wouldn’t have been possible without them.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=7"
  },
  {
    name: "Emma Watson",
    role: "Property Investor",
    message: "They made our dream of owning a home feel simple and stress-free. Today, we wake up every day grateful for the place we now call home.",
    rating: 4,
    image: "https://i.pravatar.cc/100?img=5"
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
   <section id="testimonials" className="py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
       <div className="text-center mt-12 mb-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">
          WHAT OUR CLIENTS FEEL ❤️
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Customer{" "}
          <span className="font-normal italic underline underline-offset-8 decoration-1 text-gray-700">
            Testimonials
          </span>
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
Ready to Make a Move? Let's Build Your Future Together
        </p>
      </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 justify-items-center px-4">
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

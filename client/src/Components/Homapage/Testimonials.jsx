import React from 'react'
import { Star } from 'lucide-react'; 


const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                text: "Working with Houzez was an absolute pleasure. They helped me find my dream home within weeks!",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Property Investor",
                text: "The most professional real estate team I've ever worked with. Their market knowledge is unparalleled.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "First-time Buyer",
                text: "As a first-time buyer, I was nervous, but they guided me through every step. Couldn't be happier!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


  )
}

export default Testimonials
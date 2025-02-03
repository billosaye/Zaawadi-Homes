import React from 'react'
import { MapPin, Building2, Building } from 'lucide-react';

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            price: '$850,000',
            title: 'Modern Family Home',
            location: '123 Main St, New York, NY',
            beds: 4,
            baths: 3,
            sqft: '2,500'
          },
          {
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            price: '$1,200,000',
            title: 'Luxury Villa',
            location: '456 Park Ave, Los Angeles, CA',
            beds: 5,
            baths: 4,
            sqft: '3,800'
          },
          {
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            price: '$750,000',
            title: 'Urban Apartment',
            location: '789 Downtown St, Chicago, IL',
            beds: 3,
            baths: 2,
            sqft: '1,800'
          },
          {
            image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            price: '$920,000',
            title: 'Seaside Residence',
            location: '321 Beach Rd, Miami, FL',
            beds: 4,
            baths: 3,
            sqft: '2,800'
          },
          {
            image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            price: '$680,000',
            title: 'Mountain View House',
            location: '567 Highland Dr, Denver, CO',
            beds: 3,
            baths: 2,
            sqft: '2,200'
          },
          {
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            price: '$1,500,000',
            title: 'Contemporary Mansion',
            location: '890 Elite Way, Seattle, WA',
            beds: 6,
            baths: 5,
            sqft: '4,500'
          }
        ].map((property, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src={property.image}
              alt="Property"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-blue-600 font-semibold">{property.price}</span>
              <h3 className="text-xl font-bold mt-2">{property.title}</h3>
              <p className="text-gray-600 mt-2 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {property.location}
              </p>
              <div className="flex items-center mt-4 text-gray-600 text-sm">
                <span className="flex items-center mr-4">
                  <Building2 className="w-4 h-4 mr-1" />
                  {property.beds} Beds
                </span>
                <span className="flex items-center mr-4">
                  <Building className="w-4 h-4 mr-1" />
                  {property.baths} Baths
                </span>
                <span>{property.sqft} sqft</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
    
  )
}

export default FeaturedProperties
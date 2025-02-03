import React from 'react';
import { Home, MapPin, Phone, Mail } from 'lucide-react';
import Testimonials from '../Components/Homapage/Testimonials';
import FeaturedProperties from '../Components/Homapage/FeaturedProperties';

function HomePage() {
  return (
    <div className="min-h-screen bg-white"> 
      {/* Hero Section */}
      <section  
        className="relative min-h-screen flex items-center justify-center" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-white mb-8">
            Search properties for sale and to rent in your area
          </p>
        </div>
      </section>

      {/* Featured Properties */}
      <FeaturedProperties />   
      

      {/* Testimonials */}
      <Testimonials />
      

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect property. Our expert agents are ready to guide you through every step.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Have questions? We're here to help you find your perfect home.
              </p>
              <div className="space-y-4">  
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span>+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span>contact@ZaawadiHomes.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span>1960 Real Estate Street, NY 10001</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md"
              ></textarea>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Home className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold">Zaawadi</span>
              </div>
              <p className="text-gray-400">
                The most trusted real estate platform for finding your dream home.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Properties</a></li>
                <li><a href="#" className="hover:text-white">Agents</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Property Types</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Houses</a></li>
                <li><a href="#" className="hover:text-white">Apartments</a></li>
                <li><a href="#" className="hover:text-white">Villas</a></li>
                <li><a href="#" className="hover:text-white">Commercial</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md w-full text-gray-900"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zaawadi Homes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
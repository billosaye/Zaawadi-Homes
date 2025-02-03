import React from 'react';
import { Users, Award, Building, BarChart, Star, CheckCircle2 } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Background */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            filter: 'brightness(0.7)' 
          }}
        ></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Redefining Real Estate</h1>
          <p className="text-xl md:text-2xl text-white leading-relaxed">
            Since 1995, we've been transforming the way people discover, buy, and sell properties.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: '15K+', label: 'Properties Sold', color: 'bg-blue-50' },
              { number: '25K+', label: 'Happy Clients', color: 'bg-green-50' },
              { number: '100+', label: 'Expert Agents', color: 'bg-purple-50' },
              { number: '95%', label: 'Success Rate', color: 'bg-orange-50' },
            ].map((stat, index) => (
              <div key={index} className={`${stat.color} rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300`}>
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              What started as a small family business has grown into one of the most trusted names in real estate. 
              Our journey is built on the foundation of trust, innovation, and unwavering commitment to our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: '1995',
                title: 'The Beginning',
                description: 'Founded with a vision to transform real estate services',
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                year: '2010',
                title: 'Digital Revolution',
                description: 'Pioneered online property listings and virtual tours',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                year: 'Today',
                title: 'Market Leader',
                description: 'Setting industry standards with innovative solutions',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((milestone, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={milestone.image} 
                  alt={milestone.title}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-2xl font-bold mb-2 block">{milestone.year}</span>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-200">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                name: 'Michael Anderson',
                role: 'Founder & CEO',
                quote: 'Building trust through exceptional service'
              },
              {
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                name: 'Sarah Chen',
                role: 'Chief Operations Officer',
                quote: 'Innovation drives our success'
              },
              {
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                name: 'James Wilson',
                role: 'Head of Sales',
                quote: 'Creating lasting relationships'
              }
            ].map((member, index) => (
              <div key={index} className="group relative">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-gray-300 mb-4">{member.role}</p>
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl opacity-90">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trust',
                description: 'Building lasting relationships through transparency and integrity'
              },
              {
                title: 'Excellence',
                description: 'Delivering exceptional service that exceeds expectations'
              },
              {
                title: 'Innovation',
                description: 'Embracing new technologies to enhance the client experience'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found their dream properties through our expert services.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
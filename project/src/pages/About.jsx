import React from 'react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20 fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-4xl font-light mb-12">Our Story</h1>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            Founded in 2024, vulgar was born from a passion for timeless fashion and sustainable practices. 
            We believe in creating clothing that not only looks beautiful but is also made to last.
          </p>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            Our commitment to quality is reflected in every piece we create. We work with the finest materials 
            and skilled artisans to bring you clothing that combines classic elegance with modern sophistication.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            We're more than just a clothing brand - we're a community of individuals who appreciate the art of 
            dressing well and making conscious choices about their wardrobe.
          </p>
        </div>
        <div className="h-[600px] bg-zinc-900"></div>
      </div>

      <div className="mt-32">
        <h2 className="text-3xl font-light text-center mb-20">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              title: 'Quality',
              description: 'We use only the finest materials and craftsmanship in every piece we create.'
            },
            {
              title: 'Sustainability',
              description: 'Our commitment to the environment is reflected in our eco-friendly practices.'
            },
            {
              title: 'Timeless Design',
              description: 'We create pieces that transcend trends and remain stylish for years to come.'
            }
          ].map((value) => (
            <div key={value.title} className="text-center">
              <h3 className="text-xl font-light mb-6">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

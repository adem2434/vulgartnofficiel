import React from 'react';
    import { useNavigate } from 'react-router-dom';
    import { FiArrowLeft } from 'react-icons/fi';

    function About() {
      const navigate = useNavigate();

      const handleBack = () => {
        navigate(-1);
      };

      return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 fade-in">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <button onClick={handleBack} className="px-3 py-1 border border-white text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center">
              <FiArrowLeft size={14} className="mr-1" /> Back
            </button>
            <h1 className="text-2xl md:text-3xl font-light">About Us</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-light mb-6 md:mb-8">Our Story</h1>
              <p className="text-gray-400 mb-4 md:mb-5 text-base md:text-lg leading-relaxed">
                Founded in 2024, vulgar was born from a passion for timeless fashion and sustainable practices. 
                We believe in creating clothing that not only looks beautiful but is also made to last.
              </p>
              <p className="text-gray-400 mb-4 md:mb-5 text-base md:text-lg leading-relaxed">
                Our commitment to quality is reflected in every piece we create. We work with the finest materials 
                and skilled artisans to bring you clothing that combines classic elegance with modern sophistication.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                We're more than just a clothing brand - we're a community of individuals who appreciate the art of 
                dressing well and making conscious choices about their wardrobe.
              </p>
            </div>
            <div className="h-[200px] md:h-[300px] bg-zinc-900">
              <img
                src="https://iili.io/2iDERmG.jpg"
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-10 md:mt-16">
            <h2 className="text-xl md:text-2xl font-light text-center mb-10 md:mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                  <h3 className="text-lg font-light mb-3 md:mb-4">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    export default About;

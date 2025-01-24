import React from 'react';
    import { FiArrowRight } from 'react-icons/fi';

    function LookbookItem({ images, title, onClick }) {
      return (
        <div onClick={onClick} className="lookbook-item cursor-pointer">
          <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
            {images && images.length > 0 && (
              <img
                src={images[0]}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
              />
            )}
          </div>
          <div className="lookbook-overlay absolute bottom-0 left-0 p-4 flex items-end justify-start">
            <div className="text-left">
              <h3 className="text-2xl font-light mb-2">{title}</h3>
              <div className="inline-flex items-center text-sm hover:ml-2 transition-all duration-300">
                Explore Collection <FiArrowRight className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default LookbookItem;

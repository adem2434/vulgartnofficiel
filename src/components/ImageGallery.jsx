import React, { useState } from 'react';

    function ImageGallery({ images, onZoom }) {
      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
      };

      return (
        <div>
          {images && images.length > 0 && (
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt={`Product Image ${currentImageIndex + 1}`}
                className="w-full h-[250px] md:h-[350px] object-cover cursor-zoom-in"
                onClick={() => onZoom(images[currentImageIndex])}
              />
              <div className="flex mt-2 space-x-2 overflow-x-auto">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product Thumbnail ${index + 1}`}
                    className={`w-12 h-16 object-cover cursor-pointer border border-zinc-800 ${index === currentImageIndex ? 'border-white' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    export default ImageGallery;

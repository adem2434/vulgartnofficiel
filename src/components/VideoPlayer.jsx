import React from 'react';

    function VideoPlayer({ src }) {
      return (
        <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
          <iframe
            width="560"
            height="315"
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      );
    }

    export default VideoPlayer;

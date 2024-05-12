
import React from 'react';

const Hero = () => {
  return (
    
    <div className="relative h-screen">
    
      {/* Video Background */}
      <video
        className="e top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="src\components\Buymac\xlarge_2x.mp4" type="video/mp4" />
        {/* Add additional source tags for different video formats if needed */}
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>     
    </div>
  );
};

export default Hero;
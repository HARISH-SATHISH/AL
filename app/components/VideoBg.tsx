import React from 'react';


const VideoBackground: React.FC = () => {
  return (
    <div className=" -z-10 top-0 left-0 w-full h-full overflow-hidden fixed">
      <video src={require('../../public/space.mp4')}   className="w-full h-full object-cover " autoPlay muted loop/>
    </div>
  );
};

export default VideoBackground;

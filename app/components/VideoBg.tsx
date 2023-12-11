import React from 'react';
import Image from 'next/image';
import spacegf from '../../public/spacegf.gif'

const VideoBackground: React.FC = () => {
  return (
    <div className=" -z-10 top-0 left-0 w-full h-full overflow-hidden fixed">
    <Image src={spacegf}className="w-full h-full object-cover " alt='bg'></Image>
    </div>
  );
};

export default VideoBackground;

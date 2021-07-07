import React from "react";
import Image from "next/image"
import Tilt from "react-tilt";
import brain from './brain.png';

const Logo = () => {
  return (
    <div className="ma4 mt0 pa4 ">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <Image src={brain} alt="Brain" />
        </div>
        
      </Tilt>
    </div>
  );
};

export default Logo;

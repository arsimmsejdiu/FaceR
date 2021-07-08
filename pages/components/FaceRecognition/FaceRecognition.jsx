import React from "react";
// import Image from "next/image";
import metro from "./metro-north.jpg";

const FaceRecognition = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="center ma">
      {!imageUrl ? (
        <div className="pa5 f3 center white">
          {"Face Recognition Picture return's here ... "}
        </div>
      ) : (
        <div className="absolute mt2">
          <img
            src={imageUrl}
            alt="Face Recognition picture"
            width="400"
            height="400"
          />
        </div>
      )}
    </div>
  );
};

export default FaceRecognition;

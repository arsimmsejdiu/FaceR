import React from "react";
// import Image from "next/image";
import metro from "./metro-north.jpg";

const FaceRecognition = ({ imageUrl, box }) => {
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
            id="inputImage"
            src={imageUrl}
            alt="Face Recognition picture"
            width="400"
            height="auto"
          />
          <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

          </div>
        </div>
      )}
    </div>
  );
};

export default FaceRecognition;

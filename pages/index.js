import React, { useState } from "react";
import Head from "next/head";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import "tachyons";

// import Footer from "./components/footer";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

const app = new Clarifai.App({
  apiKey: "3583290e1d7e48b2b57f54497ebc2848",
});

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

export default function Home() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const reset = () => {
    setInput("");
    setImageUrl("");
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    console.log(box)
    setBox(box);
  };

  const onSubmit = () => {
    setImageUrl(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => displayFaceBox(calculateFaceLocation(response)))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Head>
        <title>Face Recognition App</title>
        <meta name="description" content="Face Recognition App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles className="particles" params={particlesOptions} />

      <Navigation />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        reset={reset}
        onSubmit={onSubmit}
      />
      <FaceRecognition box={box} imageUrl={imageUrl} />
      {/* <div className={styles.container}>
        <Footer />
      </div> 
        23, vid 4
      */}
    </div>
  );
}

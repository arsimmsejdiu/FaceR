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
  const [ imageUrl, setImageUrl] = useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = () => {
    setImageUrl(input)
    app.models
      .predict(
        Clarifai.COLOR_MODEL,
        input
      )
      .then(
        function (response) {
          // do something with response console.log(response);
          console.log(response);
        },
        function (err) {
          // there was an error
          console.log(err);
        }
      );
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
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
      <FaceRecognition imageUrl={imageUrl} /> 
      {/* <div className={styles.container}>
        <Footer />
      </div> 
        23, vid 4
      */}
    </div>
  );
}

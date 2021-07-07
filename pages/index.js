import React, { useState } from "react";
import Head from "next/head";
import Particles from "react-particles-js";
import "tachyons";

import Footer from "./components/footer";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";

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

  const onInputChange = (event) => {
    console.log(event.target.value);
  };

  const onSubmit = () => {
    console.log("Clicked !! ");
    app.models
      .predict("3583290e1d7e48b2b57f54497ebc2848", "https://samples.clarifai.com/metro-north.jpg")
      .then(
        function (response) {
          // do something with responseconsole.log(response);
        },
        function (err) {
          // there was an error
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
      {/*
        <FaceRecognition /> */}
      {/* <div className={styles.container}>
        <Footer />
      </div> 
        23, vid 4
      */}
    </div>
  );
}

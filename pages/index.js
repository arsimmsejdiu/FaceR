import Head from "next/head";
import styles from "../styles/Home.module.css";
import Particles from "react-particles-js";
import "tachyons";

import Footer from "./components/footer";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3ca9d1",
        blur: 5,
      },
    },
   number: {
     value: 80,
     density: {
       enable: true,
       value_area: 800
     }
   }
  },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Face Recognition App</title>
        <meta name="description" content="Face Recognition App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles
        className="particles"
        params={particlesOptions}
      />

      <Navigation />
      <Rank />
      <ImageLinkForm />
      {/*
        <FaceRecognition /> */}
      {/* <div className={styles.container}>
        <Footer />
      </div> */}
        
    </div>
  );
}

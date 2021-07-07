import Head from "next/head";
import styles from "../styles/Home.module.css";
import 'tachyons';

import Footer from "./components/footer";
import Navigation from "./components/Navigation/Navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Face Recognition App</title>
        <meta name="description" content="Face Recognition App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      {/* 
        <ImageLinkForm />
        <FaceRecognition /> */}
      <div className={styles.container}>
        <Footer />
      </div>
    </div>
  );
}

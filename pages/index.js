import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Footer from './components/footer';
import Navigation from './components/Navigation/Navigation'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Face Recognition App</title>
        <meta name="description" content="Face Recognition App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navigation />
        {/* <Logo />
        <ImageLinkForm />
        <FaceRecognition /> */}
      </main>
      <Footer />
    </div>
  )
}

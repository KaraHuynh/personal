import Head from 'next/head'
import Navbar from './navbar'
import Welcome from './welcome'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import Footer from './footer'

export default function Home() {
  return (
    <div id="website">
      <Head>
        <title>Kara Huynh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Welcome/>
      <About/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

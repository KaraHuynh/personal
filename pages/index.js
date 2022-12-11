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
        <meta charset="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="author" content="Kara Huynh"/>
		    <meta name="description" content="My own personal website :)"/>
        <title>Kara Huynh</title>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/878469526117810217/1001618442161508422/Screenshot_2022-07-26_183159-removebg-preview_3.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
      </Head>
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

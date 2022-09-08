import Head from 'next/head'
import Hero from '../Components/Hero';
import About from '../Components/About';
import { Element } from 'react-scroll'
import Skills from '../Components/Skills';
import Funfacts from '../Components/Funfacts';
import Services from '../Components/Services';
import Experiences from '../Components/Experiences';
import Clients from '../Components/Clients';
import Contact from '../Components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sorathiya Afroz</title>
        <meta name="description" content="Sorathiya Afroz - Frontend developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Element name="section-home">
        <Hero />
      </Element>

      <Element name="section-about">
        <About />
      </Element>

      <Element name="section-skills">
        <Skills />
      </Element>

      <Element name="section-funfacts">
        <Funfacts />
      </Element>

      <Element name="section-services">
        <Services />
      </Element>

      <Element name="section-experiences">
        <Experiences />
      </Element>

      <Element name="section-clients">
        <Clients />
      </Element>

      <Element name="section-contact">
          <Contact />
      </Element>
    </>
  )
}

import Head from 'next/head'
import Hero from '../components/Hero';
import About from '../components/About';
import { Element } from 'react-scroll'
import Skills from '../components/Skills';
import Funfacts from '../components/Funfacts';
import Services from '../components/Services';
import Experiences from '../components/Experiences';
import Clients from '../components/Clients';
import Contact from '../components/Contact';

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

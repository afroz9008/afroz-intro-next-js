import Head from 'next/head'
import Hero from '../Component/Hero';
import About from '../Component/About';
import { Element } from 'react-scroll'
import Skills from '../Component/Skills';
import Funfacts from '../Component/Funfacts';
import Services from '../Component/Services';
import Experiences from '../Component/Experiences';
import Clients from '../Component/Clients';
import Contact from '../Component/Contact';

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

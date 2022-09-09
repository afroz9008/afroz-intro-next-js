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
import { getAboutSectionData, getExperinece, getHeader, getHeroSectionData, getServices, getSkills } from '../libs/queries';

export default function Home(props) {

  return (
    <>
      <Head>
        <title>{props.header.title}</title>
        <meta name="description" content={`${props.header.title} - ${props?.header?.designation}`} />
        <link rel="icon" href={props.header.image} />
      </Head>
      <Element name="section-home">
        <Hero data={props.hero} />
      </Element>

      <Element name="section-about">
        <About data={props.about} />
      </Element>

      <Element name="section-skills">
        <Skills data={props.skills} about={props.about} />
      </Element>

      <Element name="section-funfacts">
        <Funfacts />
      </Element>

      <Element name="section-services">
        <Services data={props.services} />
      </Element>

      <Element name="section-experiences">
        <Experiences data={props.experiences} />
      </Element>

      <Element name="section-clients">
        <Clients />
      </Element>

      <Element name="section-contact">
        <Contact data={props.about} />
      </Element>
    </>
  )
}

export const getServerSideProps = async () => {
  const header = await getHeader();
  const hero = await getHeroSectionData();
  const about = await getAboutSectionData();
  const skills = await getSkills();
  const services = await getServices();
  const experiences = await getExperinece();

  return {
    props: {
      header,
      hero,
      about,
      skills,
      services,
      experiences,
    }
  };

};
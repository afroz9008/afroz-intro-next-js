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
import Layout from '../Components/Layout';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export default function Home(props) {

  return (
    <>
      <Layout header={props.header}>
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
      </Layout>
      <IconButton style={{ position: "fixed", right: 0, bottom: 0, outline: 'none' }}>
        <Link href="https://afroz-sorathiya.sanity.studio" passHref>
          <a target="_blank" rel="noopener noreferrer" style={{ height: 50, width: 50 }}>
            <Image src={"/settings.png"} height={50} width={50} alt='Admin Setting' />
          </a>
        </Link>
      </IconButton>
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

import moment from "moment";
import { sanityClient, urlFor } from "../sanity";
import { GET_ABOUT_QUERY } from "./about";
import { GET_EXP_QUERY } from "./experiences";
import { GET_HEADER_QUERY } from "./header";
import { GET_HERO_QUERY } from "./hero";
import { GET_SERVICES_QUERY } from "./services";
import { GET_SKILLS_QUERY } from "./skills";

export const getHeroSectionData = async () => {
    const heroSectionData = await sanityClient.fetch(GET_HERO_QUERY);
    return heroSectionData.map(a => ({ ...a, image: urlFor(a.image).url() }));
};

export const getAboutSectionData = async () => {
    const data = await sanityClient.fetch(GET_ABOUT_QUERY);
    const activeData = data.find(a => a.isActive);
    if (activeData) {
        activeData.image = urlFor(activeData.image).url();
        return activeData;
    }
    return {};
};


export const getSkills = async () => {
    const data = await sanityClient.fetch(GET_SKILLS_QUERY);
    return data;
};

export const getServices = async () => {
    const data = await sanityClient.fetch(GET_SERVICES_QUERY);
    return data.map(a => ({ ...a, image: urlFor(a.image).url() }));
};

export const getExperinece = async () => {
    const data = await sanityClient.fetch(GET_EXP_QUERY);
    return data.sort((a,b)=>new Date(b._createdAt)-new Date(a._createdAt)).map(a => ({
        ...a,
        year: `${moment(a.startDate).format("yyyy")} - ${a.present ? "Present" : moment(a.endDate).format("yyyy")}`
    }));
};

export const getHeader = async () => {
    const data = await sanityClient.fetch(GET_HEADER_QUERY);
    const activeHeader = data.find(a => a.isActive) || {};
    if (activeHeader) {
        activeHeader.image = urlFor(activeHeader.image).url();
    }
    return activeHeader;
};
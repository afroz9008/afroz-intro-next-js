import { createCurrentUserHook, createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    apiVersion: '2021-03-25',
    useCdn: process.env.NODE_ENV === "production"
};

export const sanityClient = createClient(config);

export const urlFor = (s) => createImageUrlBuilder(config).image(s);

export const useCurrentUser = createCurrentUserHook(config);

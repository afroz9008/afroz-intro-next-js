/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import dynamic from 'next/dynamic';
import Head from 'next/head';

export default function WeddingInvitation() {
    return (
        <>
            <Head>
                {/* Common Tag */}
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Afreen and Hanif Wedding Invitation</title>

                {/* SEO Tag */}
                <meta name="author" content="dewanakl" />
                <meta name="language" content="Indonesia" />
                <meta name="robots" content="all, max-image-preview:large" />
                <meta name="googlebot" content="all, max-image-preview:large" />
                <meta name="title" content="Afreen and Hanif Wedding Invitation" />
                <meta name="description" content="Afreen and Hanif Wedding Invitation" />
                <meta property="og:title" content="Afreen and Hanif Wedding Invitation" />
                <meta property="og:description" content="Afreen and Hanif Wedding Invitation" />
                <meta property="og:image" content="/assets/images/bg.png" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:alt" content="Afreen and Hanif Wedding Invitation" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="id_ID" />
                <meta property="og:site_name" content="Afreen and Hanif Wedding Invitation" />

                {/* Appearance */}
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content="Afreen and Hanif Wedding Invitation" />
                <meta name="color-scheme" content="dark" />
                <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon-32x32.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
                <link rel="manifest" href="/assets/images/site.webmanifest" />
                <link rel="mask-icon" href="/assets/images/safari-pinned-tab.svg" color="#e5cacf" />
                <meta name="msapplication-TileColor" content="#e5cacf" />
                <meta name="theme-color" content="#e5cacf" />

                {/* Preconnect CDN */}
                <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

                {/* Dependencies CSS */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"
                    integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI=" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                    integrity="sha256-MBffSnbbXwHCuZtgPYiwMQbfE7z+GOZ7fBPCNB06Z98=" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/all.min.css"
                    integrity="sha256-CTSx/A06dm1B063156EVh15m6Y67pAjZZaQc89LLSrU=" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
                    integrity="sha256-GqiEX9BuR1rv5zPU5Vs2qS/NSHl1BJyBcjQYJ6ycwD4=" crossOrigin="anonymous" />

                {/* Fonts */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic&display=swap" />
            </Head>
            <iframe
                style={{ height: "99vh", width: "100vw", overflow: "hidden" }}
                src={"https://afroz9008.github.io/sister-wedding/"}
            />
        </>
    )
};

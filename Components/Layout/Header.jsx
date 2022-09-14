import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaDribbble,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const headerData = {
    social: {
        facebook:
            "https://www.facebook.com/people/Sorathiya-Afroz/100014619039836/",
        instagram: "https://www.instagram.com/sorathiya_afroz/",
        youtue: "https://www.youtube.com/channel/UC_8BLELEEDJXVWsZ6f-dEfw/featured",
        dribbble: "https://dribbble.com/",
    },
};

function Header({ header={}, toggleHeader, toggleHandler }) {
    useEffect(() => {

        const el = document.querySelector(".mobile-header")
        const observer = new IntersectionObserver(
            ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
            { threshold: [1] }
        );

        observer.observe(el);
    }, []);

    return (
        <>
             <div
                style={{ position: "sticky", top: -1, zIndex: 1 }}
                className={"mobile-header mt-4"}
            >
                <div className="mobile-header header-shimmer flex-grow-1 d-flex position-relative">
                    <div className="header-shimmer-border" />
                    <div className="mobile-header py-2 px-3 header-main-content flex-grow-1 d-flex position-relative">
                        <button className="menu-icon mr-2" onClick={toggleHandler}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <Link href="/" >
                            <a className="logo" style={{
                                height: 40,
                                width: 40,
                                borderRadius: 25,
                                overflow: "hidden",
                                position: "relative"
                            }}>
                                <Image
                                    width={40}
                                    height={40}
                                    src={header.image || "/favicon.ico"}
                                    alt={header.title}
                                />
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="site-title dot ml-2 default-theme-text-color-1">
                                {header.title}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <header
                className={
                    toggleHeader
                        ? "left float-left shadow-dark open"
                        : "left float-left shadow-dark"
                }
                style={{ zIndex: 2 }}
            >
                <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={toggleHandler}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="header-inner d-flex align-items-start flex-column">
                    <Link
                        href="/"
                    >
                        <a
                            className="logo"
                            style={{
                                height: 40,
                                width: 40,
                                borderRadius: 25,
                                overflow: "hidden",
                            }}>
                            <Image
                                width={40}
                                height={40}
                                src={header.image || "/favicon.ico"}
                                alt={header.title}
                            />
                        </a>
                    </Link>
                    <Link
                        href="/"
                    >
                        <a
                            className="site-title dot mt-3 default-theme-text-color-1"
                        >
                            {(header.title || "").split(" ").map((t,i)=><>{!!i && <br />}{t}</>)}
                        </a>
                    </Link>

                    <span className="site-slogan default-theme-text-color-1">
                        {header.designation}
                    </span>

                    <nav>
                        <ul className="vertical-menu scrollspy">
                            <li>
                                <ScrollLink
                                    onClick={toggleHandler}
                                    activeClass="active"
                                    to="section-home"
                                    spy={true}
                                    className="default-theme-text-color-1"
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <i className="icon-home"></i>Home
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    onClick={toggleHandler}
                                    activeClass="active"
                                    to="section-about"
                                    spy={true}
                                    className="default-theme-text-color-1"
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                >
                                    <i className="icon-user"></i>About
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    onClick={toggleHandler}
                                    activeClass="active"
                                    to="section-skills"
                                    spy={true}
                                    className="default-theme-text-color-1"
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                >
                                    <i className="icon-support"></i>Skills
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    onClick={toggleHandler}
                                    activeClass="active"
                                    to="section-funfacts"
                                    spy={true}
                                    className="default-theme-text-color-1"
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <i className="icon-grid"></i>Works
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    onClick={toggleHandler}
                                    activeClass="active"
                                    to="section-services"
                                    spy={true}
                                    className="default-theme-text-color-1"
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                >
                                    <i className="icon-bulb"></i>Services
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    onClick={toggleHandler}
                                    activeClass="active"
                                    to="section-experiences"
                                    spy={true}
                                    className="default-theme-text-color-1"
                                    smooth={true}
                                    offset={-55}
                                    duration={500}
                                >
                                    <i className="icon-graduation"></i>Resume
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    onClick={toggleHandler}
                                    activeClass="active"
                                    to="section-contact"
                                    spy={true}
                                    className="default-theme-text-color-1"
                                    smooth={true}
                                    offset={-255}
                                    duration={500}
                                >
                                    <i className="icon-phone"></i>Contact
                                </ScrollLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="footer mt-auto">
                        <ul className="social-icons list-inline">
                            {!headerData.social.facebook ? null : (
                                <li className="list-inline-item">
                                    <a href={headerData.social.facebook}>
                                        <FaFacebookF />
                                    </a>
                                </li>
                            )}
                            {!headerData.social.twitter ? null : (
                                <li className="list-inline-item">
                                    <a href={headerData.social.twitter}>
                                        <FaTwitter />
                                    </a>
                                </li>
                            )}
                            {!headerData.social.instagram ? null : (
                                <li className="list-inline-item">
                                    <a href={headerData.social.instagram}>
                                        <FaInstagram />
                                    </a>
                                </li>
                            )}
                            {!headerData.social.youtue ? null : (
                                <li className="list-inline-item">
                                    <a href={headerData.social.youtue}>
                                        <FaYoutube />
                                    </a>
                                </li>
                            )}
                            {!headerData.social.dribbble ? null : (
                                <li className="list-inline-item">
                                    <a href={headerData.social.dribbble}>
                                        <FaDribbble />
                                    </a>
                                </li>
                            )}
                        </ul>

                        <span className="copyright">
                            &copy; {new Date().getFullYear()} {header.title}
                        </span>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;

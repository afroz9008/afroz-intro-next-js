import Image from "next/image";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import SectionHeading from "../SectionHeading";

const aboutData = {
    cvpath: "media/empty.pdf",
    image: "/favicon.ico",
    name: "Afroz Sorathiya",
    location: "Gujarat, INDIA",
    birthday: "30 May, 2000",
    email: "afrozsorathiya9586@gmail.com",
    aboutMe:
        "I am Afroz sorathiya, Front-end developer from Gujarat, India. I have rich experience in web site design and building and customization, also I am good at React Native.",
};

function Index() {
    return (
        <section className="shadow-blue white-bg padding">
            <SectionHeading title="About Me" />
            <div className="row">
                <div className="col-md-3">
                    <div style={{minHeight:100,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center", backgroundImage:`url(${aboutData.image})`}}/>
                </div>
                <div className="col-md-9">
                    <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
                    <p className="mb-0">{aboutData.aboutMe}</p>
                    <div className="row my-4">
                        <div className="col-md-6">
                            <p className="mb-2">
                                Name: <span className="text-dark">{aboutData.name}</span>
                            </p>
                            <p className="mb-0">
                                Birthday: <span className="text-dark">{aboutData.birthday}</span>
                            </p>
                        </div>
                        <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
                            <p className="mb-2">
                                Location: <span className="text-dark">{aboutData.location}</span>
                            </p>
                            <p className="mb-0">
                                Email: <span className="text-dark">{aboutData.email}</span>
                            </p>
                        </div>
                    </div>
                    {/* <a href={aboutData.cvpath} className="btn btn-default mr-3" download>
          <i className="icon-cloud-download"></i>Download CV
        </a> */}
                    <ScrollLink
                        activeClass="active"
                        to="section-contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={50}
                        className="btn btn-alt mt-2 mt-md-0 mt-xs-2 default-theme-text-color-1"
                    >
                        <i className="icon-envelope"></i>Hire me
                    </ScrollLink>
                </div>
            </div>
        </section>
    );
}

export default Index;

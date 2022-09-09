import React from "react";
import TrackVisibility from "react-on-screen";
import SectionHeading from "../SectionHeading";
import dynamic from "next/dynamic";

const Skill = dynamic(() => import("./Skill"), { ssr: false });

function Skills({data,about}) {
    return (
        <section className="shadow-blue color-white padding">
            <div className="overlay"></div>
            <SectionHeading className="color-white" title="My skills" />
            <div>
                <p className="mb-0 default-theme-text-color-1">{about.description}</p>
                <div className="mt-5">
                    <div className="row -mt-50">
                        {data.sort((a, b) => b.percentage - a.percentage).map((progress,i) => (
                            <div className="col-md-6 mt-50" key={i+progress.name}>
                                <TrackVisibility once>
                                    <Skill progress={progress} />
                                </TrackVisibility>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;

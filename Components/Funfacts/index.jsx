import dynamic from "next/dynamic";
import React from "react";
import TrackVisibility from "react-on-screen";

const Funfact = dynamic(() => import("./fact.jsx"), { ssr: false });

const funfactData = [
    {
        id: 1,
        title: "Projects completed",
        count: 6,
        icon: "icon-like",
    },
    {
        id: 2,
        title: "Cup of coffee",
        count: 2,
        icon: "icon-cup",
    },
    {
        id: 3,
        title: "Happy customers",
        count: 3,
        icon: "icon-emotsmile",
    },
    {
        id: 4,
        title: "Awards won",
        count: 1,
        icon: "icon-trophy",
    },
];

function Funfacts() {
    return (
        <section className="shadow-dark background parallax padding-50">
            <div className="row relative z-1 -mt-50">
                {funfactData.map((funfact) => (
                    <div className="col-md-3 col-sm-6 mt-50" key={funfact.id}>
                        <TrackVisibility once>
                            <Funfact funfact={funfact} />
                        </TrackVisibility>
                    </div>
                ))}
            </div>
            {/* <div className="overlay"></div> */}
        </section>
    );
}

export default Funfacts;

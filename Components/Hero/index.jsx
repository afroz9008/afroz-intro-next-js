import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Slider from "react-slick";

function Index({ data }) {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <section className="hero background parallax shadow-dark d-flex align-items-center">
            <Slider {...settings} className={`padding-slider h-100 w-100 hero-slider`}>
                {data.map(p => (
                    <div
                        key={p.name + p.description + p.image}
                        className="h-100 inner">
                        <div
                            className={"client-item w-100 h-100 hero  parallax shadow-dark d-flex align-items-center"}
                            style={{ borderRadius: 20, overflow: "hidden", backgroundImage: `url(${p.image})`, backgroundPosition: "center" }}>
                            <div className="cta mx-auto mt-2">
                                <h1 className="mt-0 mb-4 default-theme-text-color-1">
                                    {p.name}
                                    <span className="dot"></span>
                                </h1>
                                <p className="mb-4 default-theme-text-color-1">{p.description}</p>
                                <div
                                    className="spacer d-md-none d-lg-none d-sm-none"
                                    data-height="10"
                                ></div>
                                <ScrollLink
                                    activeClass="active"
                                    to="section-contact"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={50}
                                    className="hire-me-hero-button btn btn-border-light btn-lg default-theme-text-color-1"
                                >
                                    <i className="icon-envelope"></i>Hire me
                                </ScrollLink>
                            </div>
                            <div className="overlay" style={{ borderRadius: 20, zIndex: 0 }}></div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Index;

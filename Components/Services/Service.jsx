import Image from "next/image";
import React from "react";

function Service({ service: { title, description, image } }) {
  return (
    <div className="service-item text-center" style={{height:"100%"}}>
      <Image height={25} width={25} src={image} alt={title}/>
      <h4 className="my-3 default-theme-text-color-1">{title}</h4>
      <p className="mb-0 default-theme-text-color-1">{description}</p>
    </div>
  );
}

export default Service;

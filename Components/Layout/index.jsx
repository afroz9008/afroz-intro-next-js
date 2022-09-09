import dynamic from "next/dynamic";
import React, { useState } from "react";
import Header from "./Header";

const Music = dynamic(() => import("../Music"), { ssr: false });

function Layout({ header, children }) {
  const [toggleHeader, setToggleHeader] = useState(false);
  const handleToggle = () => {
    setToggleHeader(!toggleHeader);
  };
  return (
    <div className="site-wrapper ">
      <Header header={header} toggleHeader={toggleHeader} toggleHandler={handleToggle} />
      {toggleHeader && <div onClick={handleToggle} className={"d-block d-lg-none backdrop"} style={{ height: "100%", width: "100%", position: "fixed", top: 0, left: 0, zIndex: 1 }} />}
      <main
        className={
          `${toggleHeader && "main-container"} content float-right`
        }
      >
        {children}
      </main>
      <Music />
    </div>
  );
}

export default Layout;

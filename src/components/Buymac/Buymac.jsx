import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

function Buymac() {
  return (
    <>
      {/* Hero Content */}
      <div className=" text-left  text-white ">
        <h1 className="text-2xl font-bold ">Mac</h1>
        <p className="text-2xl ">If you can dream it <br /> Mac can do it.</p>
     </div>

      <div>
        <Hero />
      </div>
    </>
  );
}

export default Buymac;

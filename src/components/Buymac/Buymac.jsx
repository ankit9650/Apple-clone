import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Iphonecard from "../iphone15/Iphonecard";
import Getknow from "./Getknow";

function Buymac() {
  return (
    <>
      <div>
        <Hero />
      </div>
      
      {/* product */}
      <div>
        <div>
          <section className="dark:bg-gray-300 dark:text-gray-800">
            
            {/* Heading section */}
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                  MacBook <br />
                  <h2 className="mt-3 text-4xl font-bold leading-none sm:text-3xl">
                    If you can dream it,
                    <br />
                    <span className="dark:text-blue-600">Mac </span>can do it.

                  </h2>
                </h1>

                {/* variants section */}
                <h2 className="mt-6 text-2xl font-bold leading-none sm:text-2xl">
                  Model.{" "}
                  <span className="text-gray-500">Which is best for you?</span>{" "}
                </h2>
                <div className="mt-4  items-center rounded-md border ">
                  <Iphonecard
                    Variant={"MacBook Air 13” and 15”"}
                    Display={"M2 or M3 chip"}
                    Emi={"From ₹99900.00"}  
                  />
                  <div className=" items-center rounded-md border ">
                    <Iphonecard
                      Variant={"MacBook Pro 14” and 16”"}
                      Display={"M3, M3 Pro or M3 Max chip"}
                      Emi={" From ₹169900.00"}
                    />
                  </div>
                </div>

                {/* button */}
                <div className=" mt-5 flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <Link
                    rel="noopener noreferrer"
                    to={"/"}
                    className="px-8 py-3 text-lg font-semibold rounded dark:bg-blue-600 dark:text-gray-50"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src="src\components\Buymac\ppp-removebg-preview.png"
                  alt=""
                  className="mt-10 object-contain h-72 sm:h-80 lg:h-96 xl:h-33 2xl:h-33"
                />
              </div>
            </div>
            
            {/* Get to know */}
            <div className=" bg-gray-300 m-4">
              <h2 className="text-4xl font-bold leading-none sm:text-4xl">
                Get to know Mac
              </h2>
              <br />
              <div className="flex lg:w-70  md:flex-row  gap-10 items-stretch sm:flex-col">
                <Getknow line1={"Easy to use. Easy to love."} line2={"Getting Started"} back={"https://4kwallpapers.com/images/walls/thumbs_2t/11573.jpg"} htext={"Hello"} />
                <Getknow line1={"Go Fast. Go far."} line2={"Performance and Battery Life"} back={""}  />
                <Getknow line1={"Mac and iPhone."} line2={"Dream Team"} back={""} />
                <Getknow line1={"Durability."} line2={"Built to stand the test of time."} back={""} />
                <Getknow line1={"Mac and iPhone."} line2={"Dream Team"} back={""} />
                <Getknow line1={"Durability."} line2={"Built to stand the test of time."} back={""} />
                
              </div>
            </div><br />
          </section>
        </div>
      </div>


    </>
  );
}

export default Buymac;

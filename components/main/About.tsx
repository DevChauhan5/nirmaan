import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id={"about"}
      className="h-fit flex flex-wrap justify-center items-center py-12 px-4 lg:px-8"
    >
      {/* Image */}
      <div className="w-full md:w-1/3 p-4">
        <Image width={500} height={500} src="/images/logo.png" alt="About Us" />
      </div>

      {/*Text content */}
      <div className="w-full md:w-2/3 p-4">
        <div className="max-w-fit mx-auto">
          <h2 className="text-4xl md:text-7xl text-center md:text-start font-bold mb-4">
            About Us
          </h2>
          <p className="text-xl md:text-2xl text-start text-gray-500">
            Welcome to the vibrant world of Nirmaan, Poornima University&apos;s
            premier technical festival! Rooted in innovation and boundless
            creativity, Nirmaan ignites a spirit of exploration and
            collaboration. Our hallmark event, the Hackathon, stands as a
            testament to our commitment to fostering ingenuity. From riveting
            workshops to exhilarating competitions, Nirmaan offers a platform
            where students can showcase their talents and connect with industry
            leaders. Join us as we celebrate technology, ideas, and the
            relentless pursuit of excellence. Welcome to the vibrant world of Nirmaan, Poornima University&apos;s
            premier technical festival! Rooted in innovation and boundless
            creativity, Nirmaan ignites a spirit of exploration and
            collaboration. Our hallmark event, the Hackathon, stands as a
            testament to our commitment to fostering ingenuity. From riveting
            workshops to exhilarating competitions, Nirmaan offers a platform
            where students can showcase their talents and connect with industry
            leaders. Join us as we celebrate technology, ideas, and the
            relentless pursuit of excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

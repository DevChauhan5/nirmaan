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
          <h2 className="heading text-center md:text-start font-bold mb-4 gradient-text">
            About Us
          </h2>
          <p className="text-xl md:text-2xl text-start text-gray-500">
            NIRMAAN is a premier technical fest scheduled to take place from April 4th, 2024 to April 6th, 2024 at Poornima University, Jaipur. Our event will feature a diverse range of activities, including eSports tournaments,36 Hours hackathon, and technology showcases, attracting a broad audience of tech enthusiasts, innovators, and industry professionals from across the region. Our goal is to provide a platform for students to showcase their skills, connect with industry leaders, and gain valuable insights into the latest trends in technology. We are committed to fostering a spirit of innovation and collaboration, and we look forward to welcoming you to our event.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

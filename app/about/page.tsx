import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[90%] mx-auto py-20">
        <h1>About</h1>
        <div className="relative w-full h-[300px]">
          <Image
            src="https://i.pinimg.com/originals/b3/0f/2e/b30f2e24447b6e8de0fe864a18165885.jpg"
            alt="Image"
            fill
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

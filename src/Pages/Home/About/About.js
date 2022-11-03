import React from "react";
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="h-[557px]">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-1/2 relative">
          <img
            alt=""
            src={person}
            className="rounded-xl h-[473px] w-[460px]"
          />
          <div className="bg-white rounded-xl w-[327px] h-[332px] absolute top-[35%] left-[35%] p-2">
            <img alt="" src={parts} />
          </div>
        </div>
        <div className="w-1/2 leading-7">
          <h6 className="text-[#FF3811] text-[20px] font-bold mb-5">
            About Us
          </h6>
          <h1 className="text-5xl font-bold mb-8">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-error">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;

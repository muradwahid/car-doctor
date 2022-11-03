import React from 'react';

const BannerItem = ({slider}) => {
    const {img,pre,next,id}=slider
    return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="banner-img">
          <img src={img} alt="" />
        </div>
        <div className="absolute gap-5 transform -translate-y-1/2 top-2/4 left-28">
          <h2 className="text-6xl font-bold text-white mb-4">
            Affordable <br /> Price For Car <br />
            Servicing
          </h2>
          <p className="text-white text-[18px] w-3/5 mt-8">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="mt-8">
            <button className="btn btn-error mr-3 ">Discover more</button>
            <button className="btn btn-outline btn-error">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href={`#slide${pre}`}
            className="btn btn-circle bg-[#ffffff4d] border-0 hover:bg-[#FF3811]"
          >
            <i className="fa-solid fa-arrow-left-long"></i>
          </a>
          <a
            href={`#slide${next}`}
            className="btn btn-circle bg-[#ffffff4d] border-0 hover:bg-[#FF3811]"
          >
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    );
};

export default BannerItem;
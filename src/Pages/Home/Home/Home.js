import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
      <div className="w-[1140px] mx-auto">
        <Banner />
        <About/>
      </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-cover bg-no-repeat min-h-screen mx-auto bg-home-patternMobile md:bg-home-patternTablet lg:bg-home-patternDesktop flex flex-col justify-center items-center lg:flex-row 2xl:gap-[45rem] lg:gap-[15rem] xl-[30rem] md:pt-[9rem]">
      <div className="flex flex-col justify-center  lg:w-[27.75rem] lg:justify-start lg:items-start w-full items-center">
        <h1 className="font-Barlow-Condensed text-[#D0D6F9] text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] lg:font-normal font-extralight tracking-[0.16875rem] ">
          SO, YOU WANT TO TRAVEL TO
        </h1>
        <span className="text-[5rem] font-Bellefair text-white md:text-[9.375rem] lg:text-[9.375rem]">
          SPACE
        </span>
        <p className="w-[27.75rem] text-[#D0D6F9] leading-[2rem] text-center lg:text-left md:text-[1rem] lg:text-[1.125rem]	">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        to="/destination"
        className=" font-Bellefair w-[9.375rem] md:w-[15.125rem]  md:h-[15.125rem] h-[9.375rem] lg:w-[17.25rem] lg:h-[17.25rem] bg-white rounded-full flex items-center justify-center mt-[4rem] hover:w-[13rem] hover:h-[13rem]  md:hover:w-[18rem] md:hover:h-[18rem] xl:hover:w-[24rem] xl:hover:h-[24rem] hover:bg-white hover:bg-opacity-10 duration-1000 hover:duration-1000 ease-in-out"
      >
        <div className="text-[#0B0D17] text-[1rem] lg:text-[2rem] cursor-pointer hover:bg-opacity-100 rounded-full  md:w-[15.125rem]  md:h-[15.125rem] xl:w-[17.25rem] xl:h-[17.25rem] w-[9.25rem] h-[9.25rem] bg-white flex items-center justify-center">
          <p>EXPLORE</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;

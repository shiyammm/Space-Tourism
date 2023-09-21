import React, { useState } from 'react';
import { technology } from '../assets/data.json';
const Technology = () => {
  const [switchTechnology, setSwitchTechnology] = useState(0);
  const [activeTechnology, setActiveTechnology] = useState(0);

  const currentTechnology = technology[switchTechnology];
  const handleTechnology = (index) => {
    setSwitchTechnology(index);
    setActiveTechnology(index);
  };
  return (
    <article className="bg-technology-patternMobile md:bg-technology-patternTablet lg:bg-technology-patternDesktop min-h-screen w-full bg-no-repeat bg-cover text-white pt-[7rem] md:pt-[12rem]">
      <main>
        <header className="font-Barlow-Condensed tracking-[0.16875rem] text-center md:text-left md:pl-[5rem] xl:pl-[11rem] 2xl:pl-[15rem] font-normal text-[1rem] md:text-[1.25rem] ">
          <h1>
            <span className="text-gray-500 text-[1.2rem] font-bold font-Barlow-Condensed">
              03
            </span>{' '}
            SPACE LAUNCH 101
          </h1>
        </header>
        <section className="xl:flex xl:flex-row-reverse xl:pt-[6rem]">
          <div className="mt-[3rem] xl:mt-[0] grid justify-center">
            <img
              src={`${currentTechnology.images.landscape}`}
              alt="Technology"
              className="block xl:hidden "
            />

            <img
              src={`${currentTechnology.images.portrait}`}
              alt="Technology"
              className="hidden xl:block xl:absolute xl:right-[0.5rem] xl:bottom-[10rem]"
            />
          </div>
          <div className="flex gap-9 justify-center my-[2rem] xl:absolute xl:flex-col xl:left-[10rem] 2xl:left-[15rem] 2xl:top-[26rem]">
            {technology.map((data, index) => (
              <button
                key={data.id}
                className={`w-[2.5rem] h-[2.5rem] md:w-[3.75rem] md:h-[3.75rem] border-white border-[1px] rounded-full font-[Bellefair] ${
                  activeTechnology === index
                    ? 'bg-white text-[#0B0D17]'
                    : 'bg-[#0B0D17]'
                } text-[1rem] md:text-[1.5rem]`}
                onClick={() => {
                  handleTechnology(index);
                }}
              >
                <p>{index + 1}</p>
              </button>
            ))}
          </div>
          <div className="w-[20.4375rem] md:w-[28.625rem] lg:w-[29.375rem] mx-auto text-center lg:text-left grid gap-3 2xl:ml-[38rem] xl:absolute xl:left-[18rem] 2xl:left-[-9rem] 2xl:top-[25rem]">
            <div>
              <p className="text-[0.875rem] md:text-[1rem] font-Barlow-Condensed tracking-[0.14763rem] md:tracking-[0.16875rem] ">
                THE TERMINOLOGY…
              </p>
            </div>
            <div>
              <h2 className="font-Bellefair text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] uppercase font-normal">
                {currentTechnology.name}
              </h2>
            </div>
            <div>
              <p className="text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] lg:w-[27.75rem] font-Barlow leading-[1.5625rem] md:leading-[1.75rem] lg:leading-[2rem] font-normal text-[#D0D6F9]">
                {currentTechnology.description}
              </p>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
};

export default Technology;

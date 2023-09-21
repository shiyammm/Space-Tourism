import React, { useState } from 'react';
import { destinations } from '../assets/data.json';

const Destination = () => {
  const [activePlanet, setActivePlanet] = useState(0);
  const [activePlanetBar, setActivePlanetBar] = useState(0);

  const switchPlanet = (index) => {
    setActivePlanet(index);
    setActivePlanetBar(index);
  };

  const currentPlanet = destinations[activePlanet];
  return (
    <article className="bg-destination-patternMobile md:bg-destination-patternTablet lg:bg-destination-patternDesktop bg-cover bg-no-repeat min-h-screen grid justify-center md:pt-[5rem]">
      <h1 className="font-Barlow-Condensed text-[1.75rem] uppercase text-white mt-[5rem] font-extralight lg:text-[1.75rem] lg:text-left lg:tracking-[0.29531rem] tracking-[0.2rem] text-center">
        <span className="text-gray-500 font-semibold">01</span> Pick your
        destination
      </h1>
      <main className="grid text-white items-center gap-[2rem] lg:gap-[7rem] xl:gap-[2rem] 2xl:gap-[4rem] lg:mt-[4rem] lg:flex">
        <section className=" w-[16.1875rem] xl:w-[42.375rem] xl:h-[42.375rem] lg:ml-[1rem] h-[16.1875rem] m-auto mt-[2rem]">
          <img
            className=""
            src={`${currentPlanet.images.png || currentPlanet.images.webp}`}
            alt="planet"
          />
        </section>
        <section className="w-[27.8125rem] h-[29.5rem] md:w-[35.8125rem] 2xl:w-[27.75rem] lg:mb-[9rem]">
          <div className="flex gap-9 uppercase font-normal font-Barlow-Condensed w-[14.84375rem] mx-auto lg:mx-0">
            {destinations.map((planet, index) => (
              <a
                key={planet.id}
                className={`${
                  activePlanetBar === index
                    ? 'border-b-2 border-white '
                    : 'border-transparent'
                } cursor-pointer pb-4 text-[0.875rem] tracking-[0.14763rem] mx-auto `}
                onClick={() => switchPlanet(index)}
              >
                {currentPlanet.name}
              </a>
            ))}
          </div>
          <div className="grid ">
            <h1 className="font-Bellefair text-[3.5rem] lg:text-[6.25rem] mx-auto lg:mx-0 uppercase ">
              {currentPlanet.name}
            </h1>
            <p className="font-Barlow text-[0.9375rem] text-center lg:text-left lg:text-[1.125rem] leading-[1.5625rem] text-[#D0D6F9] w-[20.4375rem] md:w-[35.8125rem]  mx-auto">
              {currentPlanet.description}
            </p>
          </div>
          <div className="w-[20.4375rem] md:w-[35.8125rem]  h-[0.1px] bg-white mx-auto mt-[1rem] md:mt-[2.5rem] mb-[2rem]" />
          <div className="grid md:flex uppercase gap-7 lg:ml-[-3rem]  ">
            <div className="grid gap-[0.75rem] mx-auto text-center lg:text-left ">
              <p className="text-[#D0D6F9] font-Barlow-Condensed text-[0.875rem]  tracking-[0.14763rem]">
                AVG. DISTANCE
              </p>
              <h1 className="text-white font-Bellefair font-normal leading-[2rem] text-[1.75rem]">
                {currentPlanet.distance}
              </h1>
            </div>
            <div className="grid gap-[0.75rem] mx-auto text-center lg:text-left">
              <p className="text-[#D0D6F9] font-Barlow-Condensed text-[0.875rem] tracking-[0.14763rem]">
                Est. travel time
              </p>
              <h1 className="text-white font-Bellefair text-[1.75rem]">
                {currentPlanet.travel}
              </h1>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
};

export default Destination;

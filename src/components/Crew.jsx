import React, { useState } from 'react';
import { crew } from '../assets/data.json';

const Crew = () => {
  const [switchMember, setSwitchMember] = useState(0);
  const [activeMember, setActiveMember] = useState(0);
  const currentMember = crew[switchMember];
  const handleCrew = (index) => {
    setSwitchMember(index);
    setActiveMember(index);
  };
  return (
    <article className="bg-crew-patternMobile md:bg-crew-patternTablet lg:bg-crew-patternDesktop bg-cover bg-no-repeat min-h-screen w-full text-center pt-[7rem] flex flex-col gap-[4rem] md:pt-[10rem]">
      <header>
        <h1 className="text-[1rem] font-Barlow-Condensed tracking-[0.16875rem] text-white uppercase md:text-left md:text-[1.25rem] lg:text-[1.75rem] md:pl-[5rem] lg:pl-[15rem]">
          <span className="text-gray-500 font-semibold">02</span> Meet your crew
        </h1>
      </header>
      <div className="flex flex-col md:flex-col-reverse xl:flex-row-reverse">
        <section className="w-[13.875rem] h-[13.875rem] mx-auto pl-9 md:w-[20.52325rem] md:h-[35.75rem] md:mt-[0rem] xl:w-[55.5045rem] lg:min-w-[15rem] xl:mr-[5rem]">
          <img src={`${currentMember.images.png || currentMember.images.webp}`} alt="crew-member" />
        </section>
        <div className="flex gap-6 justify-center items-center mt-[4rem] mb-5 lg:absolute lg:left-[15rem] lg:top-[56rem] xl:top-[50rem] xl:left-[14rem] 2xl:top-[50rem]">
          {crew.map((member, index) => (
            <button
              key={member.id}
              className={`w-[1rem] h-[1rem] rounded-full ${
                activeMember === index ? 'bg-white' : 'bg-gray-500'
              }  `}
              onClick={() => handleCrew(index)}
            ></button>
          ))}
        </div>
        <section className="xl:mt-[16rem] xl:ml-[-1rem]">
          <div className="uppercase font-Bellefair grid gap-5 lg:text-left lg:pl-[15rem]">
            <p className="text-[1rem] text-[#D0D6F9] font-normal md:text-[1.5rem] lg:text-[2rem]">
              {currentMember.role}
            </p>
            <h2 className="text-white text-[1.5rem] font-normal md:text-[2.5rem] lg:text[3.5rem] lg:font-normal">
              {currentMember.name}
            </h2>
          </div>
          <div className="mx-[8rem] mt-4 md:mx-[10rem] lg:text-[1.125rem]  ">
            <p className="text-[#D0D6F9] text-center lg:text-left lg:pl-[5rem] leading-8 md:text[1rem] lg:w-[35.75rem]">
              {currentMember.bio}
            </p>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Crew;

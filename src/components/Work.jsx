import React from "react";
import ublo from "../assets/ublo.png";
import arcade from "../assets/arcade.png";
import malloc from "../assets/malloc.png";
import shell from "../assets/42sh.png";
import rpg from "../assets/rpg.png";
import web from "../assets/web.jpg";

const Projet = (props) => {
  return (
    <div>
      <div class="w-72 text-center font-bold text-2xl">{props.name}</div>
      <div class="w-72 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 hover:rotate-180">
        <div class=" inset-0 w-full h-full flex justify-center items-center bg-white transition-all duration-500 delay-200 z-20 hover:opacity-0 ">
          <img class={props.fullScreen ? "h-full" : ""} src={props.logo} />
        </div>
        <div class="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 rotate-180">
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div name="work" class="w-full md:h-screen text-gray-300 ">
      <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div class="pb-8">
          <p class="text-4xl font-bold inline border-b-4 text-gray-300 border-secondary">
            Expériences
          </p>
        </div>
        {/* Container */}
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Projet name="Ublo" logo={ublo} fullScreen={false} />
          <Projet name="Arcade" logo={arcade} fullScreen={true} />
          <Projet name="my_malloc" logo={malloc} fullScreen={true} />
          <Projet name="42sh" logo={shell} fullScreen={true} />
          <Projet name="my_rpg" logo={rpg} fullScreen={true} />
          <Projet name="my_web" logo={web} fullScreen={true} />
        </div>
      </div>
    </div>
  );
};

export default Work;

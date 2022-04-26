import React from "react";
import DownButtonRedirect from "./DownButtonRedirect";
import UpButtonRedirect from "./UpButtonRedirect";

const About = () => {
  return (
    <div name="about" class="w-full h-screen text-white">
      <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div class="sm:text-right pb-8 pl-4">
            <p class="text-4xl font-bold inline border-b-4 border-secondary">
              À propos de moi
            </p>
          </div>
          <div></div>
        </div>
        <div class="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div class="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Wassini, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
          <DownButtonRedirect to="skills" />
          <UpButtonRedirect to="home" />
        </div>
      </div>
    </div>
  );
};

export default About;

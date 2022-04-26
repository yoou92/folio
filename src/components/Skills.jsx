import React from "react";
import HTML from "../assets/langages/html.png";
import CSS from "../assets/langages/css.png";
import JavaScript from "../assets/langages/javascript.png";
import TypeScript from "../assets/langages/typescript.png";
import ReactImg from "../assets/langages/react.png";
import Node from "../assets/langages/node.png";
import Cpp from "../assets/langages/cpp.png";
import C from "../assets/langages/c.png";
import Bash from "../assets/langages/bash.png";
import GitHub from "../assets/langages/github.png";
import Tailwind from "../assets/langages/tailwind.png";
import Mongo from "../assets/langages/mongo.png";
import Linux from "../assets/langages/linux.png";
import PostgreSQL from "../assets/langages/postgresql.png";
import VSCode from "../assets/langages/vscode.png";
import DownButtonRedirect from "./DownButtonRedirect";
import UpButtonRedirect from "./UpButtonRedirect";

const Skill = (props) => {
  return (
    <div class="shadow-lg shadow-secondary hover:scale-110 duration-300 hover:shadow-main">
      <img class="my-4 w-20 mx-auto" src={props.logo} alt="icon" />
      <p class="my-4 text-white font-semibold">
        {props.name === "GitHub" ? <div class="py-2" /> : null}
        {props.name}
      </p>
    </div>
  );
};

const Skills = () => {
  return (
    <div name="skills" class="w-full h-screen text-white">
      <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p class="text-4xl font-bold inline border-b-4 border-secondary">
            Compétences
          </p>
        </div>
        <div class="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-6 text-center py-8">
          <Skill name="C" logo={C} />
          <Skill name="C++" logo={Cpp} />
          <Skill name="Bash" logo={Bash} />
          <Skill name="Linux" logo={Linux} />
          <Skill name="GitHub" logo={GitHub} />
          <Skill name="TypeScript" logo={TypeScript} />
          <Skill name="JavaScript" logo={JavaScript} />
          <Skill name="React" logo={ReactImg} />
          <Skill name="NodeJS" logo={Node} />
          <Skill name="Tailwind CSS" logo={Tailwind} />
          <Skill name="PostgreSQL" logo={PostgreSQL} />
          <Skill name="Mongo DB" logo={Mongo} />
          <Skill name="HTML" logo={HTML} />
          <Skill name="CSS" logo={CSS} />
          <Skill name="Visual Studio Code" logo={VSCode} />
        </div>
        <div class="flex justify-between">
          <DownButtonRedirect to="work" />
          <UpButtonRedirect to="about" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

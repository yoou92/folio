import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import TypeScript from "../assets/typescript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Cpp from "../assets/cpp.png";
import C from "../assets/c.png";
import Bash from "../assets/bash.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Linux from "../assets/linux.png";
import PostgreSQL from "../assets/postgresql.png";
import VSCode from "../assets/vscode.png";

const Skill = (props) => {
  return (
    <div className="shadow-lg shadow-secondary hover:scale-110 duration-300 hover:shadow-main">
      <img className="my-4 w-20 mx-auto" src={props.logo} alt="icon" />
      <p className="my-4">{props.name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-secondary">
            Compétences
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-6 text-center py-8">
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
      </div>
    </div>
  );
};

export default Skills;

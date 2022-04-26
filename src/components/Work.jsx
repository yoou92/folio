import React from "react";
import ublo from "../assets/projets/ublo.png";
import arcade from "../assets/projets/arcade.png";
import malloc from "../assets/projets/malloc.png";
import shell from "../assets/projets/42sh.png";
import rpg from "../assets/projets/rpg.png";
import web from "../assets/projets/web.jpg";
import DownButtonRedirect from "./DownButtonRedirect";
import UpButtonRedirect from "./UpButtonRedirect";
import "./ScrollBar.css";

const Projet = (props) => {
  return (
    <div class="">
      <div class="flex items-center justify-center w-full pt-4 h-full object-center">
        <img
          class="rounded-xl bg-cover bg-center"
          src={props.logo}
          alt={props.name}
        />
      </div>
      <div class="px-6 py-4">
        <div class=" text-white font-bold text-2xl mb-8">
          {props.name}
          {props.done ? (
            <div class="text-secondary flex justify-end text-md">Terminé</div>
          ) : (
            <div class="text-main flex justify-end text-md">En cours...</div>
          )}
        </div>

        {props.description.map((text, i) => (
          <div class="text-white text-base">{text}</div>
        ))}
      </div>
      <div class="px-6 pt-4 pb-2">
        {props.techUsed.map((tech, i) => (
          <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projets = () => {
  return (
    <div class="overflow-y-auto h-4/6 shadow-lg shadow-main space-y-20 border-main border-2 rounded-lg p-4 divide-y divide-solid divide-secondary">
      <Projet
        name="Ublo"
        logo={ublo}
        description={[
          "Stage de 6 mois en tant que développer Full-Stack chez Ublo.immo.",
          "Ublo vise à simplifier la gestion locative par l'intermédiaire d'un logiciel de gestion immobilière intuitif et efficace.",
          "J'ai été chargé de développer dans un premier temps un formulaire d'état des lieux d'entrée et de sortie devant être effectué sur tablette.",
          "Et dans second temps, de travailler sur le site web d'Ublo pour les clients.",
        ]}
        techUsed={[
          "TypeScript",
          "JavaScript",
          "React",
          "NodeJS",
          "React-Admin",
          "PostgreSQL",
          "MongoDB",
          "TailwindCSS",
          "Styled-Components",
          "Material-UI",
          "Postman",
          "Docker",
          "GitHub",
          "Nest",
          "DBeaver",
          "Figma",
        ]}
        done={true}
      />
      <Projet
        name="Arcade"
        logo={arcade}
        description={["tres intéreasn"]}
        techUsed={["C++", "GitHub"]}
        done={true}
      />
      <Projet
        name="my_malloc"
        logo={malloc}
        description={["tres intéreasn"]}
        techUsed={["C", "GitHub"]}
        done={true}
      />
      <Projet
        name="42sh"
        logo={shell}
        description={["tres intéreasn"]}
        techUsed={["C", "GitHub"]}
        done={true}
      />
      <Projet
        name="my_rpg"
        logo={rpg}
        description={["tres intéreasn"]}
        techUsed={["C", "GitHub"]}
        done={true}
      />
      <Projet
        name="my_web"
        logo={web}
        description={["tres intéreasn"]}
        techUsed={[
          "TypeScript",
          "JavaScript",
          "React",
          "NodeJS",
          "React-Admin",
          "TailwindCSS",
          "Styled-Components",
          "Postman",
          "Docker",
          "PostgreSQL",
          "MongoDB",
          " GitHub",
        ]}
        done={true}
      />
    </div>
  );
};

const Work = () => {
  return (
    <div name="work" class="w-full md:h-screen text-white">
      <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div class="pb-8">
          <p class="text-4xl font-bold inline border-b-4 text-white border-secondary">
            Expériences
          </p>
        </div>
        <Projets />
        <div class="flex p-4 justify-between">
          <DownButtonRedirect to="contact" />
          <UpButtonRedirect to="skills" />
        </div>
      </div>
    </div>
  );
};

export default Work;

import React from "react";
import ublo from "../assets/projets/ublo.png";
import arcade from "../assets/projets/arcade.png";
import malloc from "../assets/projets/malloc.png";
import shell from "../assets/projets/42sh.png";
import rpg from "../assets/projets/rpg.png";
import teams from "../assets/projets/teams.png";
import runner from "../assets/projets/runner.png";
import defender from "../assets/projets/defender.png";
import hunter from "../assets/projets/hunter.png";
import printf from "../assets/projets/printf.png";
import database from "../assets/projets/database.png";
import cash_register from "../assets/projets/cash_register.png";
import EpiSolidaire from "../assets/projets/EpiSolidaire.png";
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
        <div class="text-white font-bold text-2xl mb-8">
          <div>{props.name}</div>
          <div class="text-base font-normal">
            Groupe de {props.nmemb} personne{props.nmemb > 1 ? "s" : ""}
          </div>
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
          "Notion",
          "Méthode agile",
          "Clean architecture",
        ]}
        done={true}
        nmemb={5}
      />
      <Projet
        name="EpiSolidaire"
        logo={EpiSolidaire}
        description={[
          "Site pour promouvoir l'association, pouvoir se présenter en ligne, voir les évènements à venir, accéder à son espace membre et par conséquent accéder aux nombres d'activités réalisés etc...",
        ]}
        techUsed={[
          "JavaScript",
          "React",
          "NodeJS",
          "MongoDB",
          "TailwindCSS",
          "Postman",
          "GitHub",
        ]}
        done={false}
        nmemb={1}
      />
      <Projet
        name="Arcade"
        logo={arcade}
        description={[
          "L'objectif de ce projet était de crée une plateforme de jeu, avec un seul core qui peut charger dynamiquement plusieurs bibliothèques graphiques différentes et avec au moins deux jeux.",
          "Les librairies graphiques choisies ont été la SFML, la Ncurses et la SDL2.",
          "Les jeux choisies ont été Nibbler et Pacman.",
          "Le joueur peut choisir son pseudo, selectionnez son jeu, dynamiquement changer de librairie graphique et a un score enregistré dans une base de données.",
        ]}
        techUsed={["C++", "SFML", "NCurses", "SDL2", "Makefile", "GitHub"]}
        done={true}
        nmemb={3}
      />
      <Projet
        name="my_teams"
        logo={teams}
        description={["Recoder la partie serveur de teams"]}
        techUsed={["C", "Makefile", "GitHub"]}
        done={false}
        nmemb={3}
      />
      <Projet
        name="my_rpg"
        logo={rpg}
        description={[
          "Comme son nom l'indique, le but de ce projet était de crée un Role Playing Game (RPG), dans lequel il y a une histoire, des quêtes, des niveaux, des combats, des donjons, un inventaire, des niveaux de compétences et énormément d'autre chose qui caractérise ce qu'est un RPG.",
        ]}
        techUsed={[
          "C",
          "CSFML",
          "Makefile",
          "HTML",
          "CSS",
          "GitHub",
          "Photoshop",
          "FL Studio",
        ]}
        done={true}
        nmemb={4}
      />
      <Projet
        name="my_defender"
        logo={defender}
        description={[
          "Un mini League Of Legends ça vous dit ?",
          "Le but ce projet était de crée un jeu de type Tower Defense, avec une base à défendre, des ennemis qui apparraissent et qui vont attaquer cette dernière.",
          "Le joueur a pour but de défendre sa base, et pour cela il doit poser des tourelles qui peuvent détruire les ennemis, chaque tourelle a une spécification particulière (Dégâts, portée, impact sur les caractéristiques des ennemis, etc...)",
          "Afin de poser une tourelle il faut avoir une certaine somme d'argent, les tourelles peuvent également être améliorées.",
          "Tous les graphismes et sons ont était tiré du jeu officiel de League Of Legends.",
        ]}
        techUsed={[
          "C",
          "CSFML",
          "Makefile",
          "HTML",
          "CSS",
          "GitHub",
          "Photoshop",
          "FL Studio",
        ]}
        done={true}
        nmemb={2}
      />
      <Projet
        name="my_runner"
        logo={runner}
        description={[
          "Vous connaissez sûrement le T-Rex Game ? Ce jeu que Google peut vous proposez lorsque vous n'avez pas de connexion.",
          "J'en ai recrée un, avec des graphismes différent mais le but reste le même, c'est un runner.",
          "Le but étant de sauter avec son personnage dans une immense carte qui défile, il doit éviter les obstacles et les ennemis.",
          "À la fin de cette carte il y a une ligne d'arrivée, cela signifie que vous avez gagnez la partie !",
          "À ce moment là, votre score est sauvegardé et vous pouvez recommencer une partie à partir de votre ancien score, c'est de cette manière que vous pourrez toujours faire en sorte d'avoir le plus grand score !",
        ]}
        techUsed={[
          "C",
          "CSFML",
          "Makefile",
          "GitHub",
          "Photoshop",
          "FL Studio",
        ]}
        done={true}
        nmemb={1}
      />
      <Projet
        name="my_hunter"
        logo={hunter}
        description={[
          "Piou Piou ! + Among us = ?",
          "Vous l'avez dans le mille ! Mon my_hunter.",
          "Des ennemis arrivent de la droite et de la gauche, au milieu de la carte il y a une base que les ennemis ne doivent surtout pas franchir, sinon vous perdez des points de vie",
          "Pour cela, vous êtes équiper d'une arme qui vous permet de tuer les ennemis avant qu'ils n'arrivent à destination !",
        ]}
        techUsed={[
          "C",
          "CSFML",
          "Makefile",
          "GitHub",
          "Photoshop",
          "FL Studio",
        ]}
        done={true}
        nmemb={1}
      />
      <Projet
        name="42sh"
        logo={shell}
        description={["Crée un Shell Unix qui a pour model de référence TCSH."]}
        techUsed={["C", "Makefile", "GitHub"]}
        done={true}
        nmemb={5}
      />
      <Projet
        name="my_malloc"
        logo={malloc}
        description={[
          "Recoder les fonctions malloc, realloc, calloc, reallocarray et free.",
        ]}
        techUsed={["C", "Makefile", "GitHub"]}
        done={true}
        nmemb={1}
      />
      <Projet
        name="my_printf"
        logo={printf}
        description={["Recoder la fonction printf."]}
        techUsed={["C", "Makefile", "GitHub"]}
        done={true}
        nmemb={1}
      />
      <Projet
        name="my_db"
        logo={database}
        description={[
          "Création d'une database avec une table unique implémentée en liste chaînée.",
          "La table est composée des champs suivants :",
          "id (= Idendifiant unique par colonne)",
          "firstname (= Prénom)",
          "lastname (= Nom)",
          "pseudonyme (= Pseudonyme)",
          "birthday (= Date de naissance)",
          "city (= Ville)",
          "phone (= Numéro de téléphone)",
          "email (= Email)",
          "password (= Mot de passe)",
          "registeredAt (= Date d'enregistrement)",
        ]}
        techUsed={["C", "Makefile", "GitHub"]}
        done={false}
        nmemb={1}
      />
      <Projet
        name="Cash register"
        logo={cash_register}
        description={[
          "Coder une caisse enregistreuse pouvant enregistrer des articles, les stockers dans une base de données, obtenir des tickets de caisse, crée de nouveaux caissiers qui sont également enregistrés dans une base de données etc...",
        ]}
        techUsed={["Python", "Tkinter", "GitHub"]}
        done={true}
        nmemb={2}
      />
      <Projet
        name="my_web"
        logo={web}
        description={[
          "Faire un dual boot entre Debian et Arch Linux sur une machine virtuel sans l'utilisation d'interface graphique pour assembler les partitions.",
        ]}
        techUsed={[
          "Administration système",
          "Commandes Unix",
          "Oracle VM VirtualBox",
          "LVM",
        ]}
        done={true}
        nmemb={2}
      />
    </div>
  );
};

const Work = () => {
  return (
    <div name="work" class="w-full h-screen text-white">
      <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div class="pb-8">
          <p class="text-4xl font-bold inline border-b-4 text-white border-secondary">
            Expériences
          </p>
        </div>
        <div class="inline text-right">(Défilable)</div>
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

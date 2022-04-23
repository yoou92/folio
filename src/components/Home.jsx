import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="text-secondary font-bold text-xl">Salutations !</div>
        <div className="text-4xl sm:text-7xl font-bold text-white">
          Wassini Bouzidi
        </div>
        <div className="text-4xl sm:text-6xl font-bold text-gray-400">
          Développeur chez Epitech Paris
        </div>
        <div className="text-white py-4 max-w-[700px] mt-6">
          <p class="inline">
            Passionné par le développement de jeux vidéo, de système automatisé
          </p>{" "}
          <p class="inline underline underline-offset-2">(C / C++)</p> mais
          également du développement web{" "}
          <p class="inline underline underline-offset-2">
            (JS, TS, React, Node, TailwindCSS)
          </p>
          .
          <div class="mt-2">
            À la recherche d'un part-time de deux jours par semaine d'octobre à
            avril, suivi d'un stage d'avril à août afin d'appronfondir mes
            connaissances, d'évoluer dans un domaine qui me plait et de pourvoir
            satisfaire un besoin.
          </div>
          <div class="mt-10 font-semibold">Prêt à me découvrir ?</div>
        </div>
        <div class="text-white flex items-center">
          <Link to="about" smooth={true} duration={350}>
            <button className="group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary rounded-xl">
              C'est parti !
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloseIcon from "@mui/icons-material/Close";

const Help = ({ text }) => {
  const [open, setOpen] = useState(false);
  const CloseButton = () => {
    return (
      <div className="absolute top-0 right-0 -mt-3 -mr-2">
        <CloseIcon
          style={{ fontSize: 30, color: "red" }}
          onClick={() => setOpen(false)}
        />
      </div>
    );
  };
  return (
    <button type="button" className="cursor-pointer">
      <HelpOutlineIcon onClick={() => setOpen(!open)} />
      {open && (
        <div className="z-40 absolute">
          <CloseButton />
          <div className="bg-white rounded-xl border-2 border-main text-main text-lg p-3">
            {text}
          </div>
        </div>
      )}
    </button>
  );
};

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="pt-24">
          <div className="text-secondary font-bold text-xl FromTop">
            Salutations !
          </div>
          <div className="FromLeft text-4xl sm:text-7xl font-bold text-white ">
            <strong>Wassini Bouzidi</strong>
          </div>
        </div>
        <div className="text-4xl sm:text-6xl font-bold text-gray-400">
          <strong>Développeur chez Epitech Paris</strong>
        </div>
        <div className="text-white py-4 max-w-[700px] mt-6">
          <p className="inline">
            Passionné par le développement de jeux vidéo, de système automatisé
          </p>{" "}
          (
          <p className="inline underline underline-offset-2">
            <strong>C / C++</strong>
          </p>
          ) mais également du développement web (
          <p className="inline underline underline-offset-2">
            <strong>JS, TS, React, Node.js, MongoDB, TailwindCSS</strong>
          </p>
          ).
          <div className="mt-2">
            Actuellement en 3ème année je suis à la recherche d'un{" "}
            <strong>stage</strong> de début <strong>avril</strong> à fin{" "}
            <strong>août</strong> afin d'appronfondir mes connaissances,
            d'évoluer dans un domaine qui me plait et de pouvoir satisfaire un
            besoin.{" "}
            <Help text="Je suis également disponible pour de la freelance après cette date" />
          </div>
          <div className="mt-2">
            Ce portfolio a était coder en React, TailwindCSS et CSS par
            moi-même.
          </div>
          <div className="mt-10 font-semibold">Prêt à me découvrir ?</div>
        </div>
        <div className="text-white grid sm:grid-cols-2 gap-4 items-center">
          <Link to="about" smooth={true} duration={350}>
            <button className="group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary rounded-xl">
              C'est parti !
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
          <div className="FromBottom">
            <a
              className="FromRight p-3 border-2 font-semibold text-white rounded-xl transition-all duration-500 bg-gradient-to-br from-main via-black to-secondary bg-size-200 hover:bg-right-bottom"
              href="resume"
              target="_blank"
              rel="noreferrer"
            >
              Accéder directement à mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

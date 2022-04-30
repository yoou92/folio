import React from "react";
import DownButtonRedirect from "./DownButtonRedirect";
import UpButtonRedirect from "./UpButtonRedirect";

const UnderlinedText = ({ text }) => {
  return <div class="inline underline underline-offset-2">{text}</div>;
};

const About = () => {
  return (
    <div name="about" class="w-full sm:h-screen text-white">
      <div class="flex flex-col justify-center  items-center w-full h-full">
        <div class="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div class="sm:text-right xs:mt-8 sm:mt-0 pb-6 pl-4 mt-24">
            <p class="xs:text-2xl sm:text-4xl font-bold inline border-b-4 border-secondary">
              À propos de moi
            </p>
          </div>
          <div></div>
        </div>
        <div class="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div class="sm:text-left text-3xl font-bold">
            <div class=" bg-clip-text bg-gradient-to-br from-secondary to-main">
              <div class="text-transparent bg-clip-text bg-gradient-to-br from-secondary to-main">
                <div class="inline">• Président d'EpiSolidaire </div>
                <br />
                <div class="inline">• Lead Dev chez EpiSolidaire</div>
                <br />
                <div class="inline">• Développeur chez Epitech</div>
                <br />
              </div>
            </div>
          </div>
          <div>
            <div>
              <UnderlinedText text="Passionné" />,{" "}
              <UnderlinedText text="autodidacte" /> et{" "}
              <UnderlinedText text="soucieux de bien faire" />. J'ai décidé de
              poursuivre mes études supérieures dans la programmation et
              l'expertise technologique. C'est pour cela que j'ai décidé de
              rejoindre Epitech.
            </div>
            <div>
              Ma <UnderlinedText text="persévérance" /> et ma{" "}
              <UnderlinedText text="rigueur" /> m'ont aujourd'hui amené à
              pouvoir développer mes projets en toute{" "}
              <UnderlinedText text="autonomie" /> et à pouvoir{" "}
              <UnderlinedText text="apprendre à apprendre" />.
            </div>
            <div>
              Le <UnderlinedText text="partage" /> et la{" "}
              <UnderlinedText text="solidarité" /> sont des principes qui me
              tiennent à coeur, c'est pour cela que j'ai décidé de devenir
              président d'une association de solidarité qui se nomme{" "}
              <UnderlinedText text="EpiSolidaire" />.
            </div>
            <div>
              L'association dispose également d'une{" "}
              <UnderlinedText text="équipe de développeurs" /> dont je suis le
              lead car nous sommes actuellement en train de développer notre
              propre site EpiSolidaire et que certains{" "}
              <UnderlinedText text="projets de solidarité" /> se font également
              dans le domaine de la programmation.
            </div>
          </div>
          <DownButtonRedirect to="skills" />
          <UpButtonRedirect to="home" />
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react"
import resumePng from "../assets/resume/resume.png";

const Resume = () => {

    return (
        <div class="text-center bg-gradient-to-br from-main to-secondary">
            <div class="w-full h-full flex justify-center p-4">
                <img class="rounded-xl" src={resumePng} alt="resume" />
            </div>
            <div class="space-x-10 p-10">
                <a href={resumePng} class="text-2xl p-4 font-semibold text-white bg-main rounded-xl hover:bg-secondary transition-all duration-500">
                    Télécharger en PDF
                </a>
                <a href={resumePng} class="text-2xl p-4 font-semibold text-white bg-main rounded-xl hover:bg-secondary transition-all duration-500">
                    Télécharger en PNG
                </a>
            </div>
        </div>
    );
}

export default Resume
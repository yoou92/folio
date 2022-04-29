import React from "react";
import resumePng from "../assets/resume/resume.png";

const DownloadResume = (props) => {
  return (
    <div class="inline-flex space-x-10 p-10">
      <a
        href={props.file}
        class="text-2xl p-4 font-semibold text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-secondary via-black from-main bg-size-200 hover:bg-right-bottom"
        download="wassini_bouzidi_cv"
      >
        Télécharger en {props.ext}
      </a>
    </div>
  );
};

const Resume = () => {
  return (
    <div class="text-center bg-gradient-to-br from-main to-secondary">
      <div class="w-full h-full flex justify-center p-4">
        <img class="rounded-xl" src={resumePng} alt="resume" />
      </div>
      <DownloadResume ext="PDF" file={resumePng} />
      <DownloadResume ext="PNG" file={resumePng} />
    </div>
  );
};

export default Resume;

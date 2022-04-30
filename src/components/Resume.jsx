import React from "react";
import resumePng from "../assets/resume/resume.png";
import resumePdf from "../assets/resume/resume.pdf";

const DownloadResume = (props) => {
  return (
    <div class="inline-flex space-x-10 p-10 hover:scale-125">
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
    <div class="w-full h-full text-center bg-gradient-to-br from-main to-secondary">
      <div class="flex justify-center p-4 md:px-80">
        <img
          src={resumePng}
          class="rounded-xl object-cover w-full h-full"
          alt="resume"
        />
      </div>
      <DownloadResume ext="PDF" file={resumePdf} />
      <DownloadResume ext="PNG" file={resumePng} />
    </div>
  );
};

export default Resume;

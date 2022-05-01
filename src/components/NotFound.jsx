import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-b from-main to-secondary">
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-main text-9xl">404</h1>

          <div className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-secondary">Page introuvable</span>
          </div>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            Cette page n'existe pas !
          </p>

          <a
            href="/"
            className="px-6 py-2 text-xl font-semibold text-white bg-secondary rounded-xl hover:bg-main transition-all duration-500"
          >
            Retournez à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";

const Work = () => {
  return (
    <div name="work" class="w-full md:h-screen text-gray-300 ">
      <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div class="pb-8">
          <p class="text-4xl font-bold inline border-b-4 text-gray-300 border-secondary">
            Work
          </p>
          <p class="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            class="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div class="opacity-0 group-hover:opacity-100">
              <span class="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div class="pt-8 text-center">
                <a href="/">
                  <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            class="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div class="opacity-0 group-hover:opacity-100">
              <span class="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div class="pt-8 text-center">
                <a href="/">
                  <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            class="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div class="opacity-0 group-hover:opacity-100">
              <span class="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div class="pt-8 text-center">
                <a href="/">
                  <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            class="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div class="opacity-0 group-hover:opacity-100">
              <span class="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div class="pt-8 text-center">
                <a href="/">
                  <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            class="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div class="opacity-0 group-hover:opacity-100">
              <span class="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div class="pt-8 text-center">
                <a href="/">
                  <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            class="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div class="opacity-0 group-hover:opacity-100">
              <span class="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div class="pt-8 text-center">
                <a href="/">
                  <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

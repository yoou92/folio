import React from "react";
import DownButtonRedirect from "./DownButtonRedirect";
import UpButtonRedirect from "./UpButtonRedirect";

const Contact = () => {
  return (
    <div
      name="contact"
      class="w-full h-screen  flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        class="flex flex-col max-w-[600px] w-full text-white"
      >
        <div class="pb-8">
          <p class="text-4xl font-bold inline border-b-4 border-secondary text-white">
            Contact
          </p>
        </div>
        <input
          class="rounded-md bg-secondary text-white placeholder-gray-400 p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          class="rounded-md my-4 p-2 bg-secondary text-white placeholder-gray-400"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          class="rounded-md bg-secondary text-white placeholder-gray-400 p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button class="text-white border-2 hover:bg-secondary hover:border-secondary px-4 py-3 my-8 mx-auto flex items-center rounded-xl">
          Collaborons !
        </button>
        <div class="flex justify-between">
          <DownButtonRedirect to="home" />
          <UpButtonRedirect to="work" />
        </div>
      </form>
    </div>
  );
};

export default Contact;

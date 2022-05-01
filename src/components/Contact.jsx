import React from "react";
import DownButtonRedirect from "./DownButtonRedirect";
import UpButtonRedirect from "./UpButtonRedirect";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/ac3eef9d-4db1-4ecb-ba0f-de52ca69ed5d"
        className="flex flex-col max-w-[600px] w-full text-white space-y-4"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-secondary text-white">
            Contact
          </p>
        </div>
        <input
          className="rounded-md bg-secondary text-white placeholder-gray-400 p-2"
          type="text"
          placeholder="NOM Prénom (requis)"
          name="name"
          required={true}
        />
        <input
          className="rounded-md my-4 p-2 bg-secondary text-white placeholder-gray-400"
          type="email"
          placeholder="Email (requis)"
          name="email"
          required={true}
        />
        <input
          className="rounded-md my-4 bg-secondary text-white placeholder-gray-400 p-2"
          type="text"
          placeholder="Entreprise (optionnel)"
          name="company"
          required={false}
        />
        <textarea
          className="rounded-md bg-secondary text-white placeholder-gray-400 p-2"
          name="message"
          rows="10"
          placeholder="Votre message"
        />
        <button className="text-white border-2 hover:bg-secondary hover:border-secondary px-4 py-3 my-8 mx-auto flex items-center rounded-xl">
          Collaborons !
        </button>
        <div className="flex justify-between">
          <DownButtonRedirect to="home" />
          <UpButtonRedirect to="work" />
        </div>
      </form>
    </div>
  );
};

export default Contact;

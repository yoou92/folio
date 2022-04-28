import React, { useRef } from "react";
import DownButtonRedirect from "./DownButtonRedirect";
import UpButtonRedirect from "./UpButtonRedirect";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const send = await emailjs.sendForm(
      "service_djl78up",
      "template_ecfvlll",
      form.current,
      "Zr5H8LyBS47OALrKE"
    );
    console.log(send);

    // .then(
    //   (result) => {
    //     console.log("result.text = ", result.text);
    //   },
    //   (error) => {
    //     // ErrorPopUp();
    //     console.log("error.text = ", error.text);
    //   }
    // );
    // e.target.reset();
  };
  return (
    <div
      name="contact"
      class="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
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
          placeholder="NOM Prénom"
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
          placeholder="Votre message"
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

import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const MenuBar = (props) => {
  return (
    <li class="text-xl font-bold">
      <Link to={props.to} smooth={true} duration={350}>
        {props.name}
      </Link>
    </li>
  );
};

const MenuBarResponsive = (props) => {
  return (
    <li class="py-6 text-4xl">
      <Link
        onClick={props.handleClick}
        to={props.to}
        smooth={true}
        duration={350}
      >
        {props.name}
      </Link>
    </li>
  );
};

const SocialBar = (props) => {
  return (
    <a
      class="flex justify-between items-center w-full text-white text-xl font-bold"
      href={props.redirect}
      target="_blank"
      rel="noreferrer"
    >
      {props.name} {props.icon}
    </a>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div class="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white">
      <br />
      {/* menu */}
      <ul class="hidden md:flex">
        <MenuBar to="home" name="Accueil" />
        <MenuBar to="about" name="À propos de moi" />
        <MenuBar to="skills" name="Compétences" />
        <MenuBar to="work" name="Expériences" />
        <MenuBar to="contact" name="Contact" />
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} class="md:hidden z-10">
        {!nav ? <FaBars size={32} /> : <FaTimes size={32} />}
      </div>

      {/* Mobile menu */}
      <ul
        class={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <MenuBarResponsive to="home" name="Accueil" handleClick={handleClick} />
        <MenuBarResponsive
          to="about"
          name="À propos de moi"
          handleClick={handleClick}
        />
        <MenuBarResponsive
          to="skills"
          name="Compétences"
          handleClick={handleClick}
        />
        <MenuBarResponsive
          to="work"
          name="Experiences"
          handleClick={handleClick}
        />
        <MenuBarResponsive
          to="contact"
          name="Contact"
          handleClick={handleClick}
        />
      </ul>

      {/* Social icons */}
      <div class="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li class="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <SocialBar
              name="LinkedIn"
              icon={<FaLinkedin size={30} />}
              redirect="https://www.linkedin.com/in/wassini-bouzidi/"
            />
          </li>
          <li class="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <SocialBar
              name="Github"
              icon={<FaGithub size={30} />}
              redirect="https://github.com/wassb92"
            />
          </li>
          <li class="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00A4EF]">
            <SocialBar
              name="Email"
              icon={<HiOutlineMail size={30} />}
              redirect="mailto:wassini.bouzidi@epitech.eu"
            />
          </li>
          <li class="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700">
            <SocialBar
              name="CV"
              icon={<BsFillPersonLinesFill size={30} />}
              redirect="resume"
            />
          </li>
        </ul>
      </div>
      <div class="flex lg:hidden fixed space-x-3">
        <li class="flex py-2 rounded-xl hover:scale-125 bg-blue-600">
          <SocialBar
            icon={<FaLinkedin size={30} />}
            redirect="https://www.linkedin.com/in/wassini-bouzidi/"
          />
        </li>
        <li class="flex py-2 rounded-xl hover:scale-125 bg-[#333333]">
          <SocialBar
            icon={<FaGithub size={30} />}
            redirect="https://github.com/wassb92"
          />
        </li>
        <li class="flex py-2 rounded-xl hover:scale-125 bg-[#00A4EF]">
          <SocialBar
            icon={<HiOutlineMail size={30} />}
            redirect="mailto:wassini.bouzidi@epitech.eu"
          />
        </li>
        <li class="flex py-2 rounded-xl hover:scale-125 bg-gray-700">
          <SocialBar
            icon={<BsFillPersonLinesFill size={30} />}
            redirect="resume"
          />
        </li>
      </div>
    </div>
  );
};

export default Navbar;

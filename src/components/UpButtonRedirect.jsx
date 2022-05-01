import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowUp } from "react-icons/hi";

const UpButtonRedirect = (props) => {
  return (
    <div className="flex justify-end invisible sm:visible">
      <Link to={props.to} smooth={true} duration={350}>
        <button className="group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary rounded-xl">
          <HiArrowNarrowUp />
        </button>
      </Link>
    </div>
  );
};

export default UpButtonRedirect;

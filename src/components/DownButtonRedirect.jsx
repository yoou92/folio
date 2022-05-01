import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowDown } from "react-icons/hi";

const DownButtonRedirect = (props) => {
  return (
    <div className="invisible sm:visible">
      <Link to={props.to} smooth={true} duration={350}>
        <button className="group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary rounded-xl">
          <HiArrowNarrowDown />
        </button>
      </Link>
    </div>
  );
};

export default DownButtonRedirect;

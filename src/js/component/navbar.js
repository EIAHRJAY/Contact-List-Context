import React from "react";
import { Link } from "react-router-dom";
import { BsListStars } from "react-icons/bs";
import { BsPlusCircleFill } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light  border border-0 mb-3">
      <Link to="/">
        {/* <span className="navbar-brand mb-0 h1">React Boilerplate </span> */}

        <BsListStars
          className="ms-3"
          style={{ width: "50px", height: "50px" }}
        />
      </Link>
      <div className="ml-auto">
        <Link to="/addContact">
          <button className=" me-3 btn btn-primary">
            {" "}
            <BsPlusCircleFill style={{ width: "20px", height: "20px" }} /> Add
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
};

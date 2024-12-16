import { Button, DarkThemeToggle } from "flowbite-react";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";

const Headers = () => {
  const { scrolledUp } = useContext(ProjectContext);
  const navigate = useNavigate();
  const goToWallet = () => {
    navigate("wallet");
  };

  return (
    <header
      className={` bg-gray-50 dark:bg-[#101720] sticky top-0 z-40 duration-1000 ${
        scrolledUp ? "shadow-none" : "shadow-sm"
      }`}
    >
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-10 py-4">
        <Link to="/" className="flex gap-2 items-center">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            NodeSync Hub
          </span>
        </Link>

        <ul className="flex items-center gap-3 font-medium text-gray-900 dark:text-white">
          <li className="hidden xl:block">
            <a href="">Production</a>
          </li>
          <li className="hidden xl:block">
            <a href="">Developers</a>
          </li>
          <li className="hidden xl:block">
            <a href="">Company</a>
          </li>
          <li>
            <DarkThemeToggle className="focus:ring-2" />
          </li>
          <li className="">
            <Button outline onClick={goToWallet} color="blue" pill>
              Connect Now
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;

import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { fAQPath, homePath, settingsPath } from "../Routes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <nav className="bg-[#091242] border-gray-200 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a className="flex items-center space-x-3 rtl:space-x-reverse ">
          <img
            src="https://uploads-ssl.webflow.com/643c96e772cbae0b11d688bf/643c9da10b62a2097620f1d4_%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B4%D9%8A%D8%A8%20%D9%84%D9%88%D9%81%D9%88%20%D8%B9%D8%B1%D8%A8%D9%8A%20.png"
            className="w-[100px]"
            alt="Dr.SHIP Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm focus:outline-none border border-solid border-gray-200 rounded-lg ml-2  md:hidden lg:hidden"
          aria-controls="navbar-multi-level"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-white md:!bg-[#091242] opacity-1 w-full md:block md:w-auto absolute bottom-0 left-0 translate-y-[100%] md:relative md:inset-0 md:translate-y-0 lg:relative lg:inset-0 mlg:translate-y-0 z-50
          rounded-[7px] box-shadow
          `}
          id="navbar-multi-level"
          ref={ref}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <NavLink
                to={homePath}
                className="block text-right py-2 px-3 text-black pb-1 rounded md:rounded-none md:pb-0 md:bg-transparent md:text-white md:p-0"
                aria-current="page"
                onClick={closeMenu}
              >
                تتبع الشحنة
              </NavLink>
            </li>
            <li>
              <NavLink
                to={settingsPath}
                className="block text-right py-2 px-3 text-black pb-1 rounded md:rounded-none md:pb-0  md:bg-transparent md:text-white md:p-0"
                onClick={closeMenu}
              >
                الإعدادات
              </NavLink>
            </li>
            <li>
              <NavLink
                to={fAQPath}
                className="block text-right py-2 px-3 text-black pb-1  rounded md:rounded-none md:pb-0 md:bg-transparent md:text-white md:p-0"
                onClick={closeMenu}
              >
                أسئلة الشائعة
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
// import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-around font-medium">
        <div className="z-50 flex w-full justify-between p-5 md:w-auto">
          <img src={Logo} alt="logo" className="h-9 md:cursor-pointer" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="hidden items-center gap-8 font-[Poppins] uppercase md:flex">
          <li>
            <Link to="/" className="inline-block py-7 px-3">
              Home
            </Link>
          </li>
          {/* <NavLinks /> */}
        </ul>
        <div className="hidden md:block">
          <Button />
        </div>

        {/* Mobile nav */}
        <ul
          className={`
        fixed top-0 bottom-0 w-full overflow-y-auto bg-white py-24 pl-4 duration-500
        md:hidden ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="inline-block py-7 px-3">
              Home
            </Link>
          </li>
          {/* <NavLinks /> */}
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

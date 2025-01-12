import React from "react";
import { ICONS } from "../assets/icons/icons";
import "./Main.css";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-[20px] text-[#585858] w-full">
      <p>Gemini</p>
      <span>
        <ICONS.USER size={30} />
      </span>
    </div>
  );
};

export default Header;

import React from "react";
import { ICONS } from "../assets/icons/icons";
import "./Main.css";

const SearchField = () => {
  return (
    <div className="main-bottom">
      <div className="search-box">
        <input type="text" placeholder="Enter a prompt here..."></input>
        <div>
          <span>
            <ICONS.GALLERY size={20} />
          </span>
          <span className="cursor-pointer">
            <ICONS.MIC size={20} />
          </span>
          <span className="cursor-pointer">
            <ICONS.SEND size={20} />
          </span>
        </div>
      </div>
      <p className="bottom-info">
        Gemini may display iacuurate info , including about people ,so double
        check
      </p>
    </div>
  );
};

export default SearchField;

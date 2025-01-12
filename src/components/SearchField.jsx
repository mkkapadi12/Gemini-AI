import React, { useState } from "react";
import { ICONS } from "../assets/icons/icons";
import "./Main.css";
import { useChatContext } from "../context/ChatContext";

const SearchField = () => {
  const { onSend, input, setInput } = useChatContext();

  return (
    <div className="main-bottom absolute bottom-0 left-0 p-5">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter a prompt here..."
          name="text"
          value={input}
          onChange={setInput}
        />
        <div>
          <span>
            <ICONS.GALLERY size={20} />
          </span>
          <span className="cursor-pointer">
            <ICONS.MIC size={20} />
          </span>
          <span className="cursor-pointer" onClick={() => onSend(input)}>
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

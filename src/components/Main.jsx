import React, { useContext } from "react";
import "./Main.css";
import { ICONS } from "../assets/icons/icons";
import SearchField from "./SearchField";

const Main = () => {
  const card = [
    {
      para: "Help create a weekly meal plan for two.",
      icon: <ICONS.COMPASS size={20} />,
    },
    {
      para: "Ideas to surprise a friend on their birthday.",
      icon: <ICONS.BULB size={20} />,
    },
    {
      para: "Provide questions to help me prepare for an interview.",
      icon: <ICONS.MSG size={20} />,
    },
    {
      para: "Come up with a product name for a new app.",
      icon: <ICONS.CODE size={20} />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="main relative p-5 max-w-4xl mx-auto">
        <div className="main-container">
          <div className="greet">
            <p>
              <span>Hello, Dev.</span>
            </p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards grid-cols-1 grid gap-4 md:grid-cols-4 sm:grid-cols-2">
            {card.map((card, index) => {
              return (
                <div key={index} className="card hover:bg-[#dfe4ea]">
                  <p className="text-[#585858]">{card.para}</p>
                  <span>{card.icon}</span>
                </div>
              );
            })}
          </div>
        </div>
        <SearchField />
      </div>
    </div>
  );
};

export default Main;

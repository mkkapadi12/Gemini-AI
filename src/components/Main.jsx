import React, { useContext } from "react";
import "./Main.css";
import { ICONS } from "../assets/icons/icons";
import SearchField from "./SearchField";
import { useChatContext } from "../context/ChatContext";

const Main = () => {
  const { input, resultData, isLoading, showResult, recentPrompt } =
    useChatContext();

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
    <div className="max-w-7xl mx-auto relative h-[90vh]">
      <div className="main h-full relative p-5 max-w-4xl mx-auto">
        <div className="main-container">
          {!showResult ? (
            <>
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
            </>
          ) : (
            <>
              <div className="result max-h-[70vh]">
                <div className="result-title">
                  <span>
                    <ICONS.USER size={30} />
                  </span>
                  <p>{recentPrompt || "Hello"}</p>
                </div>
                <div className="result-data">
                  <span>
                    <ICONS.GEMINI size={25} />
                  </span>
                  {isLoading ? (
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <SearchField />
      </div>
    </div>
  );
};

export default Main;

import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { ICONS } from "../assets/icons/icons";
// import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const GeneralSettings = [
    {
      icon: <ICONS.MSG size={20} />,
      title: "Help",
    },
    {
      icon: <ICONS.HISTORY size={20} />,
      title: "Activity",
    },
    {
      icon: <ICONS.SETTINGS size={20} />,
      title: "Settngs",
    },
  ];

  return (
    <div className="sidebar flex-1 h-auto bg-[#f0f4f9] px-3 py-3 sm:block hidden">
      <div className="flex-col items-start justify-between flex h-full">
        <div className="top">
          <span
            className="cursor-pointer"
            onClick={() => setExtended((prev) => !prev)}
          >
            <ICONS.MENU size={30} />
          </span>
          <div className="new-chat">
            <span>
              <ICONS.PLUS size={20} />
            </span>
            {extended ? <p>new chat</p> : null}
          </div>
          {extended ? (
            <div className="recent cursor-pointer">
              <p className="recent-title">Recent</p>

              <div className="recent-entry flex items-center justify-center rounded-lg">
                <span>
                  <ICONS.MSG size={20} />
                </span>
                {/* {extended ? <p>recent entry paragraph</p> : null} */}

                <p className="text-[#282828] w-full">{"What is React..."}</p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="bottom w-full">
          {GeneralSettings.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-start gap-2 px-2 py-2 hover:bg-[#e2e6eb] cursor-pointer rounded-lg"
              >
                <span>{item.icon}</span>
                {extended ? <p>{item.title}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

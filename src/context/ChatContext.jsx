import React, { createContext, useContext, useReducer } from "react";
import runChat from "../config/gemini";
import reducer from "../Reducer/ChatReducer";

const ChatContext = createContext();

const initialState = {};

const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSend = async (prompt) => {
    await runChat(prompt);
  };

  return (
    <ChatContext.Provider value={{ ...state, onSend }}>
      {children}
    </ChatContext.Provider>
  );
};

//custom hook
const useChatContext = () => {
  return useContext(ChatContext);
};

export { useChatContext, ChatProvider };

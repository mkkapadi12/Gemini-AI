import React, { createContext, useContext, useReducer } from "react";
import runChat from "../config/gemini";
import reducer from "../Reducer/ChatReducer";

const ChatContext = createContext();

const initialState = {
  input: "",
  prevPrompt: [],
  recentPrompt: "",
  showResult: false,
  resultData: "",
  isLoading: true,
};

const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // console.log(value);

    dispatch({ type: "SET_INPUT", payload: { name, value } });
  };

  const onSend = async (prompt) => {
    dispatch({ type: "SET_LOADING" });
    const resultData = await runChat(prompt);
    dispatch({ type: "SET_RESULT_DATA", payload: resultData });
  };

  return (
    <ChatContext.Provider value={{ ...state, onSend, setInput }}>
      {children}
    </ChatContext.Provider>
  );
};

//custom hook
const useChatContext = () => {
  return useContext(ChatContext);
};

export { useChatContext, ChatProvider };

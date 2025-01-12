// src/ChatAI.js
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const ChatAI = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleGenerateAnswer = async () => {
    // This is where you'd typically call your AI API to get the response.
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      const response = await model.generateContent(question);
      console.log(response);

      console.log(response.response.text());

      const answer = response.response.text(); // Assuming response contains a 'text' property
      // For now, we'll just simulate an answer.
      setAnswer(() => answer);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <div className="chat-container">
      <h2>Chat AI</h2>
      <div className="chat-box">
        <textarea
          value={question}
          onChange={handleInputChange}
          cols={90}
          rows={4}
          placeholder="Ask your question..."
          className="chat-input"
        ></textarea>
        <button onClick={handleGenerateAnswer} className="chat-button">
          Generate Answer
        </button>
      </div>
      {answer && (
        <textarea
          defaultValue={answer}
          className="chat-answer"
          rows={28}
        ></textarea>
      )}
    </div>
  );
};

export default ChatAI;

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = process.env.GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-pro",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run() {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [
//     ],
//   });

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());
// }

// run();

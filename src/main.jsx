// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("content");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);

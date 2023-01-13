import React from "react";
import ReactDOM from "react-dom/client";
import { SocketProvider } from "./contexts/SocketContext";
import App from "./App";

import "./style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SocketProvider>
      <App />
    </SocketProvider>
  </React.StrictMode>
);

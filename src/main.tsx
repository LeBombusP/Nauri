import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./styles.css";
import { useAutoAnimate } from '@formkit/auto-animate/react'

const [parent] = useAutoAnimate()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div ref={parent} className="container">
      <App/>
    </div>
  </React.StrictMode>,
);

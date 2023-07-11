import React from "react";
import ReactDOM from "react-dom/client";
import { ContentDescription } from "./components/ContentDescription.jsx";
import { ContentCard } from "./components/ContentCard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContentCard />
  </React.StrictMode>
);

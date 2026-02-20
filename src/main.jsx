/**
 * Entry point for the EkoMart React app.
 * Renders the root App component into #root.
 */
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);

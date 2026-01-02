import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// ✅ Import AI Lab Context Provider
import { AiLabProvider } from "./context/AiLabContext";

// App mounts with Context + Router
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AiLabProvider>
      <App />
      <ToastContainer />
    </AiLabProvider>
  </BrowserRouter>
);

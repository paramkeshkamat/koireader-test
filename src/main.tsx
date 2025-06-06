import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.tsx";
import "./index.css";
// import App2 from "./App2.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#FF8400FF" },
      }}
    >
      <App />
    </ConfigProvider>
    {/* <App2 /> */}
  </StrictMode>
);

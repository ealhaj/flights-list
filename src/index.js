import { ApiProvider } from "@reduxjs/toolkit/query/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { appApi } from "./api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApiProvider api={appApi}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./contexts/userContext";
import { TimesheetProvider } from "./contexts/timeSheetContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider initialUsers={[]}>
      <TimesheetProvider initialTimeSheets={[]}>
        <App />
      </TimesheetProvider>
    </UserProvider>
  </React.StrictMode>
);
